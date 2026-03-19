import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase,
  Code, 
  Smartphone, 
  Download 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import RepositoriesSection from "@/components/repositories-section";
import SpriteScene from "@/components/sprite-scene-loader";

// Optimized Client Components
import Navigation from "@/components/navigation";
import HeroVisual from "@/components/hero-visual";
import FallingElements from "@/components/falling-effects";
import Section from "@/components/section-client";

// SpriteScene is now handled by SpriteSceneLoader

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

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* 3D Background with Three.js Sprites */}
      <SpriteScene />

      {/* Falling Elements Overlay */}
      <FallingElements />

      {/* Hero Content */}
      <header className="relative z-10 min-h-screen flex items-center justify-center p-8 overflow-hidden">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="text-center md:text-left">
            <div className="space-btn mb-6 inline-block">
                <strong>PROFESSIONAL PORTFOLIO</strong>
                <div id="container-stars">
                  <div id="stars" />
                </div>
                <div id="glow">
                  <div className="circle" />
                  <div className="circle" />
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
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact"
                className="contact-btn"
              >
                <span className="btn__visible">ติดต่อฉัน</span>
                <span className="btn__invisible">ติดต่อฉัน</span>
              </a>
              <a
                href="/Portfolio-YUI-1/Resume-Nattarika.pdf"
                download
                className="btn-donate inline-flex items-center justify-center gap-2"
              >
                <Download size={18} />
                <span>ดาวน์โหลด CV</span>
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image with Glow Loader & Overflow Flowers */}
          <HeroVisual />
        </div>

        {/* Scroll Indicator */}
        <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50">
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
          </div>
        </div>
      </header>

      <main className="relative z-10 pb-32 pt-24">
        <Section title="ประวัติส่วนตัว (Profile)" iconName="user" id="profile">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl">ข้อมูลการติดต่อ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary" />
                  <span>{resumeData.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <span>{resumeData.email}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-1" />
                  <span className="text-sm leading-relaxed">{resumeData.address}</span>
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-col justify-center space-y-4">
               <div className="glass-card p-6 rounded-3xl">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Briefcase size={20} className="text-secondary" /> ความสามารถเพิ่มเติม
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium">ทำใบขับขี่รถยนต์</span>
                    <span className="px-4 py-2 bg-accent/10 rounded-full text-sm font-medium">มีรถยนต์ส่วนตัว</span>
                    <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">ขับขี่จักรยานยนต์ได้</span>
                  </div>
               </div>
            </div>
          </div>
        </Section>

        <Section title="ทักษะ (Skills)" iconName="code" id="skills">
          <div className="grid md:grid-cols-2 gap-6">
            {resumeData.skills.map((skill, i) => (
              <div key={i} className="h-full">
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
              </div>
            ))}
          </div>
        </Section>

        <Section title="ประวัติการศึกษา (Education)" iconName="education" id="education">
          <div className="space-y-6">
            {resumeData.education.map((edu, i) => (
              <div 
                key={i}
                className="glass-card p-8 rounded-[2rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-xl transition-all cursor-default"
              >
                <div>
                  <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                  <p className="text-lg font-medium text-foreground/70">{edu.master}</p>
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                </div>
                <div className="bg-white/50 dark:bg-black/30 px-6 py-2 rounded-full font-black text-primary text-xl shadow-lg">
                  GPA {edu.gpa}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="ประสบการณ์การฝึกงาน (Experience)" iconName="experience" id="experience">
          <div className="space-y-8">
            {resumeData.experience.map((exp, i) => (
              <div key={i}>
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
                        <li key={j} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Section>

        {/* Repositories Section */}
        <RepositoriesSection />

        {/* Contact Section */}
        <Section title="ติดต่อ (Contact)" iconName="contact" id="contact">
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
