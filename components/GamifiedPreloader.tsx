"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function GamifiedPreloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Smooth loading increment
  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 700);
      return () => clearTimeout(timer);
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        const step = 1.5 + Math.random() * 2.5;
        const nextVal = Math.min(prev + step, 100);
        return nextVal;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            skewY: -2,
            transition: { duration: 0.75, ease: [0.85, 0, 0.15, 1] } 
          }}
          className="fixed inset-0 z-[99999] bg-[#f4f4f0] text-black font-sans flex flex-col justify-between border-b-8 border-black select-none overflow-hidden"
        >
          {/* Subtle Grid Backdrop */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: "linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)", 
              backgroundSize: "24px 24px" 
            }} 
          />

          {/* 1. Spacer at top to balance layout (replacing boot bar) */}
          <div className="w-full h-16 pointer-events-none" />

          {/* 2. Main Branding Core */}
          <div className="relative flex-1 w-full max-w-4xl mx-auto px-6 flex flex-col justify-center items-center z-10 gap-8">
            
            {/* Mega Title */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative inline-block"
              >
                {/* Neobrutalist Black Tagline badge */}
                <div className="bg-black text-white text-[12vw] sm:text-[8vw] font-black uppercase tracking-tighter leading-none px-6 py-4 border-4 border-black shadow-[8px_8px_0_0_#6c24d6] inline-block relative">
                  REWORKS
                </div>
              </motion.div>
              
              <div className="mt-6 flex justify-center items-center gap-4 text-xs font-black uppercase tracking-widest text-neutral-500">
                <span>ESTD. 2017</span>
                <span className="w-1.5 h-1.5 bg-[#e1e61b]" />
                <span>MUMBAI ↔ DUBAI</span>
              </div>
            </div>

          </div>

          {/* 3. Brutalist Progress Bar Footer */}
          <div className="w-full bg-white border-t-4 border-black p-6 z-10 flex flex-col gap-3">
            <div className="w-full flex justify-between items-center text-xs md:text-sm font-black uppercase tracking-wider">
              <span>LOADING SYSTEM ENGINE...</span>
              <span className="font-mono font-black text-[#6c24d6] bg-[#6c24d6]/10 px-2 py-0.5 border border-[#6c24d6]">
                {Math.floor(progress)}%
              </span>
            </div>
            
            {/* Progress Track */}
            <div className="w-full h-8 bg-black border-4 border-black relative overflow-hidden flex items-center shadow-[4px_4px_0_0_#000]">
              <motion.div
                className="h-full bg-[#e1e61b] border-r-4 border-black"
                style={{ width: `${progress}%` }}
                transition={{ type: "tween", ease: "easeOut" }}
              />
              <div className="absolute inset-0 flex items-center justify-center mix-blend-difference text-white font-mono text-xs font-black uppercase tracking-widest">
                {progress >= 100 ? "BOOT_COMPLETE" : "PURGING_CORPORATE_BULLSHIT"}
              </div>
            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
