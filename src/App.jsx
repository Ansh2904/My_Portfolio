import React, { useState } from 'react';
import { Bot, Sparkles, FileText } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationCertificates from './components/EducationCertificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import AIChatWidget from './components/AIChatWidget';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Global Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAI={() => setIsAIOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAI={() => setIsAIOpen(true)}
        />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EducationCertificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer 
        onOpenAI={() => setIsAIOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Floating Bottom-Right Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={() => setIsAIOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-medium text-xs sm:text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-cyan-400/30"
          aria-label="Ask Anshuman's AI"
        >
          <Bot className="w-5 h-5 text-cyan-200 group-hover:rotate-12 transition-transform" />
          <span className="font-semibold tracking-wide">Ask Anshuman's AI</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
        </button>
      </div>

      {/* Modals */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <AIChatWidget 
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
      />
    </div>
  );
}
