"use client";

import React, { useMemo } from "react";
import { 
  motion, 
  useTransform, 
  useSpring, 
  useMotionValue
} from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  User, 
  Code, 
  Smartphone, 
  Download 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from "next/dynamic";
import Image from "next/image";
import ContactForm from "@/components/contact-form";
import RepositoriesSection from "@/components/repositories-section";

// Pure pseudo-random function to satisfy React purity rules
const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

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

interface Particle {
  left: string;
  scale: number;
  rotate: number;
  duration: number;
  delay: number;
  x: number;
  element: string;
}

const FallingElements = () => {
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
};

export default function Home() {
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

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div suppressHydrationWarning className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav suppressHydrationWarning className="fixed top-0 left-0 right-0 z-50 pt-2 md:pt-4">
        <div suppressHydrationWarning className="glass-card mx-2 md:mx-4 rounded-2xl px-2 md:px-4 py-1 md:py-2 flex items-center justify-between overflow-x-auto relative">
          
          {/* Capybara Loader Background - Walking Left to Right */}
          <div aria-hidden="true" className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <div className="absolute top-[65%] -translate-y-1/2" style={{ animation: 'walkTab 25s linear infinite' }}>
              <div className="capybaraloader origin-left scale-[0.18] md:scale-[0.22]">
              <div className="capybara">
                <div className="capy">
                  <div className="capyhead">
                    <div className="capyear">
                      <div className="capyear2"></div>
                    </div>
                    <div className="capyear">
                      <div className="capyear2"></div>
                    </div>
                    <div className="capyeye"></div>
                    <div className="capyeye"></div>
                    <div className="capymouth">
                      <div className="capylips"></div>
                      <div className="capylips"></div>
                    </div>
                  </div>
                  <div className="capyleg"></div>
                  <div className="capyleg2"></div>
                  <div className="capyleg2"></div>
                  <div className="capyleg2"></div>
                </div>
              </div>
              <div className="loader">
                <div className="loaderline"></div>
              </div>
              </div>
            </div>
          </div>

          <a href="#" aria-label="Home" className="flex items-center gap-1 md:gap-2 text-base md:text-xl font-bold text-secondary uiverse-nav-logo flex-shrink-0 relative z-10">
            <span aria-hidden="true" className="eye-icon">
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
                <a href={`#${item.id}`} className="group relative">
                  <span className="relative z-10 font-bold tracking-wide text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                    {item.name}
                  </span>
                  <span className="uiverse-nav-hover-bg"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 3D Background with Three.js Sprites */}
      <SpriteScene />

      {/* Falling Elements Overlay */}
      <FallingElements />

      {/* Hero Content */}
      <header suppressHydrationWarning className="relative z-10 min-h-screen flex items-center justify-center p-8 overflow-hidden">
        <div suppressHydrationWarning className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div 
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            suppressHydrationWarning 
            className="text-center md:text-left"
          >
            <motion.button variants={heroItemVariants} suppressHydrationWarning className="space-btn mb-6">
                <strong>PROFESSIONAL PORTFOLIO</strong>
                <div id="container-stars">
                  <div id="stars" />
                </div>
                <div id="glow">
                  <div className="circle" />
                  <div className="circle" />
                </div>
            </motion.button>
            
            <motion.h1 variants={heroItemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {resumeData.nameTH}
              </span>
            </motion.h1>
            
            <motion.p variants={heroItemVariants} className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-8">
              {resumeData.profile}
            </motion.p>
            
            <motion.div variants={heroItemVariants} suppressHydrationWarning className="flex flex-wrap gap-4 justify-center md:justify-start">
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
                className="btn-donate inline-flex items-center justify-center gap-2"
              >
                <Download size={18} />
                <span>ดาวน์โหลด CV</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image with Glow Loader & Overflow Flowers */}
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
              
              {/* Floating Flowers (Overflowing outside the circle) */}
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
                    src="/profile-3d.png" 
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
        </div>

        {/* Scroll Indicator */}
        <div aria-hidden="true" suppressHydrationWarning className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50">
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
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: 5, 
                  rotateX: -2,
                  translateZ: 20
                }}
                className="relative perspective-1000"
              >
                <Card className="group transition-all duration-300 glass-card border-none h-full overflow-hidden shadow-lg hover:shadow-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        {skillIcons[skill.name] || <Code size={20} />}
                      </div>
                      {skill.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                      {skill.details}
                    </p>
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
                whileHover={{ scale: 1.02 }}
                transition={{ delay: i * 0.15, type: "spring", stiffness: 300, damping: 24 }}
                className="glass-card p-8 rounded-[2rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-xl transition-shadow cursor-default"
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
