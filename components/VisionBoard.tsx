"use client";

import { motion } from "framer-motion";
import { ParallaxBg, RevealText, SectionLabel, AnimatedDivider, FadeSlide, StaggerContainer, springCardVariants, TiltCard } from "./animations";

type BentoCard =
  | { type: "text"; text: string; accent?: string; label?: string; span: string; fontSize?: number; fontWeight?: number; padLarge?: boolean; }
  | { type: "image"; src: string; caption: string; gradient: string; span: string; tall?: boolean; };

const bentoCards: BentoCard[] = [
  { type: "text", label: "AI & Impact", text: "Building an AI product that solves a real-world problem. One that pushes humanity forward, not just metrics.", accent: "pushes humanity forward", span: "md:col-span-2", fontSize: 24, fontWeight: 600, padLarge: true },
  { type: "image", src: "/images/vision/dolomites.png", caption: "The Dolomites", gradient: "", span: "" },
  { type: "text", label: "YC & Founders", text: "Working alongside YC founders and builders making a real mark. Learning what can't be taught in tutorials.", accent: "YC founders", span: "", fontSize: 20, fontWeight: 500 },
  { type: "image", src: "/images/vision/florence.png", caption: "Coding from Florence", gradient: "", span: "row-span-2", tall: true },
  { type: "text", label: "10K Users", text: "Building a product used by 10,000+ people.", accent: "10,000+", span: "", fontSize: 18, fontWeight: 500 },
  { type: "text", label: "Financial Freedom", text: "Paying off student loans in year one. Financially free by 22.", accent: "Financially free by 22", span: "", fontSize: 18, fontWeight: 500 },
  { type: "image", src: "/images/vision/ai-viz.png", caption: "Intelligence, visualized", gradient: "", span: "" },
  { type: "text", label: "Travel", text: "Driving through the Alps. A summer in southern Italy. Road-tripping LAX to NYC. A week in Spain. Living in Manhattan. Not running from work. Running toward a life worth building for.", accent: "a life worth building for", span: "md:col-span-2", fontSize: 20, fontWeight: 500, padLarge: true },
  { type: "text", label: "Stillness", text: "A week in a monastery. Trekking across Himachal. Building requires knowing when to stop.", accent: "knowing when to stop", span: "", fontSize: 18, fontWeight: 500 },
  { type: "image", src: "/images/vision/city-night.png", caption: "Late nights, big city", gradient: "", span: "" },
  { type: "text", label: "Brand", text: "Building a personal brand and a company brand. Thought leadership, product, content, all of it.", accent: "personal brand and a company brand", span: "", fontSize: 20, fontWeight: 500 },
  { type: "text", label: "Timezone Life", text: "Somewhere between SF and Bangalore. Shipping code that crosses timezones.", accent: "SF and Bangalore", span: "", fontSize: 18, fontWeight: 500 },
];

function highlightAccent(text: string, accent?: string) {
  if (!accent) return text;
  const idx = text.indexOf(accent);
  if (idx === -1) return text;
  return <>{text.slice(0, idx)}<span style={{ color: "#FF3366" }}>{accent}</span>{text.slice(idx + accent.length)}</>;
}

function BentoTextCard({ card }: { card: Extract<BentoCard, { type: "text" }> }) {
  return (
    <motion.div variants={springCardVariants} style={{ height: "100%", perspective: 800 }}>
      <TiltCard
        className="p-[24px] md:p-[32px] card-seep"
        style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}
      >
        {card.label && (
          <span className="font-mono" style={{ fontSize: 9, fontWeight: 700, color: "#FF3366", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>
            {card.label}
          </span>
        )}
        <p style={{ fontSize: card.fontSize || 18, fontWeight: card.fontWeight || 500, color: "#FFFFFF", lineHeight: 1.6 }}>
          {highlightAccent(card.text, card.accent)}
        </p>
      </TiltCard>
    </motion.div>
  );
}

function BentoImageCard({ card }: { card: Extract<BentoCard, { type: "image" }> }) {
  return (
    <motion.div variants={springCardVariants} className="img-seamless" style={{ height: "100%", minHeight: card.tall ? 400 : 200 }}>
      <img
        src={card.src}
        alt={card.caption}
        loading="lazy"
        className="img-dark-treat"
        style={{ width: "100%", height: "100%", minHeight: card.tall ? 400 : 200, objectFit: "cover", display: "block" }}
      />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 16px", background: "linear-gradient(transparent, rgba(0,0,0,0.8))", zIndex: 2 }}>
        <span className="font-mono" style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {card.caption}
        </span>
      </div>
    </motion.div>
  );
}

export default function VisionBoard() {
  return (
    <section
      id="vision"
      className="py-[80px] md:py-[120px] px-[16px] md:px-[24px] glow-crimson light-streak"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <ParallaxBg src="/images/blur-city.png" gradientClass="gradient-crimson" />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <AnimatedDivider className="mb-[64px]" />
        <SectionLabel number="008" label="VISION" style={{ marginBottom: 20 }} />

        <RevealText
          as="h2"
          className="font-display text-[36px] md:text-[56px]"
          style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 16, letterSpacing: "-0.03em" }}
        >
          Where I&apos;m Headed
        </RevealText>

        <FadeSlide delay={0.2}>
          <p className="font-mono text-[12px] md:text-[13px] mb-[40px] md:mb-[64px]" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            What I&apos;m optimizing my career for.
          </p>
        </FadeSlide>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[12px]" staggerDelay={0.06}>
          {bentoCards.map((card, i) => (
            <div key={i} className={card.span}>
              {card.type === "text" ? <BentoTextCard card={card} /> : <BentoImageCard card={card} />}
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
