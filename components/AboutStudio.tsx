"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Users, BarChart3, Code2 } from "lucide-react";
import { BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

// ─── Background slot components ──────────────────────────────────────────────

function CodeWindowBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-none bg-black">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 2px, transparent 2px), linear-gradient(90deg, #ffffff 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}

function StatsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-none bg-[#e1e61b]">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #000 2px, transparent 2px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}

function LocationBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-none bg-[#6c24d6]">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #ffffff 4px, transparent 4px), linear-gradient(-45deg, #ffffff 4px, transparent 4px)",
          backgroundSize: "12px 12px",
        }}
      />
    </div>
  );
}

function AiBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-none bg-white">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 bg-white/80" />
    </div>
  );
}

function HeadlineBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-none bg-black">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #6c24d6 2px, transparent 2px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

// ─── Card definitions ─────────────────────────────────────────────────────────

const features = [
  {
    Icon: Code2,
    name: "we_believe.md",
    description: "Clarity over clutter. Strategy over guesswork. Presence over decoration. Structure before scale.",
    href: "#about",
    cta: "Our philosophy",
    background: <CodeWindowBackground />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3 border-4 border-black shadow-[8px_8px_0_0_#000]",
    iconClass: "text-[#e1e61b]",
    nameClass: "text-white font-mono text-xl",
    descClass: "text-white/90 font-bold",
    ctaClass: "text-[#e1e61b] hover:text-white bg-black px-4 py-2 border-2 border-[#e1e61b]",
  },
  {
    Icon: BarChart3,
    name: "247+ Projects Shipped",
    description: "Across 12 countries, for founders and CMOs who are done waiting for results.",
    href: "#case-study",
    cta: "See case studies",
    background: <StatsBackground />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 border-4 border-black shadow-[8px_8px_0_0_#000] bg-[#e1e61b]",
    iconClass: "text-black",
    nameClass: "text-black text-xl bg-[#e1e61b] px-2 py-1 inline-block border-2 border-black",
    descClass: "text-black font-bold bg-[#e1e61b] p-2 border-2 border-black mt-2",
    ctaClass: "text-black hover:text-white hover:bg-black bg-white border-2 border-black px-4 py-2",
  },
  {
    Icon: MapPin,
    name: "Dubai ↔ Mumbai",
    description: "Rooted in Mumbai. Scaling across the UAE and beyond.",
    href: "#about",
    cta: "Our story",
    background: <LocationBackground />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 border-4 border-black shadow-[8px_8px_0_0_#000] bg-[#6c24d6]",
    iconClass: "text-white",
    nameClass: "text-black text-xl bg-white px-2 py-1 inline-block border-2 border-black",
    descClass: "text-black font-bold bg-white p-2 border-2 border-black mt-2",
    ctaClass: "text-black hover:text-white hover:bg-black bg-[#e1e61b] border-2 border-black px-4 py-2",
  },
  {
    Icon: Sparkles,
    name: "AI-Powered Creative",
    description: "We build with the latest AI tools to produce faster, sharper, and more effective creative at scale.",
    href: "#services",
    cta: "Our services",
    background: <AiBackground />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 border-4 border-black shadow-[8px_8px_0_0_#000] bg-white",
    iconClass: "text-black",
    nameClass: "text-black text-xl font-black",
    descClass: "text-black font-bold",
    ctaClass: "text-white bg-black border-2 border-black hover:bg-white hover:text-black px-4 py-2",
  },
  {
    Icon: Users,
    name: "Gen Z-Led Studio",
    description: "Founded in 2019. 38 humans on board. We think fast, move faster, and never stop shipping.",
    href: "#team",
    cta: "Meet the team",
    background: <HeadlineBackground />,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 border-4 border-black shadow-[8px_8px_0_0_#000] bg-black",
    iconClass: "text-white",
    nameClass: "text-black text-xl bg-[#e1e61b] px-2 py-1 inline-block border-2 border-black",
    descClass: "text-white font-bold",
    ctaClass: "text-black bg-white hover:bg-[#e1e61b] border-2 border-black px-4 py-2",
  },
];

// ─── Custom card – scale on hover, no text clipping ──────────────────────────

function BrandBentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  iconClass,
  nameClass,
  descClass,
  ctaClass,
}: (typeof features)[0]) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "group relative col-span-3 flex flex-col overflow-hidden rounded-none cursor-pointer bg-white",
        className
      )}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0">{background}</div>

      {/* Content — always visible, no translate-y tricks that cause clipping */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 gap-4">
        {/* Top: icon + name + description */}
        <div className="flex flex-col gap-3 items-start">
          <div className="p-2 border-2 border-black bg-white rounded-none shadow-[2px_2px_0_0_#000]">
            <Icon
              className={cn(
                "h-6 w-6",
                iconClass
              )}
            />
          </div>
          <h3 className={cn("font-black tracking-tight leading-tight uppercase", nameClass)}>
            {name}
          </h3>
          <p className={cn("text-sm leading-relaxed", descClass)}>{description}</p>
        </div>

        {/* Bottom: CTA always visible */}
        <a
          href={href}
          className={cn(
            "flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors duration-200 w-fit",
            ctaClass
          )}
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function AboutStudio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yHeader = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 sm:py-24 md:py-32 overflow-hidden border-b-4 border-black bg-[#f4f4f0]"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E")
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          style={{ y: yHeader }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative"
        >
          <div>
            <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 mb-6 bg-white shadow-[4px_4px_0_0_#000]">
              <span className="w-3 h-3 bg-[#6c24d6] border border-black" />
              <span className="text-xs font-black uppercase tracking-widest text-black">
                About Studio
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-black leading-[1.05] uppercase">
              We don&apos;t do{" "}
              <span className="text-white bg-black px-2 border-4 border-black transform -rotate-1 inline-block">ordinary.</span>
              <br />
              We do{" "}
              <span className="relative inline-block bg-[#e1e61b] px-2 border-4 border-black shadow-[6px_6px_0_0_#000] transform rotate-1 mt-2">
                <span className="relative z-10">conversion.</span>
              </span>
            </h2>
          </div>

          <p className="text-base md:text-xl text-black font-bold leading-relaxed max-w-sm md:max-w-sm border-l-4 border-black pl-4">
            A Gen Z-led creative studio partnering with founders and CMOs to rework scattered ideas into bold, conversion-ready brands.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <BentoGrid className="lg:grid-rows-2 lg:auto-rows-[300px] gap-6 sm:gap-8 max-w-none">
            {features.map((feature) => (
              <BrandBentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </motion.div>

        {/* Footer CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-16 flex flex-wrap items-center gap-6"
        >
          {/* Yellow primary button */}
          <button className="group flex items-center gap-3 bg-[#e1e61b] px-8 py-4 text-sm font-black uppercase tracking-widest text-black border-4 border-black shadow-[6px_6px_0_0_#000] transition-all duration-200 hover:bg-black hover:text-[#e1e61b] hover:shadow-[8px_8px_0_0_#e1e61b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_0_#e1e61b]">
            Our Story
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          {/* White secondary button */}
          <button className="group flex items-center gap-3 bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-black border-4 border-black shadow-[6px_6px_0_0_#000] transition-all duration-200 hover:bg-[#6c24d6] hover:text-white hover:shadow-[8px_8px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_0_#000]">
            Read Case Studies
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
