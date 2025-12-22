import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Slack, Trello, Github, Figma, Mail, Database, Globe } from 'lucide-react';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';
import { Button } from '../../components/ui/Button';

interface Props {
  lang: Language;
}

export const OnboardingIntegrations: React.FC<Props> = ({ lang }) => {
  const navigate = useNavigate();
  const t = (key: string) => getTranslation(key, lang);
  const [selected, setSelected] = useState<string[]>([]);

  const integrations = [
    { id: 'slack', name: 'Slack', icon: Slack, color: 'text-rose-500', bg: 'bg-rose-50' },
    { id: 'notion', name: 'Notion', icon: Database, color: 'text-slate-700', bg: 'bg-slate-100' },
    { id: 'gmail', name: 'Gmail', icon: Mail, color: 'text-red-500', bg: 'bg-red-50' },
    { id: 'hubspot', name: 'HubSpot', icon: Globe, color: 'text-orange-500', bg: 'bg-orange-50' },
    { id: 'github', name: 'GitHub', icon: Github, color: 'text-slate-900', bg: 'bg-slate-100' },
    { id: 'trello', name: 'Trello', icon: Trello, color: 'text-blue-500', bg: 'bg-blue-50' },
    { id: 'figma', name: 'Figma', icon: Figma, color: 'text-purple-500', bg: 'bg-purple-50' },
    { id: 'custom', name: 'Custom API', icon: Database, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  ];

  const toggle = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{t('onboarding.integrations.title')}</h1>
        <p className="text-slate-500">{t('onboarding.integrations.subtitle')}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {integrations.map((item) => {
           const isSelected = selected.includes(item.id);
           return (
             <button
               key={item.id}
               onClick={() => toggle(item.id)}
               className={`relative p-4 rounded-2xl border transition-all duration-200 flex flex-col items-center justify-center gap-3 h-32 group ${
                 isSelected 
                   ? 'bg-brand-50 border-brand-500 ring-1 ring-brand-500 shadow-md' 
                   : 'bg-white border-slate-200 hover:border-brand-200 hover:bg-slate-50'
               }`}
             >
               {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-brand-500 rounded-full flex items-center justify-center text-white animate-fade-in">
                     <Check size={12} strokeWidth={3} />
                  </div>
               )}
               <div className={`p-3 rounded-xl transition-transform duration-200 ${isSelected ? 'scale-110' : 'group-hover:scale-110'} ${item.bg} ${item.color}`}>
                  <item.icon size={24} />
               </div>
               <span className={`text-sm font-medium ${isSelected ? 'text-brand-900' : 'text-slate-600'}`}>
                 {item.name}
               </span>
             </button>
           );
        })}
      </div>

      <div className="flex flex-col items-center gap-4">
        <Button 
          variant={selected.length > 0 ? 'primary' : 'secondary'}
          size="lg" 
          fullWidth
          onClick={() => navigate('/auth/onboarding/prompt')}
          icon={<ArrowRight size={18} />}
        >
           {selected.length > 0 ? 'Connect & Continue' : 'Skip for now'}
        </Button>
      </div>
    </div>
  );
};