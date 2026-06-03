"use client";

import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ReactLenis } from 'lenis/react';

// ─── Step data ────────────────────────────────────────────────────────────────

const steps = [
  {
    step: "01",
    title: "Audit",
    description:
      "Tear down what's not working. We find the gap between how you're showing up and how you should be — fast, sharp, and without the corporate hand-holding.",
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
      "Reshape the strategy, the story, the system. Clarity over clutter, every time. We don't just tweak — we rebuild the narrative from the ground up.",
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
      "Go live, measure, iterate. The scoreboard is the brief from here on out. We don't disappear after launch — we scale what's working.",
    cta: "Get started",
    color: "#000000",
    textColor: "#ffffff",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  },
];

// ─── Card Component ───────────────────────────────────────────────────────────

interface CardProps {
  i: number;
  step: string;
  title: string;
  description: string;
  cta: string;
  color: string;
  textColor: string;
  image: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function Card({
  i,
  step,
  title,
  description,
  cta,
  color,
  textColor,
  image,
  progress,
  range,
  targetScale,
}: CardProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.4, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative flex flex-col md:flex-row top-[-10%] w-full max-w-5xl h-[560px] md:h-[480px] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] origin-top overflow-hidden"
      >
        {/* ── Left: Text content ─────────────────────────────────────── */}
        <div
          className="relative z-2 flex flex-col justify-between p-6 sm:p-8 md:p-12 w-full md:w-[55%] h-[60%] md:h-full"
        >
          {/* Step + Title */}
          <div>
            <div
              className="inline-flex items-center gap-2 border-2 border-current px-3 py-1 mb-6 md:mb-8 text-xs font-black uppercase tracking-widest"
              style={{ color: textColor }}
            >
              <span
                className="w-2 h-2"
                style={{ backgroundColor: textColor }}
              />
              STEP {step}
            </div>

            <h3
              className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none mb-4 md:mb-6 uppercase"
              style={{ color: textColor }}
            >
              {title}
            </h3>

            <p
              className="text-sm md:text-base font-bold leading-snug max-w-sm"
              style={{ color: textColor }}
            >
              {description}
            </p>
          </div>

          {/* CTA */}
          <button
            className="group flex items-center justify-between gap-4 w-fit px-6 py-3 border-4 border-black text-sm font-black uppercase tracking-widest hover:-translate-y-1 hover:translate-x-1 transition-transform"
            style={{ 
              backgroundColor: textColor,
              color: color,
              boxShadow: `-6px 6px 0px 0px ${color === '#000000' ? '#e1e61b' : '#000'}`
            }}
          >
            {cta}
            <ArrowRight
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
            />
          </button>
        </div>

        {/* ── Right: Image ────────────────────────────────────────────── */}
        <div className="relative w-full md:w-[45%] h-[40%] md:h-full border-t-4 md:border-t-0 md:border-l-4 border-black overflow-hidden bg-black">
          <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function HowWeWork() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <div ref={container} className="relative bg-white border-y-4 border-black overflow-hidden">
        {/* Background grid pattern for brutalist feel */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none z-0" 
          style={{ 
            backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", 
            backgroundSize: "40px 40px" 
          }} 
        />
        
        {/* ── Section header ──────────────────────────────────────── */}
        <section className="relative z-20 pt-20 sm:pt-32 pb-12 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 border-4 border-black px-4 py-1.5 mb-6 bg-black text-white shadow-[4px_4px_0px_0px_rgba(225,230,27,1)]">
              <span className="w-2 h-2 bg-[#e1e61b]" />
              <span className="text-xs font-black uppercase tracking-widest">How We Work</span>
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-black uppercase leading-[0.9]">
              Four steps.
              <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>Zero fluff.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base text-black font-bold uppercase leading-snug lg:pb-3 border-l-4 border-black pl-4">
            No hand-holding. No ten-week discovery phases. We move at the speed your brand actually needs.
          </p>
        </section>

        {/* ── Stacking cards ─────────────────────────────────────────────── */}
        <section className="w-full pb-32">
          {steps.map((s, i) => {
            const targetScale = 1 - (steps.length - i) * 0.05;
            return (
              <Card
                key={`step_${i}`}
                i={i}
                step={s.step}
                title={s.title}
                description={s.description}
                cta={s.cta}
                color={s.color}
                textColor={s.textColor}
                image={s.image}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </div>
    </ReactLenis>
  );
}
