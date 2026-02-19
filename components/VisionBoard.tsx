"use client";

import { motion } from "framer-motion";

type BentoCard =
  | {
      type: "text";
      text: string;
      accent?: string;
      label?: string;
      span: string;
      fontSize?: number;
      fontWeight?: number;
      padLarge?: boolean;
    }
  | {
      type: "image";
      src: string;
      caption: string;
      gradient: string;
      span: string;
      tall?: boolean;
    };

const bentoCards: BentoCard[] = [
  {
    type: "text",
    label: "AI & Impact",
    text: "Building an AI product that solves a real-world problem. One that pushes humanity forward, not just metrics.",
    accent: "pushes humanity forward",
    span: "md:col-span-2",
    fontSize: 24,
    fontWeight: 600,
    padLarge: true,
  },
  {
    type: "image",
    src: "/images/vision/dolomites.png",
    caption: "The Dolomites",
    gradient: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(30,30,60,0.3))",
    span: "",
  },
  {
    type: "text",
    label: "YC & Founders",
    text: "Working alongside YC founders and builders making a real mark. Learning what can't be taught in tutorials.",
    accent: "YC founders",
    span: "",
    fontSize: 20,
    fontWeight: 500,
  },
  {
    type: "image",
    src: "/images/vision/florence.png",
    caption: "Coding from Florence",
    gradient: "linear-gradient(135deg, rgba(255,51,102,0.1), rgba(255,180,100,0.15))",
    span: "row-span-2",
    tall: true,
  },
  {
    type: "text",
    label: "10K Users",
    text: "Building a product used by 10,000+ people.",
    accent: "10,000+",
    span: "",
    fontSize: 18,
    fontWeight: 500,
  },
  {
    type: "text",
    label: "Financial Freedom",
    text: "Paying off student loans in year one. Financially free by 22.",
    accent: "Financially free by 22",
    span: "",
    fontSize: 18,
    fontWeight: 500,
  },
  {
    type: "image",
    src: "/images/vision/ai-viz.png",
    caption: "Intelligence, visualized",
    gradient: "linear-gradient(135deg, rgba(255,51,102,0.12), rgba(99,102,241,0.12))",
    span: "",
  },
  {
    type: "text",
    label: "Travel",
    text: "Driving through the Alps. A summer in southern Italy. Road-tripping LAX to NYC. A week in Spain. Living in Manhattan. Not running from work. Running toward a life worth building for.",
    accent: "a life worth building for",
    span: "md:col-span-2",
    fontSize: 20,
    fontWeight: 500,
    padLarge: true,
  },
  {
    type: "text",
    label: "Stillness",
    text: "A week in a monastery. Trekking across Himachal. Building requires knowing when to stop.",
    accent: "knowing when to stop",
    span: "",
    fontSize: 18,
    fontWeight: 500,
  },
  {
    type: "image",
    src: "/images/vision/city-night.png",
    caption: "Late nights, big city",
    gradient: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(99,102,241,0.1))",
    span: "",
  },
  {
    type: "text",
    label: "Brand",
    text: "Building a personal brand and a company brand. Thought leadership, product, content, all of it.",
    accent: "personal brand and a company brand",
    span: "",
    fontSize: 20,
    fontWeight: 500,
  },
  {
    type: "text",
    label: "Timezone Life",
    text: "Somewhere between SF and Bangalore. Shipping code that crosses timezones.",
    accent: "SF and Bangalore",
    span: "",
    fontSize: 18,
    fontWeight: 500,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function highlightAccent(text: string, accent?: string) {
  if (!accent) return text;
  const idx = text.indexOf(accent);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span style={{ color: "#FF3366" }}>{accent}</span>
      {text.slice(idx + accent.length)}
    </>
  );
}

function BentoTextCard({ card }: { card: Extract<BentoCard, { type: "text" }> }) {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      className="glass"
      style={{
        borderRadius: 16,
        padding: card.padLarge ? "40px 36px" : "28px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {card.label && (
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#FF3366",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: 12,
          }}
        >
          {card.label}
        </span>
      )}
      <p
        style={{
          fontSize: card.fontSize || 18,
          fontWeight: card.fontWeight || 500,
          color: "#FFFFFF",
          lineHeight: 1.6,
        }}
      >
        {highlightAccent(card.text, card.accent)}
      </p>
    </motion.div>
  );
}

function BentoImageCard({ card }: { card: Extract<BentoCard, { type: "image" }> }) {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
        height: "100%",
        minHeight: card.tall ? 400 : 200,
      }}
    >
      <img
        src={card.src}
        alt={card.caption}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          minHeight: card.tall ? 400 : 200,
          objectFit: "cover",
          display: "block",
        }}
      />

      <div
        className="glass-strong"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "12px 16px",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}
      >
        <span style={{ fontSize: 13, color: "#A0A0A0", fontWeight: 500 }}>
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
      className="py-[80px] md:py-[120px] px-[16px] md:px-[24px]"
      style={{
        backgroundColor: "#000000",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          className="text-[36px] md:text-[56px] heading-glow"
          style={{
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: 16,
          }}
        >
          Where I&apos;m Headed
        </h2>

        <p
          className="text-[18px] md:text-[20px] mb-[40px] md:mb-[64px]"
          style={{
            fontWeight: 400,
            color: "#A0A0A0",
          }}
        >
          What I&apos;m optimizing my career for.
        </p>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, staggerChildren: 0.06 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {bentoCards.map((card, i) => (
            <div key={i} className={card.span}>
              {card.type === "text" ? (
                <BentoTextCard card={card} />
              ) : (
                <BentoImageCard card={card} />
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
