"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";


// ─── Data ─────────────────────────────────────────────────────────────────────

const crew = [
  // {
  //   name: "Sneha",
  //   role: "CEO",
  //   tag: "FOUNDER",
  //   tagColor: "#f43f5e",
  //   bio: "Founding visionary. Scaling brands across Mumbai & Dubai.",
  //   img: "/RwTeam/Sneha-CEO.jpeg",
  // },
  {
    name: "Renzy",
    role: "Content Lead",
    tag: "CONTENT",
    tagColor: "#e1e61b",
    tagText: "#000",
    bio: "Writes copy that sells. Native Gen Z culture translator.",
    img: "/RwTeam/Renzy-Content Lead.PNG",
  },
  {
    name: "Isma",
    role: "Designer",
    tag: "DESIGN",
    tagColor: "#ec4899",
    bio: "Crafts scroll-stopping visuals. Brutalist aesthetics only.",
    img: "/RwTeam/Isma - Designer.jpeg",
  },
  {
    name: "Abhishek",
    role: "Video Editor",
    tag: "VIDEO",
    tagColor: "#6c24d6",
    bio: "Cuts out the noise. Tells stories that hook at first glance.",
    img: "/RwTeam/Abhishek-Video Editor.png",
  },
  {
    name: "Sadia",
    role: "Social Media Manager",
    tag: "SOCIAL",
    tagColor: "#a855f7",
    bio: "Builds hyper-active communities. Turns views into brand loyalty.",
    img: "/RwTeam/Sadia-Social Media Manager.jpeg",
  },
  {
    name: "Asma",
    role: "SEO Specialist",
    tag: "SEO",
    tagColor: "#22c55e",
    bio: "Commands search results. Gets brands seen on the first page.",
    img: "/RwTeam/Asma-SEO Specialist.jpeg",
    imgScale: "object-top scale-100 group-hover:scale-105",
    photoBg: "#ffffff",
  },
  {
    name: "Haneena",
    role: "Ops Lead",
    tag: "OPS",
    tagColor: "#0ea5e9",
    bio: "Keeps the engine clean. Runs campaigns on absolute clockwork.",
    img: "/RwTeam/Haneena-Ops lead.png",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function MeetTheCrew() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPageScrolling, setIsPageScrolling] = useState(false);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const [isTapPaused, setIsTapPaused] = useState(false);

  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tapTimerRef = useRef<NodeJS.Timeout | null>(null);

  const DURATION = 1800;

  // Handle scroll auto-pause and clear timeout on unmount
  useEffect(() => {
    const handlePageScroll = () => {
      setIsPageScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsPageScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handlePageScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handlePageScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
    };
  }, []);

  const isProgressing = !isPageScrolling && !isHoverPaused && !isTapPaused;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isProgressing) {
      interval = setInterval(() => {
        setActiveIndex((idx) => idx + 1);
      }, DURATION);
    }
    return () => clearInterval(interval);
  }, [isProgressing]);

  const handleMouseEnter = () => {
    if (typeof window !== "undefined") {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      if (!isTouch) {
        setIsHoverPaused(true);
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHoverPaused(false);
  };

  const handleMarqueeClick = (e: React.MouseEvent) => {
    if (typeof window !== "undefined") {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      if (isTouch) {
        setIsTapPaused((prev) => {
          const next = !prev;
          if (next) {
            if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
            tapTimerRef.current = setTimeout(() => {
              setIsTapPaused(false);
            }, 4000);
          } else {
            if (tapTimerRef.current) {
              clearTimeout(tapTimerRef.current);
              tapTimerRef.current = null;
            }
          }
          return next;
        });
      }
    }
  };

  const getOffset = (i: number, active: number, num: number) => {
    const normalizedActive = ((active % num) + num) % num;
    let offset = (i - normalizedActive + num) % num;
    if (offset > num / 2) offset -= num;
    return offset;
  };

  const getXCalc = (offset: number) => {
    const abs = Math.abs(offset);
    if (abs === 0) return "0px";
    
    // Multipliers for scale [1, 0.85, 0.7, 0.7, ...]
    const multipliers = [0, 0.9, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6];
    const mult = multipliers[abs] || (4.6 + (abs - 7) * 0.6);
    const sign = offset > 0 ? 1 : -1;
    return `calc(${sign} * (${mult} * var(--card-width) + ${abs * 24}px))`;
  };

  return (
    <section
      className="w-full relative overflow-hidden border-t border-black/10 py-24 md:py-32"
      style={{ backgroundColor: "#111111" }}
      id="team"
    >
      <style>{`
        .crew-card {
          transition: box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 6px 6px 0px 0px rgba(255, 255, 255, 0.25);
        }
        .crew-card:hover {
          box-shadow: 12px 12px 0px 0px var(--hover-color);
          border-color: var(--hover-color) !important;
          transform: translateY(-4px);
        }
        .team-carousel-container {
          --card-width: 260px;
        }
        @media (min-width: 768px) {
          .team-carousel-container {
            --card-width: 300px;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#e1e61b] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/50">
                The Team
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Meet the <span className="text-[#e1e61b] italic">crew</span>
            </h2>
          </div>
          <p className="text-base text-white/50 max-w-xs font-medium leading-relaxed">
            One Team. One obsession. Making brands that actually work.
          </p>
        </motion.div>
      </div>

      {/* 3D Spring-Animated Carousel Container */}
      <div 
        className="team-carousel-container relative w-full h-[450px] flex items-center justify-center overflow-hidden my-12"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleMarqueeClick}
      >
        {/* Central glow behind active card */}
        <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-[#e1e61b]/10 blur-[60px] pointer-events-none" />

        {crew.map((member, i) => {
          const offset = getOffset(i, activeIndex, crew.length);
          const isCenter = offset === 0;
          const scale = isCenter ? 1 : Math.max(0.6, 1 - Math.abs(offset) * 0.2);
          const x = getXCalc(offset);
          const opacity = Math.abs(offset) > 2 ? 0 : 1;
          const zIndex = 10 - Math.abs(offset);

          return (
            <motion.div
              key={i}
              className="absolute w-[var(--card-width)] flex-shrink-0 cursor-pointer pointer-events-auto"
              initial={false}
              animate={{
                x,
                scale,
                opacity,
                zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 14,
                mass: 1.6,
              }}
            >
              <div
                className="bg-[#111] flex flex-col relative overflow-hidden crew-card group border-4 border-white w-full"
                style={{
                  height: "380px",
                  "--hover-color": member.tagColor,
                } as React.CSSProperties}
              >
                {/* Photo */}
                <div
                  className="relative h-56 w-full filter grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden"
                  style={{ backgroundColor: (member as any).photoBg || "#111" }}
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-500",
                      !(member as any).imgScale && "object-center scale-100 group-hover:scale-105",
                      (member as any).imgScale
                    )}
                    sizes="(max-width: 640px) 260px, 300px"
                  />
                </div>

                {/* Tag pill */}
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 text-[9px] font-black uppercase tracking-widest border-2 border-black z-20 shadow-[2px_2px_0_0_#000]"
                  style={{
                    backgroundColor: member.tagColor,
                    color: (member as { tagText?: string }).tagText ?? "#fff",
                  }}
                >
                  {member.tag}
                </div>

                {/* Details */}
                <div
                  className="p-5 flex-1 flex flex-col justify-between border-t-4 border-white transition-all duration-300 group-hover:border-t-[var(--hover-color)] bg-[#111]"
                >
                  <div>
                    <h3 className="font-black text-xl tracking-tight text-white transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                      {member.name}
                    </h3>
                    <p className="text-[#e1e61b] text-[10px] font-black uppercase tracking-widest mt-1">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-white/60 leading-tight transition-colors duration-300 group-hover:text-white/80">
                    {member.bio}
                  </p>
                </div>

                {/* Dark overlay for non-center items to create focus */}
                {!isCenter && (
                  <motion.div 
                    className="absolute inset-0 bg-black/40 pointer-events-none z-30"
                    animate={{ opacity: Math.abs(offset) * 0.3 }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
