"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Sentinel: Product Repositioning",
    sections: [
      {
        label: "Challenge",
        type: "text" as const,
        content:
          "Manufacturing intelligence platform positioned for factory workers wasn't closing deals.",
      },
      {
        label: "What I Did",
        type: "list" as const,
        items: [
          "Analyzed 50+ manufacturing companies",
          "Discovered buyers were management, not workers",
          'Repositioned from "worker tools" to "management ROI dashboards"',
          'Changed entire messaging from "help your workers" to "10x your visibility"',
        ],
      },
      {
        label: "Outcome",
        type: "text" as const,
        content:
          "Clearer ICP, stronger value prop, reusable positioning framework.",
      },
    ],
  },
  {
    title: "6-Signal Prospect Analysis Framework",
    sections: [
      {
        label: "Context",
        type: "text" as const,
        content:
          "Built systematic approach for qualifying B2B prospects across 6 dimensions.",
      },
      {
        label: "What I Did",
        type: "list" as const,
        items: [
          "Created framework covering hiring, funding, growth, tech stack, pain, and timing signals",
          "Applied to 100+ prospects for LeadFlow Lab outreach campaigns",
          "Documented process for repeatability",
        ],
      },
      {
        label: "Outcome",
        type: "text" as const,
        content:
          "Cut qualification time from 30min to 5min per prospect.",
      },
    ],
  },
  {
    title: "LeadFlow Lab: Service Positioning",
    sections: [
      {
        label: "Context",
        type: "text" as const,
        content:
          "Evolved positioning from generic 'marketing agency' to 'Revenue Infrastructure Studio' with structured 21-day sprint model.",
      },
      {
        label: "Key Insight",
        type: "text" as const,
        content:
          "Early-stage founders don't want 'lead generation' - they want intake systems that protect their time and qualify buyers before calls.",
      },
      {
        label: "Outcome",
        type: "text" as const,
        content:
          "Reframed entire offering around founder time protection vs. lead volume.",
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Strategic() {
  return (
    <section
      id="strategic"
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
          Strategic Thinking &amp; GTM
        </h2>

        {/* Subheading */}
        <p
          className="text-[18px] md:text-[20px] mb-[40px] md:mb-[64px]"
          style={{
            fontWeight: 400,
            color: "#A0A0A0",
          }}
        >
          I think through positioning and go-to-market before writing code.
        </p>

        {/* Case Studies */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, staggerChildren: 0.15 }}
          className="flex flex-col gap-[24px] md:gap-[32px]"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.title}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              className="p-[24px] md:p-[40px] glass"
              style={{
                borderRadius: 16,
              }}
            >
              {/* Card Title */}
              <div
                className="text-[20px] md:text-[24px]"
                style={{
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: 24,
                }}
              >
                {study.title}
              </div>

              {study.sections.map((section, i) => (
                <div key={section.label}>
                  {/* Section Label */}
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#FF3366",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: 8,
                    }}
                  >
                    {section.label}
                  </div>

                  {section.type === "list" ? (
                    <ul
                      className="pl-[20px] md:pl-[24px]"
                      style={{
                        marginBottom:
                          i < study.sections.length - 1 ? 24 : 0,
                        lineHeight: 1.8,
                      }}
                    >
                      {section.items!.map((item, j) => (
                        <li
                          key={j}
                          className="text-[15px] md:text-[16px]"
                          style={{
                            color: "#A0A0A0",
                          }}
                        >
                          <span style={{ color: "#FF3366" }}>
                            {""}
                          </span>
                          {item}
                        </li>
                      ))}
                      <style jsx>{`
                        li::marker {
                          color: #FF3366;
                        }
                      `}</style>
                    </ul>
                  ) : (
                    <div
                      className="text-[15px] md:text-[16px]"
                      style={{
                        color: "#A0A0A0",
                        lineHeight: 1.6,
                        marginBottom:
                          i < study.sections.length - 1 ? 24 : 0,
                      }}
                    >
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
