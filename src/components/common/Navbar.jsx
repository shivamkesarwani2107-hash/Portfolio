import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Sun, Moon, FileText, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import Badge from './Badge';

export default function Navbar({
  activeSection,
  onOpenCommandPalette,
  onOpenResume,
  darkMode,
  onToggleDarkMode
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/80 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Availability Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors font-display text-left group"
            >
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-emerald-400">.</span>
            </button>

            <div className="hidden lg:flex items-center">
              <Badge
                variant="emerald"
                dot={true}
                pulse={true}
                dotColor="bg-emerald-400"
                size="sm"
                className="bg-emerald-950/40 text-emerald-300 border-emerald-500/20"
              >
                {PERSONAL_INFO.availabilityBadge}
              </Badge>
            </div>
          </div>

          {/* Center Navigation Links (Pill Style from Reference) */}
          <nav className="hidden md:flex items-center p-1.5 rounded-full bg-dark-900/90 border border-slate-700/60 shadow-inner backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-700/80 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search / Command Palette Button (matches Reference ⌘K Search) */}
            <button
              onClick={onOpenCommandPalette}
              aria-label="Search and command palette"
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-400 bg-dark-900/90 hover:bg-dark-800 border border-slate-700/60 rounded-full transition-all hover:text-slate-200 hover:border-slate-600 group"
            >
              <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              <span className="hidden sm:inline font-medium">Search</span>
              <kbd className="hidden sm:inline-flex items-center font-mono text-[10px] text-slate-400 bg-dark-800 border border-slate-700 px-1.5 py-0.2 rounded">
                ⌘K
              </kbd>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-600/60 rounded-full transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={onToggleDarkMode}
              aria-label="Toggle theme"
              className="p-2 text-slate-400 hover:text-slate-200 bg-dark-900/90 hover:bg-dark-800 border border-slate-700/60 rounded-full transition-colors"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-blue-400" />
              )}
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white bg-dark-900 border border-slate-800 rounded-lg"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-dark-950/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
            <Badge
              variant="emerald"
              dot={true}
              pulse={true}
              dotColor="bg-emerald-400"
              size="sm"
            >
              {PERSONAL_INFO.availabilityBadge}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg text-left transition-colors ${
                    isActive
                      ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-dark-800 border border-slate-700 rounded-xl"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
