"use client";

import { MarqueeRow } from "./MarqueeRow";
import { Pause, Play, ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { LogoTicker } from "./LogoTicker";

// ── Brutalist entrance timing ────────────────────────────────────────────────
const SNAP_UP = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay, ease: "circOut" as const },
  },
});

const SNAP_IN = (delay: number): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.2, delay, ease: "linear" as const },
  },
});

const rowImages = [
  "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
];

export function BrandStatement() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const DURATION = 5000;
  const UPDATE_INTERVAL = 50;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + (UPDATE_INTERVAL / DURATION) * 100;
          if (next >= 100) {
            setActiveIndex((idx) => idx + 1);
            return 0;
          }
          return next;
        });
      }, UPDATE_INTERVAL);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => { setActiveIndex((p) => p + 1); setProgress(0); };
  const handlePrev = () => { setActiveIndex((p) => p - 1); setProgress(0); };
  const togglePlay = () => setIsPlaying(!isPlaying);

  // ── Typing effect ──────────────────────────────────────────────────────────
  const words = ["works.", "brand.", "design.", "build.", "develop."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    // Slightly faster and more rigid typing
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && currentText === word) {
      const t = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(t);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((p) => (p + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setCurrentText(word.substring(0, currentText.length + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(t);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <div
      className="relative flex flex-col w-full bg-white overflow-hidden border-y-4 border-black pt-16 sm:pt-24 pb-0"
    >
      {/* ── Top section: Images + Floating Box ──────────────────────── */}
      <div className="relative w-full flex items-center justify-center min-h-[400px] sm:min-h-[500px]">
        {/* Layer 0: Background cards (in normal flow to dictate height) */}
        <motion.div
          variants={SNAP_IN(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full overflow-hidden opacity-100"
        >
          <MarqueeRow images={rowImages} activeIndex={activeIndex} />
        </motion.div>

        {/* Layer 1: Center content column floating exactly on top */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">

          {/* The card shell */}
          <motion.div
            variants={SNAP_UP(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="pointer-events-auto bg-white border-4 border-black shadow-[12px_12px_0_0_#000] flex flex-col md:flex-row items-center w-[94%] sm:w-[90%] max-w-3xl gap-4 sm:gap-8 transition-transform hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0_0_#000] duration-200 ease-out"
          >
            <div className="w-full bg-[#f4f4f0] p-6 sm:p-8 md:p-10 relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-0">
              
              {/* Decorative grid */}
              <div 
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)",
                  backgroundSize: "20px 20px"
                }}
              />

              {/* Headline */}
              <motion.div
                variants={SNAP_UP(0.4)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <h1 className="text-black text-4xl sm:text-5xl md:text-7xl tracking-tighter leading-[1.1] uppercase">
                  <span className="font-black text-black">We</span>
                  <br />
                  <span className="font-black text-white bg-black px-2 inline-block transform -rotate-2 border-2 border-black">
                    Re{currentText}
                  </span>
                  <span className="font-black text-black ml-1 blink-cursor">
                    _
                  </span>
                </h1>
              </motion.div>

              {/* CTA button */}
              <motion.div
                variants={SNAP_UP(0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="z-10 sm:mt-auto sm:pt-0 self-start sm:self-end"
              >
                <Link href="#contact" className="bg-[#e1e61b] hover:bg-black hover:text-[#e1e61b] text-black px-8 py-4 border-4 border-black text-sm sm:text-base font-black uppercase tracking-widest shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-y-[4px] active:translate-x-[4px] transition-all duration-100 inline-block text-center">
                  Get started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom section: Controls & Tagline (Naturally flows below) ── */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full mt-8 sm:mt-12">
        {/* Controls */}
        <motion.div
          variants={SNAP_UP(0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center gap-3 sm:gap-4 ml-auto mr-4 sm:mr-10 md:mr-20"
        >
          <button
            className="w-12 h-12 rounded-none bg-white border-2 border-black flex items-center justify-center hover:bg-[#e1e61b] hover:shadow-[4px_4px_0_0_#000] transition-all pointer-events-auto active:translate-y-1 active:shadow-none"
            onClick={handlePrev}
          >
            <ArrowLeft className="w-6 h-6 text-black" />
          </button>

          <button
            className="relative w-14 h-14 flex items-center justify-center rounded-none group pointer-events-auto bg-white border-2 border-black hover:bg-[#6c24d6] hover:shadow-[4px_4px_0_0_#000] transition-all active:translate-y-1 active:shadow-none"
            onClick={togglePlay}
          >
            <div className="z-10 flex items-center justify-center">
              {isPlaying
                ? <Pause className="w-5 h-5 text-black group-hover:text-white fill-current" />
                : <Play className="w-5 h-5 text-black group-hover:text-white fill-current ml-1" />}
            </div>
            {/* Minimalist brutalist progress bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-black w-full overflow-hidden">
               <div className="h-full bg-[#e1e61b]" style={{ width: \`\${progress}%\` }} />
            </div>
          </button>

          <button
            className="w-12 h-12 rounded-none bg-white border-2 border-black flex items-center justify-center hover:bg-[#e1e61b] hover:shadow-[4px_4px_0_0_#000] transition-all pointer-events-auto active:translate-y-1 active:shadow-none"
            onClick={handleNext}
          >
            <ArrowRight className="w-6 h-6 text-black" />
          </button>
        </motion.div>

        {/* Tagline */}
        <motion.div
          variants={SNAP_UP(0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl px-6 sm:px-4 mx-auto mt-12 sm:mt-16 pb-12 sm:pb-16 z-10"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-black font-black uppercase leading-[1.1] tracking-tight">
            Rework to <span className="bg-[#e1e61b] px-2 border-2 border-black transform inline-block rotate-1">Revolutionize.</span>
            <br />
            <span className="block mt-4 text-base sm:text-xl font-bold tracking-normal normal-case">
              We turn scattered brands into sharp, scroll-stopping systems — built to move brands in Dubai and across the UAE.
            </span>
          </p>
        </motion.div>
      </div>

      {/* ── Layer 5: Logo ticker (last) ────────────────────────────────────── */}
      <motion.div
        variants={SNAP_IN(1.0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-auto z-10 w-full relative"
      >
        <LogoTicker />
      </motion.div>
      
      <style jsx global>{\`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blink-cursor {
          animation: blink 1s step-end infinite;
        }
      \`}</style>
    </div>
  );
}
