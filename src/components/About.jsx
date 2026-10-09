import React from 'react';
import { 
  Code2, 
  Cpu, 
  Database, 
  Layers, 
  GraduationCap, 
  MapPin, 
  Mail, 
  CheckCircle,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: Layers,
      title: "MERN Stack Mastery",
      description: "Hands-on experience developing end-to-end web applications with React.js, Node.js, Express.js, and MongoDB with clean RESTful architecture."
    },
    {
      icon: Code2,
      title: "Data Structures & Java",
      description: "Strong algorithmic problem-solving foundation in Java, solid comprehension of OOPs paradigms, memory handling, and efficient computing."
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning Focus",
      description: "Pursuing B.Tech in CS with specialization in AI & ML at Kanpur Institute of Technology, blending modern intelligent features into web products."
    },
    {
      icon: Database,
      title: "Database & Backend Design",
      description: "Skilled in schema design, relational and non-relational database management (MongoDB, MySQL), secure authentication, and data integrity."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Anshuman Shukla</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Engineering scalable web architectures, exploring artificial intelligence, and building clean user experiences.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Personal Narrative Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-7 sm:p-9 border border-white/10 flex flex-col justify-between relative group hover:border-cyan-500/30 transition-all duration-300">
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I am a passionate <strong className="text-white font-semibold">Full-Stack Web Developer</strong> and 
                undergraduate student pursuing my <strong className="text-cyan-300 font-medium">B.Tech in Computer Science & Engineering (AI & ML)</strong> at 
                Kanpur Institute of Technology.
              </p>
              <p>
                My journey centers around architecting scalable, responsive web solutions with the 
                <span className="text-white font-medium"> MERN stack</span>, backed by solid problem-solving fundamentals in 
                <span className="text-white font-medium"> Java</span> and <span className="text-white font-medium">Data Structures & Algorithms</span>. 
                I enjoy transforming ideas into intuitive, production-grade applications that solve real-world problems.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                Having completed a 6-week intensive remote internship at <strong className="text-slate-200">Global Next Consulting India</strong> and 
                contributed to live group web deployments, I bring an agile mindset, sharp attention to detail, and a persistent drive for clean code.
              </p>
            </div>

            {/* Quick Profile Summary Pills */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-300">
                <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>B.Tech CS (AI & ML) – <strong>KIT Kanpur (7.58 CGPA)</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Location: <strong>Kanpur, UP, India</strong></span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="truncate">anshumanshukla721@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Open for: <strong>Internships & SDE Roles</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Competency Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-xl p-5 border border-white/10 hover:border-cyan-500/40 transition-all duration-200 group flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
