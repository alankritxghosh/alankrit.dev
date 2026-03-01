"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ParallaxBg, RevealText, FadeSlide, StaggerContainer, springCardVariants, TiltCard } from "./animations";

const repos = [
    {
        name: "Prospect Scanner",
        description: "Multi-platform opportunity finder — scans Reddit, X, LinkedIn, Product Hunt & Hacker News. Generates hyper-personalized outreach using Gemini AI.",
        meta: "Python · Apify · Gemini API",
        image: "",
        href: "https://github.com/alankritxghosh/prospect-scanner",
    },
    {
        name: "Claude Skills",
        description: "5 open-source agentic skills for Claude Code, Antigravity & Cursor — cold outreach, content repurposing, MVP shipping, build-in-public, pitch deck review.",
        meta: "Open Source · Claude Ecosystem",
        image: "",
        href: "https://github.com/alankritxghosh/alankrit-claude-skills",
    },
];

function RepoCard({ repo }: { repo: (typeof repos)[number] }) {
    const [hovered, setHovered] = useState(false);

    const content = (
        <motion.div
            variants={springCardVariants}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ perspective: 800 }}
        >
            <TiltCard className="card-seep" style={{ overflow: "hidden", cursor: repo.href ? "pointer" : "default" }}>
                {repo.image ? (
                    <div className="img-seamless h-[200px] md:h-[240px]" style={{ backgroundColor: "#0A0A0A" }}>
                        <motion.img
                            src={repo.image}
                            alt={repo.name}
                            loading="lazy"
                            className="img-dark-treat"
                            animate={{ scale: hovered ? 1.04 : 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                        />
                    </div>
                ) : (
                    <div
                        className="img-seamless h-[200px] md:h-[240px]"
                        style={{
                            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <motion.div
                            animate={{ scale: hovered ? 1.08 : 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            style={{
                                fontSize: 48,
                                fontWeight: 800,
                                color: "rgba(255,255,255,0.08)",
                                letterSpacing: "-0.04em",
                                fontFamily: "var(--font-display)",
                                textAlign: "center",
                                padding: "0 20px"
                            }}
                        >
                            {repo.name}
                        </motion.div>
                    </div>
                )}
                <div className="p-[20px] md:p-[24px]">
                    <div className="font-display text-[20px] md:text-[24px]" style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 10, letterSpacing: "-0.02em" }}>{repo.name}</div>
                    <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 14 }}>{repo.description}</div>
                    <div className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{repo.meta}</div>
                </div>
            </TiltCard>
        </motion.div>
    );

    if (repo.href) {
        return <a href={repo.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${repo.name}`} style={{ textDecoration: "none", display: "block" }}>{content}</a>;
    }
    return content;
}

export default function GithubRepos() {
    return (
        <section
            id="github-repos"
            className="py-[80px] md:py-[120px] px-[16px] md:px-[24px] glow-neutral"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <ParallaxBg src="/images/blur-city.png" gradientClass="gradient-gray" />

            <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
                <RevealText
                    as="h2"
                    className="font-display text-[36px] md:text-[56px]"
                    style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 16, letterSpacing: "-0.03em" }}
                >
                    Notable GitHub Repositories
                </RevealText>

                <FadeSlide delay={0.2}>
                    <p className="font-mono text-[12px] md:text-[13px] mb-[40px] md:mb-[64px]" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        Open Source tools and AI agentic skills.
                    </p>
                </FadeSlide>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-[24px]" staggerDelay={0.15}>
                    {repos.map((repo, i) => <RepoCard key={i} repo={repo} />)}
                </StaggerContainer>
            </div>
        </section>
    );
}
