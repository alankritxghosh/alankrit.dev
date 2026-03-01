"use client";

import { motion } from "framer-motion";
import { ParallaxBg, RevealText, SectionLabel, AnimatedDivider, FadeSlide, StaggerContainer, springCardVariants, TiltCard } from "./animations";

type PRDSection = {
    id: string;
    title: string;
    type?: "table";
    headers?: string[];
    rows?: string[][];
    footer?: string;
    content?: React.ReactNode;
};

const prds = [
    {
        title: "AgencyOS — Product Requirements Document",
        meta: [
            { label: "Author", value: "Alankrit Ghosh" },
            { label: "Started", value: "February 2026" },
            { label: "Status", value: "Outreach Agent live · 3 in build" },
            { label: "Platform", value: "Slack + Antigravity and Claude Code" },
            { label: "Type", value: "Internal tool → productizable" }
        ],
        sections: [
            {
                id: "001",
                title: "Problem",
                content: (
                    <div className="space-y-4">
                        <p>Solo founders hit a ceiling that isn&apos;t about ideas.</p>
                        <p>At some point, every solo founder running a real business runs out of hours before they run out of opportunities. The bottleneck isn&apos;t strategy or skill — it&apos;s the operational weight of execution. Every message drafted manually, every lead researched individually, every brand post written from scratch, every Reddit thread that could&apos;ve been a client conversation but went unseen.</p>
                        <p>The traditional answer is to hire. But hiring means payroll, management overhead, and onboarding time — none of which make sense before your revenue can support it. You end up stuck: too busy to scale, too early to hire.</p>
                        <p style={{ color: "#FFFFFF", fontWeight: 600 }}>Core insight: The work of running a business didn&apos;t change, but the cost of automating it dropped to near-zero. What previously required 3-5 people can now be orchestrated by one person with the right agent architecture.</p>

                        <div style={{ marginTop: 24, marginBottom: 8, fontWeight: 700, color: "#FFFFFF" }}>Before AgencyOS:</div>
                        <ul className="pl-[20px]" style={{ listStyleType: "none", margin: 0, paddingLeft: 0 }}>
                            {['3+ hours daily lost to ops work — outreach, monitoring, context-switching', '4 distinct operational roles a solo founder has to fill simultaneously', 'No system = the founder is always the bottleneck'].map((item, i) => (
                                <li key={i} className="mb-2 flex items-start">
                                    <span style={{ color: "#FF3366", marginRight: 12 }}>→</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            },
            {
                id: "002",
                title: "User",
                content: (
                    <div className="space-y-4">
                        <p><strong style={{ color: "#FFFFFF" }}>Primary user:</strong> The Solo Builder-Founder</p>
                        <p>One user. One use case. Very high conviction.</p>
                        <p>AgencyOS was designed for a single user type: a solo founder running a real B2B business with genuine revenue on the line. Not a hobbyist, not a team. One person, wearing every hat.</p>
                        <p>This constraint was intentional. Designing for multiple users at this stage would introduce feature bloat and ambiguous priorities. Build for one person perfectly, then generalize.</p>

                        <div style={{ marginTop: 24, marginBottom: 8, fontWeight: 700, color: "#FFFFFF" }}>Jobs To Be Done:</div>
                        <ul className="pl-[20px]" style={{ listStyleType: "none", margin: 0, paddingLeft: 0 }}>
                            {[
                                'Execute personalized outreach to 20+ prospects per week without writing each message from scratch',
                                'Maintain brand presence and content cadence without a content hire or 2 hours a day of manual work',
                                'Never lose context on a client, lead, or project because it\'s buried in an inbox',
                                'Surface relevant Reddit conversations where being present converts to inbound',
                                'Delegate operational decisions to agents so the founder focuses on product, strategy, and closing'
                            ].map((item, i) => (
                                <li key={i} className="mb-2 flex items-start">
                                    <span style={{ color: "#FF3366", marginRight: 12 }}>→</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p style={{ marginTop: 24, color: "#FF3366", fontStyle: "italic", fontWeight: 600 }}>Design principle: If the founder has to touch it more than once, it&apos;s not automated enough.</p>
                    </div>
                )
            },
            {
                id: "003",
                title: "System Design",
                content: (
                    <div className="space-y-4">
                        <p>Four agents. One interface. No new software.</p>
                        <p>The core architectural decision: every agent lives inside Slack. Not a custom dashboard, not a new web app. Slack is where the founder already works, so adoption is zero-friction and the system actually gets used.</p>
                        <p>Each agent is a dedicated Slack channel with its own trigger and action surface. Shared backend: Antigravity and Claude Code for workflow orchestration, reasoning, and generation.</p>

                        <div style={{ marginTop: 32, padding: 24, background: "rgba(255,255,255,0.02)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                                <div style={{ fontWeight: 700, color: "#FFFFFF", fontSize: 18 }}>Agent 01 — Outreach Agent</div>
                                <div className="font-mono" style={{ fontSize: 10, padding: "4px 8px", background: "rgba(34, 197, 94, 0.1)", color: "#22c55e", borderRadius: 4, letterSpacing: "0.1em" }}>LIVE</div>
                            </div>
                            <div className="mb-4"><strong style={{ color: "#FFFFFF" }}>Trigger:</strong> New prospect added to pipeline</div>
                            <p className="mb-4">Pulls LinkedIn activity, company signals, and role context for a given prospect. Generates a personalized outreach message with a specific hook based on what they&apos;re actually doing — not a generic template. Routes the draft to <code style={{ color: "#FF3366" }}>#outreach-agent</code> for one-click founder approval before sending.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div><strong style={{ color: "#FFFFFF" }}>North Star:</strong><br /><span style={{ color: "#FF3366" }}>Qualified replies per week</span></div>
                                <div><strong style={{ color: "#FFFFFF" }}>Supporting:</strong><br />Time per message under 2 minutes</div>
                                <div className="md:col-span-2"><strong style={{ color: "#FFFFFF" }}>Guard Rail:</strong><br />Reply rate stays above 8%</div>
                            </div>
                        </div>

                        <div style={{ marginTop: 24, padding: 24, background: "rgba(255,255,255,0.02)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                                <div style={{ fontWeight: 700, color: "#FFFFFF", fontSize: 18 }}>Agent 02 — Brand Agent</div>
                                <div className="font-mono" style={{ fontSize: 10, padding: "4px 8px", background: "rgba(245, 158, 11, 0.1)", color: "#f59e0b", borderRadius: 4, letterSpacing: "0.1em" }}>IN BUILD</div>
                            </div>
                            <div className="mb-4"><strong style={{ color: "#FFFFFF" }}>Trigger:</strong> Daily 8am scheduled run</div>
                            <p className="mb-4">Monitors what the founder&apos;s ICP is discussing on Twitter and LinkedIn. Surfaces 3 content angles daily based on the founder&apos;s voice and positioning. Drafts a post for each. Founder picks one and approves — no writing required.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div><strong style={{ color: "#FFFFFF" }}>North Star:</strong><br /><span style={{ color: "#f59e0b" }}>Posts published per week</span></div>
                                <div><strong style={{ color: "#FFFFFF" }}>Supporting:</strong><br />Founder time under 10 minutes per post</div>
                                <div className="md:col-span-2"><strong style={{ color: "#FFFFFF" }}>Guard Rail:</strong><br />Voice consistency across published content</div>
                            </div>
                        </div>

                        <div style={{ marginTop: 24, padding: 24, background: "rgba(255,255,255,0.02)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                                <div style={{ fontWeight: 700, color: "#FFFFFF", fontSize: 18 }}>Agent 03 — Context Agent</div>
                                <div className="font-mono" style={{ fontSize: 10, padding: "4px 8px", background: "rgba(245, 158, 11, 0.1)", color: "#f59e0b", borderRadius: 4, letterSpacing: "0.1em" }}>IN BUILD</div>
                            </div>
                            <div className="mb-4"><strong style={{ color: "#FFFFFF" }}>Trigger:</strong> New email, DM, or Slack thread</div>
                            <p className="mb-4">Ingests client emails, sales calls, and DM threads in real-time. Extracts key decisions, action items, and relationship context into a structured memory layer. When the founder asks &quot;what&apos;s the status with X,&quot; the answer is instant and accurate.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div><strong style={{ color: "#FFFFFF" }}>North Star:</strong><br /><span style={{ color: "#f59e0b" }}>Context recall accuracy</span></div>
                                <div><strong style={{ color: "#FFFFFF" }}>Supporting:</strong><br />Zero dropped-context incidents</div>
                                <div className="md:col-span-2"><strong style={{ color: "#FFFFFF" }}>Guard Rail:</strong><br />No sensitive data exposed outside intended scope</div>
                            </div>
                        </div>

                        <div style={{ marginTop: 24, padding: 24, background: "rgba(255,255,255,0.02)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                                <div style={{ fontWeight: 700, color: "#FFFFFF", fontSize: 18 }}>Agent 04 — Reddit Monitor Agent</div>
                                <div className="font-mono" style={{ fontSize: 10, padding: "4px 8px", background: "rgba(245, 158, 11, 0.1)", color: "#f59e0b", borderRadius: 4, letterSpacing: "0.1em" }}>IN BUILD</div>
                            </div>
                            <div className="mb-4"><strong style={{ color: "#FFFFFF" }}>Trigger:</strong> Hourly keyword scan</div>
                            <p className="mb-4">Monitors target subreddits for posts matching the founder&apos;s ICP pain points. Ranks threads by opportunity score based on recency, engagement, and problem fit. Delivers a daily digest with the top 5 threads and a suggested response angle for each.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div><strong style={{ color: "#FFFFFF" }}>North Star:</strong><br /><span style={{ color: "#f59e0b" }}>Inbound leads generated from Reddit presence</span></div>
                                <div><strong style={{ color: "#FFFFFF" }}>Supporting:</strong><br />Relevant threads surfaced per day</div>
                                <div className="md:col-span-2"><strong style={{ color: "#FFFFFF" }}>Guard Rail:</strong><br />No spam or low-value engagement</div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "004",
                title: "Success Metrics",
                type: "table",
                headers: ["Agent", "North Star", "30-Day Target", "Kill Condition"],
                rows: [
                    ["Outreach", "Qualified replies / week", "5+ replies", "Reply rate below 5% for 2 consecutive weeks"],
                    ["Brand", "Posts published without manual writing", "4+ posts / week", "Founder spending 20+ min editing per post"],
                    ["Context", "Time to retrieve any context", "Under 30 sec", "Any wrong-context incident causing client friction"],
                    ["Reddit", "Inbound leads from comments", "2+ leads / month", "Fewer than 1 relevant thread surfaced per day"],
                    ["System", "Total founder hours on ops", "3h → under 30 min", "System requires more maintenance than it saves"]
                ],
                footer: "Kill conditions are first-class decisions. If an agent isn't earning its place continuously, it gets cut — not endlessly iterated on. This forces honest evaluation over sunk-cost thinking."
            },
            {
                id: "005",
                title: "Key Decisions",
                content: (
                    <div className="space-y-6">
                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Decision 1: Where do the agents live?</div>
                            <div className="mb-2"><strong className="text-emerald-400">Chosen:</strong> Slack. Zero adoption friction. The founder already lives here. No context switch to use it.</div>
                            <div><strong className="text-rose-400">Rejected:</strong> Custom web dashboard. More powerful UI, but requires opening a separate tool. Usage drops when it&apos;s not in the critical path.</div>
                        </div>

                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Decision 2: What orchestrates the workflows?</div>
                            <div className="mb-2"><strong className="text-emerald-400">Chosen:</strong> Antigravity and Claude Code. Ships in days not weeks. Agentic setup enables fast iteration.</div>
                            <div><strong className="text-rose-400">Rejected:</strong> Custom Python backend. More control and portability long-term, but 5x longer to build. Wrong priority when the goal is learning what the agents actually need to do first.</div>
                        </div>

                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Decision 3: Which agent ships first?</div>
                            <div className="mb-2"><strong className="text-emerald-400">Chosen:</strong> Outreach Agent. Direct line to revenue. One conversation that closes pays for the entire build.</div>
                            <div><strong className="text-rose-400">Rejected:</strong> All 4 simultaneously. Split focus means nothing ships fast. The Outreach Agent needed to prove the architecture before building on top of it.</div>
                        </div>

                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Decision 4: Should agents act autonomously, or recommend?</div>
                            <div className="mb-2"><strong className="text-emerald-400">Chosen:</strong> Hybrid — agents draft, founder approves in one click. Removes the cognitive load of starting from scratch while protecting quality in client-facing communications.</div>
                            <div><strong className="text-rose-400">Rejected:</strong> Fully autonomous sending. One bad message at scale damages the brand permanently. Full autonomy needs earned trust first. That comes after the system proves it can write well.</div>
                        </div>
                    </div>
                )
            },
            {
                id: "006",
                title: "What Was Cut",
                content: (
                    <div className="space-y-6">
                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Email approval loop with multi-step review</div>
                            <p>A 3-step review for each outreach message defeats the purpose of automation. If the founder is reviewing every word, the agent is just a template engine. Replaced with one-click approve-or-edit that preserves quality control without the overhead.</p>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>CRM integration (HubSpot, Pipedrive)</div>
                            <p>Integration complexity added 3-4 weeks to the build for marginal gain at this stage. A simple Notion database handles the same job. Will revisit when prospect volume exceeds 200/month and manual tracking breaks.</p>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Voice interface for agent commands</div>
                            <p>Explored voice-to-agent commands via Whisper API. Found that async text in Slack is faster and less error-prone for the actual use case. Voice adds friction, not removes it.</p>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Cross-agent shared memory</div>
                            <p>Making agents aware of each other&apos;s output sounds powerful but creates debugging complexity unmanageable for a solo builder. Agents operate independently in v1. Shared memory is a v2 decision once each agent is stable on its own.</p>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Analytics dashboard for agent performance</div>
                            <p>Building dashboards before the system is stable is polishing before shipping. Metrics tracked manually in a Notion table until output is consistent enough to justify building the tracking layer.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "007",
                title: "Status",
                content: (
                    <div className="space-y-4">
                        <div><strong style={{ color: "#FFFFFF" }}>Done:</strong> Architecture finalized. Slack + Antigravity + Claude Code stack selected. Agent-per-channel model defined. Kill conditions written before any code.</div>
                        <div><strong style={{ color: "#10b981" }}>Live:</strong> Outreach Agent operational. Generating personalized messages and routing to Slack for approval. First iteration producing qualified conversations.</div>
                        <div><strong style={{ color: "#f59e0b" }}>In Build:</strong> Brand Agent and Context Agent. Targeting 4+ approved posts per week and sub-30-second context retrieval.</div>
                        <div><strong style={{ color: "#3b82f6" }}>Next:</strong> Reddit Monitor Agent. Sequenced last because it requires the Context Agent&apos;s memory layer to personalize response suggestions properly.</div>

                        <div style={{ marginTop: 24, padding: 16, background: "rgba(99,102,241,0.05)", borderLeft: "4px solid #6366f1", borderRadius: "0 8px 8px 0" }}>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>V2 Hypothesis:</div>
                            <p>If AgencyOS recovers 2+ hours daily with no drop in output quality, the architecture is validated. The v2 question is whether this can be packaged for other solo founders to deploy without technical setup. That&apos;s a separate PRD.</p>
                        </div>

                        <div className="font-mono pt-[24px]" style={{ marginTop: 40, fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center", textTransform: "uppercase" }}>
                            Built by Alankrit Ghosh · 2026 · LeadFlow Lab
                        </div>
                    </div>
                )
            }
        ] as PRDSection[]
    },
    {
        title: "ContentFlow — Product Requirements Document",
        meta: [
            { label: "Author", value: "Alankrit Ghosh" },
            { label: "Built", value: "Early 2026" },
            { label: "Status", value: "Built and functional · Not in active use" },
            { label: "Platform", value: "Web app (Next.js) · Self-hosted" },
            { label: "Type", value: "Internal tool · Built for Signal + LeadFlow Lab content ops" }
        ],
        sections: [
            {
                id: "001",
                title: "Problem",
                content: (
                    <div className="space-y-4">
                        <p>Consistent content is a distribution strategy. Inconsistent content is noise.</p>
                        <p>For a solo founder running two products simultaneously, a macOS app in beta and a B2B services business, content isn&apos;t optional. It&apos;s how Signal builds waitlist momentum and how LeadFlow Lab generates inbound without paid ads. But content for two distinct products, on two platforms, requires two distinct voices, two posting cadences, and a constant supply of ideas that are actually grounded in what the products do.</p>
                        <p>The manual workflow breaks fast. Ideas get jotted in Notes, half-developed, and abandoned. Drafts sit in Google Docs never getting posted. The gap between &quot;I should post more&quot; and actually posting is almost always the same thing: the friction of starting from a blank page.</p>

                        <div style={{ marginTop: 24, marginBottom: 8, fontWeight: 700, color: "#FFFFFF" }}>The specific friction ContentFlow was built to eliminate:</div>
                        <ul className="pl-[20px]" style={{ listStyleType: "none", margin: 0, paddingLeft: 0 }}>
                            {[
                                'Generating ideas that are on-brand and product-relevant, not generic "founder content"',
                                'Moving from a raw idea to a publishable draft without switching between 4 tools',
                                'Knowing when content is scheduled without keeping a separate calendar',
                                'Maintaining platform-specific constraints (Twitter character limits, LinkedIn tone) automatically'
                            ].map((item, i) => (
                                <li key={i} className="mb-2 flex items-start">
                                    <span style={{ color: "#FF3366", marginRight: 12 }}>→</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p style={{ color: "#FFFFFF", fontWeight: 600, marginTop: 24 }}>Core insight: The bottleneck isn&apos;t creativity. It&apos;s the gap between having an idea and having a published post. Every extra step in that gap is a post that doesn&apos;t get written.</p>
                    </div>
                )
            },
            {
                id: "002",
                title: "User",
                content: (
                    <div className="space-y-4">
                        <p><strong style={{ color: "#FFFFFF" }}>Primary user:</strong> Solo founder managing content for two products</p>
                        <p>ContentFlow was built for a specific, narrow use case: one founder, two products (Signal and LeadFlow Lab), two platforms (Twitter/X and LinkedIn), needing to maintain consistent output without a content hire.</p>
                        <p>This narrow scope was the right call. A tool built for &quot;any creator&quot; would&apos;ve been generic. A tool built for this exact situation could make opinionated defaults: pre-loaded content pillars, platform constraints baked in, voice guidelines configured once and applied everywhere.</p>

                        <div style={{ marginTop: 24, marginBottom: 8, fontWeight: 700, color: "#FFFFFF" }}>Jobs To Be Done:</div>
                        <ul className="pl-[20px]" style={{ listStyleType: "none", margin: 0, paddingLeft: 0 }}>
                            {[
                                'Generate a week\'s worth of content ideas in one session, not one at a time',
                                'Take any idea from rough concept to platform-ready draft in under 5 minutes',
                                'Schedule content to Google Calendar without leaving the tool',
                                'Refine drafts with AI assistance when the first version isn\'t right',
                                'See all content (ideas, drafts, scheduled, published) in one place'
                            ].map((item, i) => (
                                <li key={i} className="mb-2 flex items-start">
                                    <span style={{ color: "#FF3366", marginRight: 12 }}>→</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p style={{ marginTop: 24, color: "#FF3366", fontStyle: "italic", fontWeight: 600 }}>Design principle: The tool should feel like a writing partner, not a form to fill out. Ideas go in, polished drafts come out.</p>
                    </div>
                )
            },
            {
                id: "003",
                title: "System Design",
                content: (
                    <div className="space-y-4">
                        <p>Two-step generation pipeline. One dashboard. Calendar-native scheduling.</p>
                        <p>The core product decision was the two-step generation flow: ideas first, then full content. This mirrors how good content actually gets made. You diverge broadly on angles before committing to a specific execution. Skipping straight to a full draft produces generic output. Generating ideas first lets the founder pick the angle that feels right, then develop it fully.</p>

                        <div style={{ marginTop: 24, padding: 16, background: "rgba(255,255,255,0.02)", borderRadius: 8 }}>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 12 }}>The generation pipeline:</div>
                            <div className="font-mono text-[13px]" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
                                Prompt / topic input<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                                Idea generation (5-10 angles)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                                Founder selects one<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                                Full content development<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                                AI refinement loop (optional)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                                Schedule to Google Calendar
                            </div>
                        </div>

                        <p>Model selection is intelligent, not manual. Different tasks get routed to different free models via OpenRouter based on what each model handles well. Idea generation, long-form drafting, and short-form refinement are distinct tasks with distinct optimal models. The founder never chooses a model; the system picks.</p>

                        <div style={{ marginTop: 32, fontWeight: 700, color: "#FFFFFF", fontSize: 20 }}>Core Features</div>

                        <div className="space-y-6 mt-4">
                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                                    <div style={{ fontWeight: 700, color: "#FFFFFF", fontSize: 16 }}>Idea Generation</div>
                                    <div className="font-mono" style={{ fontSize: 10, padding: "2px 6px", background: "rgba(255, 255, 255, 0.1)", color: "#aaa", borderRadius: 4 }}>/api/generate-ideas</div>
                                </div>
                                <p>Takes a topic, product context, and content pillars as input. Returns 5-10 distinct angles, not variations of the same idea, but genuinely different framings. Grounded in Signal and LeadFlow Lab&apos;s actual positioning so ideas are relevant, not generic.</p>
                            </div>

                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                                    <div style={{ fontWeight: 700, color: "#FFFFFF", fontSize: 16 }}>Full Content Development</div>
                                    <div className="font-mono" style={{ fontSize: 10, padding: "2px 6px", background: "rgba(255, 255, 255, 0.1)", color: "#aaa", borderRadius: 4 }}>/api/develop-content</div>
                                </div>
                                <p>Takes a selected idea and expands it into a platform-ready draft. Applies platform constraints automatically: Twitter character limits, LinkedIn&apos;s longer-form structure, appropriate tone for each. No manual reformatting.</p>
                            </div>

                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                                    <div style={{ fontWeight: 700, color: "#FFFFFF", fontSize: 16 }}>AI Refinement</div>
                                    <div className="font-mono" style={{ fontSize: 10, padding: "2px 6px", background: "rgba(255, 255, 255, 0.1)", color: "#aaa", borderRadius: 4 }}>/api/content/[id]/refine</div>
                                </div>
                                <p>Post-generation editing loop. If the draft isn&apos;t right, the founder describes what to change and the model refines it. Preserves the original and shows the delta so the founder can compare and choose.</p>
                            </div>

                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                                    <div style={{ fontWeight: 700, color: "#FFFFFF", fontSize: 16 }}>Google Calendar Scheduling</div>
                                    <div className="font-mono" style={{ fontSize: 10, padding: "2px 6px", background: "rgba(255, 255, 255, 0.1)", color: "#aaa", borderRadius: 4 }}>/api/schedule</div>
                                </div>
                                <p>Schedules approved content directly to Google Calendar. The posting schedule becomes visible in the same calendar the founder already uses. No separate scheduling tool, no copy-pasting publish times.</p>
                            </div>

                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                                    <div style={{ fontWeight: 700, color: "#FFFFFF", fontSize: 16 }}>Content Dashboard</div>
                                    <div className="font-mono" style={{ fontSize: 10, padding: "2px 6px", background: "rgba(255, 255, 255, 0.1)", color: "#aaa", borderRadius: 4 }}>/dashboard</div>
                                </div>
                                <p>Single view of all content across states: ideas, in-draft, scheduled, published. Prevents the common failure mode of drafts sitting in limbo with no clear status.</p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "004",
                title: "Success Metrics",
                type: "table",
                headers: ["Feature", "North Star", "Target", "Kill Condition"],
                rows: [
                    ["Idea Generation", "Ideas founder actually develops", "3+ developed per session", "Founder ignores all generated ideas and writes their own"],
                    ["Content Development", "Time from idea to ready-to-post draft", "Under 5 minutes", "Draft requires more editing than writing from scratch"],
                    ["Refinement Loop", "Rounds of refinement per post", "Under 2 rounds average", "Posts require 4+ rounds before founder approves"],
                    ["Scheduling", "Posts actually scheduled via tool", "80%+ of drafted content", "Founder copies drafts to a separate scheduler"],
                    ["System", "Posts published per week", "4+ across both products", "Posting frequency doesn't improve vs. manual workflow"]
                ]
            },
            {
                id: "005",
                title: "Key Decisions",
                content: (
                    <div className="space-y-6">
                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Decision 1: Two-step generation vs. direct drafting</div>
                            <div className="mb-2"><strong className="text-emerald-400">Chosen:</strong> Ideas first, full content second. Diverge on angles before committing. Output quality is significantly higher when the founder chooses the angle rather than accepting whatever the model produces first.</div>
                            <div><strong className="text-rose-400">Rejected:</strong> Single-step draft generation. Faster, but produces generic content because there&apos;s no forcing function to pick an interesting angle before writing.</div>
                        </div>

                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Decision 2: Free models via OpenRouter vs. GPT-4 / Claude</div>
                            <div className="mb-2"><strong className="text-emerald-400">Chosen:</strong> OpenRouter with free-tier models (Gemma 2, Qwen, Mistral). Zero API cost for an internal tool that may not get used every day. The task, content generation rather than complex reasoning, is well within what free models handle well.</div>
                            <div><strong className="text-rose-400">Rejected:</strong> Premium APIs. For content generation specifically, the quality delta doesn&apos;t justify the cost for a personal internal tool. If ContentFlow were productized for paying users, this decision would be revisited.</div>
                        </div>

                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Decision 3: Google Calendar for scheduling vs. Buffer / Later</div>
                            <div className="mb-2"><strong className="text-emerald-400">Chosen:</strong> Google Calendar integration. The founder already lives in Google Calendar. Scheduling content there means it sits alongside meetings, deadlines, and launches, visible in context rather than siloed in a separate publishing tool.</div>
                            <div><strong className="text-rose-400">Rejected:</strong> Third-party scheduling platforms. Another tool to log into, another subscription, another place to check. The goal was consolidation, not adding surface area.</div>
                        </div>

                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Decision 4: Platform-specific constraints baked in vs. manual formatting</div>
                            <div className="mb-2"><strong className="text-emerald-400">Chosen:</strong> Automatic platform constraints applied at generation time. The model knows it&apos;s writing for Twitter or LinkedIn before it starts. Output is ready to post, not ready to trim.</div>
                            <div><strong className="text-rose-400">Rejected:</strong> Single draft that the founder reformats per platform. Reformatting is exactly the kind of low-value work the tool exists to eliminate.</div>
                        </div>
                    </div>
                )
            },
            {
                id: "006",
                title: "What Was Cut",
                content: (
                    <div className="space-y-6">
                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Analytics and performance tracking</div>
                            <p>Tracking which posts perform well and feeding that back into future generation is the obvious v2 feature. Cut from v1 because it requires a published content history to be meaningful. You can&apos;t optimize distribution data you don&apos;t have yet. Build the creation habit first, optimize based on data second.</p>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Team collaboration features</div>
                            <p>Multi-user access, comment threads, approval workflows: none of this was relevant for a solo-founder internal tool. Adding it would have doubled the complexity for zero benefit to the actual user.</p>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Direct publishing via API (auto-posting)</div>
                            <p>The Twitter and LinkedIn APIs would allow fully autonomous posting. Cut deliberately. Content that goes live without human review is a brand risk. The scheduling step, draft, approve, then post at a scheduled time, preserves a final check without adding friction. Full automation is a trust problem, not a capability problem.</p>
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>Content repurposing (long to short, thread to post)</div>
                            <p>Repurposing a LinkedIn post into a Twitter thread, or a thread into a short-form video script, is genuinely useful. Cut because it&apos;s a separate generation problem requiring its own prompt engineering and quality bar. Scope creep disguised as a feature.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "007",
                title: "Why It Was Shelved (and What It Taught)",
                content: (
                    <div className="space-y-4">
                        <p>ContentFlow works. The generation pipeline produces usable output, the calendar integration functions, and the dashboard gives clear visibility on content state. The tool itself isn&apos;t the problem.</p>
                        <p>It was shelved for a simpler reason: the workflow it was built for changed. As AgencyOS came together and the Brand Agent took over content ideation, ContentFlow&apos;s job was absorbed into a system that operates inside Slack with less friction. Running a separate web app for content when the Brand Agent already drafts inside the founder&apos;s primary work surface made ContentFlow redundant, not broken.</p>

                        <div style={{ marginTop: 24, marginBottom: 8, fontWeight: 700, color: "#FFFFFF" }}>What the build taught:</div>
                        <ul className="pl-[20px]" style={{ listStyleType: "none", margin: 0, paddingLeft: 0 }}>
                            <li className="mb-4 flex items-start">
                                <span style={{ color: "#FF3366", marginRight: 12 }}>→</span>
                                <span>The two-step idea-then-develop pipeline is genuinely the right model for AI content generation. The quality difference between &quot;generate a post about X&quot; and &quot;generate 8 angles on X, pick one, then develop it&quot; is significant and measurable. That insight directly informed how the Brand Agent in AgencyOS was designed.</span>
                            </li>
                            <li className="mb-4 flex items-start">
                                <span style={{ color: "#FF3366", marginRight: 12 }}>→</span>
                                <span>The free-model routing via OpenRouter also validated that content generation doesn&apos;t require expensive models. Gemma 2 and Qwen produce output that&apos;s indistinguishable from GPT-4 for this specific task. Model selection should always be task-matched, not defaulted to the most powerful option.</span>
                            </li>
                        </ul>

                        <div style={{ marginTop: 24, padding: 16, background: "rgba(99,102,241,0.05)", borderLeft: "4px solid #6366f1", borderRadius: "0 8px 8px 0" }}>
                            <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 8 }}>V2 Hypothesis:</div>
                            <p>If this were ever productized: ContentFlow&apos;s real value isn&apos;t the generation, it&apos;s the opinionated defaults. Pre-loaded content pillars, platform constraints, voice guidelines configured once. That setup is the moat. If it were rebuilt as a product, onboarding a founder&apos;s brand voice and product context in the first session would be the core experience, not the generation UI.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "008",
                title: "Tech Stack",
                content: (
                    <div className="space-y-4">
                        <ul className="pl-[20px]" style={{ listStyleType: "none", margin: 0, paddingLeft: 0 }}>
                            {[
                                { label: "Framework", val: "Next.js 14 (App Router)" },
                                { label: "Database", val: "Neon Postgres" },
                                { label: "AI", val: "OpenRouter (Gemma 2, Qwen, Mistral, free tier)" },
                                { label: "Calendar", val: "Google Calendar API" },
                                { label: "Auth", val: "Google OAuth" },
                                { label: "Styling", val: "Tailwind CSS" },
                                { label: "Deployment", val: "Vercel" }
                            ].map((item, i) => (
                                <li key={i} className="mb-2">
                                    <strong style={{ color: "#FFFFFF" }}>{item.label}:</strong> {item.val}
                                </li>
                            ))}
                        </ul>
                        <div className="font-mono pt-[24px]" style={{ marginTop: 40, fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center", textTransform: "uppercase" }}>
                            Built by Alankrit Ghosh · 2026 · LeadFlow Lab
                        </div>
                    </div>
                )
            }
        ] as PRDSection[]
    }
];

export default function PRDs() {
    return (
        <section
            id="prds"
            className="py-[80px] md:py-[120px] px-[16px] md:px-[24px] glow-neutral light-streak"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <ParallaxBg src="/images/blur-amber.png" gradientClass="gradient-gray" />

            <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
                <AnimatedDivider className="mb-[64px]" />
                <SectionLabel number="004" label="PRODUCT REQUIREMENTS" style={{ marginBottom: 20 }} />

                <RevealText
                    as="h2"
                    className="font-display text-[36px] md:text-[56px]"
                    style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 16, letterSpacing: "-0.03em" }}
                >
                    PRDs &amp; Specs
                </RevealText>

                <FadeSlide delay={0.2}>
                    <p className="font-mono text-[12px] md:text-[13px] mb-[40px] md:mb-[64px]" style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        How I think about products before building them.
                    </p>
                </FadeSlide>

                <StaggerContainer className="flex flex-col" style={{ gap: 40 }} staggerDelay={0.15}>
                    {prds.map((prd) => (
                        <motion.div key={prd.title} variants={springCardVariants} style={{ perspective: 800 }}>
                            <TiltCard className="p-[20px] md:p-[48px] card-seep" style={{ background: "rgba(10,10,10,0.8)" }}>
                                <div className="font-display text-[26px] md:text-[40px]" style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: 32, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                                    {prd.title}
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-[16px] mb-[48px] p-[20px] md:p-[24px]" style={{ background: "rgba(255,255,255,0.02)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
                                    {prd.meta.map((m) => (
                                        <div key={m.label}>
                                            <div className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>{m.label}</div>
                                            <div className="text-[14px]" style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>{m.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col" style={{ gap: 48 }}>
                                    {prd.sections.map((section) => (
                                        <div key={section.id} className="prd-section">
                                            <div className="flex items-center" style={{ gap: 16, marginBottom: 20 }}>
                                                <div className="font-mono" style={{ fontSize: 12, fontWeight: 700, color: "#FF3366", letterSpacing: "0.1em" }}>{section.id}</div>
                                                <div style={{ height: 1, flex: 1, background: "rgba(255,255,255,0.1)" }}></div>
                                                <div className="font-mono" style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{section.title}</div>
                                            </div>

                                            {section.type === "table" ? (
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-left border-collapse" style={{ marginTop: 16 }}>
                                                        <thead>
                                                            <tr>
                                                                {section.headers?.map((h, i) => (
                                                                    <th key={i} className="font-mono text-[11px] p-[12px] md:p-[16px]" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {section.rows?.map((row, rIdx) => (
                                                                <tr key={rIdx}>
                                                                    {row.map((cell, cIdx) => (
                                                                        <td key={cIdx} className="text-[14px] md:text-[15px] p-[12px] md:p-[16px]" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", color: cIdx === 0 ? "#FFFFFF" : "rgba(255,255,255,0.6)", fontWeight: cIdx === 0 ? 600 : 400, verticalAlign: "top" }}>
                                                                            {cell}
                                                                        </td>
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                    {section.footer && (
                                                        <div className="text-[13px] mt-[16px] p-[16px]" style={{ color: "rgba(255,255,255,0.5)", fontStyle: "italic", background: "rgba(255,255,255,0.02)", borderRadius: 8 }}>
                                                            {section.footer}
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="text-[15px] md:text-[16px]" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8 }}>
                                                    {section.content}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
