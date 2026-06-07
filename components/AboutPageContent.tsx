"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Flame, Eye, Zap, Target, Sparkles, Globe, Brain, Users, BarChart3, Layers, Compass } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ─── Beliefs Data ────────────────────────────────────────────────────────────

const beliefs = [
  {
    number: "01",
    title: "Clarity over clutter",
    desc: "We cut through the noise. Simple, direct, and focused communication always wins over bloated messaging.",
    icon: Eye,
    accentColor: "#6c24d6",
    bgColor: "bg-white",
    shadowColor: "#6c24d6"
  },
  {
    number: "02",
    title: "Brand strategy over guesswork",
    desc: "Every creative decision is backed by insights. We don't guess what works; we strategise for conversion.",
    icon: Target,
    accentColor: "#ff3366",
    bgColor: "bg-white",
    shadowColor: "#ff3366"
  },
  {
    number: "03",
    title: "Digital presence over decoration",
    desc: "Design must serve a purpose. We build scroll-stopping digital presence that converts, not just decorates.",
    icon: Zap,
    accentColor: "#e1e61b",
    bgColor: "bg-white",
    shadowColor: "#e1e61b"
  },
  {
    number: "04",
    title: "Structure before scale",
    desc: "Build strong foundations first. We set up rock-solid systems that allow your brand to scale seamlessly.",
    icon: Layers,
    accentColor: "#0ea5e9",
    bgColor: "bg-white",
    shadowColor: "#0ea5e9"
  },
];

const builtDifferent = [
  { text: "Gen Z instinct, global perspective", desc: "We don't study modern culture. We live it daily, translating trends into business results.", icon: Globe, color: "#e1e61b" },
  { text: "Strategic design thinking", desc: "Form follows function. Every design layout is built to direct attention and trigger action.", icon: Compass, color: "#6c24d6" },
  { text: "AI-powered creative innovation", desc: "We combine human intuition with AI speed to produce higher volume and sharper creatives.", icon: Sparkles, color: "#e1e61b" },
  { text: "Performance marketing expertise", desc: "Creative that performs. Every campaign is optimised for click-throughs, sales, and ROAS.", icon: BarChart3, color: "#ff3366" },
  { text: "Adaptable, multi-disciplinary execution", desc: "One team covering copy, design, video, code, and growth marketing without handoffs.", icon: Layers, color: "#6c24d6" },
  { text: "Diverse perspectives, one direction", desc: "A creative melting pot executing with singular focus and alignment with client goals.", icon: Users, color: "#e1e61b" },
  { text: "Serving brands in Dubai and across the UAE", desc: "Deep local knowledge from our Dubai hub, built for the GCC's fast-moving market.", icon: Globe, color: "#ff3366" },
];

export function AboutPageContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative flex flex-col w-full bg-[#f5f5f0] min-h-screen text-black font-sans overflow-x-hidden selection:bg-black selection:text-[#e1e61b]">
      
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1: HERO (Stacked Neobrutalist Poster Style)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 border-b-4 border-black bg-white">
        {/* Graphic grid backdrops */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)", backgroundSize: "36px 36px" }} />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, black 1px, transparent 0)", backgroundSize: "18px 18px" }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col gap-12 sm:gap-16">
          
          {/* Top Row: Full-width H1 */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border-4 border-black px-4 py-2 bg-black text-white w-fit shadow-[4px_4px_0px_0px_#6c24d6]">
              <span className="w-2.5 h-2.5 bg-[#e1e61b]" />
              <span className="text-xs font-black uppercase tracking-widest">ABOUT REWORKS</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.8rem] font-black tracking-tighter uppercase leading-[0.92] text-black max-w-5xl">
              We&apos;re{" "}
              <span className="relative inline-block bg-[#e1e61b] px-3.5 py-1 border-4 border-black shadow-[6px_6px_0_0_#000] transform -rotate-1">
                ReWorks
              </span>
              <br />
              <span className="block mt-4 sm:mt-6">A Gen Z-led digital</span>
              <span className="block">
                marketing{" "}
                <span className="text-transparent" style={{ WebkitTextStroke: "2.5px black" }}>
                  &amp; brand strategy
                </span>
              </span>
              <span className="block">agency</span>
            </h1>
          </div>

          {/* Bottom Row: 2-Column Info & Badges */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t-4 border-black pt-10">
            {/* Left: Tagline & Subheading */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black uppercase leading-[1.05] tracking-tight">
                <span className="text-[#6c24d6]">Rework to Revolutionize</span><br />
                isn&apos;t just our tagline. It&apos;s how we perform.
              </h2>
              <p className="text-base sm:text-lg text-black/70 font-semibold leading-relaxed border-l-4 border-black pl-5">
                We turn scattered brands into sharp, scroll-stopping systems. Built to move brands in Dubai and across the UAE.
              </p>
            </div>

            {/* Right: Operations status & active timezone badges */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 w-full">
              <div className="flex-1 border-4 border-black bg-[#6c24d6] p-6 text-white shadow-[6px_6px_0px_0px_#000] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#fff_12.5%,transparent_12.5%,transparent_50%,#fff_50%,#fff_62.5%,transparent_62.5%,transparent_100%)] bg-[length:16px_16px]" />
                <h4 className="text-sm font-black uppercase tracking-widest text-[#e1e61b] mb-1 z-10 relative">OPERATIONS CORE</h4>
                <p className="text-xs font-bold text-white/80 leading-relaxed z-10 relative">
                  DUBAI, UAE HUB — ACTIVE CONNECTIVITY
                </p>
              </div>

              <div className="flex-1 border-4 border-black bg-white p-5 flex items-center justify-between shadow-[4px_4px_0px_0px_#e1e61b]">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse border-2 border-black" />
                  <span className="text-[11px] font-black uppercase tracking-wider text-black">Active Workspace</span>
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider text-black/40">GMT+4 (DUBAI)</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* ─── Hero Marquee Band ─── */}
      <div className="w-full bg-[#e1e61b] border-b-4 border-black py-4 overflow-hidden flex items-center shrink-0">
        <div className="flex whitespace-nowrap text-black font-black text-xs sm:text-sm tracking-widest items-center uppercase animate-marquee">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="flex items-center shrink-0">
              <span className="mx-6">GEN Z INSTINCT</span>
              <span className="h-2.5 w-2.5 bg-black rotate-45 shrink-0" />
              <span className="mx-6">GLOBAL PERSPECTIVE</span>
              <span className="h-2.5 w-2.5 bg-[#6c24d6] rotate-45 shrink-0" />
              <span className="mx-6">STRATEGY TO CONVERSION</span>
              <span className="h-2.5 w-2.5 bg-black rotate-45 shrink-0" />
              <span className="mx-6">AI CREATIVE SPEED</span>
              <span className="h-2.5 w-2.5 bg-[#ff3366] rotate-45 shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2: DNA (Bento Grid layout)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 sm:py-28 md:py-36 bg-black text-white border-b-4 border-black overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" style={{ backgroundImage: "linear-gradient(#fff 2px, transparent 2px), linear-gradient(90deg, #fff 2px, transparent 2px)", backgroundSize: "48px 48px" }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Box 1: Left Sticky Title Box */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:justify-between">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 border-2 border-white px-3 py-1.5 text-xs font-black uppercase tracking-widest text-white w-fit shadow-[3px_3px_0_0_#e1e61b]">
                  <Flame className="w-3.5 h-3.5" strokeWidth={3} />
                  OUR DNA
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white uppercase leading-[0.92]">
                  We Don&apos;t Do<br />
                  <span className="relative inline-block bg-[#e1e61b] text-black px-4 py-1 border-4 border-white shadow-[6px_6px_0_0_#6c24d6] transform rotate-1 mt-2">
                    Ordinary
                  </span>
                </h2>
              </div>

              {/* DNA Image - Stylized Brutalist Image Container */}
              <div className="border-4 border-white bg-zinc-900 shadow-[8px_8px_0_0_#e1e61b] overflow-hidden flex flex-col mt-6 max-w-sm">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/about-ordinary.png"
                    alt="We Don't Do Ordinary"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 380px"
                  />
                </div>
              </div>
            </div>

            {/* Box 2: Right Content Box & Stats */}
            <div className="lg:col-span-7 flex flex-col gap-8 justify-between">
              
              {/* Copy Blocks */}
              <div className="flex flex-col gap-6 border-l-4 border-[#e1e61b] pl-6 md:pl-8 py-2">
                <p className="text-lg sm:text-xl md:text-2xl text-white font-black leading-snug uppercase tracking-tight">
                  We move at the <span className="text-[#e1e61b]">speed brands actually need</span>. We&apos;re a full-service digital marketing agency in Dubai that builds experiences, earning attention and refusing to let go.
                </p>

                <p className="border-l-4 border-zinc-500 pl-5 text-white/80 font-bold italic leading-relaxed">
                  No decks collecting dust. No &apos;let&apos;s try this.&apos; Just sharp brand strategy, bold creative, and digital systems that hit.
                </p>

                <p className="text-base sm:text-lg text-white/70 font-semibold leading-relaxed">
                  ReWorks exists for brands that are <span className="text-[#e1e61b]">done looking busy</span> and ready to start converting. We rework scattered ideas into focused strategy, strong design, and performance marketing systems that actually move people.
                </p>
              </div>

              {/* Stats Grid Widget */}
              <div className="grid grid-cols-2 md:grid-cols-3 border-4 border-white bg-zinc-950 p-6 md:p-8 gap-6 shadow-[6px_6px_0_0_#6c24d6]">
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-black text-[#e1e61b] tracking-tighter leading-none mb-1">100%</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 leading-tight">GEN Z INSTINCT</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-black text-[#ff3366] tracking-tighter leading-none mb-1">DUBAI</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 leading-tight">OPERATIONAL CORE</span>
                </div>
                <div className="flex flex-col col-span-2 md:col-span-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#6c24d6] tracking-tighter leading-none mb-1">MUMBAI</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 leading-tight">ROOTS &amp; OUTREACH</span>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3: WE BELIEVE (Brutalist Cards Grid)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 sm:py-28 md:py-36 border-b-4 border-black bg-white overflow-hidden">
        {/* Decorative Grid Backdrop */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="mb-14 sm:mb-20 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 border-2 border-black px-3 py-1.5 text-xs font-black uppercase tracking-widest text-black bg-white w-fit shadow-[3px_3px_0_0_#6c24d6]">
              <Eye className="w-3.5 h-3.5" strokeWidth={3} />
              OUR BELIEFS
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.92]">
              We{" "}
              <span className="relative inline-block bg-black text-white px-4 py-1 border-4 border-black transform -rotate-1">
                Believe
              </span>
            </h2>
          </div>

          {/* Beliefs Cards Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {beliefs.map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group h-full flex"
              >
                {/* Solid offset shadow layer */}
                <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 border-4 border-black bg-black pointer-events-none z-0" />
                
                {/* Main Card */}
                <div className="relative flex flex-col bg-white border-4 border-black p-8 sm:p-10 z-10 transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1 h-full w-full justify-between gap-8">
                  {/* Huge Background Number */}
                  <span className="absolute bottom-6 right-8 text-7xl sm:text-9xl font-black text-black/[0.04] pointer-events-none select-none uppercase tracking-tighter">
                    {belief.number}
                  </span>

                  {/* Header Row */}
                  <div className="flex items-start justify-between">
                    {/* Icon Badge */}
                    <div 
                      className="p-3.5 border-4 border-black flex-shrink-0 shadow-[3px_3px_0_0_#000] transition-transform duration-300 group-hover:rotate-12 bg-[#e1e61b]"
                    >
                      <belief.icon className="w-7 h-7 text-black" strokeWidth={3} />
                    </div>
                    {/* Number stamp */}
                    <span className="text-xs font-black uppercase tracking-widest border-2 border-black bg-black text-white px-2 py-0.5">
                      RULE {belief.number}
                    </span>
                  </div>

                  {/* Body Text */}
                  <div className="flex flex-col gap-3 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black group-hover:text-[#6c24d6] transition-colors">
                      {belief.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold leading-relaxed text-black/60">
                      {belief.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4: BUILT DIFFERENT (Sticky Column + Expandable List)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-20 sm:py-28 md:py-36 bg-[#f0f0eb] border-b-4 border-black overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Sticky Title */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 border-2 border-black px-3 py-1.5 text-xs font-black uppercase tracking-widest text-black bg-white w-fit shadow-[3px_3px_0_0_#e1e61b]">
                <Sparkles className="w-3.5 h-3.5" strokeWidth={3} />
                WHAT SETS US APART
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black uppercase leading-[0.92]">
                ReWorks;<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "2.5px black" }}>
                  Built
                </span>{" "}
                <span className="relative inline-block bg-[#6c24d6] text-white px-3 py-1 border-4 border-black shadow-[6px_6px_0_0_#000] transform rotate-1 mt-1">
                  Different
                </span>
              </h2>

              <p className="text-sm font-semibold text-black/60 leading-relaxed mt-4 border-l-4 border-black pl-4">
                We design and execute campaigns with Gen Z instinct, using AI-powered systems to deliver speed, efficiency, and high conversion rates for Dubai&apos;s leading brands.
              </p>
            </div>

            {/* Right Column: Interactive Differentiator Cards */}
            <div className="lg:col-span-8 flex flex-col border-t-4 border-black">
              {builtDifferent.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group flex flex-col py-6 sm:py-8 border-b-4 border-black px-4 sm:px-6 cursor-pointer bg-transparent hover:bg-white transition-all duration-300"
                >
                  <div className="flex items-center gap-5 sm:gap-8 justify-between w-full">
                    {/* Left content: Number, Icon, Title */}
                    <div className="flex items-center gap-4 sm:gap-6 flex-1">
                      {/* Number */}
                      <span className="text-xs font-black uppercase tracking-widest text-black/30 w-8 flex-shrink-0 hidden sm:block transition-colors duration-200 group-hover:text-[#6c24d6]/50">
                        0{i + 1}
                      </span>

                      {/* Icon */}
                      <div
                        className="p-2.5 border-2 border-black flex-shrink-0 shadow-[2px_2px_0_0_#000] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                        style={{ backgroundColor: item.color }}
                      >
                        <item.icon className="w-5 h-5 text-black" strokeWidth={3} />
                      </div>

                      {/* Title */}
                      <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase tracking-tight text-black leading-tight transition-colors duration-200 group-hover:text-[#6c24d6]">
                        {item.text}
                      </span>
                    </div>

                    {/* Right content: Arrow */}
                    <ArrowRight
                      className="w-5 h-5 text-black/20 group-hover:text-[#6c24d6] transition-all duration-200 flex-shrink-0 group-hover:translate-x-2.5"
                      strokeWidth={3}
                    />
                  </div>

                  {/* Expandable Description */}
                  <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300 ease-in-out pl-0 sm:pl-14">
                    <p className="text-sm font-semibold text-black/50 leading-relaxed mt-3">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5: MISSION & CTA (Billboard Style)
          ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 sm:py-32 md:py-40 bg-black text-white overflow-hidden">
        {/* Neon Purple Spotlight Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-[#6c24d6]/20 rounded-full blur-[80px] md:blur-[140px] pointer-events-none z-0 animate-pulse" />
        
        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-0" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #6c24d6 2px, transparent 2px)", backgroundSize: "32px 32px" }} />

        <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border-2 border-white px-4 py-2 text-xs font-black uppercase tracking-widest text-white bg-black shadow-[3px_3px_0_0_#e1e61b]">
            <Target className="w-3.5 h-3.5" strokeWidth={3} />
            OUR MISSION
          </div>

          {/* Mission Text */}
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white uppercase leading-[1] max-w-4xl">
              To rework brands through{" "}
              <span className="text-[#e1e61b]">strategy</span>,{" "}
              <span className="text-[#a855f7]">design</span>, and{" "}
              <span className="relative inline-block bg-[#e1e61b] text-black px-4 py-1 border-4 border-white shadow-[6px_6px_0_0_#a855f7] transform -rotate-1">
                AI-powered
              </span>{" "}
              digital systems.
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-white/60 font-bold leading-relaxed max-w-2xl">
              So they capture attention, establish trust, and generate measurable action.
            </p>
          </div>

          {/* Symmetrical Accent divider */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-1 bg-[#e1e61b]" />
            <div className="w-3.5 h-3.5 bg-[#a855f7] border-2 border-white rotate-45" />
            <div className="w-16 h-1 bg-[#e1e61b]" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/#contact"
              className="group flex items-center gap-3 bg-[#e1e61b] px-8 py-5 text-base sm:text-lg font-black uppercase tracking-widest text-black border-4 border-white shadow-[8px_8px_0px_0px_#fff] transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[12px_12px_0px_0px_#fff] active:translate-y-1 active:-translate-x-1 active:shadow-[0px_0px_0px_0px_#fff]"
            >
              Start Your Rework
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={3} />
            </Link>
            <Link
              href="/services"
              className="group flex items-center gap-3 bg-transparent px-8 py-5 text-base sm:text-lg font-black uppercase tracking-widest text-white border-4 border-white shadow-[8px_8px_0px_0px_#6c24d6] transition-all duration-200 hover:bg-white hover:text-black hover:-translate-y-1 hover:translate-x-1 hover:shadow-[12px_12px_0px_0px_#6c24d6] active:translate-y-1 active:-translate-x-1 active:shadow-[0px_0px_0px_0px_#6c24d6]"
            >
              View Our Services
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={3} />
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}
