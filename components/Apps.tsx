"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ParallaxBg, RevealText, SectionLabel, AnimatedDivider, StaggerContainer, springCardVariants, FadeSlide } from "./animations";

const apps = [
  {
    name: "Signal",
    subtitle: "macOS Gmail Automation",
    status: "Launching to App Store Feb 2026",
    description:
      "Intelligent inbox management and automation for Gmail on macOS. Built in 2 weeks using SwiftUI + Claude for AI-assisted development.",
    tech: "SwiftUI · Gmail API · Firebase",
    timeline: "14 days from idea to submission",
    learned:
      "Users want one-click automation, not complex workflows. Scrapped multi-step setup for smart defaults. Cut onboarding from 5 steps to 1 button.",
    image: "/images/signal-logo.png",
    href: "https://signal-waitlist.vercel.app/",
  },
];

function AppCard({ app }: { app: (typeof apps)[number] }) {
  const [hovered, setHovered] = useState(false);

  const card = (
    <motion.div
      variants={springCardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card-seep"
      style={{ overflow: "hidden", cursor: "pointer" }}
    >
      <div
        className="img-seamless h-[250px] sm:h-[300px] md:h-[400px]"
        style={{
          background: "radial-gradient(ellipse at center, #1a1816 0%, #0d0d0d 70%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.img
          src={app.image}
          alt={app.name}
          loading="lazy"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{ width: "60%", height: "60%", objectFit: "contain", borderRadius: 20 }}
        />
      </div>

      <div className="p-[24px] md:p-[32px]">
        <span className="font-mono" style={{ display: "inline-block", padding: "6px 14px", fontSize: 10, fontWeight: 700, color: "#FF3366", marginBottom: 20, letterSpacing: "0.1em", textTransform: "uppercase", background: "rgba(255,51,102,0.06)" }}>
          {app.status}
        </span>
        <div className="font-display text-[28px] md:text-[36px]" style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8, letterSpacing: "-0.02em" }}>
          {app.name}
        </div>
        <div className="font-mono text-[12px] md:text-[13px]" style={{ fontWeight: 400, color: "rgba(255,255,255,0.4)", marginBottom: 20, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          {app.subtitle}
        </div>
        <div className="text-[15px] md:text-[16px]" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 24 }}>
          {app.description}
        </div>
        <div className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em", marginBottom: 6 }}>{app.tech}</div>
        <div className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em", marginBottom: 20 }}>{app.timeline}</div>
        <div className="font-mono" style={{ fontSize: 11, fontWeight: 700, color: "#FFFFFF", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>What I learned:</div>
        <div className="text-[15px] md:text-[16px]" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, fontStyle: "italic" }}>{app.learned}</div>
      </div>
    </motion.div>
  );

  if (app.href) {
    return <a href={app.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${app.name}`} style={{ textDecoration: "none", display: "block" }}>{card}</a>;
  }
  return card;
}

export default function Apps() {
  return (
    <section
      id="work"
      className="py-[80px] md:py-[120px] px-[16px] md:px-[24px] glow-crimson light-streak"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <ParallaxBg src="/images/blur-amber.png" gradientClass="gradient-amber" />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <AnimatedDivider className="mb-[64px]" />
        <SectionLabel number="003" label="WORK" style={{ marginBottom: 20 }} />

        <RevealText
          as="h2"
          className="font-display text-[36px] md:text-[56px]"
          style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 16, letterSpacing: "-0.03em" }}
        >
          Apps I&apos;ve Built
        </RevealText>

        <FadeSlide delay={0.2}>
          <p className="font-mono text-[12px] md:text-[13px] mb-[40px] md:mb-[64px]" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            I ship to the App Store using SwiftUI and AI-assisted development.
          </p>
        </FadeSlide>

        <StaggerContainer className="grid grid-cols-1 max-w-[700px]" style={{ gap: 32 }}>
          {apps.map((app) => <AppCard key={app.name} app={app} />)}
        </StaggerContainer>
      </div>
    </section>
  );
}
