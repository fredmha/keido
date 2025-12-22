import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, User, GraduationCap, LayoutGrid, ArrowRight } from 'lucide-react';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';
import { Button } from '../../components/ui/Button';

interface Props {
  lang: Language;
}

export const OnboardingCategory: React.FC<Props> = ({ lang }) => {
  const navigate = useNavigate();
  const t = (key: string) => getTranslation(key, lang);
  const [selected, setSelected] = useState<string | null>(null);

  const categories = [
    { id: 'business', icon: Building2, label: 'onboarding.cat.business' },
    { id: 'personal', icon: User, label: 'onboarding.cat.personal' },
    { id: 'education', icon: GraduationCap, label: 'onboarding.cat.edu' },
    { id: 'other', icon: LayoutGrid, label: 'onboarding.cat.other' },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{t('onboarding.cat.title')}</h1>
        <p className="text-slate-500">{t('onboarding.cat.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelected(cat.id)}
            className={`p-6 rounded-2xl border text-left transition-all duration-200 flex flex-col items-center justify-center gap-4 h-40 group ${
              selected === cat.id 
                ? 'bg-brand-50 border-brand-500 ring-1 ring-brand-500 shadow-md' 
                : 'bg-white border-slate-200 hover:border-brand-200 hover:bg-slate-50'
            }`}
          >
            <div className={`p-3 rounded-xl transition-colors ${
               selected === cat.id ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-500 group-hover:text-brand-600'
            }`}>
               <cat.icon size={28} />
            </div>
            <span className={`font-medium ${selected === cat.id ? 'text-brand-900' : 'text-slate-700'}`}>
              {t(cat.label)}
            </span>
          </button>
        ))}
      </div>

      <div className="flex justify-end">
        <Button 
          size="lg" 
          disabled={!selected} 
          onClick={() => navigate('/auth/onboarding/integrations')}
          className="w-full sm:w-auto"
          icon={<ArrowRight size={18} />}
        >
           Continue
        </Button>
      </div>
    </div>
  );
};