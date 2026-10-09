import React from 'react';
import { 
  X, 
  Printer, 
  ExternalLink, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  FileText
} from 'lucide-react';
import { personalInfo, experienceData, projectsData, skillsData, educationData, certificatesData, extracurricularData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Toolbar (hidden during print) */}
        <div className="px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 print:hidden shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-sm">Resume Preview — Anshuman Shukla</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-6 text-slate-800 text-sm leading-relaxed font-sans bg-white">
          
          {/* Header */}
          <div className="text-center pb-5 border-b-2 border-slate-800">
            <h1 className="text-3xl font-extrabold text-slate-950 tracking-tight">
              Anshuman Shukla
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-700 font-medium">
              <span>+91 9450980625</span>
              <span>•</span>
              <a href="mailto:anshumanshukla721@gmail.com" className="text-blue-700 underline">
                anshumanshukla721@gmail.com
              </a>
              <span>•</span>
              <a href="https://linkedin.com/in/anshumanshukla1029" target="_blank" rel="noreferrer" className="text-blue-700 underline">
                linkedin.com/in/anshumanshukla1029
              </a>
              <span>•</span>
              <a href="https://github.com/Ansh2904" target="_blank" rel="noreferrer" className="text-blue-700 underline">
                github.com/Ansh2904
              </a>
            </div>
          </div>

          {/* SUMMARY */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed text-justify">
              {personalInfo.summary}
            </p>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Education
            </h2>
            <table className="w-full text-xs text-left border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300">
                  <th className="p-1.5 border-r border-slate-300 font-semibold">Qualification</th>
                  <th className="p-1.5 border-r border-slate-300 font-semibold">Year</th>
                  <th className="p-1.5 border-r border-slate-300 font-semibold">School/University/Institute</th>
                  <th className="p-1.5 font-semibold">Percentage/CGPA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-300">
                  <td className="p-1.5 border-r border-slate-300 font-medium">B-Tech (CS-AI&ML)</td>
                  <td className="p-1.5 border-r border-slate-300">2023-2027</td>
                  <td className="p-1.5 border-r border-slate-300">Kanpur Institute of Technology</td>
                  <td className="p-1.5 font-semibold">7.58</td>
                </tr>
                <tr className="border-b border-slate-300">
                  <td className="p-1.5 border-r border-slate-300 font-medium">Intermediate (XII)</td>
                  <td className="p-1.5 border-r border-slate-300">2023</td>
                  <td className="p-1.5 border-r border-slate-300">Shivaji Inter College, Kanpur</td>
                  <td className="p-1.5">76%</td>
                </tr>
                <tr>
                  <td className="p-1.5 border-r border-slate-300 font-medium">High School (X)</td>
                  <td className="p-1.5 border-r border-slate-300">2021</td>
                  <td className="p-1.5 border-r border-slate-300">Shivaji Inter College, Kanpur</td>
                  <td className="p-1.5">84.84%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* EXPERIENCE */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Experience
            </h2>
            {experienceData.map((exp, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <strong className="text-xs font-bold text-slate-950">{exp.company}</strong>
                  <span className="text-xs text-slate-600 font-medium">{exp.period}</span>
                </div>
                <div className="text-xs font-semibold text-slate-800 italic mb-1.5">
                  {exp.role}
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                  <li>Completed a 6-week remote internship under the Professional Industrial Internship Program (PIIP) – 2025.</li>
                  <li>Gained hands-on experience in full-stack web development and worked on building responsive and scalable web applications.</li>
                  <li>Worked on user-focused applications while strengthening problem-solving and software development skills.</li>
                  <li>
                    Contributed to a group project during the internship; Live Demo:{' '}
                    <a href="https://newmattyy.netlify.app/" target="_blank" rel="noreferrer" className="text-blue-700 underline font-medium">
                      https://newmattyy.netlify.app/
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          {/* PROJECTS */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Projects
            </h2>
            <div className="space-y-3">
              <div>
                <strong className="text-xs font-bold text-slate-950 block">Personal Finance Tracking</strong>
                <ul className="list-disc list-outside pl-4 text-xs text-slate-700 mt-0.5">
                  <li>
                    Developed a personal finance application that helps users organize and monitor their financial activities in one place. 
                    Included features for managing transactions, tracking budgets, setting financial goals, and maintaining user accounts for a more organized approach to personal finance.
                  </li>
                </ul>
              </div>

              <div>
                <strong className="text-xs font-bold text-slate-950 block">Hotel Management System</strong>
                <ul className="list-disc list-outside pl-4 text-xs text-slate-700 mt-0.5">
                  <li>
                    Developed a hotel management website that allows users to explore available hotels, view detailed information, and manage bookings. 
                    Designed the application to provide a responsive browsing experience with organized hotel data and a smooth booking workflow.
                  </li>
                </ul>
              </div>

              <div>
                <strong className="text-xs font-bold text-slate-950 block">AI ChatBot</strong>
                <ul className="list-disc list-outside pl-4 text-xs text-slate-700 mt-0.5">
                  <li>
                    Built an interactive chatbot application that allows users to communicate with an AI assistant and receive conversational responses. 
                    Integrated an AI-powered response system to process user queries and provide relevant answers, with a simple and user-friendly interface.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-700">
              <div><strong>Programming Languages:</strong> Java, JavaScript</div>
              <div><strong>Frontend:</strong> HTML, CSS, React.js, Tailwind CSS, EJS</div>
              <div><strong>Backend:</strong> Node.js, Express.js, REST APIs</div>
              <div><strong>Databases:</strong> MongoDB, MySQL</div>
              <div><strong>Core CS Fundamentals:</strong> DSA, OOPs, DBMS</div>
              <div><strong>Version Control:</strong> Git, GitHub</div>
            </div>
          </div>

          {/* CERTIFICATES */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Certificates
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
              <li><strong>Java Essential Training</strong> - LinkedIn Learning (Covered Java fundamentals and core programming concepts.)</li>
              <li><strong>Java and Data Structure</strong> - LinkedIn Learning (Learned Java programming and fundamental data structure concepts.)</li>
              <li><strong>MERN Stack Development</strong> - Apna College (Learned full-stack web development using the MERN stack.)</li>
            </ul>
          </div>

          {/* EXTRA-CURRICULAR ACTIVITIES */}
          <div>
            <h2 className="text-xs font-bold tracking-wider uppercase text-slate-900 border-b border-slate-300 pb-1 mb-2 font-mono">
              Extra-Curricular Activities
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
              <li>Secured 2nd Position in a college Crafting Competition through creative and innovative work.</li>
              <li>Participated in a Hackathon and collaborated with team members to solve technical challenges together.</li>
              <li>Participated in a college-level Debate Competition and developed effective communication skills and public speaking.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
