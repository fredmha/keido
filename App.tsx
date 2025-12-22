import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Landing } from './pages/Marketing/Landing';
import { Pricing } from './pages/Marketing/Pricing';

// App Pages
import { Dashboard } from './pages/App/Dashboard';
import { AgentBuilder } from './pages/App/AgentBuilder';
import { AgentsList } from './pages/App/AgentsList';
import { BillingUpgrade } from './pages/App/BillingUpgrade';
import { AppShell } from './components/Layout/AppShell';

// Auth Pages
import { AuthLayout } from './pages/Auth/AuthLayout';
import { SSO } from './pages/Auth/SSO';
import { OnboardingWorkspace } from './pages/Auth/OnboardingWorkspace';
import { OnboardingCategory } from './pages/Auth/OnboardingCategory';
import { OnboardingIntegrations } from './pages/Auth/OnboardingIntegrations';
import { OnboardingPrompt } from './pages/Auth/OnboardingPrompt';
import { OnboardingThinking } from './pages/Auth/OnboardingThinking';

import { Language } from './types';
import { Button } from './components/ui/Button';
import { getTranslation } from './i18n';
import { Menu, X, Mail, Zap } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  return (
    <Router>
      <MainLayout lang={lang} setLang={setLang} />
    </Router>
  );
};

// Component to handle layout switching based on route
const MainLayout = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const t = (key: string) => getTranslation(key, lang);
  const isApp = location.pathname.startsWith('/app');
  const isAuth = location.pathname.startsWith('/auth');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 1. Auth Layout
  if (isAuth) {
    return (
      <Routes>
        <Route element={<AuthLayout lang={lang} />}>
          <Route path="/auth/sso" element={<SSO lang={lang} />} />
          <Route path="/auth/onboarding/workspace" element={<OnboardingWorkspace lang={lang} />} />
          <Route path="/auth/onboarding/category" element={<OnboardingCategory lang={lang} />} />
          <Route path="/auth/onboarding/integrations" element={<OnboardingIntegrations lang={lang} />} />
          <Route path="/auth/onboarding/prompt" element={<OnboardingPrompt lang={lang} />} />
          <Route path="/auth/onboarding/thinking" element={<OnboardingThinking lang={lang} />} />
        </Route>
      </Routes>
    );
  }

  // 2. Marketing Header (for non-app, non-auth pages)
  if (!isApp) {
    return (
      <div className="min-h-screen flex flex-col font-sans text-slate-900">
        <nav className="fixed w-full z-50 bg-[#FDFBFF]/90 backdrop-blur-md border-b border-transparent">
          <div className="container mx-auto px-4 h-20 flex items-center justify-between">
            {/* Left: Logo & Links */}
            <div className="flex items-center gap-12">
              <div 
                className="flex items-center gap-2 text-xl font-bold text-slate-900 cursor-pointer tracking-tight"
                onClick={() => navigate('/')}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center">
                   <Zap size={18} fill="currentColor" />
                </div>
                Keido
              </div>
              <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
                <button onClick={() => navigate('/')} className="hover:text-brand-600 transition-colors">Home</button>
                <button onClick={() => navigate('/pricing')} className="hover:text-brand-600 transition-colors">Features</button>
                <button className="hover:text-brand-600 transition-colors">How it works</button>
                <button className="hover:text-brand-600 transition-colors">Testimonials</button>
                <button className="hover:text-brand-600 transition-colors">FAQ</button>
              </div>
            </div>
            
            {/* Right: CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" className="w-10 h-10 p-0 rounded-full border border-slate-200" icon={<Mail size={16} />}></Button>
              <Button onClick={() => navigate('/auth/sso')} className="rounded-full px-6 bg-white text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-50">
                Launch with Keido
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-xl">
               <button onClick={() => { navigate('/pricing'); setMobileMenuOpen(false); }} className="text-left py-2 font-medium text-slate-600">{t('nav.pricing')}</button>
               <Button fullWidth onClick={() => { navigate('/auth/sso'); setMobileMenuOpen(false); }}>{t('nav.getStarted')}</Button>
            </div>
          )}
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/pricing" element={<Pricing lang={lang} />} />
            <Route path="/signup" element={<div className="pt-32 text-center">Signup Flow Simulation (Click Get Started)</div>} />
          </Routes>
        </main>

        <footer className="bg-white border-t border-slate-100 py-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
             <div className="flex items-center gap-2 font-bold text-slate-900">
               <div className="w-6 h-6 rounded bg-brand-500 text-white flex items-center justify-center"><Zap size={14} fill="currentColor"/></div>
               Keido
             </div>
             <div>
                © 2024 Keido Inc. All rights reserved.
             </div>
             <div className="flex gap-6">
                <span>Privacy</span>
                <span>Terms</span>
                <span>Security</span>
             </div>
          </div>
        </footer>
      </div>
    );
  }

  // 3. App Layout (Shell + Routes)
  return (
    <AppShell lang={lang}>
      <Routes>
        <Route path="/app" element={<Dashboard lang={lang} />} />
        <Route path="/app/dashboard" element={<Dashboard lang={lang} />} />
        <Route path="/app/agents" element={<AgentsList lang={lang} />} />
        <Route path="/app/builder/agent-design" element={<AgentBuilder lang={lang} />} />
        <Route path="/app/billing/upgrade" element={<BillingUpgrade />} />
        <Route path="/app/settings" element={<div className="p-10 text-slate-500">Settings Demo Placeholder</div>} />
        <Route path="/app/*" element={<div className="p-10 text-slate-500">Not implemented in demo.</div>} />
      </Routes>
    </AppShell>
  );
};

export default App;
