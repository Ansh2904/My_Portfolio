import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Binary, 
  GitBranch, 
  Sparkles,
  Coffee,
  Atom,
  Palette,
  Layout,
  FileCode,
  HardDrive,
  Boxes,
  FolderTree,
  Zap,
  Send,
  Network
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon string names to Lucide icons
const iconMap = {
  Coffee,
  Code2,
  Atom,
  Palette,
  Layout,
  FileCode,
  Server,
  Layers,
  Network,
  Database,
  HardDrive,
  Binary,
  Boxes,
  FolderTree,
  GitBranch,
  Zap,
  Send
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Sparkles },
    { id: 'languages', label: 'Languages', icon: Coffee },
    { id: 'frontend', label: 'Frontend', icon: Atom },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'databases', label: 'Databases', icon: Database },
    { id: 'fundamentals', label: 'CS Fundamentals', icon: Binary },
    { id: 'tools', label: 'Tools & DevOps', icon: GitBranch },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.entries(skillsData).flatMap(([cat, list]) => 
        list.map((item) => ({ ...item, category: cat }))
      );
    }
    return (skillsData[activeCategory] || []).map((item) => ({ 
      ...item, 
      category: activeCategory 
    }));
  };

  const skillsToDisplay = getFilteredSkills();

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/30">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Core programming languages, modern frameworks, database management, and CS fundamentals.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {skillsToDisplay.map((skill, index) => {
            const IconComp = iconMap[skill.icon] || Code2;
            return (
              <div
                key={index}
                className="glass-panel rounded-xl p-5 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-md shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-900 text-cyan-300 border border-slate-800">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-base group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="mt-1 text-slate-400 text-xs leading-relaxed">
                    {skill.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="capitalize">{skill.category || 'tech'}</span>
                  <span className="text-cyan-400/80">● Active</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
