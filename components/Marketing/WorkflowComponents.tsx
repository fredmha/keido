import React from 'react';
import { LayoutTemplate, Users, FileText, Settings, Search, MessageSquare, Database, PenTool, CheckCircle2, Bot, MoreHorizontal, Zap } from 'lucide-react';

// --- STYLES ---

const flowAnimationStyles = `
  @keyframes dash-flow {
    0% { stroke-dashoffset: 24; }
    100% { stroke-dashoffset: 0; }
  }
  .animate-flow-line {
    animation: dash-flow 1s linear infinite;
  }
`;

// --- ATOMIC COMPONENTS ---

interface NodeProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  type?: 'trigger' | 'logic' | 'action';
  faded?: boolean;
  className?: string;
}

export const WorkflowNode: React.FC<NodeProps> = ({ icon: Icon, title, subtitle, type = 'action', faded, className = '' }) => {
  const isTrigger = type === 'trigger';
  
  return (
    <div className={`
      relative flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 select-none group z-10 w-max
      ${faded 
        ? 'bg-slate-50 border-slate-100 opacity-60 grayscale' 
        : 'bg-white border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-300 hover:-translate-y-1 hover:ring-4 hover:ring-brand-50/50'
      } 
      ${className}
    `}>
      <div className={`
        w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300
        ${isTrigger 
          ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 group-hover:bg-brand-600 group-hover:shadow-brand-500/30' 
          : 'bg-white border border-slate-100 text-slate-600 group-hover:border-brand-200 group-hover:text-brand-600'
        }
      `}>
        <Icon size={24} strokeWidth={isTrigger ? 2 : 1.5} />
      </div>
      <div className="min-w-[140px]">
        <div className={`text-sm font-bold transition-colors ${faded ? 'text-slate-400' : 'text-slate-900 group-hover:text-brand-900'}`}>{title}</div>
        <div className="text-xs text-slate-500 font-medium mt-0.5">{subtitle}</div>
      </div>
      
      {/* Logic Output Badge */}
      {type === 'logic' && (
        <div className="absolute -bottom-3 left-1/2 translate-x-6 bg-white border border-slate-200 px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 shadow-sm z-20 group-hover:border-brand-200 group-hover:text-brand-600 transition-colors">
          Yes
        </div>
      )}

      {/* Trigger Pulse */}
      {isTrigger && !faded && (
         <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500 top-0.5 left-0.5"></span>
         </span>
      )}
    </div>
  );
};

export const WorkflowDiagram: React.FC<{ className?: string, animated?: boolean }> = ({ className = '', animated = false }) => {
  return (
    <div className={`relative w-[800px] h-[600px] mx-auto ${className}`}>
      <style>{flowAnimationStyles}</style>
      
      {/* CONNECTOR LINES (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 800 600">
        <defs>
           <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
           </linearGradient>
        </defs>

        {/* --- STATIC BASE LINES --- */}
        <g stroke="#cbd5e1" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round">
           {/* Trigger (Bottom 120) -> Logic (Top 200) */}
           <path d="M 400 120 L 400 200" />
           
           {/* Logic (Bottom 282) -> Split Point (y=330) */}
           <path d="M 400 282 L 400 330" />
           
           {/* Branch Split: Center to Left/Right (Rounded Corners) */}
           {/* Left Path: Center -> Left 200 -> Down to 400 */}
           <path d="M 400 330 L 220 330 Q 200 330 200 350 L 200 400" />
           
           {/* Right Path: Center -> Right 600 -> Down to 400 */}
           <path d="M 400 330 L 580 330 Q 600 330 600 350 L 600 400" />
           
           {/* Bottom Sequence (Left side): 482 -> 530 */}
           <path d="M 200 482 L 200 530" strokeDasharray="6 6" />
        </g>

        {/* --- ANIMATED FLOW LINES (Overlay) --- */}
        {animated && (
           <g stroke="#8b5cf6" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" className="animate-flow-line" strokeDasharray="12 12" opacity="0.8">
              <path d="M 400 120 L 400 200" />
              <path d="M 400 282 L 400 330" />
              <path d="M 400 330 L 220 330 Q 200 330 200 350 L 200 400" />
              <path d="M 400 330 L 580 330 Q 600 330 600 350 L 600 400" />
           </g>
        )}
      </svg>

      {/* NODES - Absolute Positioning based on 800x600 Grid */}
      
      {/* 1. Trigger (Center X=400, Top=40) */}
      <div className="absolute top-[40px] left-[400px] -translate-x-1/2 z-10">
        <WorkflowNode 
          icon={LayoutTemplate} 
          title="New Intercom message" 
          subtitle="trigger" 
          type="trigger"
        />
      </div>

      {/* 2. Logic (Center X=400, Top=200) */}
      <div className="absolute top-[200px] left-[400px] -translate-x-1/2 z-10">
        <WorkflowNode 
          icon={Bot} 
          title="Check if existing contact?" 
          subtitle="branch-1" 
          type="logic"
          className="pr-16" // Extra padding for the wide text
        />
      </div>

      {/* 3. Action Left (X=200, Top=400) */}
      <div className="absolute top-[400px] left-[200px] -translate-x-1/2 z-10">
        <WorkflowNode 
          icon={MessageSquare} 
          title="Message sales" 
          subtitle="#new-leads" 
        />
      </div>

      {/* 4. Action Right (X=600, Top=400) */}
      <div className="absolute top-[400px] left-[600px] -translate-x-1/2 z-10">
        <WorkflowNode 
          icon={Database} 
          title="Create CRM record" 
          subtitle="notion-2" 
        />
      </div>

      {/* 5. Action Bottom (X=200, Top=530) */}
      <div className="absolute top-[530px] left-[200px] -translate-x-1/2 z-10">
        <WorkflowNode 
          icon={PenTool} 
          title="Write an email" 
          subtitle="chatgpt-1" 
          faded={true}
        />
      </div>
    </div>
  );
};

// --- COMPOSED VIEWS ---

export const AppMockFrame: React.FC = () => {
  return (
    <div className="relative mx-auto max-w-6xl rounded-2xl border border-brand-100 bg-white shadow-2xl shadow-brand-500/10 overflow-hidden ring-1 ring-slate-900/5 group">
      {/* Window Header */}
      <div className="h-12 bg-white border-b border-slate-100 flex items-center px-4 justify-between sticky top-0 z-20">
        <div className="flex gap-1.5 group-hover:gap-2 transition-all duration-300">
            <div className="w-3 h-3 rounded-full bg-slate-200 group-hover:bg-red-400 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-slate-200 group-hover:bg-amber-400 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-slate-200 group-hover:bg-emerald-400 transition-colors"></div>
        </div>
        <div className="px-3 py-1 bg-slate-50 rounded-md text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-100">
            Keido Platform
        </div>
        <div className="w-10"></div> {/* Spacer for center alignment */}
      </div>

      <div className="flex h-[600px] bg-[#FDFBFF] relative">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-slate-100 py-6 hidden md:flex flex-col shrink-0 z-10 relative">
            <div className="px-6 mb-8 flex items-center gap-3 font-bold text-slate-800">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
                 <Zap size={16} fill="currentColor" />
              </div>
              Keido
            </div>
            
            <div className="space-y-1 px-3">
              <div className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                <LayoutTemplate size={18} /> Dashboard
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                <Users size={18} /> Audience
              </div>
              <div className="flex items-center justify-between px-3 py-2.5 text-brand-700 bg-brand-50 rounded-lg text-sm font-medium transition-colors cursor-pointer border border-brand-100">
                <div className="flex items-center gap-3">
                   <FileText size={18} /> Workflows
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div>
              </div>
              <div className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                <Settings size={18} /> Settings
              </div>
            </div>

            {/* Bottom User Profile Mock */}
            <div className="mt-auto px-6 pt-6 border-t border-slate-50">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200"></div>
                  <div className="space-y-1">
                     <div className="w-20 h-2 bg-slate-100 rounded-full"></div>
                     <div className="w-12 h-2 bg-slate-50 rounded-full"></div>
                  </div>
               </div>
            </div>
        </div>
        
        {/* Canvas Area */}
        <div className="flex-1 relative overflow-hidden bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] flex items-center justify-center">
            {/* Toolbar Mock */}
            <div className="absolute top-6 right-6 flex gap-2 z-20">
               <div className="bg-white border border-slate-200 text-slate-400 p-2 rounded-lg shadow-sm hover:border-brand-300 transition-colors"><Search size={18} /></div>
               <div className="bg-white border border-slate-200 text-slate-400 p-2 rounded-lg shadow-sm hover:border-brand-300 transition-colors"><MoreHorizontal size={18} /></div>
               <div className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-brand-500/20 hover:bg-brand-700 transition-colors cursor-pointer flex items-center gap-2">
                  <CheckCircle2 size={16} /> Publish
               </div>
            </div>

            {/* Scale diagram to fit frame */}
            <div className="w-[800px] h-[600px] scale-[0.85] transform translate-y-6">
               <WorkflowDiagram />
            </div>
        </div>
      </div>
    </div>
  );
};

export const WorkflowFeatureView: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-brand-50/50 via-purple-50/30 to-white rounded-3xl border border-brand-100/50 overflow-hidden shadow-2xl shadow-brand-500/10 group hover:shadow-brand-500/20 transition-all duration-500 flex items-center justify-center">
       <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
       
       {/* Animated Diagram */}
       <div className="w-[800px] h-[600px] scale-[0.9] transform translate-y-6">
          <WorkflowDiagram animated={true} />
       </div>
    </div>
  );
};