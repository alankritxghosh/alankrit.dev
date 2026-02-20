"use client";

import { motion } from "framer-motion";
import { ParallaxBg, RevealText, SectionLabel, StaggerContainer, springCardVariants, TiltCard } from "./animations";

const stats = [
  {
    number: "1",
    label: "App Built",
    description:
      "Signal launching to App Store February 2026. Built with SwiftUI + AI tools in under 1 month.",
  },
  {
    number: "5+",
    label: "Websites Shipped",
    description:
      "High-conversion landing pages built in 2-week sprints for B2B companies.",
  },
  {
    number: null,
    label: "Available April 1st",
    description:
      "Part-time now (5 hours daily). Full-time with complete US timezone flexibility from April 1, 2026.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-[80px] md:py-[120px] px-[16px] md:px-[24px] glow-amber"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <ParallaxBg src="/images/blur-amber.png" gradientClass="gradient-amber" />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionLabel number="002" label="ABOUT" style={{ marginBottom: 20 }} />

        <RevealText
          as="h2"
          className="font-display text-[36px] md:text-[56px] mb-[40px] md:mb-[64px]"
          style={{ fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.1 }}
        >
          Built Fast, Shipped Faster
        </RevealText>

        <StaggerContainer
          className="grid grid-cols-1 lg:grid-cols-3 gap-[16px]"
          staggerDelay={0.12}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={springCardVariants} style={{ perspective: 800 }}>
              <TiltCard
                className="p-[32px] md:p-[48px] card-seep"
                style={{ cursor: "default", height: "100%" }}
              >
                {stat.number && (
                  <div
                    className="font-display text-[48px] md:text-[64px]"
                    style={{ fontWeight: 700, color: "#FF3366", marginBottom: 8, lineHeight: 1 }}
                  >
                    {stat.number}
                  </div>
                )}
                <div
                  className="font-mono text-[12px] md:text-[13px]"
                  style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  {stat.label}
                </div>
                <div
                  className="text-[15px] md:text-[16px]"
                  style={{ fontWeight: 400, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}
                >
                  {stat.description}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
