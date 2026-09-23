import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Building, 
  Award, 
  FileCheck, 
  ExternalLink,
  Download,
  Eye
} from 'lucide-react';
import { EXPERIENCES, EDUCATION, COMPLETION_LETTER } from '../data/portfolioData';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

export default function ExperienceSection({ onOpenCompletionLetter }) {
  return (
    <section id="experience" className="relative py-20 lg:py-28 border-t border-slate-200 dark:border-slate-800/80 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 w-full">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex">
            <Badge variant="emerald" icon={Briefcase} size="sm">
              Experience & Certifications
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight font-display break-words">
            Experience & Credentials.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Hands-on development experience gained through real internship work at Devlupers, independent full-stack project building, and verified industry credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Internship Experience (Left/Main - 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
              <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                Internship Experience
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-8 ml-3 sm:ml-2">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-dark-900 border-2 border-emerald-500 dark:border-emerald-400 flex items-center justify-center shrink-0 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  </div>

                  <div className="bg-white dark:bg-dark-900 border border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm hover:shadow-md glow-card max-w-full transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          {exp.type}
                        </span>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight font-display">
                          {exp.role}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium mt-0.5">
                          <Building className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1">
                        <Badge variant="gray" size="sm" icon={Calendar}>
                          {exp.duration}
                        </Badge>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                          Duration: {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Key Responsibilities & Deliverables:
                      </div>
                      <div className="space-y-2">
                        {exp.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="tech" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Integrated Letter of Completion Quick Action */}
                    <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>Completion verified by Devlupers</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={onOpenCompletionLetter}
                          icon={Eye}
                          iconPosition="left"
                        >
                          View Letter of Completion
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications (Right - 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Certifications / Letter of Completion Card */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  Certifications & Letters
                </h3>
              </div>

              <div className="bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/60 dark:from-dark-900 dark:via-dark-850 dark:to-dark-900 border border-emerald-200 dark:border-emerald-500/30 hover:border-emerald-400 dark:hover:border-emerald-500/60 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md glow-card relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="emerald" size="sm" icon={FileCheck}>
                      Official Certificate
                    </Badge>
                    <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400">
                      {COMPLETION_LETTER.duration}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display pt-1">
                    {COMPLETION_LETTER.title}
                  </h4>
                  <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                    {COMPLETION_LETTER.issuer} • {COMPLETION_LETTER.role}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {COMPLETION_LETTER.summary}
                </p>

                <div className="p-3 rounded-xl bg-white/90 dark:bg-dark-900/90 border border-slate-200 dark:border-slate-800 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center justify-between">
                    <span>Authorized Signatory:</span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">{COMPLETION_LETTER.signatory} ({COMPLETION_LETTER.designation})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Organization:</span>
                    <a 
                      href={COMPLETION_LETTER.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-medium"
                    >
                      devlupers.com <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={onOpenCompletionLetter}
                    icon={Eye}
                    iconPosition="left"
                    className="flex-1 min-w-[140px]"
                  >
                    View Letter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    href={COMPLETION_LETTER.pdfUrl}
                    target="_blank"
                    icon={Download}
                    iconPosition="left"
                  >
                    PDF
                  </Button>
                </div>
              </div>
            </div>

            {/* Education Profile */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  Education & Dedication
                </h3>
              </div>

              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="bg-white dark:bg-dark-900 border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md glow-card"
                  >
                    <div className="space-y-1">
                      <Badge variant="blue" size="sm">
                        {edu.type}
                      </Badge>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                        {edu.degree}
                      </h4>
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 pt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-dark-850/80 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">Engineering Passion:</span>
                      <p className="leading-relaxed">
                        {edu.highlight}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}

                {/* Developer Mindset Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-850 dark:to-dark-900 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                    Self-Driven Full-Stack Journey
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Beyond formal coursework, I have invested hundreds of hours building production-grade full-stack architectures, writing REST APIs, debugging asynchronous states, and mastering modern web standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
