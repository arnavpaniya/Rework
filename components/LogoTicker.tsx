"use client";

import { motion } from "framer-motion";

const logos = [
  "stripe",
  "zoom",
  "airbnb",
  "ATLASSIAN",
  "Dropbox",
  "duolingo",
  "GitHub",
  "Microsoft",
  "NETFLIX",
  "The New York Times",
  "Pentagram"
];

export function LogoTicker() {
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <div className="bg-[#e1e61b] py-4 overflow-hidden flex w-full border-y-4 border-black shadow-[0_8px_0_0_#000] relative z-10">
      <motion.div
        className="flex whitespace-nowrap gap-12 items-center"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 70,
        }}
      >
        {allLogos.map((logo, i) => (
          <span key={i} className="text-xl md:text-2xl font-black text-black shrink-0 px-6 uppercase tracking-[0.2em]">
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
