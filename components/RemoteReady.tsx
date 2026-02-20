"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ParallaxBg, RevealText, SectionLabel, CountUp, FadeSlide, TiltCard } from "./animations";

const workItems = [
  "Built all my projects independently with zero real-time oversight",
  "Ship fast without needing constant feedback loops",
  "Over-communicate via Loom, Notion, Slack",
  "Document decisions proactively",
  "Async-first mindset - don't need hand-holding",
];

const tools = [
  "Communication: Loom, Slack, Notion",
  "Development: Cursor, Claude, GitHub",
  "Design: Figma",
  "Project Tracking: Linear, Notion",
];

export default function RemoteReady() {
  return (
    <section
      id="remote-ready"
      className="py-[80px] md:py-[120px] px-[16px] md:px-[24px] glow-crimson"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <ParallaxBg src="/images/blur-city.png" gradientClass="gradient-city" />

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-[16px]"
        style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        {/* Left Column */}
        <FadeSlide direction="left">
          <TiltCard className="p-[28px] md:p-[48px] card-seep" style={{ height: "100%" }}>
            <SectionLabel number="006" label="REMOTE" style={{ marginBottom: 20 }} />

            <RevealText
              as="h2"
              className="font-display text-[36px] md:text-[56px] mb-[24px] md:mb-[32px]"
              style={{ fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Remote-Ready
            </RevealText>

            <div className="p-[20px] md:p-[24px] card-seep" style={{ marginBottom: 32 }}>
              <div className="font-mono text-[11px] md:text-[12px]" style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Time Zone Flexibility
              </div>
              <div style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 8 }}>
                NOW (Feb-Mar 25): 6pm-11pm IST daily
              </div>
              <div className="font-mono text-[11px]" style={{ color: "rgba(255,255,255,0.3)", marginBottom: 8, letterSpacing: "0.05em" }}>
                That&apos;s 8:30am-1:30pm EST or 5:30am-10:30am PST
              </div>
              <div className="font-mono text-[11px]" style={{ color: "rgba(255,255,255,0.3)", fontWeight: 700, marginBottom: 16, letterSpacing: "0.05em" }}>
                5 hours of real-time overlap daily
              </div>
              <div className="font-mono text-[11px]" style={{ color: "#FF3366", fontWeight: 700, marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                APRIL 1st ONWARDS: Completely flexible
              </div>
              <div className="font-mono text-[11px]" style={{ color: "rgba(255,255,255,0.3)", marginBottom: 16, letterSpacing: "0.05em" }}>
                Can work any US hours needed, full EST or PST overlap.
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontStyle: "italic" }}>
                This gives you 5 weeks to ramp me up part-time, then I&apos;m full-time with complete availability.
              </div>
            </div>

            <div className="font-mono text-[11px]" style={{ fontWeight: 700, color: "#FFFFFF", marginTop: 32, marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              How I Work Remotely
            </div>
            <div>
              {workItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}
                >
                  <Check size={16} color="#FF3366" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span className="text-[14px] md:text-[15px]" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="font-mono text-[11px]" style={{ fontWeight: 700, color: "#FFFFFF", marginTop: 32, marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Tools I Use
            </div>
            <div>
              {tools.map((tool, i) => (
                <div key={i} className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", lineHeight: 2.2, letterSpacing: "0.03em" }}>{tool}</div>
              ))}
            </div>
          </TiltCard>
        </FadeSlide>

        {/* Right Column - Visual with counting animation */}
        <FadeSlide direction="right" delay={0.15}>
          <TiltCard
            className="p-[28px] md:p-[48px] card-seep"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40, height: "100%", position: "relative", overflow: "hidden" }}
          >
            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              <CountUp
                target={5}
                suffix="h"
                className="font-display text-[64px] md:text-[80px]"
                style={{ fontWeight: 700, color: "#FF3366", lineHeight: 1, marginBottom: 12 }}
                duration={1.5}
              />
              <div className="font-mono text-[11px]" style={{ fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 48 }}>
                Daily Overlap
              </div>

              <div style={{ width: "100%", maxWidth: 280 }}>
                {/* IST Bar — fills on scroll */}
                <div style={{ marginBottom: 20 }}>
                  <div className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginBottom: 6, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em" }}>
                    IST (India)
                  </div>
                  <div style={{ width: "100%", height: 28, backgroundColor: "rgba(255,255,255,0.03)", position: "relative", overflow: "hidden" }}>
                    <motion.div
                      className="font-mono"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "42%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ position: "absolute", right: 0, top: 0, height: "100%", backgroundColor: "rgba(255,51,102,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF3366", fontWeight: 700, fontSize: 9, letterSpacing: "0.05em" }}
                    >
                      6pm – 11pm
                    </motion.div>
                  </div>
                </div>

                {/* EST Bar — fills with delay */}
                <div style={{ marginBottom: 20 }}>
                  <div className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginBottom: 6, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em" }}>
                    EST (US East)
                  </div>
                  <div style={{ width: "100%", height: 28, backgroundColor: "rgba(255,255,255,0.03)", position: "relative", overflow: "hidden" }}>
                    <motion.div
                      className="font-mono"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "42%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      style={{ position: "absolute", left: 0, top: 0, height: "100%", backgroundColor: "rgba(99,102,241,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6366F1", fontWeight: 700, fontSize: 9, letterSpacing: "0.05em" }}
                    >
                      8:30am – 1:30pm
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="font-mono"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  style={{ textAlign: "center", fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 8, letterSpacing: "0.1em" }}
                >
                  5 hours real-time collaboration
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ marginTop: 40, padding: "12px 24px", background: "rgba(255,51,102,0.06)", textAlign: "center" }}
              >
                <div className="font-mono" style={{ fontSize: 10, fontWeight: 700, color: "#FF3366", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  From April 1st: Any US hours
                </div>
              </motion.div>
            </div>
          </TiltCard>
        </FadeSlide>
      </div>
    </section>
  );
}
