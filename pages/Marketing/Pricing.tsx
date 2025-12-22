import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, HelpCircle, ArrowRight, Minus } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Switch } from '../../components/ui/Switch';
import { AccordionItem } from '../../components/ui/Accordion';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';
import { useNavigate } from 'react-router-dom';

interface PricingProps {
  lang: Language;
}

export const Pricing: React.FC<PricingProps> = ({ lang }) => {
  const t = (key: string) => getTranslation(key, lang);
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<string | null>('q1');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="pt-32 pb-24 bg-[#FDFBFF] min-h-screen font-sans selection:bg-brand-200">
      
      {/* 1. HEADER & TOGGLE */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm border border-brand-100 animate-fade-in-up">
             <Zap size={14} /> Pricing
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">
            {t('pricing.title')}
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>{t('pricing.monthly')}</span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
          <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
            {t('pricing.annual')} 
            <span className="ml-2 inline-flex items-center rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-bold text-brand-700">
              {t('pricing.save20')}
            </span>
          </span>
        </div>
      </div>

      {/* 2. PRICING CARDS */}
      <div className="container mx-auto px-4 mb-24">
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* FREE TIER */}
          <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/40 flex flex-col hover:border-slate-300 transition-all hover:shadow-2xl hover:shadow-slate-200/50">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('pricing.free.name')}</h3>
              <p className="text-slate-500">{t('pricing.free.desc')}</p>
            </div>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-bold text-slate-900">$0</span>
              <span className="text-slate-400 font-medium">/mo</span>
            </div>
            
            <div className="space-y-4 mb-10 flex-1">
              <FeatureRow text="Up to 10 agents / day" />
              <FeatureRow text="Basic Workflow Builder" />
              <FeatureRow text="Standard Integrations" />
              <FeatureRow text="Community Support" />
              <FeatureRow text="14-day history retention" />
            </div>

            <Button 
              fullWidth 
              variant="secondary" 
              size="lg"
              className="mt-auto border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100 transition-colors"
              onClick={() => navigate('/auth/sso')}
            >
              {t('pricing.free.cta')}
            </Button>
          </div>

          {/* PRO TIER */}
          <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-transparent shadow-2xl shadow-brand-500/20 flex flex-col ring-2 ring-brand-500 overflow-hidden transform md:-translate-y-4 transition-transform hover:-translate-y-5">
            {/* Gradient Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-400 to-accent-500"></div>
            
            <div className="absolute top-6 right-6">
               <span className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-3 py-1 text-xs font-bold text-white shadow-md ring-1 ring-white/20">
                 {t('pricing.pro.badge')}
               </span>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('pricing.pro.name')}</h3>
              <p className="text-slate-500">{t('pricing.pro.desc')}</p>
            </div>
            
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-bold text-slate-900">{isAnnual ? '$39' : '$49'}</span>
              <span className="text-slate-400 font-medium">/mo</span>
              {isAnnual && <span className="text-xs text-brand-600 font-bold bg-brand-50 px-2 py-1 rounded-md ml-2 border border-brand-100">Billed annually</span>}
            </div>
            
            <div className="space-y-4 mb-10 flex-1">
              <FeatureRow text="Unlimited agents / day" highlight />
              <FeatureRow text="Advanced Workflow Logic" />
              <FeatureRow text="Priority Support (Email & Chat)" />
              <FeatureRow text="Advanced Analytics & Export" />
              <FeatureRow text="SSO / SAML Authentication" highlight />
              <FeatureRow text="Unlimited history" />
            </div>

            <Button 
              fullWidth 
              variant="gradient" 
              size="lg"
              className="mt-auto shadow-lg shadow-brand-500/25 transition-all hover:shadow-brand-500/40"
              onClick={() => navigate('/auth/sso')}
            >
              {t('pricing.pro.cta')}
            </Button>
          </div>

        </div>
      </div>

      {/* 3. KEY DIFFERENCES */}
      <div className="container mx-auto px-4 mb-24">
         <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Compare features</h3>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden ring-1 ring-slate-900/5">
               {/* Header - Aligned with Grid Layout */}
               <div className="grid grid-cols-4 bg-slate-50/80 border-b border-slate-200 p-5 backdrop-blur-sm sticky top-0 z-10">
                  <div className="col-span-2 font-bold text-slate-500 text-xs uppercase tracking-wider flex items-end pb-1 pl-2">Feature</div>
                  <div className="col-span-1 font-bold text-center text-slate-800 text-lg">Starter</div>
                  <div className="col-span-1 font-bold text-center text-brand-600 text-lg flex items-center justify-center gap-2">
                    Pro <Zap size={16} fill="currentColor" className="text-brand-500" />
                  </div>
               </div>
               {/* Rows */}
               <div className="divide-y divide-slate-100">
                   <ComparisonRow feature="Daily Agent Runs" val1="10" val2="Unlimited" />
                   <ComparisonRow feature="Team Members" val1="1" val2="Unlimited" />
                   <ComparisonRow feature="Advanced Workflow Logic" val1="Basic" val2="Branching + AI" highlight />
                   <ComparisonRow feature="Priority Support" val1="Community" val2="Email & Chat" />
                   <ComparisonRow feature="Support SLA" val1="Best Effort" val2="< 4 hours" />
                   <ComparisonRow feature="SSO / SAML Auth" val1={<Minus size={18} className="mx-auto text-slate-300"/>} val2={<Check size={20} className="mx-auto text-brand-600" strokeWidth={3}/>} highlight />
                   <ComparisonRow feature="Custom Integrations" val1={<Minus size={18} className="mx-auto text-slate-300"/>} val2={<Check size={20} className="mx-auto text-brand-600" strokeWidth={3}/>} />
                   <ComparisonRow feature="Data Retention" val1="14 Days" val2="Unlimited" />
               </div>
            </div>
         </div>
      </div>

      {/* 4. FAQ SECTION */}
      <div className="container mx-auto px-4 mb-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-2">
            <AccordionItem 
               title={t('faq.q1')} 
               isOpen={openFaq === 'q1'} 
               onClick={() => toggleFaq('q1')}
            >
               {t('faq.a1')}
            </AccordionItem>
            <AccordionItem 
               title={t('faq.q2')} 
               isOpen={openFaq === 'q2'} 
               onClick={() => toggleFaq('q2')}
            >
               {t('faq.a2')}
            </AccordionItem>
            <AccordionItem 
               title={t('faq.q3')} 
               isOpen={openFaq === 'q3'} 
               onClick={() => toggleFaq('q3')}
            >
               {t('faq.a3')}
            </AccordionItem>
            <AccordionItem 
               title={t('faq.q4')} 
               isOpen={openFaq === 'q4'} 
               onClick={() => toggleFaq('q4')}
            >
               {t('faq.a4')}
            </AccordionItem>
          </div>
        </div>
      </div>

      {/* 5. TRUST STRIP */}
      <div className="border-t border-slate-100 pt-10">
         <div className="container mx-auto px-4 flex justify-center items-center gap-6 text-slate-400 text-sm font-medium">
            <div className="flex items-center gap-2 transition-colors hover:text-slate-600"><ShieldCheck size={16} /> SOC2 Type II Compliant</div>
            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
            <div className="flex items-center gap-2 transition-colors hover:text-slate-600">GDPR Ready</div>
            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
            <div className="flex items-center gap-2 transition-colors hover:text-slate-600">99.9% Uptime SLA</div>
         </div>
      </div>

    </div>
  );
};

const FeatureRow = ({ text, highlight = false }: { text: string; highlight?: boolean }) => (
  <div className="flex items-start gap-3 text-slate-600 group">
    <div className={`mt-0.5 rounded-full p-0.5 transition-colors ${highlight ? 'bg-brand-100 text-brand-600 group-hover:bg-brand-200' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
      <Check size={14} strokeWidth={3} />
    </div>
    <span className={`text-sm ${highlight ? 'font-medium text-slate-900' : ''}`}>{text}</span>
  </div>
);

const ComparisonRow = ({ feature, val1, val2, highlight = false }: { feature: string, val1: React.ReactNode, val2: React.ReactNode, highlight?: boolean }) => (
   <div className={`grid grid-cols-4 p-5 transition-colors items-center hover:bg-slate-50 ${highlight ? 'bg-brand-50/30' : ''}`}>
      <div className="col-span-2 text-sm font-medium text-slate-600 pl-2">{feature}</div>
      <div className="col-span-1 text-sm text-center text-slate-500">{val1}</div>
      <div className="col-span-1 text-sm text-center font-semibold text-slate-900">{val2}</div>
   </div>
);