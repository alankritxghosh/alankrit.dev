"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "40px 24px",
        backgroundColor: "transparent",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div
        className="flex-col md:flex-row text-center md:text-left"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1200,
          margin: "0 auto",
          gap: 16,
        }}
      >
        <span
          style={{
            fontSize: 14,
            color: "#666666",
          }}
        >
          Built with Next.js + AI tools in 2 days
        </span>

        <span
          style={{
            fontSize: 14,
            color: "#666666",
          }}
        >
          © 2026 Alankrit Ghosh
        </span>
      </div>
    </motion.footer>
  );
}
