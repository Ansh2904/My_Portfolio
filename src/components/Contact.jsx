import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare,
  Clock
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    // Simulate dispatch & trigger festive confetti
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get in <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Whether you have an internship opportunity, a project proposal, or want to discuss full-stack engineering, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">Direct Email</span>
                    <h4 className="text-white font-semibold text-sm sm:text-base">
                      {personalInfo.email}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={personalInfo.socials.email}
                    className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors text-xs font-mono"
                  >
                    Send ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 group-hover:bg-teal-500/20 transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400">Phone / WhatsApp</span>
                    <h4 className="text-white font-semibold text-sm sm:text-base">
                      {personalInfo.phone}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={personalInfo.socials.phone}
                    className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 hover:bg-teal-500/20 transition-colors text-xs font-mono"
                  >
                    Call ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400">Location</span>
                  <h4 className="text-white font-semibold text-sm sm:text-base">
                    {personalInfo.location}
                  </h4>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Timezone: IST (UTC +5:30)</span>
                </span>
                <span className="text-emerald-400 font-semibold">● Ready to Relocate / Remote</span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#0077b5]/15 border border-[#0077b5]/30 text-sky-300 hover:bg-[#0077b5]/25 transition-colors text-xs font-semibold"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 transition-colors text-xs font-semibold"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repos</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 glass-panel-glow rounded-2xl p-6 sm:p-9 border border-cyan-500/30">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out, <strong className="text-cyan-300">{formData.name}</strong>. Anshuman has received your notification and will reply shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Send a Direct Message</span>
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-800/40">
                    Quick Response
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Developer Internship / Project Collaboration"
                    className="w-full bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your role, opportunity, or feedback here..."
                    className="w-full bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-400 text-slate-950 hover:from-cyan-300 hover:to-teal-300 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
