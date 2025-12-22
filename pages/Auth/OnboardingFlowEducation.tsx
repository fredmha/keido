import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, School, BookOpen, ArrowRight } from 'lucide-react';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';
import { Button } from '../../components/ui/Button';

interface Props {
  lang: Language;
}

export const OnboardingFlowEducation: React.FC<Props> = ({ lang }) => {
  const navigate = useNavigate();
  const t = (key: string) => getTranslation(key, lang);

  return (
    <div className="max-w-md mx-auto animate-fade-in-up">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-6">
           <GraduationCap size={24} />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{t('flow.edu.title')}</h1>
        <p className="text-slate-500">{t('flow.edu.subtitle')}</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
           <label className="block text-sm font-semibold text-slate-700">Institution / University</label>
           <div className="relative">
              <input 
                 type="text" 
                 placeholder="e.g. Stanford University" 
                 className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
              />
              <School className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
           </div>
        </div>

        <div className="space-y-2">
           <label className="block text-sm font-semibold text-slate-700">Role</label>
           <div className="grid grid-cols-2 gap-3">
              <button className="py-3 px-4 rounded-xl border border-blue-500 bg-blue-50 text-blue-700 font-medium text-sm">Student</button>
              <button className="py-3 px-4 rounded-xl border border-slate-200 bg-white text-slate-600 font-medium text-sm hover:border-slate-300">Educator</button>
           </div>
        </div>

        <div className="space-y-2">
           <label className="block text-sm font-semibold text-slate-700">Field of Study</label>
           <div className="relative">
              <input 
                 type="text" 
                 placeholder="e.g. Computer Science" 
                 className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
              />
              <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
           </div>
        </div>

        <div className="pt-4">
           <Button 
             size="lg" 
             fullWidth 
             onClick={() => navigate('/auth/onboarding/integrations')}
             icon={<ArrowRight size={18} />}
             className="bg-blue-600 hover:bg-blue-700 shadow-blue-500/20"
           >
              Continue
           </Button>
        </div>
      </div>
    </div>
  );
};