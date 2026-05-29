"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ChromeOrbitProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export function ChromeOrbit({
  className,
  size = 500,
  opacity = 0.2,
}: ChromeOrbitProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        opacity: opacity,
        perspective: 1200,
      }}
      className={cn(
        "absolute flex items-center justify-center pointer-events-none select-none overflow-visible",
        className
      )}
    >
      <div 
        className="w-full h-full relative flex items-center justify-center transform-style-3d animate-spin-slow"
        style={{
          transform: "rotateX(72deg) rotateY(12deg)",
        }}
      >
        {/* Outer Orbit Ring */}
        <div className="absolute w-[100%] h-[100%] border-[2px] border-dashed border-neutral-400 rounded-full flex items-center justify-center transform-style-3d">
          {/* Outer Satellite dot */}
          <div className="absolute w-4 h-4 rounded-full bg-gradient-to-tr from-neutral-200 via-white to-neutral-400 border border-neutral-500 shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-orbit-outer" />
        </div>

        {/* Middle Orbit Ring */}
        <div className="absolute w-[75%] h-[75%] border-[1.5px] border-neutral-300 rounded-full flex items-center justify-center transform-style-3d">
          {/* Middle Satellite dot */}
          <div className="absolute w-3 h-3 rounded-full bg-gradient-to-tr from-neutral-300 via-neutral-100 to-neutral-500 border border-neutral-400 shadow-[0_0_6px_rgba(255,255,255,0.5)] animate-orbit-middle" />
        </div>

        {/* Inner Orbit Ring */}
        <div className="absolute w-[50%] h-[50%] border-[1px] border-neutral-400 rounded-full flex items-center justify-center transform-style-3d">
          {/* Inner Satellite dot */}
          <div className="absolute w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-neutral-200 via-white to-neutral-400 border border-neutral-500 shadow-[0_0_5px_rgba(255,255,255,0.6)] animate-orbit-inner" />
        </div>

        {/* Center Grid Mesh Crosshair */}
        <div className="absolute w-full h-[1px] bg-neutral-400/40" />
        <div className="absolute h-full w-[1px] bg-neutral-400/40" />
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotateX(72deg) rotateY(12deg) rotateZ(0deg);
          }
          to {
            transform: rotateX(72deg) rotateY(12deg) rotateZ(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 35s linear infinite;
        }

        @keyframes orbit-anim-outer {
          from {
            transform: rotate(0deg) translate(250px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translate(250px) rotate(-360deg);
          }
        }

        @keyframes orbit-anim-middle {
          from {
            transform: rotate(180deg) translate(187.5px) rotate(-180deg);
          }
          to {
            transform: rotate(-180deg) translate(187.5px) rotate(180deg);
          }
        }

        @keyframes orbit-anim-inner {
          from {
            transform: rotate(90deg) translate(125px) rotate(-90deg);
          }
          to {
            transform: rotate(450deg) translate(125px) rotate(-450deg);
          }
        }

        .animate-orbit-outer {
          animation: orbit-anim-outer 25s linear infinite;
        }

        .animate-orbit-middle {
          animation: orbit-anim-middle 18s linear infinite;
        }

        .animate-orbit-inner {
          animation: orbit-anim-inner 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
