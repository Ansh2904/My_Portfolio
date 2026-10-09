import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Trophy, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  ExternalLink,
  Code,
  Mic,
  Binary,
  Layers,
  Coffee
} from 'lucide-react';
import { educationData, certificatesData, extracurricularData } from '../data/portfolioData';

const certIconMap = {
  Layers,
  Binary,
  Coffee
};

const extraIconMap = {
  Trophy,
  Code,
  Mic
};

export default function EducationCertificates() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Academic milestones at Kanpur Institute of Technology, certified specializations, and extracurricular achievements.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveTab('certificates')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'certificates'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certificates (3)</span>
            </button>

            <button
              onClick={() => setActiveTab('extracurricular')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'extracurricular'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Extracurriculars</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          
          {/* TAB 1: EDUCATION */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-panel-glow rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                        {edu.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 group-hover:text-cyan-300 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-300 font-medium text-sm sm:text-base mt-0.5">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {edu.period}
                      </span>
                      <div className="text-lg font-bold text-cyan-400 font-mono">
                        {edu.score}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: CERTIFICATIONS */}
          {activeTab === 'certificates' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificatesData.map((cert, cIdx) => {
                const IconComp = certIconMap[cert.icon] || Award;
                return (
                  <div
                    key={cIdx}
                    className="glass-panel-glow rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-indigo-950/60 text-indigo-300 border border-indigo-800/40">
                          Verified
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 mt-1 mb-3">
                        Issuer: {cert.issuer}
                      </p>

                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                        {cert.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                      {cert.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 3: EXTRACURRICULARS */}
          {activeTab === 'extracurricular' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {extracurricularData.map((item, eIdx) => {
                const IconComp = extraIconMap[item.icon] || Trophy;
                return (
                  <div
                    key={eIdx}
                    className="glass-panel-glow rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20 transition-all">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-amber-300 border border-slate-800">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-400 mt-1 mb-3">
                        {item.organization}
                      </p>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/5 flex items-center text-xs text-amber-400/90 gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Skill & Leadership Showcase</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
