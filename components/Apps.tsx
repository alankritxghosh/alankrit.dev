"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ParallaxBg, RevealText, SectionLabel, AnimatedDivider, StaggerContainer, springCardVariants, FadeSlide } from "./animations";

const apps = [
  {
    name: "LeadFlow Lab",
    subtitle: "Digital Growth Studio for Interior Designers",
    status: "Founder",
    description:
      "Founded a specialized growth studio offering end-to-end inbound engines for boutique interior design firms. Scaled via AI-assisted marketing retainers, website builds, and automated lead capture bots.",
    tech: "Inbound Marketing · WhatsApp Automation · Agentic Orchestration",
    timeline: "Active Studio",
    learned:
      "A land-and-expand revenue model: Clients start with high-leverage one-offs (websites, AI concept brochures) and naturally graduate to full-stack marketing retainers.",
    image: "/images/leadflow-lab.png",
    imageStyle: "screenshot" as const,
    href: "https://leadflow-lab.com/",
  },
  {
    name: "Brochure Studio",
    subtitle: "Autonomous AI Architectural Visualization Pipeline",
    status: "Internal Product",
    description:
      "Engineered a headless multi-agent pipeline that transforms raw client briefs into print-ready PDF concept brochures featuring photorealistic interior renders.",
    tech: "Claude API · Flux Pro · Agentic Layouts",
    timeline: "Internal Tooling",
    learned:
      "Managed heavy context-windows by securely splitting operations: Brief Intake → Scene Manifest → JSON Image Prompts → Render Generation → Copywriting → Layout Assembly.",
    image: "/images/brochure-studio.png",
    imageStyle: "screenshot" as const,
    href: "https://github.com/alankritxghosh/",
  },
  {
    name: "AgencyOS",
    subtitle: "Gemini API, Supabase, Slack API, Node.js",
    status: "GitHub",
    description:
      "Built a full multi-agent system inside Slack. Agents handle outreach, content creation, and market monitoring, with all decisions routed through a central #command-center channel.",
    tech: "Agentic AI · Multi-Agent Architecture",
    timeline: "Internal tooling for LeadFlow Lab",
    learned:
      "Designed the agent task decomposition architecture, QA audit framework, and go-live checklist for production readiness.",
    image: "/images/agencyos-github.png",
    imageStyle: "screenshot" as const,
    href: "https://github.com/alankritxghosh/agency-os",
  },
  {
    name: "Tempo",
    subtitle: "Next.js 14, Supabase, Gemini 3 Flash, Remotion",
    status: "GitHub | Live",
    description:
      "Built a generative AI product that turns app screenshots and copy into motion design videos, targeting indie founders on Product Hunt and X.",
    tech: "Full-Stack AI · Motion Design · PostHog",
    timeline: "Live Product",
    learned:
      "Supports standard and Cinematic mode, which layers Seedance image-to-video before Remotion compositing for higher quality output.",
    image: "/images/tempo-hero.png",
    imageStyle: "screenshot" as const,
    href: "https://tempo-app-two.vercel.app/",
  },
  {
    name: "Signal",
    subtitle: "macOS Gmail Automation",
    status: "Live — Downloadable",
    description:
      "Intelligent inbox management and automation for Gmail on macOS. Built in 2 weeks using SwiftUI + Claude for AI-assisted development.",
    tech: "SwiftUI · Gmail API · Firebase",
    timeline: "14 days from idea to submission",
    learned:
      "Users want one-click automation, not complex workflows. Scrapped multi-step setup for smart defaults. Cut onboarding from 5 steps to 1 button.",
    image: "/images/signal-logo.png",
    imageStyle: "logo" as const,
    href: "https://signal-waitlist.vercel.app/",
  },
  {
    name: "QuickShare",
    subtitle: "Instant File Sharing for Mac",
    status: "Live — Free Download",
    description:
      "Drop a file, get a temporary download link in seconds. No browser, no sign-up, no friction. Links expire in 24 hours.",
    tech: "Swift · Cloudflare Workers · R2 Storage",
    timeline: "Built and shipped in 1 week",
    learned:
      "The best sharing tool is the one with zero steps. Removed every feature that wasn't drag → link → paste. Auto-copy to clipboard was the unlock.",
    image: "/images/quickshare-hero.png",
    imageStyle: "screenshot" as const,
    href: "https://quickshare-site.pages.dev/",
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
          background: app.imageStyle === "screenshot" ? "#0A0A0A" : "radial-gradient(ellipse at center, #1a1816 0%, #0d0d0d 70%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <motion.img
          src={app.image}
          alt={app.name}
          loading="lazy"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={
            app.imageStyle === "screenshot"
              ? { width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", borderRadius: 0 }
              : { width: "60%", height: "60%", objectFit: "contain", borderRadius: 20 }
          }
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
          Products & Studios
        </RevealText>

        <FadeSlide delay={0.2}>
          <p className="font-mono text-[12px] md:text-[13px] mb-[40px] md:mb-[64px]" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            I build intelligent systems and spin them up into growth engines.
          </p>
        </FadeSlide>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 32 }}>
          {apps.map((app) => <AppCard key={app.name} app={app} />)}
        </StaggerContainer>
      </div>
    </section>
  );
}
