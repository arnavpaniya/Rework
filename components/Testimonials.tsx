"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    text: "The ReWorks team handled everything from branding and content marketing to SEO and performance advertising. Their creative approach and data-driven strategies helped us grow our online visibility and customer engagement.",
    name: "Biju",
    role: "CEO Qamar Al Nahda",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    color: "#fff",
    textColor: "#000",
  },
  {
    text: "\"From strategy to execution, ReWorks delivered exceptional results. Their communication was excellent, and every milestone was completed on time.\"",
    name: "KrishnaMalar",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    color: "#0ea5e9",
    textColor: "#fff",
  },
  {
    text: "ReWorks understood our brand from day one. The design is clean, engaging, and user-friendly. We've received great feedback from our customers since launch.",
    name: "John Cheriyan",
    role: "CEO Jaya's Kitchen",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop",
    color: "#22c55e",
    textColor: "#fff",
  },
];

// Duplicate to ensure enough items for scrolling
const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

interface TestimonialCardProps {
  item: typeof testimonials[0];
  index: number;
}

function TestimonialCard({ item, index }: TestimonialCardProps) {
  // Give them an asymmetrical neo-brutalist feel on desktop
  const rotations = [
    "md:rotate-[-3deg] md:translate-y-2",
    "md:rotate-[2deg] md:-translate-y-4",
    "md:rotate-[-1deg] md:translate-y-8"
  ];
  const offsetClass = rotations[index % rotations.length];

  return (
    <div
      className={cn(
        "p-6 sm:p-8 border-[3px] border-black flex flex-col justify-between h-full transition-all hover:rotate-0 hover:-translate-y-1 hover:scale-[1.02] duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        offsetClass
      )}
      style={{
        backgroundColor: item.color,
        color: item.textColor,
      }}
    >
      {/* Quote mark */}
      <div>
        <span className="text-5xl font-black leading-none block mb-2 select-none opacity-40">
          &ldquo;
        </span>
        <p className="text-base sm:text-lg font-bold leading-relaxed">
          {item.text}
        </p>
      </div>
      {/* Author */}
      <div className="flex items-center gap-3 mt-8 pt-4 border-t-2 border-current/20">
        <div className="flex flex-col">
          <span className="font-black text-sm uppercase tracking-wider leading-tight">
            {item.name}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-widest opacity-80 leading-tight mt-1">
            {item.role}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full pt-12 sm:pt-20 md:pt-32 pb-8 sm:pb-12 md:pb-16 bg-white overflow-hidden border-t-4 border-black relative"
    >
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, black 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:h-full flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-8 items-center lg:items-stretch relative z-10">
        
        {/* Left: Content */}
        <div className="lg:flex-1 flex flex-col justify-center max-w-lg lg:max-w-md w-full shrink-0 z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-1.5 mb-8 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="w-2 h-2 bg-[#6c24d6]" />
              <span className="text-xs font-black uppercase tracking-widest text-black">
                Testimonials
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black tracking-tight text-black leading-[1.05] mb-6">
              Don&apos;t just <br />
              take our <br />
              <span className="bg-[#e1e61b] px-2 leading-none inline-block mt-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black italic">
                word for it
              </span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-black/60 leading-relaxed font-medium mb-10 max-w-md">
              We work with ambitious founders who demand fast iteration and
              undeniable results. Here&apos;s what happens when you cut the
              corporate fluff and focus entirely on conversion.
            </p>

            {/* Avatars + Stars */}
            <div className="flex items-center gap-4 mb-12">
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 text-[#e1e61b]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-black/50 mt-1">
                  From clients
                </span>
              </div>
            </div>

            {/* Chrome Atom decorative element */}
            <div className="relative w-[140px] h-[140px] sm:w-[240px] sm:h-[240px] select-none mx-auto lg:mx-0">
              <Image
                src="/y2k/chrome-atom.png"
                alt="Chrome Atom"
                width={240}
                height={240}
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Right: Static Grid */}
        <div className="flex-1 w-full flex flex-col md:flex-row gap-8 lg:gap-8 justify-center items-center md:items-stretch lg:items-center z-20 mt-12 lg:mt-0 pt-4 pb-12">
          {testimonials.map((item, index) => (
            <div key={index} className="flex-1 w-full min-w-[260px] max-w-[360px] mx-auto md:mx-0">
              <TestimonialCard item={item} index={index} />
            </div>
          ))}

          {/* Chrome Star decorative element - bottom right */}
          <div className="absolute -bottom-8 -right-4 w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] select-none pointer-events-none hidden md:block z-20">
            <Image
              src="/y2k/chrome-star.png"
              alt="Chrome Sparkle Star"
              width={130}
              height={130}
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}