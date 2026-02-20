"use client";

import { motion } from "framer-motion";
import { ParallaxBg, RevealText, SectionLabel, AnimatedDivider, FadeSlide, StaggerContainer, springCardVariants, TiltCard } from "./animations";

const caseStudies = [
  {
    title: "Sentinel: Product Repositioning",
    sections: [
      { label: "Challenge", type: "text" as const, content: "Manufacturing intelligence platform positioned for factory workers wasn't closing deals." },
      { label: "What I Did", type: "list" as const, items: ["Analyzed 50+ manufacturing companies", "Discovered buyers were management, not workers", 'Repositioned from "worker tools" to "management ROI dashboards"', 'Changed entire messaging from "help your workers" to "10x your visibility"'] },
      { label: "Outcome", type: "text" as const, content: "Clearer ICP, stronger value prop, reusable positioning framework." },
    ],
  },
  {
    title: "6-Signal Prospect Analysis Framework",
    sections: [
      { label: "Context", type: "text" as const, content: "Built systematic approach for qualifying B2B prospects across 6 dimensions." },
      { label: "What I Did", type: "list" as const, items: ["Created framework covering hiring, funding, growth, tech stack, pain, and timing signals", "Applied to 100+ prospects for LeadFlow Lab outreach campaigns", "Documented process for repeatability"] },
      { label: "Outcome", type: "text" as const, content: "Cut qualification time from 30min to 5min per prospect." },
    ],
  },
  {
    title: "LeadFlow Lab: Service Positioning",
    sections: [
      { label: "Context", type: "text" as const, content: "Evolved positioning from generic 'marketing agency' to 'Revenue Infrastructure Studio' with structured 21-day sprint model." },
      { label: "Key Insight", type: "text" as const, content: "Early-stage founders don't want 'lead generation' - they want intake systems that protect their time and qualify buyers before calls." },
      { label: "Outcome", type: "text" as const, content: "Reframed entire offering around founder time protection vs. lead volume." },
    ],
  },
];

export default function Strategic() {
  return (
    <section
      id="strategic"
      className="py-[80px] md:py-[120px] px-[16px] md:px-[24px] glow-mixed light-streak"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <ParallaxBg src="/images/blur-amber.png" gradientClass="gradient-crimson" />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <AnimatedDivider className="mb-[64px]" />
        <SectionLabel number="005" label="STRATEGY" style={{ marginBottom: 20 }} />

        <RevealText
          as="h2"
          className="font-display text-[36px] md:text-[56px]"
          style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 16, letterSpacing: "-0.03em" }}
        >
          Strategic Thinking &amp; GTM
        </RevealText>

        <FadeSlide delay={0.2}>
          <p className="font-mono text-[12px] md:text-[13px] mb-[40px] md:mb-[64px]" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            I think through positioning and go-to-market before writing code.
          </p>
        </FadeSlide>

        <StaggerContainer className="flex flex-col" style={{ gap: 16 }} staggerDelay={0.15}>
          {caseStudies.map((study) => (
            <motion.div key={study.title} variants={springCardVariants} style={{ perspective: 800 }}>
              <TiltCard className="p-[24px] md:p-[40px] card-seep">
                <div className="font-display text-[22px] md:text-[28px]" style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 28, letterSpacing: "-0.02em" }}>
                  {study.title}
                </div>
                {study.sections.map((section, i) => (
                  <div key={section.label}>
                    <div className="font-mono" style={{ fontSize: 10, fontWeight: 700, color: "#FF3366", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 10 }}>
                      {section.label}
                    </div>
                    {section.type === "list" ? (
                      <ul className="pl-[20px] md:pl-[24px]" style={{ marginBottom: i < study.sections.length - 1 ? 24 : 0, lineHeight: 1.8 }}>
                        {section.items!.map((item, j) => (
                          <li key={j} className="text-[15px] md:text-[16px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                            <span style={{ color: "#FF3366" }}>{""}</span>{item}
                          </li>
                        ))}
                        <style jsx>{`li::marker { color: #FF3366; }`}</style>
                      </ul>
                    ) : (
                      <div className="text-[15px] md:text-[16px]" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: i < study.sections.length - 1 ? 24 : 0 }}>
                        {section.content}
                      </div>
                    )}
                  </div>
                ))}
              </TiltCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
