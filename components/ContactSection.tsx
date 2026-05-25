"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

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
  return (
    <section 
      id="contact" 
      className="relative w-full py-24 md:py-32 overflow-hidden bg-black border-y-4 border-white"
    >
      {/* ─── Brutalist Grid Background ─── */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
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

            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-8">
              Let&apos;s <span className="text-[#e1e61b]">rework</span><br />
              something<br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>big.</span>
            </h2>

            <p className="text-xl text-white font-bold uppercase leading-snug mb-12 max-w-md border-l-4 border-[#e1e61b] pl-4">
              Send a line — or request a free brand audit. We read every message and respond within one business day.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Info rows */}
            {[
              { label: "Email", value: "reworks.agency@gmail.com" },
              { label: "Dubai", value: "Business Bay, Dubai — UAE" },
              { label: "Mumbai", value: "Bandra West, Mumbai 400050" },
              { label: "Hours", value: "Sun–Thu • 09:00 – 18:00 GST" },
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
              {["Instagram", "Behance", "LinkedIn", "Dribbble", "Vimeo", "GitHub"].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 border-4 border-white text-sm font-black uppercase tracking-widest text-white hover:bg-[#e1e61b] hover:text-black hover:border-[#e1e61b] hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Right: Brutalist Form ─── */}
        <div className="flex-1 w-full max-w-xl mx-auto lg:mx-0">
          <div className="relative">
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
                  TRANSMIT <ArrowUpRight className="w-8 h-8" strokeWidth={3} />
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
