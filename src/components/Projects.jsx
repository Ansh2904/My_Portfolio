import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ChevronRight,
  Info
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = ['All', 'Full Stack', 'AI & Web', 'Internship Work'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Real-world web applications built with modern frontend frameworks, backend microservices, and databases.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-white/5'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel-glow rounded-2xl border border-white/10 hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 relative"
            >
              <div>
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-cyan-400/90 text-xs sm:text-sm font-medium mt-1 mb-4">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Feature Highlights */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="line-clamp-2">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/10 mb-6 flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
                  >
                    <span>Read Architecture</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>

                    {project.demo && project.demo !== '#' ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-sm cursor-pointer"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                      >
                        <span>Details</span>
                        <Info className="w-3 h-3 text-cyan-400" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep-dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
