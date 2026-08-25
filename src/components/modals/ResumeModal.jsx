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
  FileText
} from 'lucide-react';
import { PERSONAL_INFO, RESUME_DATA, PROJECTS, EDUCATION, EXPERIENCES, SKILL_CATEGORIES } from '../../data/portfolioData';
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-dark-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-4 max-h-[92vh] flex flex-col">
        {/* Modal Action Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-dark-850 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white font-display">
              Resume Preview — {PERSONAL_INFO.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
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
              className="p-1.5 text-slate-400 hover:text-white bg-dark-800 hover:bg-dark-700 border border-slate-700/80 rounded-full transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto custom-scrollbar space-y-8 bg-dark-950/60 font-sans">
          {/* Resume Header */}
          <div className="text-center space-y-3 pb-6 border-b border-slate-800">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-300">
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>

            <div className="flex items-center justify-center gap-4 pt-1 text-xs">
              <a 
                href={PERSONAL_INFO.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white"
              >
                <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>GitHub Profile</span>
              </a>
              <span className="text-slate-700">•</span>
              <a 
                href={PERSONAL_INFO.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1 flex items-center gap-2">
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="p-2.5 rounded-lg bg-dark-900 border border-slate-800/80">
                <span className="font-semibold text-white">Languages: </span>
                <span className="text-slate-300">JavaScript (ES6+), HTML5, CSS3</span>
              </div>
              <div className="p-2.5 rounded-lg bg-dark-900 border border-slate-800/80">
                <span className="font-semibold text-white">Frontend: </span>
                <span className="text-slate-300">React.js, React Router DOM, Tailwind CSS, TanStack Query, Axios</span>
              </div>
              <div className="p-2.5 rounded-lg bg-dark-900 border border-slate-800/80">
                <span className="font-semibold text-white">Backend: </span>
                <span className="text-slate-300">Node.js, Express.js</span>
              </div>
              <div className="p-2.5 rounded-lg bg-dark-900 border border-slate-800/80">
                <span className="font-semibold text-white">Database & Auth: </span>
                <span className="text-slate-300">MongoDB, Mongoose, JWT Authentication</span>
              </div>
              <div className="p-2.5 rounded-lg bg-dark-900 border border-slate-800/80 sm:col-span-2">
                <span className="font-semibold text-white">Tools & Concepts: </span>
                <span className="text-slate-300">Git, GitHub, Postman, VS Code, Vercel, Render • REST APIs, CRUD, Pagination, Search, Filtering, Responsive Design</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1">
              Featured Projects
            </h2>

            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-dark-900 border border-slate-800/80 space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-white font-display">
                        {proj.title}
                      </h3>
                      <Badge variant="tech" size="sm">
                        {proj.techStack.slice(0, 3).join(', ')}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      {proj.links.live && (
                        <a 
                          href={proj.links.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:underline flex items-center gap-1"
                        >
                          Live Demo <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {proj.links.github && (
                        <a 
                          href={proj.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline flex items-center gap-1"
                        >
                          GitHub <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                    {proj.features.map((f, fIdx) => (
                      <li key={fIdx}>
                        <strong className="text-slate-200">{f.title}:</strong> {f.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1">
              Project & Practical Experience
            </h2>

            <div className="space-y-3">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-dark-900 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <div>
                      <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                      <div className="text-xs text-emerald-400 font-medium">{exp.company} • {exp.location}</div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{exp.duration}</span>
                  </div>

                  <ul className="space-y-1 text-xs text-slate-300 list-disc list-inside">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1">
                Education
              </h2>
              <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800/80 space-y-1 text-xs">
                <div className="font-bold text-white text-sm">University of Allahabad</div>
                <div className="text-slate-300">Bachelor of Commerce (B.Com.)</div>
                <div className="text-slate-400 flex justify-between pt-1">
                  <span>Prayagraj, Uttar Pradesh</span>
                  <span className="font-mono text-emerald-400">Graduation: 2027</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-1">
                Key Achievements
              </h2>
              <div className="p-3.5 rounded-xl bg-dark-900 border border-slate-800/80 space-y-1 text-xs text-slate-300">
                {RESUME_DATA.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-slate-800 bg-dark-850 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>References available upon request.</span>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Close Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
