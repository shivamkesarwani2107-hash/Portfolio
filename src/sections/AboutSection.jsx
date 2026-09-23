import React from 'react';
import { User, Code2, Sparkles, CheckCircle2, Target, Heart, ArrowRight, BookOpen, Terminal } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_INFO, EDUCATION } from '../data/portfolioData';
import Badge from '../components/common/Badge';

const iconMap = {
  Code2,
  Sparkles,
  CheckCircle2,
  Target
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-28 border-t border-slate-200 dark:border-slate-800/80 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 w-full">
        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex">
            <Badge variant="purple" icon={User} size="sm">
              About Me
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight font-display break-words">
            Driven by Code & Problem Solving.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            A developer who transitioned curiosity into real-world software engineering capabilities through continuous building.
          </p>
        </div>

        {/* Main Story & Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Personal Journey Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-6 shadow-sm glow-card max-w-full">
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p className="text-slate-900 dark:text-slate-200 font-medium text-base sm:text-lg">
                  {ABOUT_INFO.summary}
                </p>

                <p className="text-slate-600 dark:text-slate-400">
                  While pursuing my Bachelor of Commerce degree at University of Allahabad, I realized my true passion lies in computer science and building software that people interact with every day.
                </p>

                <p className="text-slate-600 dark:text-slate-400">
                  Rather than relying on theoretical tutorials, I immersed myself in project-driven development — creating intelligent apps like <strong className="text-slate-900 dark:text-slate-200 font-semibold">FitAI</strong> (an AI-powered fitness & workout planner using OpenAI models and Razorpay memberships), contributing to production platforms like <strong className="text-slate-900 dark:text-slate-200 font-semibold">AstroGanesh</strong> (a live astrology platform with payment & consultation workflows), and engineering full-stack systems like <strong className="text-slate-900 dark:text-slate-200 font-semibold">MegaMart</strong> (a grocery shopping platform with Redis caching & Razorpay) and a multi-tier <strong className="text-slate-900 dark:text-slate-200 font-semibold">Library Management System</strong>.
                </p>

                <p className="text-slate-600 dark:text-slate-400">
                  During my internship at <strong className="text-slate-900 dark:text-slate-200 font-semibold">Devlupers</strong>, I honed collaborative workflows with Git, created scalable Express REST APIs, managed JWT token security, and built responsive React components.
                </p>
              </div>

              {/* Quick Profile Summary Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200 dark:border-slate-800/80 space-y-0.5">
                  <span className="text-slate-500 dark:text-slate-400">Current Location</span>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">{PERSONAL_INFO.location}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200 dark:border-slate-800/80 space-y-0.5">
                  <span className="text-slate-500 dark:text-slate-400">Availability</span>
                  <div className="font-semibold text-emerald-600 dark:text-emerald-400">{PERSONAL_INFO.availability}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200 dark:border-slate-800/80 space-y-0.5">
                  <span className="text-slate-500 dark:text-slate-400">Target Role</span>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">{PERSONAL_INFO.careerGoal}</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-dark-850 border border-slate-200 dark:border-slate-800/80 space-y-0.5">
                  <span className="text-slate-500 dark:text-slate-400">Education</span>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">B.Com (2024 – 2027)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars of Engineering (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {ABOUT_INFO.pillars.map((pillar, idx) => {
              const PillarIcon = iconMap[pillar.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors space-y-2 shadow-sm hover:shadow-md glow-card"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-dark-800 border border-slate-200 dark:border-slate-700/60 text-emerald-600 dark:text-emerald-400">
                      <PillarIcon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-1">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
