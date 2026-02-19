"use client";

import { motion } from "framer-motion";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100svh] px-[16px] md:px-[24px] pt-[100px] pb-[40px]"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Video background placeholder */}
      <div className="video-bg">
        {/* Drop a VEO-generated loop at /public/videos/hero-bg.mp4 and uncomment: */}
        {/* <video autoPlay muted loop playsInline src="/videos/hero-bg.mp4" /> */}
      </div>

      <div
        className="glass"
        style={{
          maxWidth: 900,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 24,
          padding: "48px 32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] heading-glow"
          style={{
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: 24,
          }}
        >
          Fast-shipping builder seeking remote product role at US-based YC startup.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[16px] sm:text-[18px] md:text-[20px]"
          style={{
            fontWeight: 400,
            color: "#A0A0A0",
            lineHeight: 1.6,
            maxWidth: 700,
            marginBottom: 16,
          }}
        >
          I&apos;m Alankrit, 20, based in India. I build apps, design websites, and think through GTM using AI-native workflows.
        </motion.p>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-[14px] sm:text-[16px] md:text-[18px]"
          style={{
            fontWeight: 500,
            color: "#FFFFFF",
            marginBottom: 40,
            lineHeight: 1.6,
          }}
        >
          <div>Available NOW: 6pm-11pm IST (8:30am-1:30pm EST)</div>
          <div>Full-time from: April 1, 2026</div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex-col sm:flex-row w-full sm:w-auto"
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
          }}
        >
          {/* Primary */}
          <motion.button
            onClick={() => scrollTo("#work")}
            whileHover={{ scale: 1.05, backgroundColor: "#E62E5C" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            aria-label="View my work"
            className="px-[24px] sm:px-[32px] py-[14px] sm:py-[16px] glass-accent"
            style={{
              backgroundColor: "rgba(255, 51, 102, 0.2)",
              color: "#FFFFFF",
              borderRadius: 9999,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            View My Work
          </motion.button>

          {/* Secondary */}
          <motion.button
            onClick={() => scrollTo("#contact")}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            aria-label="Go to contact section"
            className="px-[24px] sm:px-[32px] py-[14px] sm:py-[16px] glass"
            style={{
              color: "#FFFFFF",
              borderRadius: 9999,
              fontSize: 16,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Let&apos;s Talk
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
