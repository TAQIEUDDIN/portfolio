"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import SplitText from "../SplitText";
import TextType from "../TextType";

const LiquidEther = dynamic(() => import("../LiquidEther"), { ssr: false });

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ backgroundColor: "#112b1e" }}
    >
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#112b1e", "#112b1e", "#112b1e"]}
          mouseForce={21}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.55}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1]" style={{ backgroundColor: "rgba(25, 59, 41, 0.2)" }} />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto gap-6">
        {/* Greeting Tag */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm"
          style={{ border: "1px solid rgba(187, 223, 197, 0.25)", backgroundColor: "rgba(187, 223, 197, 0.1)" }}
        >
          <span className="text-sm tracking-wide font-sans" style={{ color: "#dcefe0" }}>
            ✨ Welcome to my portfolio
          </span>
        </motion.div> */}

        {/* Main Heading */}
        <div className="flex flex-col items-center gap-2">
          <SplitText
            text="Hi, I'm Taqieuddin"
            tag="h1"
            className="text-4xl md:text-6xl font-normal tracking-tight text-white font-heading"
            textAlign="center"
            splitType="chars"
            delay={30}
            duration={0.8}
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
          />

          {/* <SplitText
            text="I Build Digital Experiences"
            tag="h2"
            className="text-3xl md:text-5xl font-semibold tracking-tight text-white/80 font-heading"
            splitType="words"
            delay={100}
            duration={0.8}
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
          /> */}

          <TextType
            text={["Welcome to My Portfolio"]}
            typingSpeed={75}
            pauseDuration={1500}
            className="text-3xl md:text-5xl font-normal tracking-tight text-white/80 font-heading"
            showCursor
            cursorCharacter="|"
            cursorBlinkDuration={0.5}
          />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-lg md:text-lg max-w-xl leading-relaxed"
          style={{ color: "#f7fff9" }}
        >
          A passionate developer crafting beautiful, performant web applications
          with modern technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex items-center gap-4 mt-4"
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 rounded-md font-medium text-xs cursor-pointer"
            style={{ backgroundColor: "#f0f9f2", color: "#112b1e" }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(187,223,197,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>

        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full flex items-start justify-center p-2"
            style={{ border: "2px solid rgba(187, 223, 197, 0.3)" }}
          >
            <motion.div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#8ec7a1" }} />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}