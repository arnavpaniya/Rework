"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Palette, Paintbrush, Video, Users, Code, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ─── Service Data ────────────────────────────────────────────────────────────

type Service = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  platforms: string;
  description: string;
  included: string[];
  icon: typeof Palette;
  accentColor: string;
  bgColor: string;
  textColor: string;
  shadowColor: string;
  image: string;
};

const services: Service[] = [
  {
    id: "branding-design",
    number: "01",
    title: "Branding & Design",
    subtitle: "From scattered visuals to a system that scales",
    platforms: "Strategy-led · Culture-aware · Conversion-ready",
    description:
      "We build brands that earn attention before they say a word. From the first logo mark to a complete identity system, every visual decision is made with strategy, not decoration. Our branding agency works with businesses in Dubai that are ready to look as sharp as they operate.",
    included: [
      "Brand Identity, logo design & visual language systems",
      "Brand guidelines, colour palettes & typography",
      "Creative direction & campaign visual strategy",
    ],
    icon: Palette,
    accentColor: "#6c24d6",
    bgColor: "bg-white",
    textColor: "text-black",
    shadowColor: "#6c24d6",
    image: "/images/service-branding.png",
  },
  {
    id: "creatives-content",
    number: "02",
    title: "Creatives & Content Design",
    subtitle: "Visuals that stop the scroll. Every time",
    platforms: "Designed for the right audience",
    description:
      "Content that looks the part and earns the click. We design campaign visuals, social creatives, digital ads, and pitch decks for brands that refuse to blend in. As a creative agency having served in both Mumbai and Dubai, we know what stops the scroll in both markets, and we build it at the pace brands actually need.",
    included: [
      "Social media creatives & campaign visual design",
      "Digital ads & pitch decks",
      "Presentations & brand documents",
    ],
    icon: Paintbrush,
    accentColor: "#e1e61b",
    bgColor: "bg-black",
    textColor: "text-white",
    shadowColor: "#e1e61b",
    image: "/images/service-creatives.png",
  },
  {
    id: "video-animation-motion",
    number: "03",
    title: "Video, Animation & Motion",
    subtitle: "Brands that move get remembered",
    platforms: "TikTok · Instagram · YouTube",
    description:
      "Content that looks the part and earns the click. We design campaign visuals, social creatives, digital ads, and pitch decks for brands that refuse to blend in. As a creative agency having served in both Mumbai and Dubai, we know what stops the scroll in both markets, and we build it at the pace brands actually need.",
    included: [
      "Brand films, social reels & short-form video content",
      "Explainer videos & social media reels",
      "2D/3D animation & motion graphics",
    ],
    icon: Video,
    accentColor: "#ff3366",
    bgColor: "bg-white",
    textColor: "text-black",
    shadowColor: "#ff3366",
    image: "/images/service-video.png",
  },
  {
    id: "social-media-marketing",
    number: "04",
    title: "Social Media Marketing",
    subtitle: "Grow the right audience, not just a big one",
    platforms: "Meta · TikTok · Instagram · LinkedIn",
    description:
      "Social media isn't a channel. It's where your brand lives. We manage end-to-end social media marketing for brands in Dubai, from strategy and content calendars to community management and paid campaigns.",
    included: [
      "Social strategy, content calendars & scheduling",
      "Community management & audience engagement",
      "Paid social campaigns — Meta, TikTok, LinkedIn",
    ],
    icon: Users,
    accentColor: "#6c24d6",
    bgColor: "bg-black",
    textColor: "text-white",
    shadowColor: "#6c24d6",
    image: "/images/service-social.png",
  },
  {
    id: "digital-development",
    number: "05",
    title: "Digital Development",
    subtitle: "Websites that look right and convert right",
    platforms: "Fast · Sharp · SEO-ready · Mobile-first",
    description:
      "Your website is your brand's first impression and its best salesperson. We build websites, landing pages, UX/UI, and digital campaign assets for brands in Dubai. Designed to load fast, look sharp, and turn visitors into leads. No bloated builds. Just digital that works.",
    included: [
      "Website design & development",
      "Landing pages, UX/UI & digital campaign builds",
      "Mobile-first, SEO-ready & performance-optimised",
    ],
    icon: Code,
    accentColor: "#e1e61b",
    bgColor: "bg-white",
    textColor: "text-black",
    shadowColor: "#e1e61b",
    image: "/images/service-digital.png",
  },
];

// ─── Service Card ────────────────────────────────────────────────────────────

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isLight = service.bgColor === "bg-white";

  return (
    <motion.div
      ref={cardRef}
      id={service.id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative w-full border-4 border-black overflow-hidden group scroll-mt-24",
        service.bgColor
      )}
      style={{
        boxShadow: `8px 8px 0px 0px ${service.shadowColor}`,
      }}
    >
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: isLight
            ? "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)"
            : "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: isLight ? 0.03 : 0.05,
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row">
        {/* Left: Main Content */}
        <div className="flex-1 p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex-1 flex flex-col gap-6 sm:gap-8">
            {/* Number + Title Row */}
            <div className="flex flex-col gap-4">
              {/* Service number badge */}
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "inline-flex items-center gap-2 border-2 px-3 py-1 text-xs font-black uppercase tracking-widest w-fit",
                    isLight
                      ? "border-black text-black bg-white"
                      : "border-white text-white bg-black"
                  )}
                  style={{
                    boxShadow: `3px 3px 0px 0px ${service.accentColor}`,
                  }}
                >
                  <span
                    className="w-2 h-2"
                    style={{ backgroundColor: service.accentColor }}
                  />
                  SERVICE {service.number}
                </div>
              </div>

              {/* Title */}
              <h2
                className={cn(
                  "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95]",
                  service.textColor
                )}
              >
                {service.title}
              </h2>

              {/* Subtitle + Platforms */}
              <div className="flex flex-col gap-2">
                <p
                  className={cn(
                    "text-base sm:text-lg md:text-xl font-black uppercase tracking-tight leading-tight",
                    isLight ? "text-black" : "text-white"
                  )}
                >
                  {service.subtitle}
                </p>
                <p
                  className="text-xs sm:text-sm font-bold uppercase tracking-widest"
                  style={{ color: service.accentColor }}
                >
                  {service.platforms}
                </p>
              </div>
            </div>

            {/* Description */}
            <p
              className={cn(
                "text-sm sm:text-base font-semibold leading-relaxed max-w-2xl",
                isLight ? "text-black/70" : "text-white/70"
              )}
            >
              {service.description}
            </p>

            {/* Accent divider */}
            <div
              className="w-16 h-1"
              style={{ backgroundColor: service.accentColor }}
            />
          </div>

          {/* Service Illustration */}
          <div 
            className="w-full md:w-[220px] lg:w-[260px] aspect-square relative border-4 border-black flex-shrink-0 overflow-hidden bg-white"
            style={{ boxShadow: `5px 5px 0px 0px ${service.accentColor}` }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 220px, 260px"
            />
          </div>
        </div>

        {/* Right: What's Included Panel */}
        <div
          className={cn(
            "lg:w-[380px] xl:w-[420px] border-t-4 lg:border-t-0 lg:border-l-4 border-black p-8 sm:p-10 md:p-12 flex flex-col gap-6 justify-center",
            isLight ? "bg-[#f5f5f0]" : "bg-white/[0.05]"
          )}
        >
          {/* Section title */}
          <div
            className={cn(
              "inline-flex items-center gap-2 border-2 px-3 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-widest w-fit",
              isLight
                ? "border-black text-black bg-white shadow-[2px_2px_0_0_#000]"
                : "border-white text-white bg-black shadow-[2px_2px_0_0_#fff]"
            )}
          >
            <service.icon className="w-3.5 h-3.5" strokeWidth={3} />
            What&apos;s Included
          </div>

          {/* Items */}
          <ul className="flex flex-col gap-4">
            {service.included.map((item, i) => (
              <li key={i} className="flex items-start gap-3 group/item">
                <span
                  className="mt-1.5 w-2.5 h-2.5 flex-shrink-0 border-2 transition-colors duration-200"
                  style={{
                    borderColor: isLight ? "#000" : "#fff",
                    backgroundColor: "transparent",
                  }}
                />
                <span
                  className={cn(
                    "text-sm font-bold leading-relaxed transition-colors duration-200",
                    isLight
                      ? "text-black/80 group-hover/item:text-black"
                      : "text-white/80 group-hover/item:text-white"
                  )}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Arrow link */}
          <Link
            href="/#contact"
            className={cn(
              "group/cta flex items-center gap-2 text-xs font-black uppercase tracking-widest mt-2 w-fit transition-colors duration-200",
              isLight ? "text-black hover:text-[#6c24d6]" : "text-white hover:text-[#e1e61b]"
            )}
          >
            <span className="w-0 h-0.5 transition-all duration-300 group-hover/cta:w-4 sm:group-hover/cta:w-6" style={{ backgroundColor: service.accentColor }} />
            Get Started
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Page Content Component ─────────────────────────────────────────────

export function ServicesPageContent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yHeader = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div ref={sectionRef} className="relative flex flex-col w-full bg-white min-h-screen">
      {/* ─── Hero / Header Section ─── */}
      <section className="relative w-full pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 overflow-hidden border-b-4 border-black bg-white">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <motion.div
            style={{ y: yHeader }}
            className="flex flex-col gap-8 sm:gap-10"
          >
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 border-4 border-black px-4 py-2 bg-black text-white shadow-[4px_4px_0px_0px_#e1e61b]">
                <span className="w-2.5 h-2.5 bg-[#e1e61b]" />
                <span className="text-xs font-black uppercase tracking-widest">
                  Our Services
                </span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black uppercase leading-[0.92]"
            >
              Branding, Social Media,{" "}
              <span className="text-transparent" style={{ WebkitTextStroke: "2.5px black" }}>
                Video
              </span>{" "}
              &amp;{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-[#e1e61b] px-3 py-1 border-4 border-black shadow-[6px_6px_0_0_#000] transform -rotate-1 inline-block">
                  Digital
                </span>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-black/70 font-bold leading-relaxed max-w-3xl border-l-4 border-black pl-4"
            >
              We&apos;re a full-service digital marketing and creative agency in Dubai, UAE.
              Our work spans four core disciplines — built to move brands from first brief to final launch.
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative chrome star */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 120, damping: 12 }}
          className="absolute right-[-60px] md:right-[40px] lg:right-[80px] top-[30%] md:top-[20%] w-[160px] h-[160px] md:w-[240px] md:h-[240px] pointer-events-none select-none hidden sm:block z-0"
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/y2k/chrome-star2.png"
              alt="Chrome Star"
              width={240}
              height={240}
              style={{ width: "auto", height: "auto" }}
              className="object-contain filter drop-shadow-[8px_8px_0_rgba(0,0,0,0.1)]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Service Cards ─── */}
      <section className="relative w-full py-16 sm:py-24 md:py-32 bg-[#f5f5f0]">
        {/* Subtle paper texture */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col gap-12 sm:gap-16 md:gap-20">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* ─── Bottom CTA Section ─── */}
      <section className="relative w-full py-20 sm:py-28 md:py-36 bg-black border-t-4 border-black overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center text-center gap-8 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6 sm:gap-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.95]">
              Ready to{" "}
              <span className="relative inline-block bg-[#e1e61b] text-black px-3 py-1 border-4 border-white shadow-[6px_6px_0_0_#6c24d6] transform rotate-1">
                Rework
              </span>{" "}
              <br className="hidden sm:block" />
              your brand?
            </h2>

            <p className="text-base sm:text-lg text-white/70 font-bold leading-relaxed max-w-2xl">
              Work with a digital marketing agency in Dubai that actually moves, from first brief to final launch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <Link
              href="/#contact"
              className="group flex items-center gap-3 bg-[#e1e61b] px-8 py-5 text-base sm:text-lg font-black uppercase tracking-widest text-black border-4 border-white shadow-[8px_8px_0px_0px_#fff] transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[12px_12px_0px_0px_#fff] active:translate-y-1 active:-translate-x-1 active:shadow-[0px_0px_0px_0px_#fff]"
            >
              Start Your Rework
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={3} />
            </Link>
            <Link
              href="/#contact"
              className="group flex items-center gap-3 bg-transparent px-8 py-5 text-base sm:text-lg font-black uppercase tracking-widest text-white border-4 border-white shadow-[8px_8px_0px_0px_#6c24d6] transition-all duration-200 hover:bg-white hover:text-black hover:-translate-y-1 hover:translate-x-1 hover:shadow-[12px_12px_0px_0px_#6c24d6] active:translate-y-1 active:-translate-x-1 active:shadow-[0px_0px_0px_0px_#6c24d6]"
            >
              Get a Free Brand Audit
              <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={3} />
            </Link>
          </motion.div>
        </div>

        {/* Decorative floating chrome element */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-80px] bottom-[-20px] w-[200px] h-[200px] md:w-[280px] md:h-[280px] pointer-events-none select-none hidden lg:block opacity-60 z-0"
        >
          <Image
            src="/y2k/chrome-rose.png"
            alt="Chrome Rose"
            width={280}
            height={280}
            style={{ width: "auto", height: "auto" }}
            className="object-contain filter drop-shadow-[10px_10px_0_rgba(255,255,255,0.05)]"
          />
        </motion.div>
      </section>
    </div>
  );
}
