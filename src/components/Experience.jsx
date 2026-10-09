import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  ExternalLink, 
  CheckCircle2, 
  Building2, 
  Globe, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industrial Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Practical industry exposure engineering user-centric web applications and collaborative deployments.
          </p>
        </div>

        {/* Experience Timeline Item */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="glass-panel-glow rounded-2xl p-6 sm:p-9 border border-cyan-500/20 relative group transition-all duration-300"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-sm sm:text-base mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.period}
                  </span>
                  <span className="text-xs text-indigo-400 font-medium">
                    {exp.program}
                  </span>
                </div>
              </div>

              {/* Description & Accomplishments */}
              <div className="py-6 space-y-4">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Contributions & Learnings:
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {exp.highlights.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                        <span className="leading-normal">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Live Project Capstone Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-slate-900/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                      Internship Group Project Live Demo
                    </span>
                    <strong className="text-white text-sm font-semibold">
                      NewMattyy Web Application
                    </strong>
                  </div>
                </div>

                <a
                  href={exp.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-md shadow-cyan-500/20 cursor-pointer"
                >
                  <span>Visit Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Skills Applied:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/90 text-cyan-300 border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
