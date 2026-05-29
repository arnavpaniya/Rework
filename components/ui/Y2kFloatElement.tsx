"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Y2kFloatElementProps {
  src: string;
  alt: string;
  className?: string;
  floatDuration?: number;
  floatYRange?: [number, number];
  floatXRange?: [number, number];
  rotateRange?: [number, number];
  enableTilt?: boolean;
  tiltMaxAngle?: number;
}

export function Y2kFloatElement({
  src,
  alt,
  className,
  floatDuration = 6,
  floatYRange = [-10, 10],
  floatXRange = [-5, 5],
  rotateRange = [-4, 4],
  enableTilt = true,
  tiltMaxAngle = 15,
}: Y2kFloatElementProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  // Mouse positions for 3D tilt
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs for high-fidelity interactive feel
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  // Rotate transforms based on mouse hover position
  const rotateX = useTransform(springY, [0, 1], [tiltMaxAngle, -tiltMaxAngle]);
  const rotateY = useTransform(springX, [0, 1], [-tiltMaxAngle, tiltMaxAngle]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        y: [floatYRange[0], floatYRange[1], floatYRange[0]],
        x: [floatXRange[0], floatXRange[1], floatXRange[0]],
        rotate: [rotateRange[0], rotateRange[1], rotateRange[0]],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative select-none pointer-events-auto transition-shadow duration-300",
        className
      )}
    >
      <motion.div
        style={{
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative flex items-center justify-center"
      >
        {/* Glow effect on hover */}
        <div
          className={cn(
            "absolute inset-0 bg-radial from-white/20 to-transparent blur-xl rounded-full opacity-0 scale-110 pointer-events-none transition-opacity duration-300",
            hovered && "opacity-100"
          )}
        />
        
        {/* The chrome image itself */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] transition-all duration-300"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}
