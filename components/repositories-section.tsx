"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, FolderGit2, Code2 } from "lucide-react";

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  demoUrl?: string;
  topics: string[];
}

const repositories: Repository[] = [
  {
    id: 1,
    name: "portfolio-website",
    description: "เว็บไซต์ Portfolio ส่วนตัวที่พัฒนาด้วย Next.js และ TailwindCSS พร้อม 3D Background",
    language: "TypeScript",
    stars: 12,
    forks: 3,
    url: "https://github.com/nattarika/portfolio",
    topics: ["nextjs", "react", "portfolio", "3d"],
  },
  {
    id: 2,
    name: "document-management-system",
    description: "ระบบจัดการเอกสารสำหรับหน่วยงานราชการ รองรับการอัปโหลด ค้นหา และจัดหมวดหมู่",
    language: "JavaScript",
    stars: 8,
    forks: 2,
    url: "https://github.com/nattarika/document-system",
    demoUrl: "https://doc-demo.example.com",
    topics: ["react", "nodejs", "mongodb", "government"],
  },
  {
    id: 3,
    name: "hospital-appointment",
    description: "ระบบนัดหมายโรงพยาบาล รองรับการจองออนไลน์ แจ้งเตือน และจัดการคิว",
    language: "TypeScript",
    stars: 15,
    forks: 5,
    url: "https://github.com/nattarika/hospital-appointment",
    topics: ["nextjs", "prisma", "postgresql", "healthcare"],
  },
  {
    id: 4,
    name: "school-admin-dashboard",
    description: "แดชบอร์ดสำหรับจัดการโรงเรียน รวมถึงการจัดการนักเรียน ครู และคะแนน",
    language: "JavaScript",
    stars: 6,
    forks: 1,
    url: "https://github.com/nattarika/school-admin",
    topics: ["react", "express", "mysql", "education"],
  },
];

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500/20 text-blue-400",
  JavaScript: "bg-yellow-500/20 text-yellow-400",
  Python: "bg-green-500/20 text-green-400",
  HTML: "bg-orange-500/20 text-orange-400",
  CSS: "bg-pink-500/20 text-pink-400",
};

export default function RepositoriesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <FolderGit2 size={18} />
            <span>ผลงานและโปรเจค</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Repositories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            รวบรวมผลงานและโปรเจคต่างๆ ที่ได้พัฒนาขึ้น ทั้งเว็บไซต์ และระบบต่างๆ
          </p>
        </motion.div>

        {/* Repositories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {repositories.map((repo, index) => (
            <RepositoryCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="uiverse-button inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold"
          >
            <Github size={20} />
            ดูผลงานเพิ่มเติมบน GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function RepositoryCard({ repo, index }: { repo: Repository; index: number }) {
  const handleClick = () => {
    window.open(repo.url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onClick={handleClick}
      className="group block glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <FolderGit2 className="text-primary w-6 h-6" />
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {repo.name}
          </h3>
        </div>
        <ExternalLink className="text-muted-foreground w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {repo.description}
      </p>

      {/* Topics */}
      <div className="flex flex-wrap gap-2 mb-4">
        {repo.topics.map((topic) => (
          <span
            key={topic}
            className="px-3 py-1 text-xs rounded-full bg-secondary/20 text-secondary-foreground"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border/30">
        <div className="flex items-center gap-4">
          <span className={`px-3 py-1 text-xs rounded-full ${languageColors[repo.language] || "bg-gray-500/20 text-gray-400"}`}>
            <Code2 size={12} className="inline mr-1" />
            {repo.language}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <span>★</span> {repo.stars}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
            </svg>
            {repo.forks}
          </span>
        </div>
      </div>

      {/* Demo Button (if available) */}
      {repo.demoUrl && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open(repo.demoUrl, '_blank', 'noopener,noreferrer');
          }}
          className="mt-4 w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
        >
          <ExternalLink size={14} />
          ดู Demo
        </button>
      )}
    </motion.div>
  );
}
