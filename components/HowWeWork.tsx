"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Step data ────────────────────────────────────────────────────────────────

const steps = [
  {
    step: "01",
    title: "Audit",
    description:
      "Tear down what's not working. We find the gap between how you're showing up and how you should be. Fast, sharp, and without the corporate hand-holding.",
    cta: "Start your audit",
    color: "#e1e61b",
    textColor: "#000000",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop&q=80",
  },
  {
    step: "02",
    title: "Rework",
    description:
      "Reshape the strategy, the story, the system. Clarity over clutter, every time. We don't just tweak. We rebuild the narrative from the ground up.",
    cta: "See case studies",
    color: "#ff3366",
    textColor: "#000000",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Design, write, shoot, ship. Fast cycles, AI-powered where it helps, never where it shouldn't. Real deliverables. Real velocity.",
    cta: "View our work",
    color: "#00E5FF",
    textColor: "#000000",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Go live, measure, iterate. The scoreboard is the brief from here on out. We don't disappear after launch. We scale what's working.",
    cta: "Get started",
    color: "#000000",
    textColor: "#ffffff",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  },
];

// ─── Individual Card Component ────────────────────────────────────────────────

interface CardComponentProps {
  i: number;
  s: typeof steps[0];
  scrollYProgress: any;
}

function CardComponent({ i, s, scrollYProgress }: CardComponentProps) {
  // 1. yPercent (slide-up animation based on progress intervals)
  let yPercent;
  if (i === 0) {
    yPercent = "0%";
  } else if (i === 1) {
    yPercent = useTransform(scrollYProgress, [0, 0.33, 1], ["110%", "0%", "0%"]);
  } else if (i === 2) {
    yPercent = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ["110%", "110%", "0%", "0%"]);
  } else {
    yPercent = useTransform(scrollYProgress, [0, 0.66, 1], ["110%", "110%", "0%"]);
  }

  // 2. scale (scale-down effect as subsequent cards stack)
  const targetScale = 1 - (4 - 1 - i) * 0.05;
  let scale;
  if (i === 3) {
    scale = 1;
  } else if (i === 2) {
    scale = useTransform(scrollYProgress, [0, 0.66, 0.87, 1], [1, 1, 1, targetScale]);
  } else if (i === 1) {
    scale = useTransform(scrollYProgress, [0, 0.33, 0.53, 0.66, 0.87, 1], [1, 1, 1, 0.95, 0.95, targetScale]);
  } else {
    scale = useTransform(scrollYProgress, [0, 0.20, 0.33, 0.53, 0.66, 0.87, 1], [1, 1, 0.95, 0.95, 0.90, 0.90, targetScale]);
  }

  // 3. yOffset (pixel translate upward offset as subsequent cards stack)
  let yOffset;
  if (i === 3) {
    yOffset = 0;
  } else if (i === 2) {
    yOffset = useTransform(scrollYProgress, [0, 0.66, 0.87, 1], [0, 0, 0, -20]);
  } else if (i === 1) {
    yOffset = useTransform(scrollYProgress, [0, 0.33, 0.53, 0.66, 0.87, 1], [0, 0, 0, -20, -20, -40]);
  } else {
    yOffset = useTransform(scrollYProgress, [0, 0.20, 0.33, 0.53, 0.66, 0.87, 1], [0, 0, -20, -20, -40, -40, -60]);
  }

  // 4. overlayOpacity (dim overlay opacity as cards go to the back - disabled to keep colors vibrant)
  const overlayOpacity = 0;

  return (
    <motion.div
      style={{ y: yPercent, zIndex: (i + 1) * 10 }}
      className="absolute inset-0 w-full h-full"
    >
      <motion.div
        style={{
          scale,
          y: yOffset,
          backgroundColor: s.color,
        }}
        className="relative w-full h-full border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row overflow-hidden origin-top"
      >
        {/* Overlay layer to dim cards as they stack back */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-black pointer-events-none z-30"
        />

        {/* Left side: Text Details */}
        <div className="relative z-20 flex flex-col justify-between p-6 sm:p-8 md:p-10 w-full md:w-[55%] h-[60%] md:h-full">
          <div>
            <div
              className="inline-flex items-center gap-2 border-2 border-current px-3 py-1 mb-4 md:mb-6 text-xs font-black uppercase tracking-widest"
              style={{ color: s.textColor }}
            >
              <span
                className="w-2 h-2"
                style={{ backgroundColor: s.textColor }}
              />
              STEP {s.step}
            </div>

            <h3
              className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-none mb-3 md:mb-4 uppercase"
              style={{ color: s.textColor }}
            >
              {s.title}
            </h3>

            <p
              className="text-xs sm:text-sm md:text-base font-bold leading-snug max-w-sm"
              style={{ color: s.textColor }}
            >
              {s.description}
            </p>
          </div>

          {/* CTA Button */}
          <button
            className="group flex items-center justify-between gap-4 w-fit px-6 py-3 border-4 border-black text-xs sm:text-sm font-black uppercase tracking-widest hover:-translate-y-1 hover:translate-x-1 transition-transform cursor-pointer"
            style={{
              backgroundColor: s.textColor,
              color: s.color,
              boxShadow: `-6px 6px 0px 0px ${
                s.color === "#000000" ? "#e1e61b" : "#000"
              }`,
            }}
          >
            {s.cta}
            <ArrowRight className="w-4 h-4 sm:w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>

        {/* Right side: Image content */}
        <div className="relative w-full md:w-[45%] h-[40%] md:h-full border-t-4 md:border-t-0 md:border-l-4 border-black overflow-hidden bg-black">
          <div className="absolute inset-0">
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Section Component ──────────────────────────────────────────────────

export function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "300vh" }}>
      {/* Sticky Frame rendering original layout */}
      <div className="w-full h-screen bg-white sticky top-0 flex flex-col justify-between overflow-hidden border-y-4 border-black">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Section header */}
        <div className="relative z-20 w-full pt-12 md:pt-16 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 border-4 border-black px-4 py-1.5 mb-4 bg-black text-white shadow-[4px_4px_0px_0px_rgba(225,230,27,1)]">
              <span className="w-2 h-2 bg-[#e1e61b]" />
              <span className="text-xs font-black uppercase tracking-widest">
                How We Work
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9]">
              Four steps
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px black" }}
              >
                Zero fluff
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm md:text-base text-black font-bold uppercase leading-snug lg:pb-2 border-l-4 border-black pl-4">
            No hand-holding. No ten-week discovery phases. We move at the speed
            your brand actually needs.
          </p>
        </div>

        {/* Cards Deck */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex-grow flex items-center justify-center px-4 py-6 md:py-10">
          <div className="relative w-full h-[520px] sm:h-[485px] md:h-[440px]">
            {steps.map((s, i) => (
              <CardComponent
                key={s.step}
                i={i}
                s={s}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Spacing alignment */}
        <div className="h-6 md:h-10 w-full z-10" />
      </div>
    </div>
  );
}
