"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
  navItems,
  className,
  logo,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
  logo?: React.ReactNode;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [time, setTime] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("/#home");

  React.useEffect(() => {
    setActiveLink(pathname + (window.location.hash || ""));
    const handleHashChange = () => {
      setActiveLink(pathname + window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB")); // 24-hour format
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Hide navbar when near the bottom (in the footer area)
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number" && typeof window !== "undefined") {
      const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 800;
      setVisible(!isNearBottom);
    }
  });

  // Close mobile menu on scroll hide
  React.useEffect(() => {
    if (!visible) setMobileOpen(false);
  }, [visible]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: -80, scale: 0.95 }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
            scale: visible ? 1 : 0.98,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
            mass: 0.8,
          }}
          className={cn(
            "fixed inset-x-0 top-4 sm:top-6 z-[5000] mx-auto flex w-[95%] sm:w-11/12 max-w-7xl items-center gap-4 sm:gap-6",
            className
          )}
        >
          {/* Navbar Box */}
          <div
            className="
              relative
              flex w-full items-center justify-between
              rounded-none
              border-2 sm:border-4 border-black
              bg-white
              px-3 sm:px-4 py-2
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              transition-all duration-500 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]
            "
          >
            {/* Scroll Progress Bar - wrapped in an overflow-hidden container */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="absolute top-0 left-0 right-0 h-[4px] bg-[#6c24d6] origin-left"
              />
            </div>

            {/* Logo Section */}
            {logo && (
              <div className="flex-shrink-0 origin-left scale-[0.6] sm:scale-75 md:scale-90 mr-4">
                {logo}
              </div>
            )}
            
            {/* Navigation Links — hidden below lg */}
            <div className="hidden lg:flex items-center gap-1 pl-2" onMouseLeave={() => setHoveredIndex(null)}>
              {navItems.map((navItem, idx: number) => {
                // If it's the home page, default to #home if no hash
                const isHomePath = pathname === "/";
                const isItemHome = navItem.link === "/#home";
                const isMatch = activeLink === navItem.link || (isHomePath && activeLink === "/" && isItemHome);
                const isServices = navItem.name === "SERVICES";
                
                return (
                  <div key={`link-${idx}`} className="relative group">
                    <Link
                      href={navItem.link}
                      onMouseEnter={() => {
                        setHoveredIndex(idx);
                      }}
                      className={cn(
                        "relative flex items-center gap-1 px-5 py-2 text-[13px] font-black uppercase tracking-wider transition-colors duration-300 z-10",
                        isMatch || hoveredIndex === idx
                          ? "text-white"
                          : "text-black"
                      )}
                    >
                      {isMatch && (
                        <div className="absolute inset-0 bg-black -z-20" />
                      )}
                      {hoveredIndex === idx && !isMatch && (
                        <motion.div
                          layoutId="nav-hover"
                          className="absolute inset-0 bg-black -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                      {navItem.name}
                      {isServices && (
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 opacity-60">
                          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </Link>

                    {/* Brutalist Dropdown Menu for SERVICES */}
                    {isServices && (
                      <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                        <div className="w-[300px] bg-[#f8f8f5] border-[3px] border-black rounded-xl shadow-[6px_6px_0px_#6c24d6] overflow-hidden flex flex-col p-3 gap-1">
                          {[
                            { name: "BRANDING & DESIGN", id: "branding-design" },
                            { name: "CREATIVES & CONTENT", id: "creatives-content" },
                            { name: "VIDEO, ANIMATION & MOTION", id: "video-animation-motion" },
                            { name: "SOCIAL MEDIA MARKETING", id: "social-media-marketing" },
                            { name: "DIGITAL DEVELOPMENT", id: "digital-development" },
                          ].map((service) => (
                            <Link 
                              key={service.id} 
                              href={`/services#${service.id}`} 
                              className="flex items-center justify-between px-4 py-3 text-[12px] font-black uppercase tracking-widest text-black hover:bg-black/5 rounded-lg transition-colors group/item"
                            >
                              <span>{service.name}</span>
                              <span className="opacity-60 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all">→</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA + Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3 pr-1 ml-auto">
              <div className="hidden sm:flex items-center gap-2 border-2 border-black bg-white px-3 sm:px-4 py-1.5">
                <div className="h-2 w-2 rounded-full bg-[#6c24d6] animate-pulse" />
                <span className="text-[11px] sm:text-[13px] font-black uppercase tracking-widest text-black">{time || "00:00:00"}</span>
              </div>
              <button 
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("open-lead-popup"));
                  }
                }}
                className="hidden sm:block border-2 border-black bg-[#e1e61b] px-4 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-[13px] font-black uppercase tracking-wider text-black transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:shadow-none text-center"
              >
                Free Brand Audit
              </button>

              {/* Hamburger — visible below lg */}
              <button
                className="lg:hidden flex items-center justify-center p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Mobile Menu Overlay (Proper Sidebar) ───────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[6000] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-[#2a0845]/40 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white border-l-4 border-black p-6 flex flex-col overflow-hidden"
            >
              {/* Top Header of Sidebar */}
              <div className="flex items-center justify-between mb-10">
                <div className="scale-75 origin-left" onClick={() => setMobileOpen(false)}>
                  {logo}
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center p-2 border-2 border-black hover:bg-black hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="relative z-10 flex flex-col gap-2 flex-1">
                {navItems.map((navItem, idx) => {
                  const isActive = activeLink === navItem.link;
                  return (
                    <motion.a
                      key={`mobile-${idx}`}
                      href={navItem.link}
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className={cn(
                        "flex items-center justify-between px-4 py-4 border-2 border-transparent text-sm font-black uppercase tracking-widest transition-colors duration-200",
                        isActive
                          ? "bg-black text-white border-black"
                          : "text-black hover:border-black"
                      )}
                    >
                      <span>{navItem.name}</span>
                    </motion.a>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="relative z-10 mt-auto pt-6 border-t-4 border-black flex flex-col gap-4">
                <div className="flex items-center justify-center gap-2 border-2 border-black bg-white px-4 py-3">
                  <div className="h-2 w-2 rounded-full bg-[#6c24d6] animate-pulse" />
                  <span className="text-xs font-black uppercase text-black tracking-widest">{time || "00:00:00"}</span>
                </div>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(new CustomEvent("open-lead-popup"));
                    }
                  }}
                  className="w-full border-2 border-black bg-[#e1e61b] px-6 py-4 text-xs font-black uppercase tracking-wider text-black text-center transition-all active:translate-y-[2px] shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]"
                >
                  Free Brand Audit
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
