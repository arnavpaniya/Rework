"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Discipline = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  bg: string;
  image: string;
  video: string;
  text: "white" | "black";
};

const disciplines: Discipline[] = [
  {
    number: "01",
    title: "Branding & Design.",
    description:
      "From scattered visuals to a system that scales — strategy-led, culture-aware, conversion-ready.",
    tags: ["Brand Identity", "Visual Systems", "Campaign Creative", "Guidelines & Type"],
    bg: "#6c24d6",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    video: "https://videos.pexels.com/video-files/3163534/3163534-uhd_3840_2160_30fps.mp4",
    text: "white",
  },
  {
    number: "02",
    title: "Video, Animation & Motion.",
    description:
      "Brands that move get remembered — TikTok, Instagram, YouTube, ready-to-post.",
    tags: ["Brand Films", "Social Reels", "2D / 3D Animation", "Motion Graphics"],
    bg: "#111111",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2564&auto=format&fit=crop",
    video: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
    text: "white",
  },
  {
    number: "03",
    title: "Social Media Marketing.",
    description:
      "Grow the right audience, not just a big one — Meta, TikTok, Instagram, LinkedIn.",
    tags: ["Community Management", "Paid Social", "Content Production"],
    bg: "#ffffff",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
    video: "https://videos.pexels.com/video-files/1851190/1851190-uhd_3840_2160_25fps.mp4",
    text: "white",
  },
  {
    number: "04",
    title: "Digital Development.",
    description:
      "Websites that look right and convert right — fast, sharp, SEO-ready, mobile-first.",
    tags: ["Websites & Landing Pages", "UX / UI", "E-Commerce", "Campaign Builds"],
    bg: "#e1e61b",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
    video: "https://videos.pexels.com/video-files/2278095/2278095-uhd_3840_2160_30fps.mp4",
    text: "white",
  },
];

const gridClasses = [
  "md:col-span-2 md:row-span-1", // Branding
  "md:col-span-1 md:row-span-1", // Video
  "md:col-span-1 md:row-span-1", // Social Media
  "md:col-span-2 md:row-span-1", // Digital Dev
];

export function Disciplines() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 md:py-32 overflow-hidden relative">
      
      {/* ─── Premium Architectural/Editorial Grid Lines ─── */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      {/* Soft Horizontal Lined Grid (Notebook Grid) */}
      <div 
        className="absolute inset-x-0 top-0 bottom-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px)",
          backgroundSize: "100% 40px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="mb-12 sm:mb-20 relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
          
          <div className="max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 border border-black/20 rounded-full px-4 py-1.5 mb-6 sm:mb-8 bg-white shadow-sm relative z-10">
              <span className="w-2 h-2 rounded-full bg-[#6c24d6]" />
              <span className="text-xs font-bold uppercase tracking-widest text-black/60">
                What We Do
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-black leading-[1.05] uppercase relative z-10 pointer-events-none">
              <span className="block pointer-events-auto">Digital Marketing Services</span>
              <span className="block pointer-events-auto">
                We Offer in <span className="text-[#e1e61b] drop-shadow-lg italic font-black" style={{ WebkitTextStroke: "1px #282727ff" }} >Mumbai</span> &amp; <span className="text-[#6c24d6] font-black pointer-events-auto">Dubai.</span>
              </span>
            </h2>
          </div>

          {/* Symmetrical large Y2K Chrome Spike Star with revolving ring (orbit) */}
          <div className="absolute right-[-80px] md:right-[-4%] lg:right-[-6%] xl:right-[-8%] top-[-40px] sm:top-[-60px] md:top-[-80px] w-[320px] h-[340px] sm:w-[440px] sm:h-[465px] md:w-[580px] md:h-[610px] pointer-events-none select-none hidden sm:block z-20 overflow-visible">
            {/* Soft Lime/Yellow Radial Glow Backdrop behind the star */}
            <div className="absolute bottom-[15%] right-[25%] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] bg-[#e1e61b] rounded-full blur-[90px] sm:blur-[120px] opacity-[0.25] mix-blend-screen z-0 animate-pulse" />
            
            <div className="w-full h-full relative z-10">
              <Image 
                src="/y2k/chrome-star1.png" 
                alt="Premium Y2K Chrome Orbit Star"
                fill
                className="object-contain filter drop-shadow-[12px_12px_24px_rgba(0,0,0,0.15)]"
                priority
              />
            </div>
          </div>

        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] md:auto-rows-[340px] gap-4 sm:gap-6">
          {disciplines.map((disc, index) => {
            const isLight = disc.text === "black";
            const textColor = isLight ? "text-black" : "text-white";

            return (
              <motion.div
                key={index}
                className={cn(
                  "relative cursor-pointer overflow-hidden rounded-[2rem] group flex flex-col justify-end",
                  gridClasses[index]
                )}
                style={{
                  backgroundColor: disc.bg,
                  outline: disc.bg === "#ffffff" ? "1px solid #e5e7eb" : "none",
                }}
                whileHover="hover"
                initial="initial"
              >
                {/* Background Image & Animated Overlay */}
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                  <motion.img
                    src={disc.image}
                    alt={disc.title}
                    className="w-full h-full object-cover opacity-80"
                    variants={{
                      initial: { scale: 1 },
                      hover: { scale: 1.05, transition: { duration: 0.6, ease: "easeOut" } },
                    }}
                  />
                  {/* Base Gradient for text legibility */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10" />
                  
                  {/* Hover Video Overlay */}
                  <motion.video
                    src={disc.video}
                    poster={disc.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
                    variants={{
                      initial: { opacity: 0 },
                      hover: { opacity: 0.8, transition: { duration: 0.8 } }
                    }}
                  />
                </div>

                {/* Number Badge (Top Left) */}
                <div className="absolute top-6 left-6 z-10">
                  <span className={cn("text-xs font-black tracking-widest opacity-60", textColor)}>
                    {disc.number}
                  </span>
                </div>

                {/* Top Right Arrow */}
                <div className="absolute top-6 right-6 z-10">
                  <motion.div
                    variants={{
                      initial: { x: 0, y: 0, opacity: 0.6 },
                      hover: { x: 4, y: -4, opacity: 1 },
                    }}
                  >
                    <ArrowUpRight className={cn("w-6 h-6", textColor)} />
                  </motion.div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                  
                  {/* Main Title & Description */}
                  <motion.div
                    variants={{
                      initial: { y: 0 },
                      hover: { y: -10, transition: { duration: 0.4, ease: "easeOut" } }
                    }}
                  >
                    <h3 className={cn("font-black tracking-tight leading-tight text-3xl md:text-4xl italic mb-3", textColor)}>
                      {disc.title}
                    </h3>
                    <p className={cn("text-sm leading-relaxed opacity-80 max-w-md", textColor)}>
                      {disc.description}
                    </p>
                  </motion.div>

                  {/* Hidden Tags (Revealed on hover with Glassmorphism) */}
                  <motion.div
                    className="absolute bottom-6 left-6 right-6 overflow-hidden rounded-2xl backdrop-blur-md border border-white/20 bg-white/10 p-4 shadow-xl"
                    variants={{
                      initial: { opacity: 0, y: 40, pointerEvents: "none" },
                      hover: { opacity: 1, y: 0, pointerEvents: "auto", transition: { duration: 0.4, ease: "easeOut", delay: 0.1 } }
                    }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {disc.tags.map((tag) => (
                        <span
                          key={tag}
                          className={cn(
                            "text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border",
                            isLight
                              ? "border-black/20 text-black bg-black/5"
                              : "border-white/30 text-white bg-white/10"
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
