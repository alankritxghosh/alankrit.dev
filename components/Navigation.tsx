"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        height: 72,
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        backgroundColor: scrolled
          ? "rgba(0, 0, 0, 0.9)"
          : "transparent",
        transition: "all 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#top")}
          className="font-mono"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "0.15em",
            padding: 0,
            transition: "opacity 0.3s",
            textTransform: "uppercase",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          AG
        </button>

        {/* Desktop nav links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="font-mono nav-link-draw"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 11,
                fontWeight: 400,
                color: "rgba(255,255,255,0.4)",
                padding: "0 0 4px 0",
                transition: "color 0.3s",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Open menu"
        >
          <Menu size={22} color="#FFFFFF" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#000000",
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 48,
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: "absolute",
                top: 24,
                right: 28,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Close menu"
            >
              <X size={22} color="#FFFFFF" />
            </button>

            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                onClick={() => scrollToSection(link.href)}
                className="font-mono"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.5)",
                  padding: 0,
                  transition: "color 0.3s",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
