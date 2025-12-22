import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { Language } from '../../types';

interface AuthLayoutProps {
  lang: Language;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ lang }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDFBFF] relative overflow-hidden font-sans text-slate-900">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] bg-brand-100/30 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-accent-100/30 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      {/* Header / Logo */}
      <div className="absolute top-8 left-8 z-10 animate-fade-in-up">
        <div 
           className="flex items-center gap-2 text-xl font-bold text-slate-900 cursor-pointer tracking-tight"
           onClick={() => navigate('/')}
        >
           <div className="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/20">
              <Zap size={18} fill="currentColor" />
           </div>
           Keido
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-md px-4 relative z-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <Outlet />
      </div>

      {/* Footer / Copyright */}
      <div className="absolute bottom-8 text-center w-full text-xs text-slate-400 z-10">
         © 2024 Keido Inc.
      </div>
    </div>
  );
};