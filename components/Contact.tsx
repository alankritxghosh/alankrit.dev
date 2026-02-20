"use client";

import { motion } from "framer-motion";
import { Mail, Twitter, Linkedin, Calendar, Github } from "lucide-react";
import { ParallaxBg, RevealText, SectionLabel, AnimatedDivider, FadeSlide, StaggerContainer, springCardVariants } from "./animations";

const contactLinks = [
  { icon: Mail, label: "Email", value: "alankritghosh05@gmail.com", href: "mailto:alankritghosh05@gmail.com" },
  { icon: Twitter, label: "Twitter", value: "@alankritxghosh", href: "https://x.com/alankritxghosh" },
  { icon: Linkedin, label: "LinkedIn", value: "View Profile", href: "https://www.linkedin.com/in/alankrit-ghosh-140614276" },
  { icon: Github, label: "GitHub", value: "alankritxghosh", href: "https://github.com/alankritxghosh" },
  { icon: Calendar, label: "Schedule a Call", value: "Book Time", href: "https://calendly.com/ayushghosh2015" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-[80px] pb-[60px] md:pt-[120px] md:pb-[80px] px-[16px] md:px-[24px] glow-crimson"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <ParallaxBg src="/images/blur-city.png" gradientClass="gradient-city" />

      <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <AnimatedDivider className="mb-[64px]" />
        <SectionLabel number="009" label="CONTACT" style={{ marginBottom: 20, textAlign: "center" }} />

        <RevealText
          as="h2"
          className="font-display text-[36px] md:text-[56px]"
          style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 16, textAlign: "center", letterSpacing: "-0.03em" }}
        >
          Let&apos;s Talk
        </RevealText>

        <FadeSlide delay={0.1}>
          <p className="text-[16px] md:text-[18px]" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 32, textAlign: "center", lineHeight: 1.7 }}>
            I&apos;m looking for my first product role at a US-based YC startup.
          </p>
        </FadeSlide>

        <FadeSlide delay={0.2}>
          <div className="font-mono text-[11px] md:text-[12px] mb-[32px] md:mb-[48px]" style={{ color: "rgba(255,255,255,0.35)", lineHeight: 2.2, textAlign: "center", letterSpacing: "0.03em" }}>
            <p>Open to: Product roles, GTM roles, operations, or &apos;first hire&apos; positions at early-stage companies</p>
            <p>Available: Part-time now, full-time April 1st, 2026</p>
            <p>Optimizing for: Learning from experienced founders + strong compensation to clear student loans quickly</p>
          </div>
        </FadeSlide>

        <StaggerContainer
          className="max-w-[400px]"
          style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center", margin: "0 auto 48px", width: "100%" }}
          staggerDelay={0.08}
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={springCardVariants}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label}: ${link.value}`}
              className="px-[20px] md:px-[24px] py-[16px] md:py-[18px] card-seep"
              style={{ display: "flex", alignItems: "center", gap: 14, width: "100%", cursor: "pointer", textDecoration: "none" }}
            >
              <link.icon size={18} color="#FF3366" style={{ flexShrink: 0 }} />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", flex: 1 }}>
                <span className="font-mono text-[9px] md:text-[10px]" style={{ color: "rgba(255,255,255,0.3)", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {link.label}
                </span>
                <span className="text-[14px] md:text-[15px]" style={{ color: "#FFFFFF", fontWeight: 500 }}>{link.value}</span>
              </div>
            </motion.a>
          ))}
        </StaggerContainer>

        <FadeSlide delay={0.4}>
          <div style={{ textAlign: "center" }}>
            <motion.a
              href="https://calendly.com/ayushghosh2015"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule a call on Calendly"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,51,102,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="font-mono btn-glow px-[32px] md:px-[48px] py-[14px] md:py-[18px] text-[11px] md:text-[12px]"
              style={{
                display: "inline-block",
                backgroundColor: "#FF3366",
                color: "#FFFFFF",
                border: "none",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              Schedule a Call
            </motion.a>
          </div>
        </FadeSlide>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-mono"
          style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", fontStyle: "italic", marginTop: 24, textAlign: "center", letterSpacing: "0.05em" }}
        >
          I respond fast. Usually within a few hours.
        </motion.p>
      </div>
    </section>
  );
}
