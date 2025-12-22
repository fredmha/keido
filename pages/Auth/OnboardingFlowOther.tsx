import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutGrid, ArrowRight, MessageSquare } from 'lucide-react';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';
import { Button } from '../../components/ui/Button';

interface Props {
  lang: Language;
}

export const OnboardingFlowOther: React.FC<Props> = ({ lang }) => {
  const navigate = useNavigate();
  const t = (key: string) => getTranslation(key, lang);

  return (
    <div className="max-w-md mx-auto animate-fade-in-up">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 text-slate-600 mb-6">
           <LayoutGrid size={24} />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{t('flow.other.title')}</h1>
        <p className="text-slate-500">{t('flow.other.subtitle')}</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
           <label className="block text-sm font-semibold text-slate-700">What brings you here?</label>
           <div className="relative">
              <textarea 
                 placeholder="Describe your unique use case..." 
                 className="w-full p-4 h-32 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all resize-none text-slate-700 leading-relaxed"
              />
              <MessageSquare className="absolute bottom-4 right-4 text-slate-300 pointer-events-none" size={18} />
           </div>
        </div>

        <div className="pt-2">
           <Button 
             size="lg" 
             fullWidth 
             onClick={() => navigate('/auth/onboarding/integrations')}
             icon={<ArrowRight size={18} />}
             className="bg-slate-800 hover:bg-slate-900 shadow-lg shadow-slate-900/10"
           >
              Continue
           </Button>
           <button className="w-full py-3 text-sm text-slate-400 font-medium hover:text-slate-600" onClick={() => navigate('/auth/onboarding/integrations')}>
              Skip survey
           </button>
        </div>
      </div>
    </div>
  );
};