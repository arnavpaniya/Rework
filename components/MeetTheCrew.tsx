"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const crew = [
  {
    name: "Aryan Shah",
    role: "Creative Director",
    tag: "DIRECTOR",
    tagColor: "#6c24d6",
    bio: "Leads the vision. Turns chaos into brand clarity.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Priya Nair",
    role: "Brand Strategist",
    tag: "STRATEGY",
    tagColor: "#e1e61b",
    tagText: "#000",
    bio: "Builds frameworks that make brands impossible to ignore.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Zaid Al-Rashid",
    role: "Motion Designer",
    tag: "MOTION",
    tagColor: "#0ea5e9",
    bio: "If it doesn't move people, he makes it move.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Meera Kapoor",
    role: "Social Media Lead",
    tag: "SOCIAL",
    tagColor: "#ec4899",
    bio: "Grows communities with content that actually lands.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Rahul Verma",
    role: "Lead Developer",
    tag: "DEV",
    tagColor: "#22c55e",
    bio: "Ships fast. Breaks nothing. Builds everything.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  },
];

// Duplicate the array to allow for infinite wrapping
const extendedCrew = [...crew, ...crew];

const getWaveY = (x: number, t: number) => {
  const time = t * 0.001;
  const wave1 = Math.sin(x * 0.002 - time * 1.5) * 45;
  const wave2 = Math.sin(x * 0.0035 + time * 0.8) * 25;
  const wave3 = Math.sin(x * 0.001 + time * 2) * 15;
  return wave1 + wave2 + wave3 + 120;
};

// ─── Component ────────────────────────────────────────────────────────────────

export function MeetTheCrew() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const stringsRef = useRef<(SVGLineElement | null)[]>([]);

  useEffect(() => {
    let animationId: number;
    const speedX = 40; // Pixels per second horizontal scroll

    const animate = (timestamp: number) => {
      const timeSec = timestamp * 0.001;
      const width = containerRef.current?.clientWidth || window.innerWidth;
      
      // Draw SVG Path
      let pathD = "";
      const points = 150;
      for (let i = -10; i <= points + 10; i++) {
        const x = (i / points) * width;
        const y = getWaveY(x, timestamp);
        if (i === -10) pathD += `M ${x} ${y} `;
        else pathD += `L ${x} ${y} `;
      }
      if (pathRef.current) {
        pathRef.current.setAttribute("d", pathD);
      }

      // Position Cards
      const spacing = 400;
      const totalCards = extendedCrew.length;
      const totalW = totalCards * spacing; // 4000px

      extendedCrew.forEach((_, idx) => {
        let targetX = (spacing * idx + timeSec * speedX) % totalW;
        targetX -= spacing; // Start slightly offscreen to the left

        // The card is 260px wide, so its center is targetX + 130
        const centerX = targetX + 130;
        const y = getWaveY(centerX, timestamp);

        const stringElem = stringsRef.current[idx];
        if (stringElem) {
          stringElem.setAttribute("x1", centerX.toString());
          stringElem.setAttribute("y1", y.toString());
          stringElem.setAttribute("x2", centerX.toString());
          stringElem.setAttribute("y2", (y + 50).toString());
        }

        const cardElem = cardsRef.current[idx];
        if (cardElem) {
          cardElem.style.transform = `translate(${targetX}px, ${y + 50}px)`;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full relative overflow-hidden border-t border-black/10"
      style={{ backgroundColor: "#111111", minHeight: "800px" }}
      id="team"
    >
      <style>{`
        @keyframes sway {
          0% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
          100% { transform: rotate(-3deg); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 pt-24 md:pt-32 relative z-20 pointer-events-none">
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
              Meet the <span className="text-[#e1e61b] italic">crew.</span>
            </h2>
          </div>
          <p className="text-base text-white/50 max-w-xs font-medium leading-relaxed">
            38 humans. One obsession. Making brands that actually work.
          </p>
        </motion.div>
      </div>

      {/* Physics Container */}
      <div className="absolute inset-0 top-[200px] pointer-events-none">
        {/* Thread SVG */}
        <svg className="absolute inset-0 w-full h-[300px] overflow-visible">
          <path
            ref={pathRef}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            fill="none"
          />
          {extendedCrew.map((_, i) => (
            <line
              key={`string-${i}`}
              ref={(el) => { stringsRef.current[i] = el; }}
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          ))}
        </svg>

        {/* Cards */}
        {extendedCrew.map((member, i) => (
          <div
            key={i}
            ref={(el) => { cardsRef.current[i] = el; }}
            className="absolute top-0 left-0 pointer-events-auto"
            style={{ willChange: "transform" }}
          >
            <div
              className="bg-white flex flex-col relative overflow-hidden"
              style={{
                width: "260px",
                height: "380px",
                transformOrigin: "top center",
                animation: "sway 4s ease-in-out infinite",
                animationDelay: `${i * -0.4}s`,
              }}
            >
              {/* Photo */}
              <div className="relative h-56 w-full filter grayscale hover:grayscale-0 transition-all duration-500">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                  sizes="260px"
                />
              </div>

              {/* Pin/tape visual at top center */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#e1e61b] rounded-full shadow-sm -mt-2 border-2 border-black" />

              {/* Tag pill */}
              <div
                className="absolute top-3 right-3 px-2 py-1 text-[9px] font-black uppercase tracking-widest backdrop-blur-md"
                style={{
                  backgroundColor: member.tagColor,
                  color: (member as { tagText?: string }).tagText ?? "#fff",
                }}
              >
                {member.tag}
              </div>

              {/* Details */}
              <div
                className="p-5 flex-1 flex flex-col justify-between"
                style={{ backgroundColor: "#111", color: "white" }}
              >
                <div>
                  <h3 className="font-black text-xl tracking-tight">{member.name}</h3>
                  <p className="text-[#e1e61b] text-[10px] font-bold uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </div>
                <p className="text-sm font-medium text-white/60 leading-tight">
                  {member.bio}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
