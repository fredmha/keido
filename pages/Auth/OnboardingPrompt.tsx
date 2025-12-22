import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, AlertCircle } from 'lucide-react';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';
import { Button } from '../../components/ui/Button';

interface Props {
  lang: Language;
}

export const OnboardingPrompt: React.FC<Props> = ({ lang }) => {
  const navigate = useNavigate();
  const t = (key: string) => getTranslation(key, lang);
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!prompt.trim()) {
      setError(true);
      return;
    }
    navigate('/auth/onboarding/thinking');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-400 to-accent-400 text-white mb-6 shadow-lg shadow-brand-500/30">
           <Sparkles size={24} />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{t('onboarding.prompt.title')}</h1>
        <p className="text-slate-500">{t('onboarding.prompt.subtitle')}</p>
      </div>

      <div className="mb-8">
        <div className="relative">
           <textarea
             value={prompt}
             onChange={(e) => { setPrompt(e.target.value); setError(false); }}
             placeholder={t('onboarding.prompt.placeholder')}
             className={`w-full h-40 p-5 rounded-2xl border bg-white focus:ring-4 focus:ring-brand-500/10 outline-none resize-none text-lg leading-relaxed transition-all shadow-sm ${
               error ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-brand-500'
             }`}
           />
           {error && (
             <div className="absolute -bottom-6 left-0 flex items-center gap-2 text-red-500 text-sm animate-fade-in">
               <AlertCircle size={14} /> {t('onboarding.prompt.error')}
             </div>
           )}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button 
          variant="gradient"
          size="lg" 
          fullWidth
          onClick={handleSubmit}
          icon={<Sparkles size={18} />}
          className="shadow-xl shadow-brand-500/20 py-4 text-lg"
        >
           {t('onboarding.prompt.button')}
        </Button>
        <button className="text-sm text-slate-400 hover:text-slate-600 py-2">
           Skip for now
        </button>
      </div>
    </div>
  );
};