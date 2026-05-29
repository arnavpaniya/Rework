"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Y2kSparkleStarProps {
  className?: string;
  size?: number;
  glow?: boolean;
  delay?: number;
  rotation?: number;
}

export function Y2kSparkleStar({
  className,
  size = 40,
  glow = true,
  delay = 0,
  rotation = 0,
}: Y2kSparkleStarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.25, rotate: rotation + 15 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 15,
        delay 
      }}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
      }}
      className={cn(
        "relative flex items-center justify-center pointer-events-auto select-none cursor-pointer",
        className
      )}
    >
      {/* Outer metallic bloom glow */}
      {glow && (
        <div
          className="absolute inset-0 bg-white/20 blur-md rounded-full pointer-events-none opacity-40 scale-120"
        />
      )}

      <Image
        src="/y2k/chrome-star.png"
        alt="Chrome Sparkle Star"
        width={size}
        height={size}
        className="w-full h-full object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
      />
    </motion.div>
  );
}
