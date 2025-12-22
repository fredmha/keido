import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';
import { Button } from '../../components/ui/Button';
import { Switch } from '../../components/ui/Switch';

interface Props {
  lang: Language;
}

export const OnboardingPlan: React.FC<Props> = ({ lang }) => {
  const navigate = useNavigate();
  const t = (key: string) => getTranslation(key, lang);
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'pro'>('starter');

  const handleContinue = () => {
    // Persist the plan choice for the dashboard
    localStorage.setItem('keidra_plan', selectedPlan);
    navigate('/auth/onboarding/workspace');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{t('onboarding.plan.title')}</h1>
        <p className="text-slate-500">{t('onboarding.plan.subtitle')}</p>
        
        <div className="flex items-center justify-center gap-4 mt-6">
          <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>{t('pricing.monthly')}</span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
          <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
            {t('pricing.annual')} 
            <span className="ml-2 inline-flex items-center rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-bold text-brand-700">
              -20%
            </span>
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {/* Starter Plan */}
        <div 
          onClick={() => setSelectedPlan('starter')}
          className={`relative p-6 rounded-2xl border-2 transition-all cursor-pointer ${
            selectedPlan === 'starter' 
              ? 'bg-white border-brand-500 shadow-xl shadow-brand-500/10 scale-[1.02]' 
              : 'bg-white border-slate-100 hover:border-slate-200'
          }`}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Starter</h3>
              <p className="text-sm text-slate-500 mt-1">For exploring automation.</p>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
               selectedPlan === 'starter' ? 'border-brand-500 bg-brand-500 text-white' : 'border-slate-200'
            }`}>
               {selectedPlan === 'starter' && <Check size={14} strokeWidth={3} />}
            </div>
          </div>
          <div className="mb-6">
             <span className="text-3xl font-bold text-slate-900">$0</span>
             <span className="text-slate-400">/mo</span>
          </div>
          <div className="space-y-3">
             <Feature text="10 agents / day" />
             <Feature text="Standard Integrations" />
             <Feature text="Community Support" />
          </div>
        </div>

        {/* Pro Plan */}
        <div 
          onClick={() => setSelectedPlan('pro')}
          className={`relative p-6 rounded-2xl border-2 transition-all cursor-pointer overflow-hidden ${
            selectedPlan === 'pro' 
              ? 'bg-brand-50/30 border-brand-500 shadow-xl shadow-brand-500/10 scale-[1.02]' 
              : 'bg-white border-slate-100 hover:border-slate-200'
          }`}
        >
           {selectedPlan === 'pro' && (
              <div className="absolute top-0 right-0 bg-brand-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">SELECTED</div>
           )}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">Pro <Zap size={16} className="text-brand-500 fill-brand-500"/></h3>
              <p className="text-sm text-slate-500 mt-1">For growing teams.</p>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
               selectedPlan === 'pro' ? 'border-brand-500 bg-brand-500 text-white' : 'border-slate-200'
            }`}>
               {selectedPlan === 'pro' && <Check size={14} strokeWidth={3} />}
            </div>
          </div>
          <div className="mb-6">
             <span className="text-3xl font-bold text-slate-900">{isAnnual ? '$39' : '$49'}</span>
             <span className="text-slate-400">/mo</span>
          </div>
          <div className="space-y-3">
             <Feature text="Unlimited agents" />
             <Feature text="Advanced AI Models" />
             <Feature text="Priority Support" />
          </div>
        </div>
      </div>

      <Button 
        size="lg" 
        fullWidth
        onClick={handleContinue}
        icon={<ArrowRight size={18} />}
        className="shadow-lg shadow-brand-500/20"
      >
         Continue with {selectedPlan === 'starter' ? 'Starter' : 'Pro'}
      </Button>
    </div>
  );
};

const Feature = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 text-sm text-slate-600">
     <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
        <Check size={10} strokeWidth={3} />
     </div>
     {text}
  </div>
);