"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Code, 
  GraduationCap, 
  Briefcase, 
  Mail,
  LucideIcon
} from "lucide-react";

interface SectionProps {
  title: string;
  iconName: "user" | "code" | "education" | "experience" | "contact";
  children: React.ReactNode;
  id?: string;
}

const icons: Record<string, LucideIcon> = {
  user: User,
  code: Code,
  education: GraduationCap,
  experience: Briefcase,
  contact: Mail,
};

export default function Section({ title, iconName, children, id }: SectionProps) {
  const Icon = icons[iconName] || Code;
  
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto py-16 px-4"
      style={{ scrollMarginTop: "100px" }}
    >
      <div suppressHydrationWarning className="flex items-center gap-3 mb-8">
        <div suppressHydrationWarning className="p-3 rounded-2xl bg-primary/20 text-primary shadow-lg">
          <Icon size={24} />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground/80">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}
