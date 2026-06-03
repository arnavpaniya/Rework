"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const crew = [
  {
    name: "Sneha",
    role: "CEO",
    tag: "FOUNDER",
    tagColor: "#f43f5e",
    bio: "Founding visionary. Scaling brands across Mumbai & Dubai.",
    img: "/RwTeam/Sneha-CEO.jpeg",
  },
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
          0% { transform: rotate(-3.5deg); }
          50% { transform: rotate(3.5deg); }
          100% { transform: rotate(-3.5deg); }
        }
        .crew-card {
          transition: box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 6px 6px 0px 0px rgba(255, 255, 255, 0.25);
        }
        .crew-card:hover {
          box-shadow: 12px 12px 0px 0px var(--hover-color);
          border-color: var(--hover-color) !important;
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
              className="bg-[#111] flex flex-col relative overflow-hidden crew-card group border-4 border-white"
              style={{
                width: "260px",
                height: "380px",
                transformOrigin: "top center",
                animation: "sway 4s ease-in-out infinite",
                animationDelay: `${i * -0.4}s`,
                "--hover-color": member.tagColor,
              } as React.CSSProperties}
            >
              {/* Photo */}
              <div className="relative h-56 w-full filter grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="260px"
                />
              </div>

              {/* Pin/tape visual at top center */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/30 backdrop-blur-md border border-white/20 -mt-2.5 rotate-[-2deg] z-30 shadow-sm transition-all duration-300 group-hover:bg-white/50 group-hover:rotate-[1deg]" />

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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
