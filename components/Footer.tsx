"use client";

import { motion } from "framer-motion";
import { AnimatedDivider, FlickerLabel } from "./animations";

export default function Footer() {
  return (
    <footer
      className="py-[40px] md:py-[60px] px-[16px] md:px-[24px]"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <AnimatedDivider className="mb-[32px]" />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <FlickerLabel className="editorial-label" delay={0}>
            BUILT WITH CURSOR + CLAUDE<br />
            DEPLOYED ON VERCEL
          </FlickerLabel>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="editorial-label"
            style={{ textAlign: "right" }}
          >
            © {new Date().getFullYear()} ALANKRIT GHOSH<br />
            FOLIO 01
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
