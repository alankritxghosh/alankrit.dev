"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useInView,
} from "framer-motion";

// ─── PARALLAX BLUR BACKGROUND ───
// Wraps a blur-bg image and moves it slower than scroll
export function ParallaxBg({
  src,
  gradientClass,
}: {
  src: string;
  gradientClass: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const smoothY = useSpring(y, { stiffness: 40, damping: 30 });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.05, 1.1]);

  return (
    <div ref={ref} className={`blur-bg ${gradientClass}`}>
      <motion.img
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{
          y: smoothY,
          scale,
          width: "100%",
          height: "130%",
          objectFit: "cover",
          opacity: 0.22,
          position: "absolute",
          top: "-15%",
        }}
      />
    </div>
  );
}

// ─── REVEAL TEXT ───
// Heading that reveals via clip-path mask slide-up
export function RevealText({
  children,
  className,
  style,
  as = "h2",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "div" | "span";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Tag = as === "h1" ? motion.h1 : as === "h2" ? motion.h2 : as === "h3" ? motion.h3 : as === "span" ? motion.span : motion.div;

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <Tag
        className={className}
        style={style}
        initial={{ y: "110%", opacity: 0 }}
        animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </Tag>
    </div>
  );
}

// ─── FLICKER LABEL ───
// Editorial label that flickers in like old CRT
export function FlickerLabel({
  children,
  className,
  style,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.6, 0, 0.8, 0.3, 1, 0.7, 1],
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "linear",
        times: [0, 0.1, 0.15, 0.25, 0.35, 0.5, 0.65, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── ANIMATED DIVIDER ───
// Section divider that draws from center outward
export function AnimatedDivider({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <motion.div
        className="section-divider"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "center" }}
      />
    </div>
  );
}

// ─── COUNT UP ───
// Animated number that counts from 0 to target
export function CountUp({
  target,
  suffix = "",
  className,
  style,
  duration = 2,
}: {
  target: number;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className={className} style={style}>
      {count}{suffix}
    </div>
  );
}

// ─── TILT CARD ───
// Card that tilts toward cursor on hover
export function TiltCard({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * 8);
    rotateX.set(-y * 8);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...style,
        perspective: 800,
        rotateX: smoothX,
        rotateY: smoothY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}

// ─── STAGGER CONTAINER ───
// Wraps children with staggered spring entrance on scroll
export function StaggerContainer({
  children,
  className,
  style,
  staggerDelay = 0.08,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: staggerDelay, delayChildren: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

// Variants for children inside StaggerContainer
export const springCardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    rotateX: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
  },
};

// ─── FADE SLIDE ───
// Simple fade + slide for body text, with configurable direction
export function FadeSlide({
  children,
  className,
  style,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const initial = direction === "up" ? { y: 30 } : direction === "left" ? { x: -30 } : { x: 30 };

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── SECTION NUMBER TICKER ───
// The "003" part of editorial labels counts up
export function SectionLabel({
  number,
  label,
  style,
}: {
  number: string;
  label: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const num = parseInt(number, 10);
  const [displayNum, setDisplayNum] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / 600, 1);
      setDisplayNum(Math.round(progress * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, num]);

  return (
    <motion.div
      ref={ref}
      className="editorial-label"
      style={style}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {String(displayNum).padStart(3, "0")} — {label}
    </motion.div>
  );
}
