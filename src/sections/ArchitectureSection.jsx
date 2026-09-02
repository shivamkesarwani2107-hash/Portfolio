import React, { useState } from 'react';
import { 
  Layers, 
  ArrowRight, 
  ArrowDown, 
  Layout, 
  Network, 
  Server, 
  ShieldCheck, 
  Database, 
  CreditCard,
  CheckCircle2,
  Cpu,
  Mail,
  Zap,
  Sparkles
} from 'lucide-react';
import { ARCHITECTURE_FLOW } from '../data/portfolioData';
import Badge from '../components/common/Badge';

const iconMap = {
  Layout,
  Network,
  Server,
  ShieldCheck,
  Database,
  CreditCard
};

export default function ArchitectureSection() {
  const [activeNodeId, setActiveNodeId] = useState('frontend');
  const [flowMode, setFlowMode] = useState('standard'); // 'standard' | 'movie' | 'library'

  const activeNode = ARCHITECTURE_FLOW.find(n => n.id === activeNodeId) || ARCHITECTURE_FLOW[0];

  return (
    <section id="architecture" className="relative py-20 lg:py-28 border-t border-slate-800/80 overflow-hidden w-full max-w-full">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-full h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex">
              <Badge variant="indigo" icon={Layers} size="sm">
                System Architecture
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-display break-words">
              Full-Stack Application Flow.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Clean end-to-end monolithic architecture connecting React client components, Express REST APIs, JWT authentication, and MongoDB Atlas database persistence.
            </p>
          </div>

          {/* Flow Mode Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-dark-900 border border-slate-800 self-start md:self-auto max-w-full">
            <button
              onClick={() => setFlowMode('standard')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                flowMode === 'standard'
                  ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Standard MERN
            </button>
            <button
              onClick={() => setFlowMode('megamart')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                flowMode === 'megamart'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              MegaMart Flow
            </button>
            <button
              onClick={() => setFlowMode('movie')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                flowMode === 'movie'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Movie Booking Flow
            </button>
            <button
              onClick={() => setFlowMode('library')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                flowMode === 'library'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Library System Flow
            </button>
          </div>
        </div>

        {/* Visual Interactive Architecture Pipeline */}
        <div className="space-y-8">
          {/* Node Cards Horizontal Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {ARCHITECTURE_FLOW.map((node, index) => {
              const Icon = iconMap[node.icon] || Layers;
              const isSelected = activeNodeId === node.id;

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`cursor-pointer relative p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-dark-850 border-emerald-500/60 shadow-lg shadow-emerald-500/10 -translate-y-1'
                      : 'bg-dark-900/90 border-slate-800/80 hover:border-slate-700 hover:bg-dark-850/50'
                  }`}
                >
                  {/* Step number badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-slate-400">
                      {node.step}
                    </span>
                    <div className={`p-2 rounded-xl ${isSelected ? 'bg-emerald-500/20 text-emerald-300' : 'bg-dark-800 text-slate-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <div>
                    <div className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider">
                      {node.badge}
                    </div>
                    <div className="text-sm font-bold text-white font-display line-clamp-1">
                      {node.title}
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 font-mono line-clamp-1">
                    {node.tech.split(',')[0]}
                  </div>

                  {/* Flow Arrow (Desktop indicator) */}
                  {index < ARCHITECTURE_FLOW.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-700 pointer-events-none">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <div className="bg-dark-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 glow-card space-y-6 max-w-full">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-dark-800 border border-slate-700 text-emerald-400 shrink-0">
                  {React.createElement(iconMap[activeNode.icon] || Layers, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      STEP {activeNode.step}
                    </span>
                    <Badge variant="blue" size="sm">
                      {activeNode.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display break-words">
                    {activeNode.title}
                  </h3>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-400 px-3 py-1.5 rounded-lg bg-dark-850 border border-slate-800 break-words max-w-full">
                Tech: {activeNode.tech}
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {activeNode.description}
            </p>

            {/* Custom Mode Walkthrough Information */}
            {flowMode === 'megamart' && (
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs sm:text-sm text-amber-200 space-y-1">
                <div className="font-semibold text-amber-300 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>MegaMart Grocery E-Commerce & Redis Flow:</span>
                </div>
                <p className="text-slate-300">
                  React Client (Tailwind UI + Cart & Wishlist) ➔ Express REST APIs (/api/products, /api/orders) ➔ JWT Auth Guard ➔ Redis In-Memory Cache (Instant Catalog Delivery) ➔ Razorpay Payment Processing ➔ Nodemailer Automated Order Confirmation Email ➔ MongoDB Atlas persistence.
                </p>
              </div>
            )}

            {flowMode === 'movie' && (
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-800/40 text-xs sm:text-sm text-rose-200 space-y-1">
                <div className="font-semibold text-rose-300 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>Movie Ticket Reservation Lifecycle:</span>
                </div>
                <p className="text-slate-300">
                  React Client (Interactive seat layout & showtime selector) ➔ Express Booking API (/api/bookings) ➔ JWT Verification ➔ Seat Availability Lock ➔ MongoDB Booking Document Creation ➔ Ticket Confirmation Receipt & History.
                </p>
              </div>
            )}

            {flowMode === 'library' && (
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs sm:text-sm text-emerald-200 space-y-1">
                <div className="font-semibold text-emerald-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Library System Query & CRUD Lifecycle:</span>
                </div>
                <p className="text-slate-300">
                  React UI on Vercel ➔ Render Express Backend (/api/books?page=1&search=react) ➔ JWT Route Guard ➔ Mongoose Search & Skip/Limit Query ➔ MongoDB Atlas Cluster ➔ JSON Response Cached by TanStack Query.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
