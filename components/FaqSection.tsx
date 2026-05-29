"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    q: "What does a digital marketing agency in Mumbai and Dubai do?",
    a: "A digital marketing agency in Mumbai & Dubai handles branding, social media, video production, and digital development — helping brands build presence and convert audiences across India and the UAE.",
  },
  {
    q: "How is ReWorks different from other agencies in India and the UAE?",
    a: "ReWorks combines Gen Z cultural instinct with AI-powered creative systems. We move faster, think sharper, and operate across Mumbai & Dubai — one team, two markets.",
  },
  {
    q: "Which industries does ReWorks work with?",
    a: "We specialise in entertainment, FMCG, and hospitality — three of India and the UAE's most competitive brand categories.",
  },
  {
    q: "Do you work with brands outside Mumbai and Dubai?",
    a: "Yes. While we're rooted in Mumbai and Dubai, we work with brands across India, the UAE, and internationally.",
  },
  {
    q: "How do you measure the success of a campaign?",
    a: "We measure success based on real business outcomes — conversion rates, sales growth, and brand equity. No vanity metrics or generic impressions dashboards.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll parallax transitions for the gutters
  const yRoseStem = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const yRosePremium = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      id="faq" 
      className="relative w-full py-24 md:py-32 overflow-hidden bg-white border-t-4 border-black text-black"
    >
      {/* Cyber Grid Backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none z-0" 
        style={{ 
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", 
          backgroundSize: "44px 44px" 
        }} 
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          {/* FAQ Tagline Badge with purple neobrutalist offset shadow */}
          <div className="inline-flex items-center gap-2.5 border-[2.5px] border-black px-4 py-2 mb-8 bg-white text-black font-black shadow-[4px_4px_0px_0px_#6c24d6] relative z-10 select-none">
            <span className="w-2.5 h-2.5 bg-[#6c24d6] flex-shrink-0" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest leading-none">
              FAQ
            </span>
          </div>

          {/* Main Title Matching Screenshot Layout */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-black tracking-tighter uppercase leading-[0.95] mb-5 font-heading">
            COMMON <span className="text-transparent" style={{ WebkitTextStroke: "2.5px black" }}>QUESTIONS.</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-neutral-500 text-xs sm:text-sm font-black uppercase tracking-widest mb-5">
            CLEAR ANSWERS. ZERO CORPORATE JARGON.
          </p>
          
          {/* Purple horizontal divider line */}
          <div className="w-24 h-[3.5px] bg-[#6c24d6]" />
        </div>

        {/* FAQ List Accordions with thin black lines */}
        <div className="flex flex-col border-b-[1.5px] border-black">
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="group py-7 border-t-[1.5px] border-black cursor-pointer select-none transition-colors hover:bg-black/[0.01]"
                onClick={() => toggleIndex(i)}
              >
                <div className="flex justify-between items-center gap-6">
                  {/* Question Title */}
                  <span className={`text-sm sm:text-base md:text-[17px] font-black uppercase tracking-wider transition-colors leading-tight ${isOpen ? "text-[#6c24d6]" : "text-black"}`}>
                    {q}
                  </span>
                  
                  {/* Dynamic Toggle Button */}
                  <motion.span 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className={`text-lg font-black flex items-center justify-center border-2 border-black w-8 h-8 md:w-9 md:h-9 shadow-[2px_2px_0_0_#000] transition-colors flex-shrink-0 ${isOpen ? "text-white bg-black" : "text-black bg-white group-hover:bg-black group-hover:text-white"}`}
                  >
                    +
                  </motion.span>
                </div>
                
                {/* Expandable Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 22 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden pl-0 md:pl-1 max-w-3xl"
                    >
                      <p className="text-neutral-700 font-semibold text-sm md:text-base leading-relaxed pl-4 border-l-[3px] border-[#6c24d6]">
                        {a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>

      {/* Decorative Large Premium Chrome Rose Stem Sticker - Left Side */}
      <div className="absolute left-[-160px] xl:left-[calc(50%-690px)] 2xl:left-[calc(50%-750px)] top-[18%] w-[320px] h-[520px] xl:w-[360px] xl:h-[580px] pointer-events-none select-none hidden lg:block z-0">
        {/* Soft Purple Radial Glow Backdrop */}
        <div className="absolute top-[20%] left-[20%] w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] bg-[#6c24d6] rounded-full blur-[80px] sm:blur-[110px] opacity-[0.25] mix-blend-screen z-0 animate-pulse" />
        
        <motion.div 
          style={{ y: yRoseStem }}
          className="w-full h-full relative z-10"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.06, rotate: -4 }}
            className="w-full h-full pointer-events-auto flex items-center justify-center"
          >
            <Image 
              src="/y2k/chrome-rose-stem.png" 
              alt="Premium Chrome Rose Stem Sticker"
              width={360}
              height={580}
              className="object-contain filter drop-shadow-[10px_10px_0_rgba(0,0,0,0.05)] transition-all duration-300 hover:brightness-110 hover:contrast-105"
            />
          </motion.div>
        </motion.div>

      </div>

      {/* Decorative Large Premium Chrome Rose Sticker - Right Side */}
      <div className="absolute right-[-160px] xl:right-[calc(50%-690px)] 2xl:right-[calc(50%-750px)] bottom-[8%] w-[320px] h-[320px] xl:w-[360px] xl:h-[360px] pointer-events-none select-none hidden lg:block z-0">
        {/* Soft Purple Radial Glow Backdrop */}
        <div className="absolute top-[15%] left-[20%] w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] bg-[#6c24d6] rounded-full blur-[80px] sm:blur-[110px] opacity-[0.25] mix-blend-screen z-0 animate-pulse" />
        
        <motion.div 
          style={{ y: yRosePremium }}
          className="w-full h-full relative z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.06, rotate: 15 }}
            className="w-full h-full pointer-events-auto flex items-center justify-center"
          >
            <Image 
              src="/y2k/chrome-rose-premium.png" 
              alt="Premium Chrome Rose Sticker"
              width={360}
              height={360}
              className="object-contain filter drop-shadow-[10px_10px_0_rgba(0,0,0,0.05)] transition-all duration-300 hover:brightness-110 hover:contrast-105"
            />
          </motion.div>
        </motion.div>


      </div>

    </section>
  );
}
