import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  X, 
  Maximize2, 
  Minimize2, 
  RotateCcw,
  MessageSquare
} from 'lucide-react';
import { botKnowledge, personalInfo } from '../data/portfolioData';

export default function AIChatWidget({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hello! I'm Anshuman's AI Assistant. Ask me anything about his technical skills, MERN stack experience, projects, or how to get in touch!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const sampleQuestions = [
    "What projects has Anshuman built?",
    "Tell me about his internship experience",
    "What are his core technical skills?",
    "How can I contact Anshuman?"
  ];

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (queryText) => {
    const textToSend = queryText || input;
    if (!textToSend.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: textToSend }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    // Formulate response based on knowledge base
    const lowerQuery = textToSend.toLowerCase();
    let bestMatch = botKnowledge.find((k) => 
      k.triggers.some((trig) => lowerQuery.includes(trig))
    );

    let replyText = bestMatch 
      ? bestMatch.reply 
      : `Anshuman is a Full-Stack Developer proficient in the MERN stack (React, Node, Express, MongoDB) and Java (DSA). He completed a 6-week internship at Global Next Consulting and holds a 7.58 CGPA at Kanpur Institute of Technology. Feel free to contact him at anshumanshukla721@gmail.com!`;

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: replyText }]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: 'bot',
        text: `Conversation restarted. How can I assist you in exploring Anshuman's profile?`
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div 
        className="w-full max-w-lg bg-[#0b101e] border border-cyan-500/40 rounded-2xl shadow-2xl flex flex-col h-[580px] max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Chat Header */}
        <div className="px-5 py-4 bg-[#0e1628] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-white font-bold text-sm sm:text-base">
                  Anshuman's AI Copilot
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-[11px] text-cyan-400/90 font-mono">
                Trained on Resume & Technical Profile
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleReset}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              title="Reset conversation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              title="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Suggested Quick Prompts */}
        <div className="px-4 py-2.5 bg-slate-900/60 border-b border-white/5 flex gap-2 overflow-x-auto no-scrollbar">
          {sampleQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-[11px] whitespace-nowrap px-3 py-1 rounded-full bg-cyan-950/50 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-800/40 transition-colors shrink-0 cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Chat History Box */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-gradient-to-b from-[#0b101e] to-[#080d19]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                m.sender === 'user' 
                  ? 'bg-cyan-500 text-slate-950 font-bold text-xs' 
                  : 'bg-indigo-600/30 text-cyan-300 border border-indigo-500/30'
              }`}>
                {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[82%] ${
                m.sender === 'user'
                  ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-none'
                  : 'bg-slate-900/90 text-slate-200 border border-white/10 rounded-tl-none shadow-md'
              }`}>
                {m.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600/30 text-cyan-300 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-900/90 border border-white/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 text-xs text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"></span>
                <span className="ml-1 text-[11px] font-mono text-cyan-300">Formulating response...</span>
              </div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#0e1628] border-t border-white/10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, MERN stack, internship..."
              className="flex-1 bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 transition-colors shrink-0 cursor-pointer shadow-md shadow-cyan-500/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
