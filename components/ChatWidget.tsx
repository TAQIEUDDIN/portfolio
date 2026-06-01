"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { MessageCircle, X, Send, ChevronDown, ChevronUp } from "lucide-react";
import ReactMarkdown from "react-markdown";

/* ─────────────────────── Types ─────────────────────── */

interface Source {
  file: string;
  score: number;
  snippet: string;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
  isError?: boolean;
}

interface APIResponse {
  answer: string;
  sources: Source[];
  latency_ms: number;
}

/* ─────────────────────── Helpers ─────────────────────── */

const uid = () => Math.random().toString(36).slice(2, 10);

const GREETING_MESSAGE: Message = {
  id: "greeting",
  role: "assistant",
  content:
    "Hi! I'm Bablek. Ask me about his projects, skills, or experience.",
};

const ERROR_MESSAGE =
  "Sorry, something went wrong. Please try again.";

/* ─────────────────── Sources Accordion ─────────────────── */

function SourcesAccordion({ sources }: { sources: Source[] }) {
  const [open, setOpen] = useState(false);

  if (!sources.length) return null;

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
      >
        {open ? (
          <ChevronUp className="size-3" />
        ) : (
          <ChevronDown className="size-3" />
        )}
        {sources.length} source{sources.length > 1 ? "s" : ""} referenced
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden space-y-1.5">
          {sources.map((s, i) => (
            <div
              key={i}
              className="rounded-lg bg-white/5 border border-white/5 px-3 py-2"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono text-emerald-400/80 truncate max-w-[200px]">
                  {s.file}
                </span>
                <span className="text-[10px] text-zinc-500 ml-2 shrink-0">
                  {(s.score * 100).toFixed(0)}% match
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2">
                {s.snippet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── Typing Indicator ─────────────────── */

function TypingIndicator() {
  return (
    <div className="flex items-start gap-2 mb-3">
      <div className="rounded-2xl rounded-bl-md bg-zinc-800/80 border border-white/5 px-4 py-3">
        <div className="flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0ms]" />
          <span className="size-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:150ms]" />
          <span className="size-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── Message Bubble ─────────────────── */

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex mb-3 ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
          isUser
            ? "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-br-md shadow-lg shadow-emerald-500/20"
            : `bg-zinc-800/80 border border-white/5 text-zinc-200 rounded-bl-md ${
                message.isError ? "border-red-500/30 bg-red-950/30" : ""
              }`
        }`}
      >
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <div className="prose prose-sm prose-invert max-w-none prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-code:text-emerald-300 prose-code:bg-white/10 prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-code:text-xs prose-pre:bg-black/30 prose-pre:rounded-lg prose-a:text-emerald-400 prose-strong:text-white">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}

        {message.sources && message.sources.length > 0 && (
          <SourcesAccordion sources={message.sources} />
        )}
      </div>
    </div>
  );
}

/* ─────────────────── Main ChatWidget ─────────────────── */

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Auto-scroll to latest message */
  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  /* Focus input when popup opens */
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  /* Send message */
  const handleSend = async (e?: FormEvent) => {
    e?.preventDefault();
    const question = input.trim();
    if (!question || isLoading) return;

    const userMsg: Message = { id: uid(), role: "user", content: question };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_RAG_API_URL;
      if (!baseUrl) throw new Error("RAG API URL not configured");

      const res = await fetch(`${baseUrl}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, top_k: 5 }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data: APIResponse = await res.json();

      const assistantMsg: Message = {
        id: uid(),
        role: "assistant",
        content: data.answer,
        sources: data.sources,
      };

      setMessages((prev) => [...prev, assistantMsg]);

      if (!isOpen) setHasUnread(true);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: uid(),
          role: "assistant",
          content: ERROR_MESSAGE,
          isError: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* ─── Chat Popup ─── */}
      <div
        className={`fixed bottom-24 right-5 z-[9999] w-[380px] h-[500px] flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ease-out origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0 pointer-events-auto"
            : "scale-90 opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{
          boxShadow:
            "0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 px-5 py-4 shrink-0">
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 1px, transparent 1px), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="relative flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold text-[15px] tracking-tight">
                Ask me anything
              </h3>
              <p className="text-emerald-100/80 text-xs mt-0.5">
                Powered by AI
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white hover:bg-white/10 rounded-lg p-1.5 transition-all cursor-pointer"
              aria-label="Close chat"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-4 py-4 bg-zinc-900 scroll-smooth"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.04) 0%, transparent 60%)",
          }}
        >
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          {isLoading && <TypingIndicator />}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleSend}
          className="shrink-0 bg-zinc-900 border-t border-white/5 px-3 py-3"
        >
          <div className="flex items-center gap-2 bg-zinc-800/60 rounded-xl border border-white/5 px-3 py-1.5 focus-within:border-emerald-500/40 focus-within:ring-1 focus-within:ring-emerald-500/20 transition-all">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              disabled={isLoading}
              className="flex-1 bg-transparent text-sm text-zinc-200 placeholder:text-zinc-500 outline-none disabled:opacity-50 py-1.5"
              id="chat-widget-input"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="shrink-0 p-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 disabled:opacity-30 disabled:hover:bg-emerald-500 transition-all cursor-pointer disabled:cursor-not-allowed"
              aria-label="Send message"
              id="chat-widget-send"
            >
              <Send className="size-4" />
            </button>
          </div>
        </form>
      </div>

      {/* ─── Floating Button ─── */}
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-[9999] size-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center group"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        id="chat-widget-toggle"
      >
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping" />
        )}

        {/* Icon transition */}
        <span
          className={`absolute transition-all duration-300 ${
            isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        >
          <MessageCircle className="size-6" />
        </span>
        <span
          className={`absolute transition-all duration-300 ${
            isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        >
          <X className="size-6" />
        </span>

        {/* Unread badge */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-0.5 -right-0.5 size-3.5 rounded-full bg-red-500 border-2 border-zinc-900 animate-pulse" />
        )}
      </button>
    </>
  );
}
