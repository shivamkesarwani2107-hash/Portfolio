import React from 'react';
import { ExternalLink, FolderGit2, BookOpen, Check, Layers, ArrowUpRight, ShieldCheck, Sparkles, Film, BookMarked, Code2 } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';

export default function ProjectCard({ project, onOpenCaseStudy }) {
  const isMovieProject = project.id === 'movie-ticket';

  return (
    <div className="group relative bg-dark-900 border border-slate-800/90 hover:border-slate-700/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 glow-card flex flex-col justify-between">
      {/* Background Gradient Tint */}
      <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${project.imageBg} rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity`} />

      <div className="relative space-y-6">
        {/* Top Badges & Category */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-dark-800 border border-slate-700/60 text-emerald-400">
              {isMovieProject ? <Film className="w-5 h-5 text-rose-400" /> : <BookMarked className="w-5 h-5 text-emerald-400" />}
            </span>
            <Badge variant="blue" size="sm">
              {project.category}
            </Badge>
          </div>
          <Badge variant="emerald" size="sm" dot={true}>
            {project.badge}
          </Badge>
        </div>

        {/* Project Header Info */}
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display group-hover:text-emerald-300 transition-colors">
            {project.shortTitle}
          </h3>
          <p className="text-sm font-medium text-slate-300">
            {project.tagline}
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
            {project.overview}
          </p>
        </div>

        {/* Key Features Preview */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Key Highlights
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="line-clamp-2">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Info if available */}
        {project.deployments && (
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono pt-1">
            <span className="text-slate-400">Hosted:</span>
            {project.deployments.map((d, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded-md bg-dark-800 border border-slate-700/60 text-slate-300">
                {d.name} → {d.platform}
              </span>
            ))}
          </div>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="tech" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action Buttons & Repos */}
      <div className="relative pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
        <Button
          variant="primary"
          size="sm"
          onClick={() => onOpenCaseStudy(project)}
          icon={BookOpen}
          iconPosition="left"
        >
          View Case Study
        </Button>

        <Button
          variant="secondary"
          size="sm"
          href={project.links.live}
          target="_blank"
          icon={ExternalLink}
          iconPosition="right"
        >
          Live Demo
        </Button>

        <Button
          variant="outline"
          size="sm"
          href={project.links.github}
          target="_blank"
          icon={FolderGit2}
          iconPosition="left"
        >
          GitHub Repo
        </Button>
      </div>
    </div>
  );
}
