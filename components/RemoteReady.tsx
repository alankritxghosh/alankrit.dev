"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const workItems = [
  "Built all my projects independently with zero real-time oversight",
  "Ship fast without needing constant feedback loops",
  "Over-communicate via Loom, Notion, Slack",
  "Document decisions proactively",
  "Async-first mindset - don't need hand-holding",
];

const tools = [
  "Communication: Loom, Slack, Notion",
  "Development: Cursor, Claude, GitHub",
  "Design: Figma",
  "Project Tracking: Linear, Notion",
];

export default function RemoteReady() {
  return (
    <section
      id="remote-ready"
      className="py-[80px] md:py-[120px] px-[16px] md:px-[24px]"
      style={{
        backgroundColor: "#000000",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[64px]"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h2
            className="text-[36px] md:text-[56px] mb-[24px] md:mb-[32px] heading-glow"
            style={{
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            Remote-Ready
          </h2>

          {/* Timezone Block */}
          <div
            className="p-[20px] md:p-[24px] glass"
            style={{
              borderRadius: 12,
              marginBottom: 32,
            }}
          >
            <div
              className="text-[18px] md:text-[20px]"
              style={{
                fontWeight: 600,
                color: "#FFFFFF",
                marginBottom: 16,
              }}
            >
              Time Zone Flexibility
            </div>

            <div
              style={{
                fontSize: 16,
                color: "#A0A0A0",
                lineHeight: 1.6,
                marginBottom: 8,
              }}
            >
              NOW (Feb-Mar 25): 6pm-11pm IST daily
            </div>

            <div
              className="text-[13px] md:text-[14px]"
              style={{
                color: "#666666",
                marginBottom: 8,
              }}
            >
              That&apos;s 8:30am-1:30pm EST or 5:30am-10:30am PST
            </div>

            <div
              className="text-[13px] md:text-[14px]"
              style={{
                color: "#666666",
                fontWeight: 600,
                marginBottom: 16,
              }}
            >
              5 hours of real-time overlap daily
            </div>

            <div
              className="text-[15px] md:text-[16px]"
              style={{
                color: "#FF3366",
                fontWeight: 600,
                marginBottom: 8,
              }}
            >
              APRIL 1st ONWARDS: Completely flexible
            </div>

            <div
              className="text-[13px] md:text-[14px]"
              style={{
                color: "#666666",
                marginBottom: 16,
              }}
            >
              Can work any US hours needed, full EST or PST overlap.
            </div>

            <div
              className="text-[13px] md:text-[14px]"
              style={{
                color: "#A0A0A0",
                fontStyle: "italic",
              }}
            >
              This gives you 5 weeks to ramp me up part-time, then I&apos;m full-time with complete availability.
            </div>
          </div>

          {/* How I Work */}
          <div
            className="text-[18px] md:text-[20px]"
            style={{
              fontWeight: 600,
              color: "#FFFFFF",
              marginTop: 32,
              marginBottom: 16,
            }}
          >
            How I Work Remotely
          </div>

          <div>
            {workItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  marginBottom: 12,
                }}
              >
                <Check
                  size={20}
                  color="#FF3366"
                  style={{ flexShrink: 0, marginTop: 2 }}
                />
                <span
                  className="text-[15px] md:text-[16px]"
                  style={{
                    color: "#A0A0A0",
                    lineHeight: 1.8,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div
            className="text-[16px] md:text-[18px]"
            style={{
              fontWeight: 600,
              color: "#FFFFFF",
              marginTop: 32,
              marginBottom: 16,
            }}
          >
            Tools I Use
          </div>

          <div>
            {tools.map((tool, i) => (
              <div
                key={i}
                style={{
                  fontSize: 14,
                  color: "#666666",
                  lineHeight: 2,
                }}
              >
                {tool}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-[24px] md:p-[32px] min-h-[320px] md:min-h-[400px] glass"
          style={{
            borderRadius: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {/* Timezone Overlap Visual */}
          <div
            className="text-[48px] md:text-[64px]"
            style={{
              fontWeight: 700,
              color: "#FF3366",
              lineHeight: 1,
            }}
          >
            5h
          </div>
          <div
            className="text-[18px] md:text-[20px]"
            style={{
              fontWeight: 600,
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Daily Overlap
          </div>

          {/* Bars */}
          <div style={{ width: "100%", maxWidth: 320 }}>
            {/* IST Bar */}
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  fontSize: 12,
                  color: "#666666",
                  marginBottom: 6,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                IST (India)
              </div>
              <div
                style={{
                  width: "100%",
                  height: 32,
                  backgroundColor: "#1A1A1A",
                  borderRadius: 6,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="text-[10px] md:text-[11px]"
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "42%",
                    height: "100%",
                    backgroundColor: "rgba(255, 51, 102, 0.3)",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FF3366",
                    fontWeight: 600,
                  }}
                >
                  6pm – 11pm
                </div>
              </div>
            </div>

            {/* EST Bar */}
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  fontSize: 12,
                  color: "#666666",
                  marginBottom: 6,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                EST (US East)
              </div>
              <div
                style={{
                  width: "100%",
                  height: 32,
                  backgroundColor: "#1A1A1A",
                  borderRadius: 6,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="text-[10px] md:text-[11px]"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "42%",
                    height: "100%",
                    backgroundColor: "rgba(99, 102, 241, 0.3)",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6366F1",
                    fontWeight: 600,
                  }}
                >
                  8:30am – 1:30pm
                </div>
              </div>
            </div>

            {/* Overlap indicator */}
            <div
              style={{
                textAlign: "center",
                fontSize: 13,
                color: "#A0A0A0",
                marginTop: 8,
              }}
            >
              5 hours real-time collaboration
            </div>
          </div>

          {/* April callout */}
          <div
            style={{
              backgroundColor: "rgba(255, 51, 102, 0.1)",
              border: "1px solid rgba(255, 51, 102, 0.3)",
              borderRadius: 8,
              padding: "12px 20px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#FF3366",
              }}
            >
              From April 1st: Any US hours
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
