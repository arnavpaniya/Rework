"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";
import { Tape, Badge, Doodle } from "./ui/mixed-media";

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

// Reusable Clay Button
function ClayButton({ children, className, href }: { children: React.ReactNode, className?: string, href?: string }) {
  const content = (
    <div className={cn(
      "relative px-6 py-3 rounded-full font-bold text-sm tracking-wide text-black transition-all duration-300",
      "bg-[#C4B5FD]", // darker lavender
      "shadow-[6px_6px_12px_#a79ac7,-6px_-6px_12px_#e1d0ff,inset_2px_2px_4px_#e1d0ff,inset_-2px_-2px_4px_#a79ac7]",
      "hover:shadow-[inset_6px_6px_12px_#a79ac7,inset_-6px_-6px_12px_#e1d0ff]",
      "active:scale-95",
      "flex items-center gap-2",
      className
    )}>
      {children}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return <button>{content}</button>;
}

// Reusable Clay Card
function ClayCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(
      "rounded-[2rem]",
      "bg-[#C4B5FD]",
      "shadow-[10px_10px_20px_#a79ac7,-10px_-10px_20px_#e1d0ff,inset_2px_2px_5px_#e1d0ff,inset_-2px_-2px_5px_#a79ac7]",
      className
    )}>
      {children}
    </div>
  );
}

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
    <footer className="relative w-full bg-white pb-4 pt-8 px-4 sm:px-6 overflow-hidden">
      {/* ─── Main Footer Container (The big clay block) ─── */}
      <div className="relative max-w-7xl mx-auto rounded-[2.5rem] bg-[#C4B5FD] shadow-[15px_15px_30px_#d1d1d1,-15px_-15px_30px_#ffffff] p-6 md:p-10 lg:p-16 overflow-hidden">
        
        {/* Background Decorative Doodles & Tapes */}
        <div className="absolute top-10 right-10 md:top-20 md:right-20 pointer-events-none">
          <Doodle type="star" color="#FF007F" className="w-16 h-16 md:w-24 md:h-24 opacity-60" delay={0} />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-16 pointer-events-none z-30">
          <Tape color="pink" text="WE MAKE NOISE" rotate={12} className="opacity-80 scale-90 md:scale-100" />
        </div>
        <div className="absolute top-20 left-10 md:top-32 md:left-16 pointer-events-none z-20">
          <Badge text="DIGITAL" subtext="BORN" rotate={-15} />
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Brand & Headline */}
          <div className="md:col-span-12 lg:col-span-7 flex flex-col items-start">
            <div className="mb-8 scale-[0.8] md:scale-90 origin-left">
              <Logo />
            </div>
            
            <h2 className="font-heading text-5xl md:text-6xl lg:text-[5.5rem] leading-[0.9] text-black uppercase tracking-tighter mb-6">
              Let's Break <br/>
              The <span className="text-[#4F14E1]">Internet.</span>
            </h2>

            <p className="text-black/60 text-lg md:text-xl font-medium max-w-md mb-10">
              A Gen Z-led digital marketing agency in Dubai. We don't do boring. 
            </p>

            <div className="flex flex-wrap gap-4">
              <ClayButton href="#contact">
                Start a Project <ArrowRight className="w-4 h-4 text-[#FF007F]" />
              </ClayButton>
            </div>
          </div>

          {/* Links Grid inside Clay Cards */}
          <div className="md:col-span-12 lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-8">
            
            <ClayCard className="p-6 sm:p-8 flex flex-col gap-6">
              <h3 className="text-black font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_8px_#FFD700]" />
                Explore
              </h3>
              <ul className="flex flex-col gap-4">
                {QUICK_LINKS.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="relative group font-medium text-black/70 hover:text-[#4F14E1] transition-colors flex items-center gap-2">
                      <span className="w-0 h-0.5 bg-[#4F14E1] transition-all duration-300 group-hover:w-4" />
                      {link.name}
                      <svg className="absolute -inset-y-2 -inset-x-4 w-[calc(100%+32px)] h-[calc(100%+16px)] pointer-events-none stroke-[#4F14E1] stroke-2 fill-transparent opacity-50" viewBox="0 0 100 30" preserveAspectRatio="none">
                        <motion.path 
                          d="M5,25 Q50,5 95,25"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileHover={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </ClayCard>

            <ClayCard className="p-6 sm:p-8 flex flex-col gap-6">
              <h3 className="text-black font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                Connect
              </h3>
              <ul className="flex flex-col gap-4">
                {SIGNALS.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="relative group font-medium text-black/70 hover:text-[#FF007F] transition-colors flex items-center gap-2">
                      <span className="w-0 h-0.5 bg-[#FF007F] transition-all duration-300 group-hover:w-4" />
                      {link.name}
                      <svg className="absolute -inset-y-2 -inset-x-4 w-[calc(100%+32px)] h-[calc(100%+16px)] pointer-events-none stroke-[#FF007F] stroke-2 fill-transparent opacity-50" viewBox="0 0 100 30" preserveAspectRatio="none">
                        <motion.path 
                          d="M5,5 Q50,25 95,5"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileHover={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </ClayCard>

          </div>
        </div>

        {/* ─── 3D Marquee Divider ─── */}
        <div className="relative w-[110%] -ml-[5%] h-12 sm:h-16 overflow-hidden mb-8 flex items-center bg-black rotate-[-2deg] shadow-2xl border-y-2 border-[#e1e61b]">
          <motion.div 
            className="flex whitespace-nowrap text-white font-heading text-3xl sm:text-4xl uppercase tracking-tighter items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <span className="pr-4"> REVOLUTIONIZE • NO BAKWAAS • GEN Z DRIVEN • CREATIVE DIL • STRATEGIC DIMAG •</span>
            <span className="pr-4"> REVOLUTIONIZE • NO BAKWAAS • GEN Z DRIVEN • CREATIVE DIL • STRATEGIC DIMAG •</span>
          </motion.div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 border-t-2 border-white/40">
          <div className="text-[10px] font-bold uppercase tracking-widest text-black/50 text-center lg:text-left">
            © {new Date().getFullYear()} REWORKS AGENCY • BUILT DIFFERENT
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <ClayButton className="px-4 py-2 text-[10px] sm:text-xs">
              DUBAI <span className="font-mono text-black/60 ml-2">{dubaiTime || "..."}</span> <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse ml-1" />
            </ClayButton>
            <ClayButton className="px-4 py-2 text-[10px] sm:text-xs">
              MUMBAI <span className="font-mono text-black/60 ml-2">{mumbaiTime || "..."}</span> <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse ml-1" />
            </ClayButton>
          </div>
        </div>

      </div>
    </footer>
  );
}
