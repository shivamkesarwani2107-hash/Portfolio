import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  ExternalLink, 
  FolderGit2, 
  Layers, 
  Sparkles, 
  Code, 
  User, 
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../../data/portfolioData';

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenCaseStudy,
  onOpenResume,
  showToast
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commandItems = [
    {
      category: "Navigation",
      items: [
        { id: "nav-home", title: "Home / Hero", subtitle: "Jump to introduction & overview", icon: Sparkles, action: () => scrollToSection('home') },
        { id: "nav-projects", title: "Featured Projects", subtitle: "MegaMart, Library System & Movie Ticket Platform", icon: FolderGit2, action: () => scrollToSection('projects') },
        { id: "nav-experience", title: "Experience & Timeline", subtitle: "MERN Developer Intern at Devlupers", icon: Briefcase, action: () => scrollToSection('experience') },
        { id: "nav-skills", title: "Technical Skills", subtitle: "Frontend, Backend, Database, Tools", icon: Code, action: () => scrollToSection('skills') },
        { id: "nav-architecture", title: "Full-Stack Architecture", subtitle: "MERN system flow & service integrations", icon: Layers, action: () => scrollToSection('architecture') },
        { id: "nav-about", title: "About Me & Education", subtitle: "B.Com background & software engineering focus", icon: User, action: () => scrollToSection('about') },
        { id: "nav-contact", title: "Contact Information", subtitle: "Get in touch for opportunities", icon: Mail, action: () => scrollToSection('contact') },
      ]
    },
    {
      category: "Projects",
      items: PROJECTS.map((proj) => ({
        id: `proj-${proj.id}`,
        title: proj.title,
        subtitle: `View detailed case study (${proj.techStack.slice(0, 5).join(', ')})`,
        icon: FolderGit2,
        action: () => {
          onClose();
          onOpenCaseStudy(proj);
        }
      }))
    },
    {
      category: "Quick Actions",
      items: [
        {
          id: "act-resume",
          title: "View & Download Resume",
          subtitle: "Preview in browser or download resume.pdf",
          icon: FileText,
          action: () => {
            onClose();
            if (onOpenResume) onOpenResume();
            else window.open(PERSONAL_INFO.resumeUrl, '_blank');
          }
        },
        {
          id: "act-copy-email",
          title: "Copy Email Address",
          subtitle: PERSONAL_INFO.email,
          icon: Mail,
          action: () => {
            navigator.clipboard.writeText(PERSONAL_INFO.email);
            showToast("Email address copied to clipboard!");
            onClose();
          }
        },
        {
          id: "act-copy-phone",
          title: "Copy Phone Number",
          subtitle: PERSONAL_INFO.phone,
          icon: Phone,
          action: () => {
            navigator.clipboard.writeText(PERSONAL_INFO.phone);
            showToast("Phone number copied to clipboard!");
            onClose();
          }
        },
        {
          id: "act-github",
          title: "Visit GitHub Profile",
          subtitle: PERSONAL_INFO.socials.github,
          icon: ExternalLink,
          action: () => {
            window.open(PERSONAL_INFO.socials.github, '_blank');
            onClose();
          }
        },
        {
          id: "act-linkedin",
          title: "Visit LinkedIn Profile",
          subtitle: PERSONAL_INFO.socials.linkedin,
          icon: ExternalLink,
          action: () => {
            window.open(PERSONAL_INFO.socials.linkedin, '_blank');
            onClose();
          }
        }
      ]
    }
  ];

  const scrollToSection = (id) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter items based on query
  const filteredGroups = commandItems.map(group => ({
    ...group,
    items: group.items.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
    )
  })).filter(group => group.items.length > 0);

  const flatFilteredItems = filteredGroups.flatMap(group => group.items);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
        }
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < flatFilteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : flatFilteredItems.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (flatFilteredItems[selectedIndex]) {
          flatFilteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, flatFilteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  let runningItemIndex = 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-3 sm:px-6 w-full max-w-full overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 animate-scale-up">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-dark-850/80">
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search projects, skills, experience, or actions..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-400 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-200 p-1 rounded hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-dark-800 border border-slate-700/80 px-2 py-0.5 rounded ml-2">
            ESC
          </kbd>
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-slate-800/40">
          {flatFilteredItems.length === 0 ? (
            <div className="text-center py-10 px-4">
              <p className="text-sm text-slate-400">No results found for "{query}"</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for "MegaMart", "Movie Ticket", "Node.js", "Resume", or "Contact"</p>
            </div>
          ) : (
            filteredGroups.map((group) => (
              <div key={group.category} className="py-2">
                <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                  {group.category}
                </div>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const currentIndex = runningItemIndex++;
                    const isSelected = currentIndex === selectedIndex;
                    const ItemIcon = item.icon;

                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(currentIndex)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors ${
                          isSelected
                            ? 'bg-emerald-500/15 text-emerald-200 border border-emerald-500/30'
                            : 'text-slate-300 hover:bg-slate-800/60 hover:text-slate-100 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0 pr-2">
                          <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-dark-800 text-slate-400'}`}>
                            <ItemIcon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-medium truncate">{item.title}</div>
                            <div className="text-xs text-slate-400 truncate">{item.subtitle}</div>
                          </div>
                        </div>
                        <ArrowRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-emerald-400 translate-x-0.5' : 'text-slate-600'} transition-transform`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 border-t border-slate-800 bg-dark-950/60 flex items-center justify-between text-[11px] text-slate-400 font-mono gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="bg-dark-800 border border-slate-700 px-1.5 py-0.5 rounded text-[10px]">↑</kbd>
              <kbd className="bg-dark-800 border border-slate-700 px-1.5 py-0.5 rounded text-[10px]">↓</kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="bg-dark-800 border border-slate-700 px-1.5 py-0.5 rounded text-[10px]">↵</kbd>
              to select
            </span>
          </div>
          <span className="hidden sm:inline">Shivam Kesarwani Portfolio</span>
        </div>
      </div>
    </div>
  );
}
