"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function AppCard({ app }: { app: (typeof apps)[number] }) {
  const [hovered, setHovered] = useState(false);

  const card = (
    <motion.div
      variants={cardVariants}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass"
      style={{
        borderRadius: 16,
        padding: 0,
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        boxShadow: hovered
          ? "0 20px 40px rgba(0, 0, 0, 0.4)"
          : "none",
      }}
    >
      {/* Image */}
      <div
        className="h-[250px] sm:h-[300px] md:h-[400px]"
        style={{
          background: app.name === "Signal"
            ? "radial-gradient(ellipse at center, #1a1816 0%, #0d0d0d 70%)"
            : "#111111",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={app.image}
          alt={app.name}
          loading="lazy"
          style={{
            width: app.name === "Signal" ? "60%" : "100%",
            height: app.name === "Signal" ? "60%" : "100%",
            objectFit: app.name === "Signal" ? "contain" : "cover",
            transition: "transform 0.3s",
            transform: hovered ? "scale(1.1)" : "scale(1)",
            borderRadius: app.name === "Signal" ? 20 : 0,
          }}
        />
      </div>

      {/* Content */}
      <div className="p-[24px] md:p-[32px]">
        {/* Status badge */}
        <span
          className="glass-accent"
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 9999,
            fontSize: 14,
            fontWeight: 500,
            color: "#FF3366",
            marginBottom: 16,
          }}
        >
          {app.status}
        </span>

        {/* Name */}
        <div
          className="text-[22px] md:text-[28px]"
          style={{
            fontWeight: 600,
            color: "#FFFFFF",
            marginBottom: 8,
          }}
        >
          {app.name}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: "#A0A0A0",
            marginBottom: 12,
          }}
        >
          {app.subtitle}
        </div>

        {/* Description */}
        <div
          className="text-[15px] md:text-[16px]"
          style={{
            color: "#A0A0A0",
            lineHeight: 1.6,
            marginBottom: 24,
          }}
        >
          {app.description}
        </div>

        {/* Tech Stack */}
        <div
          style={{
            fontSize: 14,
            color: "#666666",
            marginBottom: 8,
          }}
        >
          {app.tech}
        </div>

        {/* Timeline */}
        <div
          style={{
            fontSize: 14,
            color: "#666666",
            marginBottom: 16,
          }}
        >
          {app.timeline}
        </div>

        {/* What I learned */}
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "#FFFFFF",
            marginBottom: 8,
          }}
        >
          What I learned:
        </div>
        <div
          className="text-[15px] md:text-[16px]"
          style={{
            color: "#A0A0A0",
            lineHeight: 1.6,
            fontStyle: "italic",
          }}
        >
          {app.learned}
        </div>
      </div>
    </motion.div>
  );

  if (app.href) {
    return (
      <a
        href={app.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${app.name}`}
        style={{ textDecoration: "none", display: "block" }}
      >
        {card}
      </a>
    );
  }

  return card;
}

export default function Apps() {
  return (
    <section
      id="work"
      className="py-[80px] md:py-[120px] px-[16px] md:px-[24px]"
      style={{
        backgroundColor: "#000000",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Heading */}
        <h2
          className="text-[36px] md:text-[56px] heading-glow"
          style={{
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: 16,
          }}
        >
          Apps I&apos;ve Built
        </h2>

        {/* Subheading */}
        <p
          className="text-[18px] md:text-[20px] mb-[40px] md:mb-[64px]"
          style={{
            fontWeight: 400,
            color: "#A0A0A0",
          }}
        >
          I ship to the App Store using SwiftUI and AI-assisted development.
        </p>

        {/* Apps Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          className="grid grid-cols-1 max-w-[640px]"
          style={{ gap: 32 }}
        >
          {apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
