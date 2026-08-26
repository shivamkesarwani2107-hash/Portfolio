import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CommandPalette from './components/common/CommandPalette';
import Toast from './components/common/Toast';
import ProjectCaseStudyModal from './components/modals/ProjectCaseStudyModal';
import ResumeModal from './components/modals/ResumeModal';

import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import ArchitectureSection from './sections/ArchitectureSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [toast, setToast] = useState({ message: '', type: 'success' });

  // Handle section spy on scroll
  useEffect(() => {
    const sections = ['home', 'projects', 'experience', 'skills', 'architecture', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sync dark mode class
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [darkMode]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const closeToast = () => {
    setToast({ message: '', type: 'success' });
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300 relative w-full max-w-full overflow-x-hidden">
      {/* Top Fixed Header */}
      <Navbar
        activeSection={activeSection}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main Page Sections */}
      <main className="w-full max-w-full overflow-x-hidden">
        <HeroSection
          onOpenContact={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        <ProjectsSection
          onOpenCaseStudy={(project) => setSelectedCaseStudy(project)}
        />

        <ExperienceSection />

        <SkillsSection />

        <ArchitectureSection />

        <AboutSection />

        <ContactSection
          showToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Command Palette Modal (⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenCaseStudy={(project) => setSelectedCaseStudy(project)}
        onOpenResume={() => setResumeModalOpen(true)}
        showToast={showToast}
      />

      {/* Detailed Project Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedCaseStudy}
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Toast Notification Alert */}
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={closeToast}
      />
    </div>
  );
}
