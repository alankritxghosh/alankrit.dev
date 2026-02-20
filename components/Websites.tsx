"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ParallaxBg, RevealText, FadeSlide, StaggerContainer, springCardVariants, TiltCard } from "./animations";

const websites = [
  {
    name: "LeadFlow Lab",
    description: "Agentic AI systems that capture, qualify, and operationalize every lead so founders stop being the bottleneck.",
    meta: "Built in 1 day · Next.js · Vercel",
    image: "/images/leadflow-lab.png",
    href: "https://leadflow-lab.com/",
  },
  {
    name: "Signal Waitlist",
    description: "Waitlist landing page for Signal. Inbox management for founders, built in a single day.",
    meta: "Built in 1 day · Next.js · Vercel",
    image: "/images/signal-waitlist.png",
    href: "https://signal-waitlist.vercel.app/",
  },
];

function WebsiteCard({ site }: { site: (typeof websites)[number] }) {
  const [hovered, setHovered] = useState(false);

  const content = (
    <motion.div
      variants={springCardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ perspective: 800 }}
    >
      <TiltCard className="card-seep" style={{ overflow: "hidden", cursor: site.href ? "pointer" : "default" }}>
        <div className="img-seamless h-[200px] md:h-[240px]" style={{ backgroundColor: "#0A0A0A" }}>
          <motion.img
            src={site.image}
            alt={site.name}
            loading="lazy"
            className="img-dark-treat"
            animate={{ scale: hovered ? 1.04 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
          />
        </div>
        <div className="p-[20px] md:p-[24px]">
          <div className="font-display text-[20px] md:text-[24px]" style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 10, letterSpacing: "-0.02em" }}>{site.name}</div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 14 }}>{site.description}</div>
          <div className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{site.meta}</div>
        </div>
      </TiltCard>
    </motion.div>
  );

  if (site.href) {
    return <a href={site.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${site.name}`} style={{ textDecoration: "none", display: "block" }}>{content}</a>;
  }
  return content;
}

export default function Websites() {
  return (
    <section
      id="websites"
      className="py-[80px] md:py-[120px] px-[16px] md:px-[24px] glow-amber"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <ParallaxBg src="/images/blur-city.png" gradientClass="gradient-city" />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <RevealText
          as="h2"
          className="font-display text-[36px] md:text-[56px]"
          style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 16, letterSpacing: "-0.03em" }}
        >
          Websites &amp; Landing Pages
        </RevealText>

        <FadeSlide delay={0.2}>
          <p className="font-mono text-[12px] md:text-[13px] mb-[40px] md:mb-[64px]" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            I design and build high-conversion sites in 2-week sprints.
          </p>
        </FadeSlide>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-[24px]" staggerDelay={0.15}>
          {websites.map((site, i) => <WebsiteCard key={i} site={site} />)}
        </StaggerContainer>
      </div>
    </section>
  );
}
