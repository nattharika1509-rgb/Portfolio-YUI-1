"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, GraduationCap, Briefcase, User, Code, Smartphone, Car, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import ContactForm from "@/components/contact-form";
import RepositoriesSection from "@/components/repositories-section";

const SpriteScene = dynamic(() => import("@/components/sprite-scene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 pastel-gradient" />,
});

const resumeData = {
  name: "Miss Nattarika Thepphot",
  nameTH: "นางสาวณัฐริกา เทพโภชน์",
  phone: "064-641-7265",
  email: "Ntthartka1509@gmail.com",
  address: "44 หมู่ 7 ตำบลโนนพะยอม อำเภอชนบท จังหวัดขอนแก่น 40180",
  profile: "บัณฑิตสาขาบริหารธุรกิจ มีความแข็งแกร่งในงานธุรการ การจัดการเอกสาร และการประสานงานในองค์กรภาครัฐ",
  skills: [
    { name: "ทักษะด้านคอมพิวเตอร์", details: "Microsoft Word, Excel, PowerPoint, การจัดการเอกสาร" },
    { name: "ทักษะด้านธุรการ", details: "งานเอกสาร การจัดระบบแฟ้ม การประสานงานภายในและภายนอก" },
    { name: "ทักษะการสื่อสาร", details: "การสื่อสารที่ดี การให้บริการแก่ประชาชน" },
    { name: "ทักษะการจัดการเวลา", details: "การจัดลำดับความสำคัญ การทำงานภายใต้กำหนดเวลา" },
  ],
  education: [
    { degree: "ปวส. (ประกาศนียบัตรวิชาชีพชั้นสูง)", master: "บริหารธุรกิจ", school: "วิทยาลัยเทคนิคขอนแก่น", gpa: "3.21" },
    { degree: "ปวช. (ประกาศนียบัตรวิชาชีพ)", master: "เทคโนโลยีคอมพิวเตอร์", school: "วิทยาลัยเทคนิคขอนแก่น", gpa: "2.30" },
  ],
  experience: [
    {
      company: "ที่ทำการปกครองอำเภอมัญจาคีรี",
      position: "ฝึกงานฝ่ายป้องกันและบำบัดยาเสพติด",
      tasks: [
        "ติดตามและสนับสนุนผู้เข้าโปรแกรมฟื้นฟู",
        "ดำเนินการตรวจปัสสาวะตามระเบียบของหน่วยงาน",
        "จัดการเอกสารภายในและภายนอก"
      ]
    },
    {
      company: "เทศบาลตำบลชอนนโยบาย",
      position: "ฝึกงานฝ่ายบริหาร",
      tasks: [
        "ลงทะเบียนหนังสือราชการ",
        "ประสานงานจัดส่งเอกสาร",
        "ให้บริการแก่ประชาชน",
        "จัดระบบการเก็บข้อมูลอย่างเป็นระบบ"
      ]
    }
  ]
};

const skillIcons: Record<string, React.ReactNode> = {
  "ทักษะด้านคอมพิวเตอร์": <Code size={20} />,
  "ทักษะด้านธุรการ": <Briefcase size={20} />,
  "ทักษะการสื่อสาร": <Mail size={20} />,
  "ทักษะการจัดการเวลา": <Smartphone size={20} />,
};

const Section = ({ title, icon: Icon, children, id }: { title: string; icon: React.ElementType; children: React.ReactNode; id?: string }) => (
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

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div suppressHydrationWarning className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav suppressHydrationWarning className="fixed top-0 left-0 right-0 z-50 pt-2 md:pt-4">
        <div suppressHydrationWarning className="glass-card mx-2 md:mx-4 rounded-full px-2 md:px-4 py-1 md:py-2 flex items-center justify-between overflow-x-auto">
          <a href="#" className="flex items-center gap-1 md:gap-2 text-base md:text-xl font-bold text-secondary uiverse-nav-logo flex-shrink-0">
            <span className="eye-icon">
              <div className="up"></div>
              <div className="down"></div>
              <div className="mid"></div>
            </span>
            <span>Portfolio</span>
          </a>
          <ul className="flex items-center gap-1 md:gap-2 text-xs md:text-sm">
            {[
              { name: "ประวัติ", id: "profile" },
              { name: "ทักษะ", id: "skills" },
              { name: "การศึกษา", id: "education" },
              { name: "ประสบการณ์", id: "experience" },
              { name: "ติดต่อ", id: "contact" }
            ].map((item) => (
              <li key={item.id} className="uiverse-nav-item flex-shrink-0">
                <a href={`#${item.id}`}>
                  <span>{item.name}</span>
                  <span className="uiverse-nav-hover-bg"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 3D Background with Three.js Sprites */}
      <SpriteScene />

      {/* Hero Content */}
      <header suppressHydrationWarning className="relative z-10 min-h-screen flex items-center justify-center p-8 overflow-hidden">
        <div suppressHydrationWarning className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div suppressHydrationWarning className="text-center md:text-left">
            <div suppressHydrationWarning className="space-btn inline-block mb-6">
              <div className="space-btn-inner">
                <strong>PROFESSIONAL PORTFOLIO</strong>
                <div id="container-stars">
                  <div id="stars" />
                </div>
                <div id="glow">
                  <div className="circle" />
                  <div className="circle" />
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {resumeData.nameTH}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-8">
              {resumeData.profile}
            </p>
            
            <div suppressHydrationWarning className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={scrollToContact}
                className="contact-btn"
              >
                <span className="btn__visible">ติดต่อฉัน</span>
                <span className="btn__invisible">ติดต่อฉัน</span>
              </button>
              <a
                href="/Resume-Nattarika.pdf"
                download
                className="download-btn inline-flex items-center gap-2 px-6 h-12 rounded-full font-medium"
              >
                <span className="now"><Download size={18} /></span>
                <span className="play">ดาวน์โหลด CV</span>
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div suppressHydrationWarning className="relative">
            <div suppressHydrationWarning className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div suppressHydrationWarning className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-50" />
              <div suppressHydrationWarning className="relative w-full h-full">
                <img 
                  src="/profile.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full border-4 border-white/30 shadow-2xl bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div suppressHydrationWarning className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50">
          <div suppressHydrationWarning className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div suppressHydrationWarning className="w-1.5 h-1.5 rounded-full bg-current" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-32 pt-24">
        <Section title="ประวัติส่วนตัว (Profile)" icon={User} id="profile">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">ข้อมูลการติดต่อ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <Phone size={18} className="text-primary" />
                  <span>{resumeData.phone}</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Mail size={18} className="text-primary" />
                  <span>{resumeData.email}</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <MapPin size={18} className="text-primary mt-1" />
                  <span className="text-sm leading-relaxed">{resumeData.address}</span>
                </motion.div>
              </CardContent>
            </Card>
            <div className="flex flex-col justify-center space-y-4">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="glass-card p-6 rounded-3xl"
               >
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Briefcase size={20} className="text-secondary" /> ความสามารถเพิ่มเติม
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium">ทำใบขับขี่รถยนต์</span>
                    <span className="px-4 py-2 bg-accent/10 rounded-full text-sm font-medium">มีรถยนต์ส่วนตัว</span>
                    <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">ขับขี่จักรยานยนต์ได้</span>
                  </div>
               </motion.div>
            </div>
          </div>
        </Section>

        <Section title="ทักษะ (Skills)" icon={Code} id="skills">
          <div className="grid md:grid-cols-2 gap-6">
            {resumeData.skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="group hover:-translate-y-2 transition-all duration-300 glass-card border-none">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center gap-3">
                      {skillIcons[skill.name] || <Code size={20} />}
                      {skill.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{skill.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section title="ประวัติการศึกษา (Education)" icon={GraduationCap} id="education">
          <div className="space-y-6">
            {resumeData.education.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-8 rounded-[2rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                  <p className="text-lg font-medium text-foreground/70">{edu.master}</p>
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                </div>
                <div className="bg-white/50 dark:bg-black/30 px-6 py-2 rounded-full font-black text-primary text-xl shadow-lg">
                  GPA {edu.gpa}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section title="ประสบการณ์การฝึกงาน (Experience)" icon={Briefcase} id="experience">
          <div className="space-y-8">
            {resumeData.experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card className="glass-card border-none overflow-hidden hover:shadow-2xl transition-shadow">
                  <CardHeader className="bg-primary/5">
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                      <div>
                        <CardTitle className="text-2xl text-primary">{exp.company}</CardTitle>
                        <CardDescription className="text-lg font-semibold">{exp.position}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="grid md:grid-cols-2 gap-4">
                      {exp.tasks.map((task, j) => (
                        <motion.li 
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{task}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Repositories Section */}
        <RepositoriesSection />

        {/* Contact Section */}
        <Section title="ติดต่อ (Contact)" icon={Mail} id="contact">
          <ContactForm email={resumeData.email} />
        </Section>
      </main>

      <footer className="relative z-10 py-12 text-center border-t border-white/10 glass-card mt-20">
        <p className="text-muted-foreground font-medium">
          © 2024 {resumeData.nameTH}. สงวนลิขสิทธิ์ทั้งหมด
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          พัฒนาด้วย Next.js + TailwindCSS + Framer Motion
        </p>
      </footer>
    </div>
  );
}
