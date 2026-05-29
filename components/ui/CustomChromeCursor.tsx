"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function CustomChromeCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // High performance hardware-accelerated motion coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for a luxury elastic feel
  const springConfig = { stiffness: 450, damping: 28, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect mobile/touch devices (custom cursor should only display on desktop)
    const checkDevice = () => {
      const mobile = 
        window.matchMedia("(max-width: 768px)").matches || 
        ("ontouchstart" in window) || 
        (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    // Hide default hardware cursor globally by adding styles to body
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      body, a, button, select, input, textarea, [role="button"], .cursor-pointer {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleSheet);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // Track mouse entering and leaving viewport
    const handleMouseLeaveViewport = () => setIsVisible(false);
    const handleMouseEnterViewport = () => setIsVisible(true);

    // Track clickable items for premium hover effects
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.classList.contains("cursor-pointer") ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovered(!!isClickable);
    };

    // Track mouse clicks for visual impact
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeaveViewport);
    document.addEventListener("mouseenter", handleMouseEnterViewport);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveViewport);
      document.removeEventListener("mouseenter", handleMouseEnterViewport);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, [isMobile, isVisible, mouseX, mouseY]);

  if (isMobile || !isVisible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-4px", // Top-left click coordinate pivot point of the Y2K chrome arrow pointer
        translateY: "-4px",
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 999999, // Render on top of lead popup (z-9999) and preloader (z-99999)
        transformStyle: "preserve-3d",
      }}
      animate={{
        scale: isClicked ? 0.9 : isHovered ? 1.25 : 1,
        rotate: isHovered ? 12 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 20,
      }}
      className="hidden md:block overflow-visible"
    >
      {/* Chrome Glow Aura */}
      <div
        className={cn(
          "absolute -inset-4 bg-radial from-white/30 to-transparent blur-md opacity-35 scale-125 transition-opacity duration-300",
          isHovered && "opacity-60"
        )}
      />

      {/* The 3D Chrome Cursor Element */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/y2k/chrome-cursor.png"
        alt="Y2K Chrome Pointer"
        className="w-16 h-16 object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] select-none"
        draggable={false}
      />
    </motion.div>
  );
}
