"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { FlickerLabel } from "./animations";

const scrollTo = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const titleWords = "Fast-shipping builder seeking remote product role at US-based YC startup.".split(" ");

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const smoothBgY = useSpring(bgY, { stiffness: 40, damping: 30 });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="min-h-[100svh] px-[16px] md:px-[24px] pt-[100px] pb-[40px]"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Parallax blur background */}
      <div className="blur-bg gradient-city light-streak">
        <motion.img
          src="/images/blur-city.png"
          alt=""
          aria-hidden="true"
          loading="eager"
          style={{
            y: smoothBgY,
            scale: bgScale,
            width: "100%",
            height: "130%",
            objectFit: "cover",
            opacity: 0.22,
            position: "absolute",
            top: "-15%",
          }}
        />
      </div>

      {/* Poster Frame — border draws in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="poster-frame"
        style={{
          maxWidth: 900,
          width: "100%",
          position: "relative",
          zIndex: 1,
          minHeight: 600,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Border draw animation overlay */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 100% 0)" }}
          animate={{ clipPath: "inset(0 0% 0% 0)" }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            border: "1px solid rgba(255,255,255,0.1)",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />

        {/* Top bar — flicker labels */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "24px 28px 0",
          }}
        >
          <FlickerLabel className="editorial-label" delay={0.8}>
            DIGITAL BUILDER<br />
            & PRODUCT THINKER
          </FlickerLabel>
          <FlickerLabel className="editorial-label" delay={1.0} style={{ textAlign: "right" }}>
            FOLIO 01 · MMXXVI<br />
            ALANKRIT GHOSH
          </FlickerLabel>
        </div>

        {/* Main title — word-by-word stagger reveal */}
        <div
          style={{
            padding: "24px 28px 0",
            position: "relative",
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          <h1
            className="font-display text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px]"
            style={{
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              display: "flex",
              flexWrap: "wrap",
              gap: "0 0.3em",
            }}
          >
            {titleWords.map((word, i) => (
              <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
                <motion.span
                  style={{ display: "inline-block" }}
                  initial={{ y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Center — Figure image with float */}
        <div
          style={{
            flex: 1,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            minHeight: 300,
          }}
        >
          <div
            className="hero-figure-reveal gradient-crimson"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <div className="hero-figure-float">
              <img
                src="/images/hero-figure.png"
                alt=""
                aria-hidden="true"
                style={{
                  maxHeight: "100%",
                  maxWidth: "80%",
                  objectFit: "contain",
                  objectPosition: "bottom center",
                  mixBlendMode: "lighten",
                }}
              />
            </div>
          </div>

          {/* Scattered editorial labels — flicker */}
          <FlickerLabel
            className="editorial-label"
            delay={1.5}
            style={{ position: "absolute", left: 28, top: "30%" }}
          >
            APPS · WEBSITES<br />
            GTM · AI-NATIVE
          </FlickerLabel>

          <FlickerLabel
            className="editorial-label"
            delay={1.7}
            style={{ position: "absolute", right: 28, bottom: "35%", textAlign: "right" }}
          >
            AVAILABLE NOW<br />
            6PM–11PM IST
          </FlickerLabel>
        </div>

        {/* Subheading — typed feel with stagger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1 }}
          style={{ padding: "0 28px", position: "relative", zIndex: 2 }}
        >
          <p
            className="font-mono text-[12px] sm:text-[13px] md:text-[14px]"
            style={{ color: "#A0A0A0", lineHeight: 1.7, maxWidth: 500 }}
          >
            I&apos;m Alankrit, 20, based in India. I build apps, design websites, and think through GTM using AI-native workflows.
          </p>
        </motion.div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            padding: "20px 28px 24px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="editorial-label" style={{ marginBottom: 12 }}>
              AVAILABILITY
            </div>
            <div className="font-mono text-[12px] md:text-[13px]" style={{ color: "#FFFFFF", lineHeight: 1.6 }}>
              <div>NOW: 6pm-11pm IST (8:30am-1:30pm EST)</div>
              <div style={{ color: "#FF3366", fontWeight: 700 }}>Full-time from: April 1, 2026</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", gap: 12, alignItems: "center" }}
          >
            <motion.button
              onClick={() => scrollTo("#work")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,51,102,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="font-mono btn-glow glass-accent"
              style={{
                padding: "10px 20px",
                color: "#FF3366",
                borderRadius: 0,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "rgba(255, 51, 102, 0.08)",
              }}
            >
              View Work
            </motion.button>

            <motion.button
              onClick={() => scrollTo("#contact")}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              whileTap={{ scale: 0.95 }}
              className="font-mono glass"
              style={{
                padding: "10px 20px",
                color: "#FFFFFF",
                borderRadius: 0,
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Let&apos;s Talk
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
