"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Apps",
    items: [
      "SwiftUI for macOS native apps",
      "Firebase for backend/auth",
      "Claude + Cursor for AI-assisted development",
    ],
  },
  {
    name: "Web",
    items: [
      "Next.js / React",
      "Tailwind CSS",
      "Vercel deployment",
    ],
  },
  {
    name: "Automation & Tools",
    items: [
      "n8n for workflow automation",
      "Claude for AI assistance",
      "Cursor for AI-pair programming",
    ],
  },
];

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function TechStack() {
  return (
    <section
      id="tech-stack"
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
          Tech Stack &amp; Tools
        </h2>

        {/* Subheading */}
        <p
          className="text-[18px] md:text-[20px] mb-[40px] md:mb-[64px]"
          style={{
            fontWeight: 400,
            color: "#A0A0A0",
          }}
        >
          I use AI tools to ship 10x faster than traditional development.
        </p>

        {/* Categories Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px] mb-[40px] md:mb-[64px]"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={categoryVariants}
              transition={{ duration: 0.5 }}
            >
              <div
                className="text-[18px] md:text-[20px]"
                style={{
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: 16,
                }}
              >
                {cat.name}
              </div>
              <div>
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="text-[15px] md:text-[16px]"
                    style={{
                      color: "#A0A0A0",
                      lineHeight: 2,
                    }}
                  >
                    • {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="p-[24px] md:p-[40px] glass"
          style={{
            borderRadius: 16,
          }}
        >
          <div
            className="text-[20px] md:text-[24px]"
            style={{
              fontWeight: 600,
              color: "#FFFFFF",
              marginBottom: 16,
            }}
          >
            Philosophy
          </div>
          <p
            className="text-[16px] md:text-[18px]"
            style={{
              color: "#A0A0A0",
              lineHeight: 1.7,
              marginBottom: 16,
            }}
          >
            I&apos;m AI-native. I use Claude and Cursor to increase output without sacrificing quality. This lets me ship MVPs in days instead of weeks, iterate based on real feedback, and focus on product decisions rather than boilerplate.
          </p>
          <p
            className="text-[16px] md:text-[18px]"
            style={{
              color: "#A0A0A0",
              lineHeight: 1.7,
            }}
          >
            I&apos;m not the strongest traditional engineer, but I ship faster than most teams. For early-stage where speed matters more than perfect code, this is an advantage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
