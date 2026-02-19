"use client";

import { motion } from "framer-motion";
import { Mail, Twitter, Linkedin, Calendar, Github } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "alankritghosh05@gmail.com",
    href: "mailto:alankritghosh05@gmail.com",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@alankritxghosh",
    href: "https://x.com/alankritxghosh",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "View Profile",
    href: "https://www.linkedin.com/in/alankrit-ghosh-140614276",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "alankritxghosh",
    href: "https://github.com/alankritxghosh",
  },
  {
    icon: Calendar,
    label: "Schedule a Call",
    value: "Book Time",
    href: "https://calendly.com/ayushghosh2015",
  },
];

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-[80px] pb-[60px] md:pt-[120px] md:pb-[80px] px-[16px] md:px-[24px]"
      style={{
        backgroundColor: "#000000",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[36px] md:text-[56px] heading-glow"
          style={{
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: 16,
          }}
        >
          Let&apos;s Talk
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[18px] md:text-[20px]"
          style={{
            fontWeight: 400,
            color: "#A0A0A0",
            marginBottom: 32,
          }}
        >
          I&apos;m looking for my first product role at a US-based YC startup.
        </motion.p>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[15px] md:text-[16px] mb-[32px] md:mb-[48px]"
          style={{
            color: "#A0A0A0",
            lineHeight: 1.8,
            textAlign: "center",
          }}
        >
          <p>Open to: Product roles, GTM roles, operations, or &apos;first hire&apos; positions at early-stage companies</p>
          <p>Available: Part-time now, full-time April 1st, 2026</p>
          <p>Optimizing for: Learning from experienced founders + strong compensation to clear student loans quickly</p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="max-w-[400px] md:max-w-[400px]"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignItems: "center",
            margin: "0 auto 48px",
            width: "100%",
          }}
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={linkVariants}
              transition={{ duration: 0.5 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label}: ${link.value}`}
              className="px-[16px] md:px-[24px] py-[14px] md:py-[16px] glass"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                borderRadius: 12,
                width: "100%",
                cursor: "pointer",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(255, 255, 255, 0.06)";
                el.style.borderColor = "rgba(255, 255, 255, 0.1)";
                el.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(255, 255, 255, 0.03)";
                el.style.borderColor = "rgba(255, 255, 255, 0.06)";
                el.style.transform = "translateX(0)";
              }}
            >
              <link.icon
                size={20}
                color="#FF3366"
                style={{ flexShrink: 0 }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  flex: 1,
                }}
              >
                <span
                  className="text-[13px] md:text-[14px]"
                  style={{
                    color: "#666666",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </span>
                <span
                  className="text-[15px] md:text-[16px]"
                  style={{
                    color: "#FFFFFF",
                    fontWeight: 600,
                  }}
                >
                  {link.value}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="https://calendly.com/ayushghosh2015"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Schedule a call on Calendly"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05, backgroundColor: "#E62E5C", boxShadow: "0 0 30px rgba(255, 51, 102, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="px-[32px] md:px-[48px] py-[16px] md:py-[20px] text-[16px] md:text-[18px]"
          style={{
            display: "inline-block",
            backgroundColor: "#FF3366",
            color: "#FFFFFF",
            border: "none",
            borderRadius: 9999,
            fontWeight: 600,
            cursor: "pointer",
            marginTop: 32,
            boxShadow: "0 0 20px rgba(255, 51, 102, 0.3)",
            textDecoration: "none",
            transition: "all 0.3s",
          }}
        >
          Schedule a Call
        </motion.a>

        {/* Response time */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            fontSize: 14,
            color: "#666666",
            fontStyle: "italic",
            marginTop: 24,
          }}
        >
          I respond fast. Usually within a few hours.
        </motion.p>
      </div>
    </section>
  );
}
