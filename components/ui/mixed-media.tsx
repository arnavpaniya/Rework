"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// ── Tape Component ────────────────────────────────────────────────────────
interface TapeProps {
  color?: "yellow" | "pink" | "purple" | "black";
  text?: string;
  className?: string;
  rotate?: number;
}

export const Tape = ({ color = "yellow", text, className, rotate = -2 }: TapeProps) => {
  const colors = {
    yellow: "bg-[#FFD700] text-black",
    pink: "bg-[#FF007F] text-white",
    purple: "bg-[#4F14E1] text-white",
    black: "bg-black text-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={cn(
        "relative inline-flex items-center justify-center px-4 py-2 font-bold uppercase tracking-wider text-sm shadow-md",
        colors[color],
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Torn edges (CSS pseudo-elements simulating rough edges) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-noise" />
      <span className="relative z-10">{text}</span>
    </motion.div>
  );
};

// ── Badge Component ────────────────────────────────────────────────────────
interface BadgeProps {
  text: string;
  subtext?: string;
  className?: string;
  rotate?: number;
}

export const Badge = ({ text, subtext, className, rotate = 6 }: BadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: rotate - 15, scale: 0.5 }}
      animate={{ opacity: 1, rotate: rotate, scale: 1 }}
      transition={{ type: "spring", stiffness: 250, damping: 15 }}
      className={cn(
        "flex flex-col items-center justify-center rounded-sm border border-black bg-white px-2 py-1 shadow-[2px_2px_0px_rgba(0,0,0,1)]",
        className
      )}
    >
      <span className="text-[10px] font-black uppercase tracking-widest text-black/50">
        {subtext}
      </span>
      <span className="text-xs font-bold uppercase text-black">
        {text}
      </span>
    </motion.div>
  );
};

// ── Doodle Component ───────────────────────────────────────────────────────
interface DoodleProps {
  type: "star" | "arrow" | "crown" | "underline";
  color?: string;
  className?: string;
  delay?: number;
}

export const Doodle = ({ type, color = "#FF007F", className, delay = 0.5 }: DoodleProps) => {
  const getPath = () => {
    switch (type) {
      case "star":
        return "M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z";
      case "arrow":
        return "M2 12C2 12 14 4 22 12M22 12L16 6M22 12L16 18"; // Hand-drawn curve arrow
      case "crown":
        return "M2 10L6 2L12 8L18 2L22 10L20 20H4L2 10Z";
      case "underline":
        return "M2 10C10 6 20 14 30 10C40 6 50 14 60 10"; // Wavy line
      default:
        return "";
    }
  };

  return (
    <svg
      viewBox={type === "underline" ? "0 0 62 20" : "0 0 24 24"}
      fill="none"
      className={cn("overflow-visible", className)}
      style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
    >
      <motion.path
        d={getPath()}
        stroke={color}
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay, ease: "easeInOut" }}
      />
    </svg>
  );
};
