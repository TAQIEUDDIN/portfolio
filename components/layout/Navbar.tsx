"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        layout
        className="pointer-events-auto flex items-center justify-between"
        animate={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(0, 0, 0, 0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(0, 0, 0, 0.08)"
            : "none",
          borderRadius: scrolled ? 9999 : 0,
          color: scrolled ? "#225a3b" : "#ffffff",
          paddingTop: scrolled ? 8 : 14,
          paddingBottom: scrolled ? 8 : 14,
          paddingLeft: scrolled ? 24 : 48,
          paddingRight: scrolled ? 24 : 48,
          marginTop: scrolled ? 12 : 0,
          width: scrolled ? "min(580px, 70vw)" : "100%",
        }}
        transition={{
          layout: { type: "spring", stiffness: 260, damping: 28, mass: 0.7 },
          backgroundColor: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          boxShadow: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          borderRadius: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          paddingTop: { type: "spring", stiffness: 260, damping: 28 },
          paddingBottom: { type: "spring", stiffness: 260, damping: 28 },
          paddingLeft: { type: "spring", stiffness: 260, damping: 28 },
          paddingRight: { type: "spring", stiffness: 260, damping: 28 },
          marginTop: { type: "spring", stiffness: 260, damping: 28 },
          width: { type: "spring", stiffness: 260, damping: 28, mass: 0.7 },
        }}
      >
        {/* Logo */}
        <motion.span
          className="font-bold cursor-pointer whitespace-nowrap"
          animate={{
            color: scrolled ? "#225a3b" : "#ffffff",
            fontSize: scrolled ? "11px" : "12px",
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Taqieuddin Zailan.
        </motion.span>

        {/* Nav Links */}
        <ul className="flex items-center gap-5 mx-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.button
                onClick={() => scrollToSection(item.id)}
                className="relative font-medium whitespace-nowrap"
                animate={{
                  color: scrolled ? "#225a3b" : "#ffffff",
                  fontSize: scrolled ? "11px" : "12px",
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

        {/* CTA */}
        <motion.button
          onClick={() => scrollToSection("contact")}
          className="rounded-full font-medium cursor-pointer whitespace-nowrap"
          animate={{
            backgroundColor: scrolled ? "#1d4831" : "rgba(255, 255, 255, 0)",
            color: scrolled ? "#ffffff" : "#ffffff",
            borderWidth: 1,
            borderColor: scrolled ? "transparent" : "rgba(255, 255, 255, 0.4)",
            paddingTop: scrolled ? 6 : 7,
            paddingBottom: scrolled ? 6 : 7,
            paddingLeft: scrolled ? 16 : 20,
            paddingRight: scrolled ? 16 : 20,
            fontSize: scrolled ? "11px" : "11px",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          Get In Touch
        </motion.button>
      </motion.nav>
    </div>
  );
}