"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const clientLogos = [
  "&tv.webp",
  "Avokiddos.png",
  "BIG_Magic_Logo.jpg",
  "BMP.png",
  "Blink digital.png",
  "Djanngo digital.png",
  "DoDIY.png",
  "Honda.png",
  "Lenovo_ nvidia.png",
  "Logo_of_Colour_Yellow_Productions.png",
  "Nikon+RED.png",
  "Offbeet studios.png",
  "SM_Kids_Logo.webp",
  "Sanofi.png",
  "Sony music.png",
  "Star sports.png",
  "TechOptima.png",
  "UMG_for_Brands.png",
  "Vadakkan.png",
  "Vire Club.png",
  "actaai.png",
  "blu studios.png",
  "disnep.png",
  "golazo_logo.png",
  "gozoop_pvt_ltd_logo.png",
  "host2 logo.png",
  "jjust.png",
  "lomotif.png",
  "newspets_logo.png",
  "raco_general_transport_establishment_logo.png",
  "sony.jpg",
  "the.png",
  "thesmallbigidea_logo.png",
  "universal-music-group-logo.png",
  "vadakkan.jpg",
  "zee.png",
  "zing.png",
];

function LogoCard({ src }: { src: string }) {
  return (
    <div
      className="p-4 border-2 border-black flex items-center justify-center min-h-[160px] h-full bg-white relative"
    >
      <Image
        src={`/clients/${src}`}
        alt="Client Logo"
        fill
        className="object-contain p-6"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
    </div>
  );
}

const LogosColumn = (props: {
  className?: string;
  logos: string[];
  duration?: number;
  reverse?: boolean;
}) => {
  return (
    <div className={cn("h-full overflow-hidden relative", props.className)}>
      {/* Top and Bottom faded masks */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{
          translateY: props.reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: props.duration || 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4 pt-4"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {props.logos.map((src, i) => (
              <LogoCard key={i} src={src} />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export function ClientLogosSection() {
  const [isRow1Paused, setIsRow1Paused] = useState(false);
  const [isRow2Paused, setIsRow2Paused] = useState(false);

  const row1TimerRef = useRef<NodeJS.Timeout | null>(null);
  const row2TimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (row1TimerRef.current) clearTimeout(row1TimerRef.current);
      if (row2TimerRef.current) clearTimeout(row2TimerRef.current);
    };
  }, []);

  const handleRow1Click = () => {
    setIsRow1Paused((prev) => {
      const next = !prev;
      if (next) {
        if (row1TimerRef.current) clearTimeout(row1TimerRef.current);
        row1TimerRef.current = setTimeout(() => setIsRow1Paused(false), 4000);
      } else {
        if (row1TimerRef.current) clearTimeout(row1TimerRef.current);
      }
      return next;
    });
  };

  const handleRow2Click = () => {
    setIsRow2Paused((prev) => {
      const next = !prev;
      if (next) {
        if (row2TimerRef.current) clearTimeout(row2TimerRef.current);
        row2TimerRef.current = setTimeout(() => setIsRow2Paused(false), 4000);
      } else {
        if (row2TimerRef.current) clearTimeout(row2TimerRef.current);
      }
      return next;
    });
  };

  const col1 = [...clientLogos].slice(0, 13);
  const col2 = [...clientLogos].slice(13, 25);
  const col3 = [...clientLogos].slice(25, 37);

  const row1 = [...clientLogos].slice(0, 19);
  const row2 = [...clientLogos].slice(19, 37);

  return (
    <section
      id="clients"
      className="w-full pt-12 sm:pt-20 md:pt-32 pb-8 sm:pb-12 md:pb-16 bg-white overflow-hidden border-t-4 border-black relative"
    >
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
            <div className="inline-flex items-center gap-2 border-2 border-black px-4 py-1.5 mb-8 bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="w-2 h-2 bg-[#6c24d6]" />
              <span className="text-xs font-black uppercase tracking-widest text-black">
                Testimonials
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black tracking-tight text-black leading-[1.05] mb-6">
              <span className="bg-[#e1e61b] px-2 leading-none inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black italic">
                Testimonials
              </span>
            </h2>

            <p className="text-base md:text-lg text-black/60 leading-relaxed font-medium mb-10 max-w-md">
              We work with ambitious founders and global brands who demand fast iteration and
              undeniable results. Here are some of the companies we&apos;ve partnered with to create exceptional digital experiences.
            </p>

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

        {/* Right: Scrolling Columns (Desktop/Tablet View) */}
        <div className="hidden sm:flex lg:flex-1 w-full h-[600px] lg:h-[800px] gap-3 sm:gap-4 lg:gap-5 justify-center relative">
          <LogosColumn
            logos={col1}
            duration={45}
            className="w-full max-w-[280px]"
          />
          <LogosColumn
            logos={col2}
            duration={55}
            reverse
            className="w-full max-w-[280px]"
          />
          <LogosColumn
            logos={col3}
            duration={50}
            className="w-full max-w-[280px] hidden md:block"
          />

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

        {/* Horizontal Marquees (Mobile View only) */}
        <div className="block sm:hidden w-full relative z-20 flex flex-col gap-4 overflow-hidden py-4">
          <style>{`
            @keyframes marquee-ltr {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            @keyframes marquee-rtl {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .mobile-marquee-ltr {
              animation: marquee-ltr 30s linear infinite;
            }
            .mobile-marquee-rtl {
              animation: marquee-rtl 30s linear infinite;
            }
          `}</style>

          <div 
            className="w-full overflow-hidden select-none cursor-pointer"
            onClick={handleRow1Click}
          >
            <div 
              className="flex w-max items-stretch mobile-marquee-ltr"
              style={{
                animationPlayState: isRow1Paused ? "paused" : "running",
              }}
            >
              {[...row1, ...row1].map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[60vw] max-w-[200px] pr-4"
                >
                  <LogoCard src={src} />
                </div>
              ))}
            </div>
          </div>

          <div 
            className="w-full overflow-hidden select-none cursor-pointer"
            onClick={handleRow2Click}
          >
            <div 
              className="flex w-max items-stretch mobile-marquee-rtl"
              style={{
                animationPlayState: isRow2Paused ? "paused" : "running",
              }}
            >
              {[...row2, ...row2].map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[60vw] max-w-[200px] pr-4"
                >
                  <LogoCard src={src} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
