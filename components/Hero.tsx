"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import Link from "next/link";
import { Tape, Badge } from "./ui/mixed-media";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Setup
  const { scrollY } = useScroll();
  const yTape = useTransform(scrollY, [0, 1000], [0, 200]);
  const yBadge = useTransform(scrollY, [0, 1000], [0, -150]);

  // Spotlight logic
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth out the mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const spotlightMask = useMotionTemplate`radial-gradient(circle 350px at ${springX}px ${springY}px, black 0%, transparent 100%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div 
      ref={containerRef} 
      className="relative flex flex-col w-full bg-white overflow-hidden min-h-[90vh] md:min-h-screen pt-32 pb-12 border-b-4 border-black"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Background Pattern ── */}
      <div 
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)",
          backgroundSize: "24px 24px"
        }}
      />
      
      {/* ── Spotlight reveal background ── */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          WebkitMaskImage: spotlightMask,
          maskImage: spotlightMask,
          opacity: isHovered ? 1 : 0,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-[#e1e61b]">
           <div 
             className="absolute inset-0 opacity-20 mix-blend-multiply"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
           />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <span className="text-[12vw] font-black text-black opacity-[0.16] rotate-[-4deg] whitespace-nowrap tracking-tighter">NO NONSENSE</span>
            </div>
        </div>
      </motion.div>

      {/* ── Content Foreground ── */}
      <div className="relative z-20 flex flex-col items-center justify-center flex-grow w-full max-w-7xl mx-auto px-6 sm:px-12 py-10 pointer-events-none">
        
        {/* Top Badges */}
        <motion.div
          style={{ y: yBadge }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12 sm:mb-20 z-20 relative pointer-events-auto"
        >
          <Badge text="REWORKS.AGENCY" subtext="ESTD. 2017" rotate={-4} className="border-2 border-black shadow-[4px_4px_0_0_#000]" />
          <Tape color="black" text="ONLY RESULTS." rotate={2} className="border-2 border-black" />
        </motion.div>

        {/* Massive Headline */}
        <div className="relative text-center w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-black text-[13vw] sm:text-[10vw] md:text-[8vw] leading-[0.85] font-black uppercase tracking-tighter mix-blend-normal z-30 relative"
          >
            <span className="block text-[6vw] sm:text-[4.5vw] md:text-[3.6vw] leading-tight font-black tracking-tight mb-2">DIGITAL MARKETING AGENCY IN</span>
            <span className="block text-transparent text-[11vw] sm:text-[9vw] md:text-[7.2vw] font-black leading-none" style={{ WebkitTextStroke: "2.5px black" }}>MUMBAI &amp; DUBAI</span>
            <span className="block bg-black text-white text-[3vw] sm:text-[2.2vw] md:text-[1.6vw] tracking-wider px-6 py-2.5 inline-block mt-8 border-4 border-black transform -rotate-1 relative z-30 font-black uppercase shadow-[6px_6px_0px_0px_#6c24d6]">
              WHERE STRATEGY MEETS CULTURE
            </span>
          </motion.h1>
        </div>

        {/* Center Tapes */}
        <motion.div
          style={{ y: yTape }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 sm:mt-24 relative flex flex-col sm:flex-row items-center gap-6 z-20 pointer-events-auto"
        >
          <Tape color="purple" text="STRATEGIC MIND." rotate={-3} className="text-xl px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black" />
          <Tape color="pink" text="CREATIVE HEART." rotate={2} className="text-xl px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black" />
          <Tape color="yellow" text="SMART TECH." rotate={-1} className="text-xl px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] border-2 border-black" />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 sm:mt-32 pointer-events-auto"
        >
          <Link href="#contact" className="group relative px-8 py-5 bg-white text-black font-black text-lg md:text-xl uppercase tracking-widest inline-block border-4 border-black transition-all hover:bg-[#e1e61b] hover:text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Let's Build What's Next
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
