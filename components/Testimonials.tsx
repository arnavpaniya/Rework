"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    text: "ReWorks brought a Gen Z energy that completely redefined our market presence.",
    name: "Omar Farooq",
    role: "CEO, Desert Ventures",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    color: "#fff",
    textColor: "#000",
  },
  {
    text: "I've worked with top-tier global agencies, but ReWorks brought a Gen Z energy that completely redefined our market presence.",
    name: "Emily Chen",
    role: "Director of Marketing, Nexa",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    color: "#0ea5e9",
    textColor: "#fff",
  },
  {
    text: "If you want traditional, slow-moving advertising, go elsewhere. If you want results yesterday, hire them.",
    name: "Nina Kraviz",
    role: "VP Growth, Sonic",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop",
    color: "#22c55e",
    textColor: "#fff",
  },
  {
    text: "They didn't just build us a brand. They built us a cult following. Our conversion rate tripled in exactly 4 weeks.",
    name: "Alex Sterling",
    role: "Founder, Zenith Tech",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&auto=format&fit=crop",
    color: "#e1e61b",
    textColor: "#000",
  },
  {
    text: "They took our scattered, confused brand guidelines and turned them into a conversion machine.",
    name: "Marcus Thorne",
    role: "Co-Founder, Catalyst",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop",
    color: "#6c24d6",
    textColor: "#fff",
  },
  {
    text: "Brutal honesty combined with brilliant execution. They scrapped our 10-week discovery phase and just started shipping hits.",
    name: "Sarah Jenkins",
    role: "CMO, Bloom Studio",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
    color: "#ec4899",
    textColor: "#fff",
  },
  {
    text: "The speed and quality are unmatched. It feels less like an agency and more like having a world-class team in your own office.",
    name: "Emily Chen",
    role: "Director of Marketing, Nexa",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    color: "#0ea5e9",
    textColor: "#fff",
  },
  {
    text: "If you want traditional, slow-moving advertising, go elsewhere. If you want results yesterday, hire them.",
    name: "Nina Kraviz",
    role: "VP Growth, Sonic",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop",
    color: "#e1e61b",
    textColor: "#000",
  },
];

// ─── Scrolling Column Component ───────────────────────────────────────────────

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
  reverse?: boolean;
}) => {
  return (
    <div className={cn("overflow-hidden relative", props.className)}>
      {/* Top and Bottom faded masks */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{
          translateY: props.reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: props.duration || 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4 pt-4"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map((item, i) => (
              <div
                className="p-6 border-2 border-black flex flex-col justify-between min-h-[200px]"
                key={i}
                style={{
                  backgroundColor: item.color,
                  color: item.textColor,
                }}
              >
                {/* Quote mark */}
                <div>
                  <span className="text-3xl font-black leading-none block mb-3 select-none opacity-60">
                    &ldquo;
                  </span>
                  <p className="text-sm font-semibold leading-relaxed">
                    {item.text}
                  </p>
                </div>
                {/* Author */}
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-black/20 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-xs uppercase tracking-wider leading-tight">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-70 leading-tight mt-0.5">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────

export function TestimonialsSection() {
  const col1 = [...testimonials].slice(0, 4);
  const col2 = [...testimonials].slice(2, 6).concat(testimonials.slice(0, 1));
  const col3 = [...testimonials].slice(4, 8).concat(testimonials.slice(0, 2));

  return (
    <section
      id="testimonials"
      className="w-full py-24 md:py-32 bg-white overflow-hidden border-t-4 border-black relative"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-8 items-center lg:items-stretch relative z-10">
        
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center max-w-lg lg:max-w-md w-full shrink-0 z-20">
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
                word for it.
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
              <div className="flex -space-x-3">
                {[
                  "1573497019940-1c28c88b4f3e",
                  "1580489944761-15a19d654956",
                  "1507003211169-0a1dd7228f2d",
                  "1534528741775-53994a69daeb",
                ].map((id, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 rounded-full border-2 border-black overflow-hidden relative shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10"
                  >
                    <Image
                      src={`https://images.unsplash.com/photo-${id}?q=80&w=150&auto=format&fit=crop`}
                      alt="Client avatar"
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                ))}
              </div>
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
            <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] select-none mx-auto lg:mx-0">
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

        {/* Right: Scrolling Columns */}
        <div className="flex-1 w-full h-[400px] sm:h-[600px] lg:h-[800px] flex gap-3 sm:gap-4 lg:gap-5 justify-center relative">
          <TestimonialsColumn
            testimonials={col1}
            duration={25}
            className="w-full max-w-[280px] hidden sm:block"
          />
          <TestimonialsColumn
            testimonials={col2}
            duration={35}
            reverse
            className="w-full max-w-[280px]"
          />
          <TestimonialsColumn
            testimonials={col3}
            duration={30}
            className="w-full max-w-[280px] hidden md:block"
          />

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