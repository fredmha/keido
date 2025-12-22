import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Loader2, Cpu } from 'lucide-react';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';

interface Props {
  lang: Language;
}

export const OnboardingThinking: React.FC<Props> = ({ lang }) => {
  const navigate = useNavigate();
  const t = (key: string) => getTranslation(key, lang);
  const [step, setStep] = useState(0);

  const steps = [
    'onboarding.step.analyze',
    'onboarding.step.draft',
    'onboarding.step.connect',
    'onboarding.step.finalize'
  ];

  useEffect(() => {
    // Sequence the steps
    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2200),
      setTimeout(() => setStep(3), 3500),
      setTimeout(() => {
        // Redirect to Dashboard with new_user flag to trigger invite modal
        navigate('/app/dashboard?new_user=true');
      }, 4500)
    ];

    return () => timers.forEach(clearTimeout);
  }, [navigate]);

  return (
    <div className="max-w-md mx-auto w-full">
       <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl shadow-brand-500/10">
          
          <div className="flex items-center gap-4 mb-8">
             <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                <Cpu className="text-brand-600 animate-pulse" size={24} />
             </div>
             <div>
                <h2 className="text-xl font-bold text-slate-900">{t('onboarding.thinking.title')}</h2>
                <p className="text-xs text-slate-400 font-mono mt-1">ID: 8f92-a2b1-gen-004</p>
             </div>
          </div>

          <div className="space-y-6">
             {steps.map((key, index) => (
                <div key={key} className="flex items-center gap-4">
                   <div className="w-6 flex justify-center flex-shrink-0">
                      {step > index ? (
                         <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-fade-in">
                            <Check size={14} strokeWidth={3} />
                         </div>
                      ) : step === index ? (
                         <Loader2 size={20} className="text-brand-500 animate-spin" />
                      ) : (
                         <div className="w-2 h-2 rounded-full bg-slate-200" />
                      )}
                   </div>
                   <div className={`text-sm font-medium transition-colors duration-300 ${
                      step === index ? 'text-slate-900' : step > index ? 'text-slate-400 line-through decoration-slate-200' : 'text-slate-300'
                   }`}>
                      {t(key)}
                   </div>
                </div>
             ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-10 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
             <div 
               className="h-full bg-gradient-to-r from-brand-400 to-accent-500 transition-all duration-700 ease-out"
               style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
             />
          </div>
       </div>
    </div>
  );
};