"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Users, BarChart3, Flame } from "lucide-react";
import { BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

// ─── Background slot components ──────────────────────────────────────────────

function ManifestoBackground() {
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
      <div className="absolute inset-0 bg-[#e1e61b]/80 z-0" />
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
      <div className="absolute inset-0 bg-[#6c24d6]/80 z-0" />
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
      <div className="absolute inset-0 bg-white/85 z-0" />
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
    Icon: Flame,
    name: "Our Manifesto",
    description: "Stop playing it safe. Stop blending in. Stop posting for likes instead of revenue. We design high-impact campaigns and scroll-stopping identities that convert.",
    href: "#about",
    cta: "",
    background: <ManifestoBackground />,
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-3 border-4 border-black shadow-[8px_8px_0_0_#000]",
    iconClass: "text-black",
    nameClass: "text-white font-mono text-xl",
    descClass: "text-white/90 font-bold",
    ctaClass: "text-[#e1e61b] hover:text-white bg-black px-4 py-2 border-2 border-[#e1e61b]",
  },
  {
    Icon: MapPin,
    name: "Dubai ↔ Mumbai",
    description: "Rooted in Mumbai, India. Scaling across Dubai and the wider UAE.",
    href: "/#brand-statement",
    cta: "Our story",
    background: <LocationBackground />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 border-4 border-black shadow-[8px_8px_0_0_#000] bg-[#6c24d6]",
    iconClass: "text-black",
    nameClass: "text-black text-xl bg-white px-2 py-1 inline-block border-2 border-black",
    descClass: "text-black font-bold bg-white p-2 border-2 border-black mt-2",
    ctaClass: "text-black hover:text-white hover:bg-black bg-[#e1e61b] border-2 border-black px-4 py-2",
  },
  {
    Icon: Sparkles,
    name: "AI-Powered Creative",
    description: "Build with the latest AI tools to produce faster, sharper, and more effective creative at scale.",
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
    name: "Gen-z led Agency",
    description: "Gen Z led with Global Standard. We don't study culture; we live it. Our team brings native understanding of what works in Dubai and Mumbai right now, not six months ago.",
    href: "#team",
    cta: "Meet the team",
    background: <HeadlineBackground />,
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3 border-4 border-black shadow-[8px_8px_0_0_#000] bg-black",
    iconClass: "text-black",
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
        {cta && (
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
        )}
      </div>
    </motion.div>
  );
}

// ─── Section ────────────────────────────────────────────────────────────────────

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


      <div className="max-w-7xl mx-auto px-8 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div
          style={{ y: yHeader }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative"
        >
          <div className="relative inline-block">
            <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-2 mb-6 bg-white shadow-[4px_4px_0_0_#000] relative">
              <span className="w-3 h-3 bg-[#6c24d6] border border-black" />
              <span className="text-xs font-black uppercase tracking-widest text-black">
                About ReWorks
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-black leading-[1.05] uppercase">
              We don&apos;t do{" "}
              <span className="text-white bg-black px-2 border-4 border-black transform -rotate-1 inline-block">ordinary</span>
              <br />
              We do{" "}
              <span className="relative inline-block bg-[#e1e61b] px-2 border-4 border-black shadow-[6px_6px_0_0_#000] transform rotate-1 mt-2">
                <span className="relative z-10">conversion</span>
              </span>
            </h2>
            
            {/* Static Chrome Cherry Sticker - Centered to the right of the heading */}
            <div className="absolute right-[16px] md:right-[-12px] top-[20%] -translate-y-1/2 w-[150px] h-[150px] md:w-[258px] md:h-[258px] pointer-events-none select-none z-20 -rotate-[22deg]">
              <Image 
                src="/y2k/double-chrome-cherries.png" 
                alt="Chrome Cherry Sticker"
                width={258}
                height={258}
                className="object-contain filter drop-shadow-[4px_4px_0_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>

          <p className="text-base md:text-xl text-black font-bold leading-relaxed max-w-sm md:max-w-sm border-l-4 border-black pl-4">
            A Gen Z-led digital marketing agency in Mumbai & Dubai, partnering with founders and CMOs across India and the UAE to rework scattered ideas into bold, conversion-ready brands, focusing on FMCG, entertainment, and hospitality.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <BentoGrid className="lg:grid-rows-2 lg:auto-rows-[280px] gap-6 sm:gap-8 max-w-none">
            {features.map((feature) => (
              <BrandBentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </motion.div>

        {/* Why Brands Choose ReWorks Section (Change 7) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 bg-black border-4 border-black text-white p-8 md:p-12 shadow-[8px_8px_0_0_#000] relative overflow-hidden"
        >
          {/* Subtle grid backdrop */}
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
              backgroundImage: "linear-gradient(#fff 2px, transparent 2px), linear-gradient(90deg, #fff 2px, transparent 2px)", 
              backgroundSize: "20px 20px" 
            }} 
          />
          <div className="relative z-10 w-full">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-center md:text-left mb-8 text-[#e1e61b]">
              Why Brands in Mumbai &amp; Dubai Choose ReWorks
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* Point 1 */}
              <div className="group border-2 border-white/10 p-6 bg-white/5 transition-colors hover:border-[#e1e61b]/30">
                <span className="text-xs font-black uppercase tracking-widest text-[#e1e61b] bg-[#e1e61b]/10 border border-[#e1e61b]/20 px-3 py-1 inline-block mb-4">
                  01. Culture
                </span>
                <h4 className="text-lg font-black uppercase tracking-tight text-white mb-2">
                  Gen Z Instinct
                </h4>
                <p className="text-white/60 text-sm font-semibold leading-relaxed">
                  ➔ We don&apos;t study culture, we live it. Scroll-speed creative built for fast-moving platforms.
                </p>
              </div>

              {/* Point 2 */}
              <div className="group border-2 border-white/10 p-6 bg-white/5 transition-colors hover:border-[#6c24d6]/30">
                <span className="text-xs font-black uppercase tracking-widest text-[#6c24d6] bg-[#6c24d6]/10 border border-[#6c24d6]/20 px-3 py-1 inline-block mb-4">
                  02. Automation
                </span>
                <h4 className="text-lg font-black uppercase tracking-tight text-white mb-2">
                  AI-Powered Systems
                </h4>
                <p className="text-white/60 text-sm font-semibold leading-relaxed">
                  ➔ Faster builds, sharper briefs, better output. Combining intelligence with pristine visual craftsmanship.
                </p>
              </div>

              {/* Point 3 */}
              <div className="group border-2 border-white/10 p-6 bg-white/5 transition-colors hover:border-white/20">
                <span className="text-xs font-black uppercase tracking-widest text-white bg-white/10 border border-white/20 px-3 py-1 inline-block mb-4">
                  03. Presence
                </span>
                <h4 className="text-lg font-black uppercase tracking-tight text-white mb-2">
                  Mumbai to Dubai
                </h4>
                <p className="text-white/60 text-sm font-semibold leading-relaxed">
                  ➔ One agency across two of the world&apos;s fastest-growing brand markets. Built to move seamlessly across India &amp; the UAE.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer CTAs - Hidden for now, needed later */}
        {false && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-16 flex flex-wrap items-center gap-6"
          >
            {/* Yellow primary button */}
            <Link href="/#brand-statement" className="group flex items-center gap-3 bg-[#e1e61b] px-8 py-4 text-sm font-black uppercase tracking-widest text-black border-4 border-black shadow-[6px_6px_0_0_#000] transition-all duration-200 hover:bg-black hover:text-[#e1e61b] hover:shadow-[8px_8px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_0_#000]">
              Our Story
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* White secondary button */}
            <Link href="/case-study" className="group flex items-center gap-3 bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-black border-4 border-black shadow-[6px_6px_0_0_#000] transition-all duration-200 hover:bg-[#6c24d6] hover:text-white hover:shadow-[8px_8px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_0_#000]">
              Read Case Studies
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        )}

      </div>
    </section>
  );
}
