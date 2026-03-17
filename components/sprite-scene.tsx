"use client";

import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

interface SpriteSceneProps {
  children?: React.ReactNode;
}

export default function SpriteScene({ children }: SpriteSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const sprites = useMemo(() => {
    const colors = ["#ff9a9e", "#a18cd1", "#fbc2eb", "#8fd3f4", "#84fab0"];
    const positions = [
      { x: -20, y: 15, scale: 1.2, speed: 1.5, delay: 0 },
      { x: 25, y: 30, scale: 0.9, speed: 1.0, delay: 0.5 },
      { x: -35, y: 45, scale: 1.1, speed: 1.2, delay: 1.0 },
      { x: 15, y: 60, scale: 0.8, speed: 0.8, delay: 1.5 },
      { x: -10, y: 75, scale: 1.0, speed: 1.3, delay: 0.3 },
      { x: 30, y: 20, scale: 1.3, speed: 1.1, delay: 0.8 },
      { x: -25, y: 85, scale: 0.85, speed: 0.9, delay: 1.2 },
      { x: 5, y: 50, scale: 1.15, speed: 1.4, delay: 0.6 },
    ];
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      x: positions[i].x,
      y: positions[i].y,
      scale: positions[i].scale,
      speed: positions[i].speed,
      delay: positions[i].delay,
    }));
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink/20 via-pastel-blue/10 to-pastel-mint/20" />
      
      {/* Three.js Canvas */}
      <CanvasWrapper onLoad={() => {}} />
      
      {/* Floating Sprites */}
      {sprites.map((sprite) => (
        <motion.div
          key={sprite.id}
          className="absolute rounded-full blur-xl"
          style={{
            left: `${50 + sprite.x}%`,
            top: `${sprite.y}%`,
            width: 60 * sprite.scale,
            height: 60 * sprite.scale,
            background: `radial-gradient(circle, ${sprite.color} 0%, transparent 70%)`,
            y: sprite.id % 2 === 0 ? y1 : sprite.id % 3 === 0 ? y2 : y3,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: sprite.speed * 4,
            repeat: Infinity,
            delay: sprite.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Mesh Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(255, 154, 158, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(132, 250, 176, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(161, 140, 209, 0.2) 0%, transparent 60%)
          `
        }}
      />
      
      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

function CanvasWrapper({ onLoad }: { onLoad: () => void }) {
  return (
    <div className="absolute inset-0">
      <Canvas onLoad={onLoad} />
    </div>
  );
}

function Canvas({ onLoad }: { onLoad: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  React.useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create floating orbs
    const orbs: THREE.Mesh[] = [];
    const colors = [0xff9a9e, 0xa18cd1, 0xfbc2eb, 0x8fd3f4, 0x84fab0];
    
    colors.forEach((color) => {
      const geometry = new THREE.SphereGeometry(0.5 + Math.random() * 0.5, 32, 32);
      const material = new THREE.MeshBasicMaterial({ 
        color, 
        transparent: true, 
        opacity: 0.3 
      });
      const orb = new THREE.Mesh(geometry, material);
      orb.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        -2 - Math.random() * 3
      );
      scene.add(orb);
      orbs.push(orb);
    });
    
    camera.position.z = 5;
    
    let animationId: number;
    let time = 0;
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.01;
      
      orbs.forEach((orb, i) => {
        orb.position.y += Math.sin(time + i) * 0.002;
        orb.rotation.x += 0.001;
        orb.rotation.y += 0.001;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    onLoad();
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [onLoad]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
      aria-hidden="true"
    />
  );
}
