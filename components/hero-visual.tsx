"use client";

import React from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";

export default function HeroVisual() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        perspective: 1000,
        rotateX,
        rotateY,
      }}
      suppressHydrationWarning 
      className="relative cursor-pointer group flex items-center justify-center pt-8"
    >
      <div className="loader-wrapper">
        <div className="loader-glow" />
        
        {/* Floating Flowers */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-visible">
           <motion.span 
             animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -top-6 -right-6 text-5xl filter drop-shadow-lg"
           >🌸</motion.span>
           <motion.span 
             animate={{ y: [0, -15, 0], rotate: [0, -20, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute -top-12 left-12 text-4xl filter drop-shadow-lg"
           >🌸</motion.span>
           <motion.span 
             animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
             transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
             className="absolute top-2 -left-8 text-3xl filter drop-shadow-lg"
           >🌸</motion.span>
           <motion.span 
             animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="absolute bottom-10 -right-8 text-2xl"
           >✨</motion.span>
        </div>

        <div suppressHydrationWarning className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center z-1">
          <div suppressHydrationWarning className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <div 
            suppressHydrationWarning 
            className="relative w-[110%] h-[110%] transform-preserve-3d transition-transform duration-200"
            style={{ transform: "translateZ(50px)" }}
          >
            <Image 
              src="/Portfolio-YUI-1/profile-3d.png" 
              alt="Profile" 
              fill
              priority
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover rounded-full border-4 border-white/30 shadow-2xl bg-white scale-100 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
