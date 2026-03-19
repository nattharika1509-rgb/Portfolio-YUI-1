import React from "react";
import { Github, FolderGit2 } from "lucide-react";
import RepositoryCard from "./repository-card";
import Link from "next/link";

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

export default function RepositoriesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
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
        </div>

        {/* Repositories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {repositories.map((repo, index) => (
            <RepositoryCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            href="https://github.com/nattarika"
            target="_blank"
            rel="noopener noreferrer"
            className="uiverse-button inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-transform hover:scale-105 active:scale-95"
          >
            <Github size={20} />
            ดูผลงานเพิ่มเติมบน GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}
