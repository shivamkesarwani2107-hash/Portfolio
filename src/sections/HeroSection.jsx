import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, HONEST_METRICS } from '../data/portfolioData';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';

export default function HeroSection({ onOpenContact, onOpenResume }) {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden w-full max-w-full">
      {/* Background Ambient Glow & Grid Lines */}
      <div className="absolute inset-0 bg-grid-mesh opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-full h-[350px] bg-gradient-to-tr from-emerald-500/10 via-blue-500/10 to-indigo-500/0 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10 lg:space-y-14">
        {/* Hero Content */}
        <div className="max-w-4xl space-y-6">
          {/* Availability Pill Banner (Matches Reference) */}
          <div className="inline-flex max-w-full">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-slate-700/60 backdrop-blur-md shadow-sm max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-300 truncate">
                {PERSONAL_INFO.noticeNotice}
              </span>
            </div>
          </div>

          {/* Main Hero Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-display break-words">
            Hi, I'm <span className="text-white">{PERSONAL_INFO.name}.</span>
          </h1>

          {/* Subheading / Tech highlights */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 font-normal leading-relaxed max-w-3xl">
            <span className="text-slate-200 font-medium">{PERSONAL_INFO.title}</span> building modern, scalable, and user-focused full-stack web applications using{' '}
            <strong className="text-white font-semibold">React</strong>,{' '}
            <strong className="text-white font-semibold">Node.js</strong>,{' '}
            <strong className="text-white font-semibold">Express</strong>, and{' '}
            <strong className="text-white font-semibold">MongoDB</strong>.
          </p>

          {/* Action CTA Buttons (Matches Reference) */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToProjects}
              icon={ArrowRight}
              iconPosition="right"
              className="shadow-lg shadow-white/5"
            >
              View Projects
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={onOpenResume}
              icon={Download}
              iconPosition="right"
            >
              View Resume
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              icon={Mail}
              iconPosition="right"
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Honest Developer Metrics Bar (Matches Reference Layout with 100% truthful stats) */}
        <div className="pt-6 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {HONEST_METRICS.map((metric, idx) => (
              <div key={idx} className="space-y-1 min-w-0">
                <div className="text-xs sm:text-sm font-medium text-slate-400 truncate">
                  {metric.label}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 truncate">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
