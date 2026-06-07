"use client";

import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Form Input Components ──────────────────────────────────────────────────

function Input({ label, type = "text", placeholder, required = false }: { label: string, type?: string, placeholder?: string, required?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-black uppercase tracking-widest text-white">
        {label} {required && <span className="text-[#e1e61b]">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-black border-4 border-white text-white placeholder:text-white/30 rounded-none px-5 py-4 outline-none transition-all focus:bg-white focus:text-black focus:border-[#e1e61b] focus:shadow-[8px_8px_0px_0px_#e1e61b]"
      />
    </div>
  );
}

function Select({ label, options }: { label: string, options: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-black uppercase tracking-widest text-white">
        {label}
      </label>
      <div className="relative group focus-within:text-black">
        <select
          defaultValue=""
          className="w-full appearance-none bg-black border-4 border-white text-white rounded-none px-5 py-4 outline-none transition-all focus:bg-white focus:text-black focus:border-[#e1e61b] focus:shadow-[8px_8px_0px_0px_#e1e61b] cursor-pointer"
        >
          <option value="" disabled hidden>
            Select an option...
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-black text-white">
              {opt}
            </option>
          ))}
        </select>
        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white group-focus-within:text-black">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yFace2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative w-full py-24 md:py-32 overflow-hidden bg-black border-y-4 border-white"
    >
      {/* ─── Brutalist Grid Background ─── */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0" 
        style={{ 
          backgroundImage: "linear-gradient(#fff 2px, transparent 2px), linear-gradient(90deg, #fff 2px, transparent 2px)", 
          backgroundSize: "64px 64px" 
        }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-12">
        
        {/* ─── Left: Typography & Info ─── */}
        <div className="flex-1 flex flex-col justify-center max-w-xl">
          
          <div>
            <div className="inline-flex items-center gap-2 border-4 border-white px-4 py-1.5 mb-8 bg-black text-white shadow-[4px_4px_0px_0px_rgba(225,230,27,1)]">
              <span className="text-xs font-black uppercase tracking-widest">
                Say Hi
              </span>
            </div>

            <div className="relative flex items-center justify-between gap-4 mb-8">
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] flex-1">
                Let&apos;s <span className="text-[#e1e61b]">rework</span><br />
                something<br />
                <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>big</span>
              </h2>
            </div>

            <p className="text-xl text-white font-bold uppercase leading-snug mb-12 max-w-md border-l-4 border-[#e1e61b] pl-4">
              Ready to rework your brand? Work with a digital marketing agency in Mumbai and Dubai that actually moves, from first brief to final launch. We respond within one business day.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Info rows */}
            {[
              { label: "Email", value: "reworks.agency@gmail.com" },
              { label: "Dubai", value: "Business Bay, Dubai, UAE" },
              { label: "Mumbai", value: "Bandra West, Mumbai 400050" },
              { label: "Hours", value: "Sun to Thu • 09:00 to 18:00 GST" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-4 border-white/20 group cursor-pointer hover:border-[#e1e61b] transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-12">
                  <span className="text-xs font-black uppercase tracking-widest text-white/50 w-16 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                  <span className="text-lg font-bold text-white group-hover:text-[#e1e61b] transition-colors">
                    {item.value}
                  </span>
                </div>
                <ArrowUpRight className="w-6 h-6 text-transparent group-hover:text-[#e1e61b] transition-all duration-300 hidden sm:block" strokeWidth={3} />
              </div>
            ))}

            {/* Social pills */}
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { name: "Instagram", href: "https://www.instagram.com/reworks.agency?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
                { name: "LinkedIn", href: "https://www.linkedin.com/company/reworks-marketing-agency/" },
                { name: "X", href: "https://x.com/ReWorksAgency" },
                { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100090152066732&ref=1" },
                { name: "GitHub", href: "https://github.com/reworksagency-dev" }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 px-4 py-2 border-4 border-white text-sm font-black uppercase tracking-widest text-white hover:bg-[#e1e61b] hover:text-black hover:border-[#e1e61b] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Right: Brutalist Form ─── */}
        <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0">
          <div className="relative">
            {/* Interactive Chrome Eye Sticker connected to top-right corner of contactbox */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5, filter: "brightness(1.15) drop-shadow(0 0 15px rgba(255,255,255,0.4))" }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="absolute z-30 pointer-events-auto select-none
                w-[90px] h-[90px] top-[-45px] right-[-15px] 
                sm:w-[120px] sm:h-[120px] sm:top-[-60px] sm:right-[-25px] 
                md:w-[140px] md:h-[140px] md:top-[-70px] md:right-[-30px]
                lg:w-[160px] lg:h-[160px] lg:top-[-80px] lg:right-[-40px]
                filter drop-shadow-[8px_8px_0_rgba(0,0,0,0.15)]"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <Image 
                  src="/y2k/chrome-star2.png" 
                  alt="Chrome Star Sticker"
                  width={200}
                  height={200}
                  style={{ width: "auto", height: "auto" }}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Form Container */}
            <div className="relative w-full bg-black border-4 border-white p-6 sm:p-10 flex flex-col gap-6 sm:gap-8 shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]">
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <Input label="Name" placeholder="JANE DOE" required />
                </div>
                <div className="flex-1">
                  <Input label="Email" type="email" placeholder="JANE@COMPANY.COM" required />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <Select label="Service" options={["BRANDING", "SOCIAL MEDIA", "MOTION & VIDEO", "WEB DEVELOPMENT", "FULL AUDIT"]} />
                </div>
                <div className="flex-1">
                  <Select label="Budget" options={["$5K - $10K", "$10K - $25K", "$25K - $50K", "$50K+"]} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-widest text-white">
                  Tell Us More
                </label>
                <textarea 
                  rows={4}
                  placeholder="ONE-LINER ABOUT YOUR PROJECT..."
                  className="w-full resize-none bg-black border-4 border-white text-white placeholder:text-white/30 rounded-none px-5 py-4 outline-none transition-all focus:bg-white focus:text-black focus:border-[#e1e61b] focus:shadow-[8px_8px_0px_0px_#e1e61b]"
                />
              </div>

              <div className="pt-6 mt-4 border-t-4 border-white/20 flex flex-col gap-6">
                <button
                  className="w-full flex items-center justify-center gap-4 bg-[#e1e61b] border-4 border-black px-8 py-5 text-xl font-black uppercase tracking-widest text-black shadow-[8px_8px_0px_0px_#fff] transition-transform hover:-translate-y-1 hover:translate-x-1 hover:shadow-[12px_12px_0px_0px_#fff] active:translate-y-1 active:-translate-x-1 active:shadow-[0px_0px_0px_0px_#fff]"
                >
                  PING US <ArrowUpRight className="w-8 h-8" strokeWidth={3} />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Decorative Large Chrome Sticker */}
      <motion.div 
        style={{ y: yFace2 }}
        className="absolute left-[-120px] bottom-[-40px] w-[350px] h-[350px] pointer-events-none select-none hidden 2xl:block opacity-85 z-0"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.08, rotate: 30 }}
          className="w-full h-full pointer-events-auto"
        >
          <Image 
            src="/y2k/chrome-face-2.png" 
            alt="Chrome Face Sticker"
            width={350}
            height={350}
            className="object-contain filter drop-shadow-[12px_12px_0_rgba(255,255,255,0.05)] transition-all duration-300 hover:brightness-110"
          />
        </motion.div>
      </motion.div>

    </section>
  );
}
