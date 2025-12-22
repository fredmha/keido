import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Calendar, CheckSquare, ArrowRight, Zap } from 'lucide-react';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';
import { Button } from '../../components/ui/Button';

interface Props {
  lang: Language;
}

export const OnboardingFlowPersonal: React.FC<Props> = ({ lang }) => {
  const navigate = useNavigate();
  const t = (key: string) => getTranslation(key, lang);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const goals = [
    { id: 'email', label: 'Inbox Zero', icon: Mail, desc: 'Automate email sorting & replies' },
    { id: 'schedule', label: 'Smart Scheduling', icon: Calendar, desc: 'Manage meetings & events' },
    { id: 'tasks', label: 'Task Management', icon: CheckSquare, desc: 'Auto-organize your todo list' },
  ];

  return (
    <div className="max-w-md mx-auto animate-fade-in-up">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-100 text-accent-600 mb-6">
           <User size={24} />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{t('flow.personal.title')}</h1>
        <p className="text-slate-500">{t('flow.personal.subtitle')}</p>
      </div>

      <div className="space-y-4 mb-8">
        {goals.map((goal) => (
           <button
             key={goal.id}
             onClick={() => setSelectedGoal(goal.id)}
             className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-center gap-4 group ${
               selectedGoal === goal.id 
                 ? 'bg-accent-50 border-accent-500 ring-1 ring-accent-500 shadow-md transform scale-[1.02]' 
                 : 'bg-white border-slate-200 hover:border-accent-200 hover:bg-slate-50'
             }`}
           >
             <div className={`p-3 rounded-xl transition-colors ${
                selectedGoal === goal.id ? 'bg-accent-500 text-white' : 'bg-slate-100 text-slate-500 group-hover:text-accent-600'
             }`}>
                <goal.icon size={20} />
             </div>
             <div>
               <div className={`font-bold ${selectedGoal === goal.id ? 'text-accent-900' : 'text-slate-900'}`}>{goal.label}</div>
               <div className="text-sm text-slate-500">{goal.desc}</div>
             </div>
           </button>
        ))}
      </div>

      <div className="pt-2">
         <Button 
           size="lg" 
           fullWidth 
           disabled={!selectedGoal}
           onClick={() => navigate('/auth/onboarding/integrations')}
           icon={<ArrowRight size={18} />}
           className="bg-accent-600 hover:bg-accent-700 shadow-accent-500/20"
         >
            Customize My Workspace
         </Button>
      </div>
    </div>
  );
};