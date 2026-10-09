import { 
  ArrowUp, 
  Mail, 
  Phone, 
  Heart, 
  Terminal,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenAI, onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070c] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
                  <span className="text-cyan-400 font-extrabold text-sm font-mono">AS</span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Anshuman Shukla<span className="text-cyan-400">.</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Full-Stack Developer focused on MERN architecture, responsive web applications, and algorithmic problem-solving with Java.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={onOpenAI}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/40 hover:bg-cyan-900/50 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>AI Copilot Active</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 hover:text-white transition-colors cursor-pointer"
              >
                <span>Full Resume</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Explore Portfolio
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Background</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Global Next Internship</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Technical Skills</a></li>
              <li><a href="#education" className="hover:text-cyan-400 transition-colors">Education & Certifications</a></li>
            </ul>
          </div>

          {/* Socials & Contact Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Get In Touch
            </h4>
            <p className="text-xs text-slate-400">
              Feel free to connect or drop an email for exciting internships or development projects.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.email}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.phone}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-slate-700 transition-colors"
                title="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Anshuman Shukla. Built with React, Tailwind CSS & Vite.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
