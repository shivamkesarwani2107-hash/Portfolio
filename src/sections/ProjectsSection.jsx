import React from 'react';
import { FolderGit2, Sparkles, Code2, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import ProjectCard from '../components/common/ProjectCard';
import Badge from '../components/common/Badge';

export default function ProjectsSection({ onOpenCaseStudy }) {
  return (
    <section id="projects" className="relative py-20 lg:py-28 border-t border-slate-800/80 overflow-hidden w-full max-w-full">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 max-w-full h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex">
              <Badge variant="blue" icon={FolderGit2} size="sm">
                Featured Projects
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display">
              Engineered with the MERN Stack.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore real full-stack applications with complete frontend UI, backend RESTful APIs, JWT security, normalized MongoDB schemas, and production deployments.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400">
            [ 0{PROJECTS.length} Featured Applications ]
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
