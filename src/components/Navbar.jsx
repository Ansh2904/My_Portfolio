import { Menu, X, FileText, Sparkles, Send, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume, onOpenAI }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-cyan-500/20">
              <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
                <span className="text-cyan-400 font-extrabold text-sm tracking-wider font-mono">AS</span>
              </div>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Anshuman<span className="text-cyan-400">.</span>
              </span>
              <span className="hidden sm:inline-block text-xs text-slate-400 block -mt-1 font-mono">
                Full-Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Ask AI Pill */}
            <button
              onClick={onOpenAI}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/30 hover:bg-indigo-500/20 hover:border-indigo-400 transition-all cursor-pointer shadow-sm group"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse group-hover:rotate-12 transition-transform" />
              <span>Ask AI Bot</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-200 bg-slate-800/80 border border-slate-700 hover:border-cyan-500/50 hover:text-white hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-md shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Send className="w-3 h-3 text-slate-900" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAI}
              className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/20"
              aria-label="Open AI Assistant"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 transition-all duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 border border-slate-700 text-slate-200"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full Resume</span>
              </button>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300"
              >
                <Send className="w-4 h-4" />
                <span>Contact Anshuman</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
