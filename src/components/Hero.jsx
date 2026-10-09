import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  Sparkles, 
  Terminal, 
  Code2, 
  CheckCircle2, 
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, experienceData } from '../data/portfolioData';

export default function Hero({ onOpenResume, onOpenAI }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedText, setCopiedText] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden cyber-radial-glow">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-cyan-300 tracking-wide">
                {personalInfo.status}
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div>
              <p className="text-slate-400 text-base md:text-lg font-mono mb-1">
                Hello world! I am
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Anshuman <br className="hidden sm:inline" />
                <span className="text-gradient-cyan">Shukla</span>
              </h1>
            </div>

            {/* Dynamic Role Rotator */}
            <div className="h-10 flex items-center">
              <span className="text-slate-400 text-lg md:text-xl font-medium mr-2">I build as a</span>
              <span className="text-cyan-400 text-lg md:text-xl font-bold font-mono px-3 py-1 bg-cyan-950/40 rounded-lg border border-cyan-800/40 shadow-inner">
                &lt;{personalInfo.roles[roleIndex]} /&gt;
              </span>
            </div>

            {/* Short Summary */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              {personalInfo.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-400 text-slate-950 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white transition-all shadow-md cursor-pointer hover:bg-slate-800"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume Preview</span>
              </button>

              <button
                onClick={onOpenAI}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 hover:text-indigo-200 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Ask AI About Me</span>
              </button>
            </div>

            {/* Quick Contact & Socials Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors text-xs font-mono"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span>github.com/Ansh2904</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors text-xs font-mono"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>linkedin.com/in/anshumanshukla1029</span>
              </a>

              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors text-xs font-mono cursor-pointer"
                title="Click to copy email"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{copiedText === 'email' ? 'Copied!' : personalInfo.email}</span>
              </button>

              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors text-xs font-mono cursor-pointer"
                title="Click to copy phone number"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>{copiedText === 'phone' ? 'Copied!' : personalInfo.phone}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-700"></div>

              <div className="relative rounded-2xl bg-[#0b101d] border border-white/10 shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs text-slate-400 font-mono flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      anshuman-profile.ts
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                    MERN & Java
                  </span>
                </div>

                {/* Code body */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2.5 bg-gradient-to-b from-[#0b101d] to-[#070b14]">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-cyan-300 font-bold">developer</span>{' '}
                    <span className="text-slate-400">=</span>{' '}
                    <span className="text-slate-400">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">'{personalInfo.name}'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">education:</span>{' '}
                    <span className="text-emerald-300">'B.Tech (CS - AI & ML)'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">college:</span>{' '}
                    <span className="text-emerald-300">'Kanpur Institute of Technology'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">cgpa:</span>{' '}
                    <span className="text-amber-300">7.58</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">internship:</span>{' '}
                    <span className="text-cyan-300">'{experienceData[0].company}'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">coreStack:</span>{' '}
                    <span className="text-purple-300">[</span>
                    <span className="text-sky-300">'React'</span>,{' '}
                    <span className="text-green-300">'Node'</span>,{' '}
                    <span className="text-emerald-300">'Mongo'</span>,{' '}
                    <span className="text-amber-300">'Java'</span>
                    <span className="text-purple-300">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">status:</span>{' '}
                    <span className="text-emerald-400">'Ready for Impact'</span>
                  </div>
                  <div>
                    <span className="text-slate-400">{'}'};</span>
                  </div>
                  
                  {/* Interactive console action */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Ready to deploy</span>
                    </span>
                    <a
                      href="https://newmattyy.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 underline font-sans text-xs"
                    >
                      View Live Internship Demo →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 text-center hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 shadow-md shadow-black/40"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
