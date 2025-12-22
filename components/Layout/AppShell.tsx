import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Bot, Settings, LogOut, ChevronRight, Zap, Menu, X, CreditCard, Sparkles } from 'lucide-react';
import { Language } from '../../types';
import { getTranslation } from '../../i18n';

interface AppShellProps {
  children: React.ReactNode;
  lang: Language;
}

export const AppShell: React.FC<AppShellProps> = ({ children, lang }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const t = (key: string) => getTranslation(key, lang);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [agentsExpanded, setAgentsExpanded] = useState(true);

  // Helper to determine active state
  const isActive = (path: string) => {
    if (path === '/app/agents' && location.pathname.includes('/builder')) return true;
    return location.pathname === path;
  };

  return (
    <div className="flex h-screen bg-[#FDFBFF] font-sans text-slate-900 overflow-hidden selection:bg-brand-200">
      
      {/* SIDEBAR (Desktop) */}
      <aside className="hidden md:flex w-64 bg-white border-r border-slate-200 flex-col shrink-0 z-20 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)]">
        {/* Brand */}
        <div className="h-16 flex items-center px-6 border-b border-slate-50">
           <div className="flex items-center gap-3 text-lg font-bold text-slate-900 cursor-pointer" onClick={() => navigate('/')}>
             <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center shadow-md shadow-brand-500/20">
               <Zap size={16} fill="currentColor" />
             </div>
             Keido
           </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          
          <NavItem 
            icon={LayoutDashboard} 
            label={t('nav.dashboard')} 
            active={isActive('/app/dashboard')} 
            onClick={() => navigate('/app/dashboard')} 
          />
          
          <div className="space-y-1">
            <NavItem 
              icon={Bot} 
              label={t('nav.agents')} 
              active={isActive('/app/agents')} 
              onClick={() => {
                if (location.pathname.includes('/app/agents')) {
                  setAgentsExpanded(!agentsExpanded);
                } else {
                  navigate('/app/agents');
                  setAgentsExpanded(true);
                }
              }}
              hasSubmenu
              expanded={agentsExpanded}
            />
            
            {/* Expanded Submenu (Recent Agents) */}
            {agentsExpanded && (
              <div className="ml-4 pl-4 border-l border-slate-100 my-2 space-y-1 animate-fade-in">
                 <div className="text-[10px] text-slate-400 py-2 font-bold tracking-widest uppercase px-2">{t('nav.recent')}</div>
                 <SubNavItem label="Sales Outreach V2" onClick={() => navigate('/app/builder/agent-design')} />
                 <SubNavItem label="Customer Support" onClick={() => navigate('/app/builder/agent-design')} />
              </div>
            )}
          </div>

          <NavItem 
            icon={Settings} 
            label={t('nav.settings')} 
            active={isActive('/app/settings')} 
            onClick={() => {}} 
          />
        </div>

        {/* Footer / Profile */}
        <div className="p-4 border-t border-slate-50 bg-slate-50/30">
          
          {/* Subscription Widget in Sidebar */}
          <div className="mb-4 bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
             <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Starter Plan</span>
                <span className="text-[10px] font-bold text-brand-600 cursor-pointer hover:underline" onClick={() => navigate('/app/billing/upgrade')}>Manage</span>
             </div>
             <div className="mb-2">
                <div className="flex justify-between text-[10px] font-medium text-slate-700 mb-1">
                   <span>Runs</span>
                   <span>850 / 1k</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-brand-500 rounded-full w-[85%]"></div>
                </div>
             </div>
             <button onClick={() => navigate('/app/billing/upgrade')} className="w-full bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm shadow-brand-500/20">
                <Sparkles size={12} fill="currentColor" /> Upgrade to Pro
             </button>
          </div>
          
          {/* User Profile */}
          <div className="flex items-center gap-3 px-2 py-2 rounded-xl hover:bg-slate-100/50 transition-colors cursor-pointer group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 text-slate-600 flex items-center justify-center text-xs font-bold border border-slate-200 group-hover:border-slate-300">JD</div>
            <div className="flex-1 min-w-0">
               <div className="text-sm font-semibold text-slate-900 truncate">John Doe</div>
               <div className="text-xs text-slate-500 truncate">john@company.com</div>
            </div>
            <button onClick={() => navigate('/')} className="text-slate-400 hover:text-slate-600 p-1">
               <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* MOBILE HEADER */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-2 font-bold text-slate-900">
             <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center">
               <Zap size={16} fill="currentColor" />
             </div>
             Keido
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-600">
           {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative pt-16 md:pt-0">
         {mobileMenuOpen && (
            <div className="md:hidden absolute inset-0 bg-white z-40 p-4 flex flex-col gap-2">
               <NavItem icon={LayoutDashboard} label={t('nav.dashboard')} active={isActive('/app/dashboard')} onClick={() => { navigate('/app/dashboard'); setMobileMenuOpen(false); }} />
               <NavItem icon={Bot} label={t('nav.agents')} active={isActive('/app/agents')} onClick={() => { navigate('/app/agents'); setMobileMenuOpen(false); }} />
               <NavItem icon={Settings} label={t('nav.settings')} active={isActive('/app/settings')} onClick={() => setMobileMenuOpen(false)} />
            </div>
         )}
         {children}
      </main>
    </div>
  );
};

// --- Subcomponents ---

const NavItem = ({ icon: Icon, label, active, onClick, hasSubmenu, expanded }: any) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
      active 
        ? 'bg-slate-50 text-slate-900' 
        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
    }`}
  >
    {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-brand-500 rounded-r-full"></div>}
    <Icon size={18} className={`transition-colors ${active ? 'text-brand-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
    {label}
    {hasSubmenu && (
       <ChevronRight size={14} className={`ml-auto text-slate-400 transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`} />
    )}
  </button>
);

const SubNavItem = ({ label, onClick }: any) => (
  <button 
    onClick={onClick}
    className="w-full text-left px-2 py-1.5 text-sm font-medium text-slate-500 hover:text-brand-600 hover:bg-slate-50 rounded-md transition-colors truncate"
  >
    {label}
  </button>
);
