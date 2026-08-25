import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  ShieldCheck, 
  Layers, 
  Sparkles,
  CheckCircle2,
  Cpu,
  FileCode,
  Palette,
  Smartphone,
  Boxes,
  Network,
  ArrowLeftRight,
  Table,
  GitCommit,
  RefreshCw,
  GitBranch,
  Send,
  Zap,
  Terminal,
  Atom
} from 'lucide-react';
import { SKILL_CATEGORIES, CORE_CONCEPTS } from '../data/portfolioData';
import Badge from '../components/common/Badge';

const iconMap = {
  Layout,
  Server,
  Database,
  Wrench,
  Atom,
  FileCode,
  Palette,
  Code2,
  Smartphone,
  Cpu,
  Boxes,
  Network,
  ShieldCheck,
  ArrowLeftRight,
  Table,
  Layers,
  GitCommit,
  RefreshCw,
  GitBranch,
  Send,
  Zap,
  Terminal
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="relative py-20 lg:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex">
              <Badge variant="cyan" icon={Code2} size="sm">
                Technical Stack
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display">
              Skills & Core Technologies.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Focused on the JavaScript and MERN ecosystem, specializing in scalable backend APIs, reactive frontend user interfaces, and structured database persistence.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-dark-900 border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'all'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  activeTab === cat.id
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category) => {
            const CategoryIcon = iconMap[category.icon] || Code2;

            return (
              <div
                key={category.id}
                className="bg-dark-900 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-6 space-y-5 glow-card flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-800/80">
                    <div className="p-2.5 rounded-xl bg-dark-800 border border-slate-700/60 text-emerald-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight font-display">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill, sIdx) => {
                      const SkillIcon = iconMap[skill.icon] || Code2;
                      return (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-dark-850/60 hover:bg-dark-800/70 border border-slate-800/60 hover:border-slate-700/60 transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <SkillIcon className="w-4 h-4 text-slate-400" />
                            <span className="text-xs font-semibold text-slate-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400/90 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-800/30">
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Concepts & Architecture Concepts Showcase */}
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-dark-900 border border-slate-800 space-y-4 glow-card">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Full-Stack Development Competencies & Patterns</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              Applied in Movie Ticket & Library Systems
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 pt-2">
            {CORE_CONCEPTS.map((concept, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-3 rounded-xl bg-dark-850/60 border border-slate-800/80 text-xs font-medium text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{concept}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
