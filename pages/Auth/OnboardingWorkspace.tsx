import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Building2, Globe } from 'lucide-react';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';
import { Button } from '../../components/ui/Button';

interface Props {
  lang: Language;
}

export const OnboardingWorkspace: React.FC<Props> = ({ lang }) => {
  const navigate = useNavigate();
  const t = (key: string) => getTranslation(key, lang);
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      navigate('/auth/onboarding/category');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{t('onboarding.workspace.title')}</h1>
        <p className="text-slate-500">{t('onboarding.workspace.subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
           <label className="block text-sm font-semibold text-slate-700 mb-2">{t('onboarding.workspace.label')}</label>
           <div className="relative">
              <input 
                 type="text" 
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 placeholder={t('onboarding.workspace.placeholder')}
                 className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all"
                 autoFocus
                 required
              />
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
           </div>
           {name.trim() && (
             <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 px-1 animate-fade-in">
                <Globe size={12} />
                <span>app.keidra.com/workspace/<span className="font-semibold text-brand-600">{name.toLowerCase().replace(/[^a-z0-9]/g, '-')}</span></span>
             </div>
           )}
        </div>

        <Button 
          variant="primary" 
          size="lg" 
          fullWidth
          disabled={!name.trim()}
          icon={<ArrowRight size={18} />}
        >
           Continue
        </Button>
      </form>
    </div>
  );
};