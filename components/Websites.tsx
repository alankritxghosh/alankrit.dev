"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const websites = [
  {
    name: "LeadFlow Lab",
    description:
      "Agentic AI systems that capture, qualify, and operationalize every lead — so founders stop being the bottleneck.",
    meta: "Built in 1 day · Next.js · Vercel",
    image: "/images/leadflow-lab.png",
    href: "https://leadflow-lab.com/",
  },
  {
    name: "Signal Waitlist",
    description:
      "Waitlist landing page for Signal — inbox management for founders. Built in a single day.",
    meta: "Built in 1 day · Next.js · Vercel",
    image: "/images/signal-waitlist.png",
    href: "https://signal-waitlist.vercel.app/",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function WebsiteCard({ site }: { site: (typeof websites)[number] }) {
  const [hovered, setHovered] = useState(false);

  const content = (
    <motion.div
      variants={cardVariants}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass"
      style={{
        borderRadius: 12,
        overflow: "hidden",
        cursor: site.href ? "pointer" : "default",
        transition: "all 0.3s",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 30px rgba(0, 0, 0, 0.3)"
          : "none",
      }}
    >
      {/* Screenshot */}
      <div
        className="h-[200px] md:h-[240px]"
        style={{
          backgroundColor: "#111111",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={site.image}
          alt={site.name}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            transition: "transform 0.3s",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-[20px] md:p-[24px]">
        <div
          className="text-[18px] md:text-[20px]"
          style={{
            fontWeight: 600,
            color: "#FFFFFF",
            marginBottom: 8,
          }}
        >
          {site.name}
        </div>

        <div
          style={{
            fontSize: 14,
            color: "#A0A0A0",
            lineHeight: 1.5,
            marginBottom: 12,
          }}
        >
          {site.description}
        </div>

        <div
          style={{
            fontSize: 13,
            color: "#666666",
          }}
        >
          {site.meta}
        </div>
      </div>
    </motion.div>
  );

  if (site.href) {
    return (
      <a
        href={site.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${site.name}`}
        style={{ textDecoration: "none", display: "block" }}
      >
        {content}
      </a>
    );
  }

  return content;
}

export default function Websites() {
  return (
    <section
      id="websites"
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
          Websites &amp; Landing Pages
        </h2>

        {/* Subheading */}
        <p
          className="text-[18px] md:text-[20px] mb-[40px] md:mb-[64px]"
          style={{
            fontWeight: 400,
            color: "#A0A0A0",
          }}
        >
          I design and build high-conversion sites in 2-week sprints.
        </p>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[24px]"
        >
          {websites.map((site, i) => (
            <WebsiteCard key={i} site={site} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
