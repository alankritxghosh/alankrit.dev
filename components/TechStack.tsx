"use client";

import { motion } from "framer-motion";
import { ParallaxBg, RevealText, SectionLabel, AnimatedDivider, FadeSlide, StaggerContainer, springCardVariants, TiltCard } from "./animations";

const categories = [
  { name: "Apps", items: ["SwiftUI for macOS native apps", "Firebase for backend/auth", "Claude + Cursor for AI-assisted development"] },
  { name: "Web", items: ["Next.js / React", "Tailwind CSS", "Vercel deployment"] },
  { name: "Automation & Tools", items: ["n8n for workflow automation", "Claude for AI assistance", "Cursor for AI-pair programming"] },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-[80px] md:py-[120px] px-[16px] md:px-[24px] glow-amber"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <ParallaxBg src="/images/blur-amber.png" gradientClass="gradient-amber" />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <AnimatedDivider className="mb-[64px]" />
        <SectionLabel number="007" label="STACK" style={{ marginBottom: 20 }} />

        <RevealText
          as="h2"
          className="font-display text-[36px] md:text-[56px]"
          style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 16, letterSpacing: "-0.03em" }}
        >
          Tech Stack &amp; Tools
        </RevealText>

        <FadeSlide delay={0.2}>
          <p className="font-mono text-[12px] md:text-[13px] mb-[40px] md:mb-[64px]" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            I use AI tools to ship 10x faster than traditional development.
          </p>
        </FadeSlide>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[40px] md:mb-[64px] gap-[16px]" staggerDelay={0.1}>
          {categories.map((cat) => (
            <motion.div key={cat.name} variants={springCardVariants} style={{ perspective: 800 }}>
              <TiltCard className="p-[28px] md:p-[36px] card-seep" style={{ height: "100%" }}>
                <div className="font-mono text-[11px]" style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 20, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {cat.name}
                </div>
                <div>
                  {cat.items.map((item, i) => (
                    <div key={i} className="text-[14px] md:text-[15px]" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 2 }}>{item}</div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeSlide delay={0.3}>
          <TiltCard className="p-[28px] md:p-[48px] card-seep">
            <div className="font-mono text-[11px]" style={{ fontWeight: 700, color: "#FF3366", marginBottom: 20, letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Philosophy
            </div>
            <p className="text-[16px] md:text-[18px]" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 16 }}>
              I&apos;m AI-native. I use Claude and Cursor to increase output without sacrificing quality. This lets me ship MVPs in days instead of weeks, iterate based on real feedback, and focus on product decisions rather than boilerplate.
            </p>
            <p className="text-[16px] md:text-[18px]" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
              I&apos;m not the strongest traditional engineer, but I ship faster than most teams. For early-stage where speed matters more than perfect code, this is an advantage.
            </p>
          </TiltCard>
        </FadeSlide>
      </div>
    </section>
  );
}
