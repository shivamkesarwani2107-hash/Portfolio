import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, ArrowRight, Building } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';
import Badge from '../components/common/Badge';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 lg:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex">
            <Badge variant="emerald" icon={Briefcase} size="sm">
              Work & Education
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display">
            Experience & Background.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Honest development experience gained through real internship work, independent full-stack project building, and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Internship Experience (Left/Main - 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <Briefcase className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                Internship Experience
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-8">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-dark-900 border-2 border-emerald-400 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  <div className="bg-dark-900 border border-slate-800/90 hover:border-slate-700 rounded-2xl p-6 space-y-4 glow-card">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                          {exp.type}
                        </span>
                        <h4 className="text-xl font-bold text-white tracking-tight font-display">
                          {exp.role}
                        </h4>
                        <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-0.5">
                          <Building className="w-4 h-4 text-slate-400" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1">
                        <Badge variant="gray" size="sm" icon={Calendar}>
                          {exp.duration}
                        </Badge>
                        <span className="text-[11px] text-slate-400 font-mono">
                          Duration: {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Key Responsibilities & Skills:
                      </div>
                      <div className="space-y-2">
                        {exp.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Academic Profile (Right - 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                Education & Dedication
              </h3>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div 
                  key={idx}
                  className="bg-dark-900 border border-slate-800/90 rounded-2xl p-6 space-y-4 glow-card"
                >
                  <div className="space-y-1">
                    <Badge variant="blue" size="sm">
                      {edu.type}
                    </Badge>
                    <h4 className="text-lg font-bold text-white font-display">
                      {edu.degree}
                    </h4>
                    <div className="text-sm font-medium text-slate-300">
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
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

                  <div className="p-3.5 rounded-xl bg-dark-850/80 border border-slate-800 space-y-1.5 text-xs text-slate-300">
                    <span className="font-semibold text-emerald-400">Engineering Passion:</span>
                    <p className="leading-relaxed">
                      {edu.highlight}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}

              {/* Developer Mindset Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-dark-850 to-dark-900 border border-slate-800 space-y-2.5">
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Self-Driven Full-Stack Journey
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Beyond formal coursework, I have invested hundreds of hours building production-grade full-stack architectures, writing REST APIs, debugging asynchronous states, and mastering modern web standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
