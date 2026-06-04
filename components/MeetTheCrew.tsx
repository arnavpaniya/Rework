"use client";

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
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
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

      {/* Horizontally Scrollable Cards Container */}
      <div className="w-full overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth flex gap-6 md:gap-8 pb-12 select-none px-6 md:px-12 scroll-px-6 md:scroll-px-12 xl:px-[calc((100vw-1280px)/2+24px)] xl:scroll-px-[calc((100vw-1280px)/2+24px)]">
        {crew.map((member, i) => (
          <div
            key={i}
            className="flex-shrink-0 snap-center w-[80vw] sm:w-[260px]"
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
                  sizes="(max-width: 640px) 80vw, 260px"
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
