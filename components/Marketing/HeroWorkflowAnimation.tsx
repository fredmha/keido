import React from 'react';
import { MessageSquare, GitBranch, Slack, Database, Sparkles, MoreHorizontal } from 'lucide-react';

export const HeroWorkflowAnimation: React.FC = () => {
  return (
      <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] aspect-[5/4] mx-auto select-none pointer-events-none">
      {/* Styles for animations */}
      <style>{`
        @keyframes drawLine {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); box-shadow: 0 0 0 0 rgba(61, 6, 248, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(61, 6, 248, 0); }
          100% { transform: scale(0.8); box-shadow: 0 0 0 0 rgba(61, 6, 248, 0); }
        }
        .anim-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 2s ease-out forwards;
        }
        .anim-node {
          opacity: 0;
          animation: fadeInScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-100/40 via-brand-50/20 to-transparent rounded-full blur-3xl -z-10"></div>

      {/* SVG Connections Layer - ViewBox scales with container */}
      <svg className="absolute inset-0 w-full h-full z-0 overflow-visible" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7B56FB" />
            <stop offset="100%" stopColor="#3d06f8" />
          </linearGradient>
        </defs>

        {/* 1. Trigger to Branch */}
        <path 
          d="M 250 80 L 250 140" 
          stroke="#cbd5e1" strokeWidth="2" fill="none" 
          className="anim-line" style={{ animationDelay: '0.5s' }}
        />

        {/* 2. Branch to Right (Notion) */}
        <path 
          d="M 250 200 L 250 230 Q 250 250 270 250 L 380 250 Q 400 250 400 270 L 400 300" 
          stroke="#cbd5e1" strokeWidth="2" fill="none" 
          className="anim-line" style={{ animationDelay: '1.5s' }}
        />

        {/* 3. Branch to Left (Slack) */}
        <path 
          d="M 250 200 L 250 230 Q 250 250 230 250 L 140 250 Q 120 250 120 270 L 120 300" 
          stroke="#cbd5e1" strokeWidth="2" fill="none" 
          className="anim-line" style={{ animationDelay: '1.5s' }}
        />

        {/* 4. Slack to AI (Left Down) */}
        <path 
          d="M 120 380 L 120 420" 
          stroke="#cbd5e1" strokeWidth="2" fill="none" 
          className="anim-line" style={{ animationDelay: '2.5s' }}
        />
      </svg>

      {/* NODES LAYER */}

      {/* 1. Trigger: Intercom - Centered */}
      <div 
        className="absolute top-[2%] sm:top-0 left-1/2 -translate-x-1/2 z-10 anim-node"
        style={{ animationDelay: '0s' }}
      >
        <div className="bg-white p-2 sm:p-3 md:p-4 pr-4 sm:pr-6 md:pr-8 rounded-xl sm:rounded-2xl border border-slate-100 shadow-xl shadow-brand-900/5 flex items-center gap-2 sm:gap-3 md:gap-4 min-w-[200px] sm:min-w-[240px] md:min-w-[260px] max-w-[90vw]">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-[#1f2937] text-white flex items-center justify-center shrink-0 shadow-md">
            <MessageSquare size={22} fill="currentColor" />
          </div>
          <div className="min-w-0">
            <div className="text-slate-900 font-bold text-xs sm:text-sm truncate">New Intercom message</div>
            <div className="text-slate-400 text-[10px] sm:text-xs font-medium">trigger</div>
          </div>
        </div>
      </div>

      {/* 2. Branch: Logic - Centered */}
      <div 
        className="absolute top-[32%] sm:top-[35%] left-1/2 -translate-x-1/2 z-10 anim-node"
        style={{ animationDelay: '0.8s' }}
      >
        <div className="bg-white p-2 sm:p-3 md:p-4 pr-3 sm:pr-4 md:pr-6 rounded-xl sm:rounded-2xl border border-slate-100 shadow-xl shadow-brand-900/5 flex items-center gap-2 sm:gap-3 md:gap-4 min-w-[220px] sm:min-w-[260px] md:min-w-[280px] max-w-[90vw]">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-white border border-slate-100 text-slate-600 flex items-center justify-center shrink-0">
             <GitBranch size={22} />
          </div>
          <div className="min-w-0">
            <div className="text-slate-900 font-bold text-xs sm:text-sm truncate">Check if existing contact?</div>
            <div className="text-slate-400 text-[10px] sm:text-xs font-medium">branch-1</div>
          </div>
        </div>
        {/* Yes Label */}
        <div className="absolute -bottom-6 sm:-bottom-8 right-4 sm:right-8 bg-white px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold text-slate-500 shadow-sm border border-slate-100">Yes</div>
      </div>

      {/* 3. Action Left: Slack - Percentage-based positioning */}
      <div 
        className="absolute top-[72%] sm:top-[75%] left-[25%] -translate-x-1/2 z-10 anim-node"
        style={{ animationDelay: '1.8s' }}
      >
        <div className="bg-white p-2 sm:p-3 pr-3 sm:pr-4 md:pr-6 rounded-xl sm:rounded-2xl border border-slate-100 shadow-xl shadow-brand-900/5 flex items-center gap-2 sm:gap-3 min-w-[160px] sm:min-w-[180px] md:min-w-[200px] max-w-[90vw]">
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-white border border-slate-50 text-[#4A154B] flex items-center justify-center shrink-0">
             <Slack size={20} />
          </div>
          <div className="min-w-0">
            <div className="text-slate-900 font-bold text-xs sm:text-sm truncate">Message sales</div>
            <div className="text-slate-400 text-[10px] sm:text-xs font-medium">#new-leads</div>
          </div>
        </div>
      </div>

      {/* 4. Action Right: Notion - Percentage-based positioning */}
      <div 
        className="absolute top-[72%] sm:top-[75%] left-[75%] -translate-x-1/2 z-10 anim-node"
        style={{ animationDelay: '2.0s' }}
      >
        <div className="bg-white p-2 sm:p-3 pr-3 sm:pr-4 md:pr-6 rounded-xl sm:rounded-2xl border border-slate-100 shadow-xl shadow-brand-900/5 flex items-center gap-2 sm:gap-3 min-w-[180px] sm:min-w-[200px] md:min-w-[220px] max-w-[90vw]">
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-white border border-slate-50 text-slate-800 flex items-center justify-center shrink-0">
             <Database size={20} />
          </div>
          <div className="min-w-0">
            <div className="text-slate-900 font-bold text-xs sm:text-sm truncate">Create CRM record</div>
            <div className="text-slate-400 text-[10px] sm:text-xs font-medium">notion-2</div>
          </div>
        </div>
      </div>

      {/* 5. Action Bottom: AI - Percentage-based positioning */}
      <div 
        className="absolute top-[92%] sm:top-[105%] left-[25%] -translate-x-1/2 z-10 anim-node"
        style={{ animationDelay: '2.8s' }}
      >
        <div className="bg-white p-2 sm:p-3 pr-3 sm:pr-4 md:pr-6 rounded-xl sm:rounded-2xl border border-slate-100 shadow-xl shadow-brand-900/5 flex items-center gap-2 sm:gap-3 min-w-[160px] sm:min-w-[180px] md:min-w-[200px] max-w-[90vw]">
          <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-[#10a37f] text-white flex items-center justify-center shrink-0 shadow-sm">
             <Sparkles size={18} />
          </div>
          <div className="min-w-0">
            <div className="text-slate-900 font-bold text-xs sm:text-sm truncate">Write an email</div>
            <div className="text-slate-400 text-[10px] sm:text-xs font-medium">chatgpt-1</div>
          </div>
        </div>
      </div>

    </div>
  );
};
