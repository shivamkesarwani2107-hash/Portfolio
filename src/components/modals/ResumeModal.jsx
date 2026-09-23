import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  FolderGit2, 
  CheckCircle2,
  Award,
  Sparkles,
  FileText,
  Globe
} from 'lucide-react';
import { PERSONAL_INFO, RESUME_DATA, PROJECTS, EDUCATION, EXPERIENCES } from '../../data/portfolioData';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const technicalSkillsList = [
    { label: "Languages:", val: "JavaScript (ES6+), HTML5, CSS3" },
    { label: "Frontend:", val: "React.js, React Router DOM, Tailwind CSS, TanStack Query, Axios, Responsive Web Design, Component-Based Architecture" },
    { label: "Backend:", val: "Node.js, Express.js, RESTful APIs, API Development, API Integration, CRUD Operations, Middleware, Asynchronous Programming" },
    { label: "Database & Caching:", val: "MongoDB, Mongoose, Redis, Data Modeling, Database Operations, Query Handling, Server-Side Caching" },
    { label: "AI & Integration:", val: "OpenRouter AI, AI API Integration, AI-Powered Features, Prompt-Based AI Workflows, Third-Party API Integration" },
    { label: "Authentication & Payments:", val: "JWT, Authentication, Authorization, Protected Routes, bcrypt.js, Razorpay, Payment Gateway Integration" },
    { label: "Tools & Deployment:", val: "Git, GitHub, Postman, Vercel, Render, Nodemailer, VS Code" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 overflow-y-auto w-full max-w-full">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-2 sm:my-4 max-h-[92vh] flex flex-col">
        {/* Modal Action Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-dark-850 shrink-0">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display truncate">
              Resume Preview — {PERSONAL_INFO.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="primary"
              size="sm"
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              icon={Download}
              iconPosition="left"
            >
              Download PDF
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handlePrint}
              icon={Printer}
              iconPosition="left"
              className="hidden sm:inline-flex"
            >
              Print
            </Button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-dark-800 dark:hover:bg-dark-700 border border-slate-200 dark:border-slate-700/80 rounded-full transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Sheet */}
        <div className="p-4 sm:p-10 overflow-y-auto custom-scrollbar space-y-6 sm:space-y-7 bg-slate-50/70 dark:bg-dark-950/60 font-sans">
          {/* Resume Header */}
          <div className="text-center space-y-2 pb-5 border-b border-slate-200 dark:border-slate-800">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display break-words">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span className="text-slate-400 hidden sm:inline">|</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors break-all">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="text-slate-400 hidden sm:inline">|</span>
              <a 
                href={PERSONAL_INFO.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-400 hidden sm:inline">|</span>
              <a 
                href="#home" 
                onClick={onClose}
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Portfolio</span>
              </a>
              <span className="text-slate-400 hidden sm:inline">|</span>
              <a 
                href={PERSONAL_INFO.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 border-b border-slate-300 dark:border-slate-700 pb-1">
              SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* TECHNICAL SKILLS */}
          <div className="space-y-2.5">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 border-b border-slate-300 dark:border-slate-700 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              {technicalSkillsList.map((skill, idx) => (
                <div key={idx} className="p-2 sm:p-2.5 rounded-lg bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800/80 shadow-xs flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="font-bold text-slate-900 dark:text-white shrink-0 sm:w-44">{skill.label}</span>
                  <span className="text-slate-700 dark:text-slate-300">{skill.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 border-b border-slate-300 dark:border-slate-700 pb-1">
              EXPERIENCE
            </h2>

            <div className="space-y-3">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800/80 shadow-xs space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{exp.company} – {exp.role}</h3>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400 font-medium">{exp.duration}</span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside leading-relaxed">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="pl-1">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* KEY PROJECTS */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 border-b border-slate-300 dark:border-slate-700 pb-1">
              KEY PROJECTS
            </h2>

            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 sm:p-5 rounded-xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800/80 shadow-xs space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white font-display">
                        {proj.title}
                      </h3>
                    </div>

                    {proj.links.live && (
                      <a 
                        href={proj.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-bold tracking-wide"
                      >
                        LIVE URL <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div className="text-xs font-mono text-slate-600 dark:text-slate-400 italic">
                    {proj.techStack.join(' | ')}
                  </div>

                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside leading-relaxed pt-1">
                    {proj.features.map((f, fIdx) => (
                      <li key={fIdx} className="pl-1">
                        {f.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 border-b border-slate-300 dark:border-slate-700 pb-1">
              EDUCATION
            </h2>
            <div className="p-4 rounded-xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800/80 shadow-xs space-y-1 text-xs">
              <div className="flex justify-between items-center flex-wrap gap-1">
                <div className="font-bold text-slate-900 dark:text-white text-sm">University of Allahabad</div>
                <span className="font-mono text-slate-600 dark:text-slate-400">Expected Graduation: 2027</span>
              </div>
              <div className="flex justify-between items-center flex-wrap gap-1 text-slate-600 dark:text-slate-400">
                <span>Bachelor of Commerce (B.Com.)</span>
                <span>Prayagraj, Uttar Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-dark-850 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 shrink-0">
          <span>Official Resume • Shivam Kesarwani</span>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Close Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
