"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

const QUICK_LINKS = [
  { name: "About", href: "#about" },
  { name: "Case Studies", href: "#work" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const SIGNALS = [
  { name: "Testimonials", href: "#testimonials" },
  { name: "Newsletter", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
];

function useLiveTime(timeZone: string) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setTime(formatter.format(new Date()));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);
  return time;
}

export function Footer() {
  const dubaiTime = useLiveTime("Asia/Dubai");
  const mumbaiTime = useLiveTime("Asia/Kolkata");

  return (
    <footer className="relative w-full bg-white border-t-4 border-black overflow-hidden flex flex-col">
      {/* ─── Mega Marquee ─── */}
      <div className="relative w-full overflow-hidden border-b-4 border-black bg-[#e1e61b] flex items-center py-4 sm:py-6">
        <motion.div 
          className="flex whitespace-nowrap text-black font-black text-6xl sm:text-8xl md:text-[10rem] leading-none tracking-tighter items-center uppercase"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          <span className="pr-12">REWORKS AGENCY •</span>
          <span className="pr-12">REWORKS AGENCY •</span>
        </motion.div>
      </div>

      <div className="w-full flex flex-col lg:flex-row divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-black border-b-4 border-black bg-white">
        
        {/* ─── Left Panel: Branding & CTA ─── */}
        <div className="flex-1 p-8 sm:p-12 md:p-16 flex flex-col items-start justify-between">
          <div className="w-full flex flex-col gap-6">
            <div className="scale-75 sm:scale-100 origin-left">
              <Logo />
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9]">
              Let's Break <br/>
              The <span className="text-[#6c24d6]">Internet.</span>
            </h2>
            <p className="text-black text-xl font-bold uppercase leading-snug max-w-sm border-l-4 border-black pl-4">
              A Gen Z-led digital marketing agency in Mumbai & Dubai. Serving FMCG, entertainment & hospitality brands across India and the UAE.
            </p>
          </div>

          <Link href="#contact" className="mt-12 inline-flex items-center gap-4 bg-black border-4 border-black px-8 py-5 text-xl font-black uppercase tracking-widest text-white shadow-[8px_8px_0px_0px_#e1e61b] transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[12px_12px_0px_0px_#e1e61b] active:translate-y-1 active:-translate-x-1 active:shadow-[0px_0px_0px_0px_#e1e61b]">
            Start a Project <ArrowRight className="w-6 h-6 text-[#e1e61b]" strokeWidth={3} />
          </Link>
        </div>

        {/* ─── Right Panel: Grid Links ─── */}
        <div className="flex-1 flex flex-col sm:flex-row divide-y-4 sm:divide-y-0 sm:divide-x-4 divide-black">
          
          <div className="flex-1 p-8 sm:p-12 md:p-16 flex flex-col gap-8 bg-[#f5f5f0]">
            <h3 className="text-black font-black uppercase tracking-widest text-sm flex items-center gap-3 border-4 border-black bg-white px-4 py-2 shadow-[4px_4px_0_0_#000] w-fit">
              <div className="w-3 h-3 bg-[#e1e61b] border-2 border-black" />
              Explore
            </h3>
            <ul className="flex flex-col gap-6">
              {QUICK_LINKS.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-4 text-2xl font-black uppercase tracking-tighter text-black hover:text-[#6c24d6] transition-colors">
                    <span className="w-0 h-1 bg-black transition-all duration-300 group-hover:w-8" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 p-8 sm:p-12 md:p-16 flex flex-col gap-8 bg-white">
            <h3 className="text-black font-black uppercase tracking-widest text-sm flex items-center gap-3 border-4 border-black bg-[#e1e61b] px-4 py-2 shadow-[4px_4px_0_0_#000] w-fit">
              <div className="w-3 h-3 bg-white border-2 border-black" />
              Connect
            </h3>
            <ul className="flex flex-col gap-6">
              {SIGNALS.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-4 text-2xl font-black uppercase tracking-tighter text-black hover:text-[#6c24d6] transition-colors">
                    <span className="w-0 h-1 bg-black transition-all duration-300 group-hover:w-8" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center bg-black text-white px-6 py-4 gap-4">
        <div className="text-xs font-black uppercase tracking-widest text-center sm:text-left">
          © {new Date().getFullYear()} REWORKS AGENCY • BUILT DIFFERENT
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="flex items-center gap-2 border-2 border-white px-3 py-1 text-xs font-black tracking-widest">
            DXB <span className="font-mono text-[#e1e61b]">{dubaiTime || "..."}</span>
          </div>
          <div className="flex items-center gap-2 border-2 border-white px-3 py-1 text-xs font-black tracking-widest">
            BOM <span className="font-mono text-[#e1e61b]">{mumbaiTime || "..."}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
