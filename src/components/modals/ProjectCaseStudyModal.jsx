import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  FolderGit2, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Database, 
  ArrowRight,
  Server,
  Zap,
  Globe,
  Code2
} from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

export default function ProjectCaseStudyModal({ project, isOpen, onClose }) {
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

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto w-full max-w-full">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-dark-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 my-4 sm:my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-8 border-b border-slate-800 bg-gradient-to-b from-dark-850 to-dark-900 shrink-0">
          <div className="space-y-2 max-w-2xl min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="blue" size="sm">
                {project.category}
              </Badge>
              <Badge variant="emerald" size="sm" dot={true}>
                {project.badge}
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display break-words">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-dark-800 hover:bg-dark-700 border border-slate-700/80 rounded-full transition-colors shrink-0 ml-3"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar">
          {/* Action Links & Repository Links */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 p-4 rounded-xl bg-dark-950/60 border border-slate-800">
            <Button
              variant="primary"
              size="sm"
              href={project.links.live}
              target="_blank"
              icon={ExternalLink}
              iconPosition="right"
            >
              Live Demo
            </Button>

            {project.links.githubFrontend && (
              <Button
                variant="secondary"
                size="sm"
                href={project.links.githubFrontend}
                target="_blank"
                icon={FolderGit2}
                iconPosition="left"
              >
                Frontend Repo
              </Button>
            )}

            {project.links.githubBackend && (
              <Button
                variant="secondary"
                size="sm"
                href={project.links.githubBackend}
                target="_blank"
                icon={FolderGit2}
                iconPosition="left"
              >
                Backend Repo
              </Button>
            )}

            {!project.links.githubFrontend && (
              <Button
                variant="secondary"
                size="sm"
                href={project.links.github}
                target="_blank"
                icon={FolderGit2}
                iconPosition="left"
              >
                GitHub Repository
              </Button>
            )}

            {project.deployments && (
              <div className="flex items-center gap-2 w-full sm:w-auto sm:ml-auto text-xs text-slate-400 font-mono break-words pt-1 sm:pt-0">
                <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="break-words">Deployed: {project.deployments.map(d => `${d.name} (${d.platform})`).join(' • ')}</span>
              </div>
            )}
          </div>

          {/* Overview & Problem Solved */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-dark-850/60 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>Project Overview</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-dark-850/60 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-300">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Problem Solved</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Core Features & Implementation</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-dark-850/40 border border-slate-800 hover:border-slate-700/80 transition-colors space-y-1.5"
                >
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed pl-3.5">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Flow */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              <span>Technical Architecture & Flow</span>
            </h3>
            <div className="p-5 rounded-2xl bg-dark-950/80 border border-slate-800 space-y-3 font-mono text-xs text-slate-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-dark-900 border border-slate-800/80">
                  <div className="text-indigo-300 font-semibold mb-1">Client Layer</div>
                  <div className="text-slate-400">{project.architecture.client}</div>
                </div>
                <div className="p-3 rounded-lg bg-dark-900 border border-slate-800/80">
                  <div className="text-cyan-300 font-semibold mb-1">Backend REST API</div>
                  <div className="text-slate-400">{project.architecture.server}</div>
                </div>
                <div className="p-3 rounded-lg bg-dark-900 border border-slate-800/80">
                  <div className="text-emerald-300 font-semibold mb-1">Auth & Security</div>
                  <div className="text-slate-400">{project.architecture.auth}</div>
                </div>
                <div className="p-3 rounded-lg bg-dark-900 border border-slate-800/80">
                  <div className="text-green-300 font-semibold mb-1">Database Layer</div>
                  <div className="text-slate-400">{project.architecture.database}</div>
                </div>
              </div>
            </div>
          </div>

          {/* My Contributions */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>My Contributions & Responsibilities</span>
            </h3>
            <div className="space-y-2.5">
              {project.myContribution.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-3 pt-2 border-t border-slate-800">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="tech">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-dark-950/80 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500 font-mono">
            {project.title} • Case Study
          </span>
          <Button variant="secondary" size="sm" onClick={onClose}>
            Close Case Study
          </Button>
        </div>
      </div>
    </div>
  );
}
