import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#0d1322] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.badge}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-cyan-400/90 text-sm font-medium mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Extended Description */}
        <div className="mt-5 space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>{project.description}</p>
          {project.extendedDetails && (
            <p className="text-slate-400 text-sm">{project.extendedDetails}</p>
          )}
        </div>

        {/* Key Features */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Core Capabilities & Architecture:</span>
          </h4>
          <div className="space-y-2.5">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/50 p-2.5 rounded-lg border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-6 pt-5 border-t border-white/10">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
            Technologies & Libraries:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-800/40"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
          {project.demo && project.demo !== '#' ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-md shadow-cyan-500/25"
            >
              <span>Visit Live Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-xs text-slate-400 italic font-mono px-3 py-1 rounded bg-slate-900">
              Live link available in repo or on request
            </span>
          )}

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
