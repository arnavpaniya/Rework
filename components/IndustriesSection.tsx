"use client";

import React from "react";
import { Film, ShoppingBag, Hotel } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function IndustriesSection() {
  return (
    <section 
      id="industries" 
      className="relative w-full py-24 md:py-32 overflow-hidden bg-black border-y-4 border-white text-white animate-fade-in"
    >
      {/* Cyber Grid Backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none z-0" 
        style={{ 
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", 
          backgroundSize: "44px 44px" 
        }} 
      />

      {/* Symmetrical long-stemmed chrome rose peeking in from right with yellow glow */}
      <div className="absolute right-[-120px] xl:right-[-60px] top-[2%] w-[380px] h-[650px] sm:w-[500px] sm:h-[850px] md:w-[600px] md:h-[1000px] pointer-events-none select-none hidden lg:block z-0">
        {/* Soft Yellow Radial Glow Backdrop */}
        <div className="absolute top-[12%] left-[25%] w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] bg-[#e1e61b] rounded-full blur-[80px] sm:blur-[120px] opacity-[0.38] mix-blend-screen z-0 animate-pulse" />
        
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [-22, -18, -22] }} // Tilted left (counter-clockwise by ~20 degrees)
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full relative z-10"
        >
          <Image 
            src="/y2k/chrome-rose-stem.png" 
            alt="Premium Chrome Rose Stem"
            fill
            className="object-contain filter drop-shadow-[15px_15px_0_rgba(0,0,0,0.3)]"
          />
        </motion.div>
        
        {/* Y2K Twinkle Sparkle Stars */}
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] left-[65%] w-10 h-10 z-20"
        >
          <Image 
            src="/y2k/chrome-star.png" 
            alt="Chrome Sparkle Star"
            width={40}
            height={40}
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_#e1e61b]"
          />
        </motion.div>

        <motion.div 
          animate={{ scale: [1.25, 1, 1.25], opacity: [0.8, 0.5, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[45%] left-[40%] w-8 h-8 z-20"
        >
          <Image 
            src="/y2k/chrome-star.png" 
            alt="Chrome Sparkle Star"
            width={32}
            height={32}
            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_#e1e61b]"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl relative"
        >
          <div className="inline-flex items-center gap-2 border-2 border-white px-3 py-1 mb-6 bg-black text-white font-bold relative z-10">
            <span className="w-2 h-2 bg-[#e1e61b]" />
            <span className="text-xs font-black uppercase tracking-widest">
              INDUSTRIES WE SERVE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-[4.2rem] font-black tracking-tighter uppercase leading-[0.95] mb-8 font-heading">
            ENTERTAINMENT, FMCG &amp; <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>HOSPITALITY BRANDS</span><br />
            IN INDIA &amp; THE UAE.
          </h2>

          <p className="text-base md:text-lg text-neutral-300 font-semibold leading-relaxed max-w-2xl border-l-4 border-[#e1e61b] pl-4">
            We work across entertainment, FMCG, and hospitality — three of India and the UAE&apos;s most competitive brand categories. We understand the pace of a product launch, the cultural nuance of a campaign in Mumbai &amp; Dubai, and the visual standards that premium brands demand.
          </p>
        </motion.div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Card 1: Entertainment */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group"
          >
            {/* Offset Outline Shadow Layer */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 border-4 border-white bg-transparent pointer-events-none z-0" />
            
            {/* Main Card Layer */}
            <div className="relative bg-black border-4 border-white p-8 flex flex-col justify-between h-[360px] sm:h-[390px] z-10 transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1">
              <div>
                <div className="p-3 border-4 border-black bg-white text-black w-fit mb-6">
                  <Film className="w-6 h-6" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-[#e1e61b]">
                  Entertainment
                </h3>
                <p className="text-neutral-400 text-xs font-semibold leading-relaxed">
                  Campaigns built for scroll-speed audiences. OTT, live events, music, film — we know how entertainment brands earn attention in Mumbai and Dubai.
                </p>
              </div>
              <div className="text-[3.5rem] font-black text-neutral-800/40 uppercase select-none leading-none text-right transition-all duration-300 group-hover:text-[#e1e61b]/30 group-hover:tracking-widest">
                OTT
              </div>
            </div>
          </motion.div>

          {/* Card 2: FMCG */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="relative group"
          >
            {/* Offset Outline Shadow Layer */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 border-4 border-white bg-transparent pointer-events-none z-0" />
            
            {/* Main Card Layer */}
            <div className="relative bg-black border-4 border-white p-8 flex flex-col justify-between h-[360px] sm:h-[390px] z-10 transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1">
              <div>
                <div className="p-3 border-4 border-black bg-white text-black w-fit mb-6">
                  <ShoppingBag className="w-6 h-6" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-[#6c24d6]">
                  FMCG
                </h3>
                <p className="text-neutral-400 text-xs font-semibold leading-relaxed">
                  Fast-moving brands need fast-moving creative. We build visual systems and social strategies that keep FMCG brands sharp at every touchpoint across India and the UAE.
                </p>
              </div>
              <div className="text-[3.5rem] font-black text-neutral-800/40 uppercase select-none leading-none text-right transition-all duration-300 group-hover:text-[#6c24d6]/30 group-hover:tracking-widest">
                PACK
              </div>
            </div>
          </motion.div>

          {/* Card 3: Hospitality */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group"
          >
            {/* Offset Outline Shadow Layer */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 border-4 border-white bg-transparent pointer-events-none z-0" />
            
            {/* Main Card Layer */}
            <div className="relative bg-black border-4 border-white p-8 flex flex-col justify-between h-[360px] sm:h-[390px] z-10 transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1">
              <div>
                <div className="p-3 border-4 border-black bg-white text-black w-fit mb-6">
                  <Hotel className="w-6 h-6" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-white">
                  Hospitality
                </h3>
                <p className="text-neutral-400 text-xs font-semibold leading-relaxed">
                  From boutique hotels to F&amp;B chains — digital marketing for hospitality brands in Mumbai &amp; Dubai that converts browsers into bookings.
                </p>
              </div>
              <div className="text-[3.5rem] font-black text-neutral-800/40 uppercase select-none leading-none text-right transition-all duration-300 group-hover:text-white/30 group-hover:tracking-widest">
                STAY
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
