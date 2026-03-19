"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

// Pure pseudo-random function to satisfy React purity rules
const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

interface Particle {
  left: string;
  scale: number;
  rotate: number;
  duration: number;
  delay: number;
  x: number;
  element: string;
}

export default function FallingElements() {
  const particles = useMemo<Particle[]>(() => {
    const elements = ["🌸", "💛", "❤️", "✨"];
    return [...Array(15)].map((_, i) => ({
      left: `${(i * 7 + pseudoRandom(i + 1) * 5) % 100}%`,
      scale: 0.5 + (i % 5) * 0.1,
      rotate: i * 45,
      duration: 8 + (i % 4) * 2,
      delay: i * 0.5,
      x: (i % 2 === 0 ? 1 : -1) * 50,
      element: elements[i % elements.length]
    }));
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden select-none" style={{ zIndex: 5 }}>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ 
            top: -50, 
            left: p.left,
            opacity: 0,
            scale: p.scale,
            rotate: p.rotate
          }}
          animate={{ 
            top: "110%",
            opacity: [0, 1, 1, 0],
            rotate: p.rotate + 360,
            x: [0, p.x, 0]
          }}
          transition={{ 
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
          className="absolute text-2xl"
        >
          {p.element}
        </motion.div>
      ))}
    </div>
  );
}
