"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

const QUICK_LINKS = [
  { name: "About", href: "/#about" },
  { name: "Case Studies", href: "/case-study" },
  { name: "Team", href: "/#team" },
  { name: "Contact", href: "/#contact" },
];

const SIGNALS = [
  { name: "Instagram", href: "https://www.instagram.com/reworks.agency?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/reworks-marketing-agency/" },
  { name: "X", href: "https://x.com/ReWorksAgency" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100090152066732&ref=1" },
  { name: "GitHub", href: "https://github.com/reworksagency-dev" },
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
      <div className="relative w-full overflow-hidden border-b-4 border-black bg-[#e1e61b] flex items-center py-2 sm:py-3">
        <motion.div 
          className="flex whitespace-nowrap text-black font-black text-xl sm:text-4xl md:text-5xl leading-none tracking-tighter items-center uppercase"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="pr-12 shrink-0">REWORKS AGENCY •</span>
          ))}
        </motion.div>
      </div>

      <div className="w-full flex flex-col lg:flex-row divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-black border-b-4 border-black bg-white">
        
        {/* ─── Left Panel: Branding & CTA ─── */}
        <div className="flex-1 p-4 sm:p-8 md:p-10 flex flex-col items-start justify-between">
          <div className="w-full flex flex-col gap-3 sm:gap-4">
            <div className="scale-[0.65] sm:scale-90 origin-left">
              <Logo />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tighter text-black uppercase leading-[0.9]">
              Let's Break <br/>
              The <span className="text-[#6c24d6]">Internet</span>
            </h2>
            <p className="text-black/80 text-xs sm:text-sm font-semibold normal-case leading-relaxed max-w-sm border-l-4 border-black pl-3">
              A Gen Z-led digital marketing agency in Mumbai & Dubai. Serving FMCG, entertainment & hospitality brands across India and the UAE.
            </p>
          </div>

          <Link href="#contact" className="mt-6 sm:mt-8 inline-flex items-center gap-2 sm:gap-3 bg-black border-4 border-black px-4 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-black uppercase tracking-widest text-white shadow-[4px_4px_0px_0px_#e1e61b] sm:shadow-[6px_6px_0px_0px_#e1e61b] transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0px_0px_#e1e61b] active:translate-y-1 active:-translate-x-1 active:shadow-[0px_0px_0px_0px_#e1e61b]">
            Start a Project <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#e1e61b]" strokeWidth={3} />
          </Link>
        </div>

        {/* ─── Right Panel: Grid Links ─── */}
        <div className="flex-1 flex flex-col sm:flex-row divide-y-4 sm:divide-y-0 sm:divide-x-4 divide-black">
          
          <div className="flex-1 p-4 sm:p-8 md:p-10 flex flex-col gap-4 sm:gap-6 bg-[#f5f5f0]">
            <h3 className="text-black font-black uppercase tracking-widest text-[10px] sm:text-xs flex items-center gap-2 border-2 border-black bg-white px-2 py-0.5 sm:px-3 sm:py-1 shadow-[2px_2px_0_0_#000] w-fit">
              <div className="w-2 h-2 bg-[#e1e61b] border-2 border-black" />
              Explore
            </h3>
            <ul className="flex flex-col gap-2.5 sm:gap-4">
              {QUICK_LINKS.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-2 sm:gap-3 text-sm sm:text-lg font-black uppercase tracking-tighter text-black hover:text-[#6c24d6] transition-colors">
                    <span className="w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4 sm:group-hover:w-6" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 p-4 sm:p-8 md:p-10 flex flex-col gap-4 sm:gap-6 bg-white">
            <h3 className="text-black font-black uppercase tracking-widest text-[10px] sm:text-xs flex items-center gap-2 border-2 border-black bg-[#e1e61b] px-2 py-0.5 sm:px-3 sm:py-1 shadow-[2px_2px_0_0_#000] w-fit">
              <div className="w-2 h-2 bg-white border-2 border-black" />
              Connect
            </h3>
            <ul className="flex flex-col gap-2.5 sm:gap-4">
              {SIGNALS.map(link => {
                const isExternal = link.href.startsWith("http");
                const LinkComponent = isExternal ? "a" : Link;
                return (
                  <li key={link.name}>
                    <LinkComponent 
                      href={link.href} 
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-2 sm:gap-3 text-sm sm:text-lg font-black uppercase tracking-tighter text-black hover:text-[#6c24d6] transition-colors"
                    >
                      <span className="w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-4 sm:group-hover:w-6" />
                      {link.name}
                    </LinkComponent>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center bg-black text-white px-4 py-3 sm:px-6 sm:py-4 gap-3 sm:gap-4">
        <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-center sm:text-left">
          © {new Date().getFullYear()} REWORKS AGENCY • BUILT DIFFERENT
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5 border-2 border-white px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-black tracking-widest">
            DXB <span className="font-mono text-[#e1e61b]">{dubaiTime || "..."}</span>
          </div>
          <div className="flex items-center gap-1.5 border-2 border-white px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-black tracking-widest">
            BOM <span className="font-mono text-[#e1e61b]">{mumbaiTime || "..."}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
