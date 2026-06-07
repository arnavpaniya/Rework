"use client";

import React from "react";
import { FloatingNavDemo } from "@/components/FloatingNav";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ─── Case Studies Data ───────────────────────────────────────────────────────

const projects = [
  {
    title: "Project Wave",
    category: "Branding & Creative",
    description: "Reimagining a premium hospitality brand in Dubai Business Bay. From scattered visual presence to a cohesive identity system that speaks luxury, strategy, and modern aesthetic.",
    tags: ["Brand Identity", "Visual System", "Creative Direction"],
    accentColor: "#6c24d6",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    link: "/contact"
  },
  {
    title: "Pulse Energy",
    category: "Social Media & Video",
    description: "Gen Z-focused launch campaign for a clean energy brand in the UAE. Harnessing scroll-stopping reels and native social hooks to capture 1.2M organic views in 30 days.",
    tags: ["Social Reels", "Paid Campaigns", "Gen Z Copy"],
    accentColor: "#e1e61b",
    textColor: "text-black",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop",
    link: "/contact"
  },
  {
    title: "Apex Commerce",
    category: "Digital Development",
    description: "A high-speed custom e-commerce engine designed for a fast-growing fashion house in Dubai. Optimised for instant load speeds, mobile checkout, and a 34% boost in conversion.",
    tags: ["UX/UI Design", "Shopify Custom", "Conversion Optimisation"],
    accentColor: "#ff3366",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    link: "/contact"
  }
];

export default function OurWorkPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#f5f5f0] text-black">
      {/* Navbar */}
      <FloatingNavDemo />

      {/* ─── Hero / Header Section ─── */}
      <section className="relative w-full pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-24 overflow-hidden border-b-4 border-black bg-white">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="flex flex-col gap-6 sm:gap-8 max-w-4xl">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 border-4 border-black px-4 py-2 bg-black text-white shadow-[4px_4px_0px_0px_#e1e61b]">
                <Briefcase className="w-4 h-4 text-[#e1e61b]" />
                <span className="text-xs font-black uppercase tracking-widest">
                  Portfolio
                </span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-black uppercase leading-[0.92]"
            >
              Our{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-[#6c24d6] text-white px-3 py-1 border-4 border-black shadow-[6px_6px_0_0_#000] transform -rotate-1 inline-block">
                  Work
                </span>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-black/75 font-bold leading-relaxed border-l-4 border-black pl-4"
            >
              Scroll-stopping campaigns. Sharp brand identities. High-performance digital platforms built for impact. We turn scattered concepts into conversion-driven results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── Grid Portfolio Section ─── */}
      <section className="relative w-full py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => {
            const isYellow = project.accentColor === "#e1e61b";
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="relative bg-white border-4 border-black flex flex-col justify-between overflow-hidden cursor-pointer group"
                style={{
                  boxShadow: `8px 8px 0px 0px #000000`,
                }}
              >
                {/* Image header */}
                <div className="relative w-full aspect-[4/3] border-b-4 border-black overflow-hidden bg-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span 
                      className="px-3 py-1 text-[10px] font-black uppercase tracking-wider border-2 border-black bg-white shadow-[2px_2px_0_0_#000]"
                      style={{ color: "black" }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Details body */}
                <div className="p-6 sm:p-8 flex flex-col gap-4 flex-grow">
                  <h3 className="text-2xl sm:text-3xl font-black italic tracking-tight uppercase group-hover:text-[#6c24d6] transition-colors leading-none">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold leading-relaxed text-black/70">
                    {project.description}
                  </p>
                  
                  {/* Tag pills */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-none border border-black/20 bg-black/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action button */}
                <div className="p-6 border-t-4 border-black/10 bg-[#fbfbfa] flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-black/55 group-hover:text-black transition-colors">
                    Explore Rework
                  </span>
                  <Link
                    href={project.link}
                    className="w-10 h-10 border-2 border-black flex items-center justify-center transition-all group-hover:bg-[#e1e61b] group-hover:shadow-[2px_2px_0_0_#000] group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
                    style={{ backgroundColor: "white" }}
                  >
                    <ArrowUpRight className="w-5 h-5" strokeWidth={3} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ─── Bottom Call To Action ─── */}
      <section className="relative w-full py-16 sm:py-24 bg-black border-t-4 border-black text-white mt-12 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95]">
            Ready to build your <br className="hidden sm:block" />
            own success story?
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-semibold leading-relaxed max-w-xl">
            Partner with a Gen Z-led digital agency in Dubai that moves at the speed your brand needs. Let's start the audit.
          </p>

          <Link
            href="/contact"
            className="group flex items-center gap-3 bg-[#e1e61b] px-8 py-5 text-base sm:text-lg font-black uppercase tracking-widest text-black border-4 border-white shadow-[8px_8px_0px_0px_#fff] transition-all duration-200 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[12px_12px_0px_0px_#fff] active:translate-y-1 active:-translate-x-1 active:shadow-[0px_0px_0px_0px_#fff]"
          >
            Start Your Rework
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={3} />
          </Link>
        </div>
      </section>
    </div>
  );
}
