"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "2",
    label: "Apps Built",
    description:
      "Signal & [App 2] launching to App Store February 2026. Built with SwiftUI + AI tools in under 1 month.",
  },
  {
    number: "5+",
    label: "Websites Shipped",
    description:
      "High-conversion landing pages built in 2-week sprints for B2B companies.",
  },
  {
    number: null,
    label: "Available April 1st",
    description:
      "Part-time now (5 hours daily). Full-time with complete US timezone flexibility from April 1, 2026.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-[80px] md:py-[120px] px-[16px] md:px-[24px]"
      style={{
        backgroundColor: "#000000",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Heading */}
        <h2
          className="text-[36px] md:text-[56px] mb-[40px] md:mb-[64px] heading-glow"
          style={{
            fontWeight: 700,
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Built Fast, Shipped Faster
        </h2>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3"
          style={{ gap: 24 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              className="p-[32px] md:p-[48px] glass"
              style={{
                borderRadius: 16,
                cursor: "default",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(255, 255, 255, 0.06)";
                el.style.borderColor = "rgba(255, 255, 255, 0.1)";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(255, 255, 255, 0.03)";
                el.style.borderColor = "rgba(255, 255, 255, 0.06)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {stat.number && (
                <div
                  className="text-[40px] md:text-[56px]"
                  style={{
                    fontWeight: 700,
                    color: "#FF3366",
                    marginBottom: 8,
                  }}
                >
                  {stat.number}
                </div>
              )}
              <div
                className="text-[22px] md:text-[28px]"
                style={{
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: 16,
                }}
              >
                {stat.label}
              </div>
              <div
                className="text-[16px] md:text-[18px]"
                style={{
                  fontWeight: 400,
                  color: "#A0A0A0",
                  lineHeight: 1.6,
                }}
              >
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
