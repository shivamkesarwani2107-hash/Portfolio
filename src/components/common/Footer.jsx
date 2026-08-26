import React from 'react';
import { ArrowUp, Mail, Phone, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import Badge from './Badge';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800 bg-dark-950/80 pt-16 pb-12 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand Info & Social Icons */}
          <div className="space-y-4 max-w-md">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-white font-display">
                {PERSONAL_INFO.name}<span className="text-emerald-400">.</span>
              </span>
              <Badge variant="emerald" size="sm" dot={true}>
                {PERSONAL_INFO.availabilityBadge}
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              MERN Stack Developer building responsive frontends, modular REST APIs, and structured database systems with React, Node.js, Express, and MongoDB.
            </p>

            {/* Quick Social Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-dark-900 hover:bg-dark-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4 text-emerald-400" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-dark-900 hover:bg-dark-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href={PERSONAL_INFO.socials.email}
                className="p-2 rounded-xl bg-dark-900 hover:bg-dark-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                aria-label="Send Email"
                title="Email"
              >
                <Mail className="w-4 h-4 text-slate-300" />
              </a>
            </div>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#home"
              className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#architecture"
              className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
            >
              Architecture
            </a>
            <a
              href="#contact"
              className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
            >
              Contact
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-dark-900 hover:bg-dark-800 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-all shadow-sm group ml-auto md:ml-0"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom copyright and stack */}
        <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 font-mono">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 font-mono">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
