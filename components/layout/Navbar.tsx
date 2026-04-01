"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="relative flex flex-col items-center w-full pointer-events-auto mt-0 transition-all duration-300">
        <motion.nav
          layout
          className="flex items-center justify-between w-full relative z-50"
          animate={{
            backgroundColor: scrolled || mobileMenuOpen
              ? "rgba(255, 255, 255, 0.95)"
              : "rgba(0, 0, 0, 0)",
            backdropFilter: scrolled || mobileMenuOpen ? "blur(16px)" : "blur(0px)",
            boxShadow: scrolled || mobileMenuOpen
              ? "0 4px 24px rgba(0, 0, 0, 0.08)"
              : "none",
            borderRadius: scrolled || mobileMenuOpen ? 9999 : 0,
            color: scrolled || mobileMenuOpen ? "#225a3b" : "#ffffff",
            paddingTop: scrolled || mobileMenuOpen ? 8 : 14,
            paddingBottom: scrolled || mobileMenuOpen ? 8 : 14,
            paddingLeft: scrolled || mobileMenuOpen ? 16 : 24,
            paddingRight: scrolled || mobileMenuOpen ? 16 : 24,
            marginTop: scrolled || mobileMenuOpen ? 12 : 0,
            width: scrolled || mobileMenuOpen ? "min(680px, 90vw)" : "100%",
          }}
          transition={{
            layout: { type: "spring", stiffness: 260, damping: 28, mass: 0.7 },
            backgroundColor: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            boxShadow: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
            borderRadius: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          {/* Logo */}
          <motion.span
            className="font-bold cursor-pointer whitespace-nowrap hidden sm:block md:block"
            animate={{
              color: scrolled || mobileMenuOpen ? "#225a3b" : "#ffffff",
              fontSize: scrolled || mobileMenuOpen ? "11px" : "12px",
            }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Taqieuddin Zailan.
          </motion.span>

          <motion.span
            className="font-bold cursor-pointer whitespace-nowrap block sm:hidden"
            animate={{
              color: scrolled || mobileMenuOpen ? "#225a3b" : "#ffffff",
              fontSize: scrolled || mobileMenuOpen ? "11px" : "12px",
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            TZ.
          </motion.span>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <li key={item.id}>
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className="relative font-medium whitespace-nowrap"
                  animate={{
                    color: scrolled || mobileMenuOpen ? "#225a3b" : "#ffffff",
                    fontSize: scrolled || mobileMenuOpen ? "11px" : "12px",
                  }}
                  whileHover={{ opacity: 0.6 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  {item.label}
                </motion.button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-4 md:ml-auto">
            {/* CTA */}
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="rounded-full font-medium cursor-pointer whitespace-nowrap"
              animate={{
                backgroundColor: scrolled || mobileMenuOpen ? "#1d4831" : "rgba(255, 255, 255, 0)",
                color: scrolled || mobileMenuOpen ? "#ffffff" : "#ffffff",
                borderWidth: 1,
                borderColor: scrolled || mobileMenuOpen ? "transparent" : "rgba(255, 255, 255, 0.4)",
                paddingTop: scrolled || mobileMenuOpen ? 6 : 7,
                paddingBottom: scrolled || mobileMenuOpen ? 6 : 7,
                paddingLeft: scrolled || mobileMenuOpen ? 12 : 20,
                paddingRight: scrolled || mobileMenuOpen ? 12 : 20,
                fontSize: "11px",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              Get In Touch
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 rounded-full border border-current"
              animate={{
                color: scrolled || mobileMenuOpen ? "#225a3b" : "#ffffff",
                borderColor: scrolled || mobileMenuOpen ? "rgba(34, 90, 59, 0.2)" : "rgba(255, 255, 255, 0.4)",
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="relative w-3.5 h-[10px] flex flex-col justify-between">
                <motion.span
                  className="w-full h-[1.5px] rounded-full bg-current origin-left"
                  animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? -1 : 0 }}
                />
                <motion.span
                  className="w-full h-[1.5px] rounded-full bg-current"
                  animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  className="w-full h-[1.5px] rounded-full bg-current origin-left"
                  animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? 1 : 0 }}
                />
              </div>
            </motion.button>
          </div>
        </motion.nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-4 right-4 md:hidden py-4 px-6 rounded-3xl bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-black/5 flex flex-col gap-4 items-center"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-semibold text-[#225a3b] w-full py-2 hover:bg-black/5 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}