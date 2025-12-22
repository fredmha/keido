import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Users, Briefcase, ArrowRight, ChevronDown } from 'lucide-react';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';
import { Button } from '../../components/ui/Button';

interface Props {
  lang: Language;
}

export const OnboardingFlowBusiness: React.FC<Props> = ({ lang }) => {
  const navigate = useNavigate();
  const t = (key: string) => getTranslation(key, lang);
  const [teamSize, setTeamSize] = useState<string | null>(null);

  return (
    <div className="max-w-md mx-auto animate-fade-in-up">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-100 text-brand-600 mb-6">
           <Building size={24} />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">{t('flow.business.title')}</h1>
        <p className="text-slate-500">{t('flow.business.subtitle')}</p>
      </div>

      <div className="space-y-6">
        {/* Role Select */}
        <div className="space-y-2">
           <label className="block text-sm font-semibold text-slate-700">Your Role</label>
           <div className="relative">
              <select className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all appearance-none text-slate-700">
                 <option value="" disabled selected>Select your role...</option>
                 <option value="founder">Founder / Executive</option>
                 <option value="manager">Team Manager</option>
                 <option value="ops">Operations</option>
                 <option value="sales">Sales / Marketing</option>
                 <option value="dev">Engineering / Product</option>
                 <option value="other">Individual Contributor</option>
              </select>
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
           </div>
        </div>

        {/* Team Size */}
        <div className="space-y-2">
           <label className="block text-sm font-semibold text-slate-700">Team Size</label>
           <div className="grid grid-cols-3 gap-3">
              {['1-10', '11-50', '50+'].map((size) => (
                 <button
                    key={size}
                    onClick={() => setTeamSize(size)}
                    className={`py-3 px-2 rounded-xl border text-sm font-medium transition-all ${
                       teamSize === size 
                       ? 'bg-brand-50 border-brand-500 text-brand-700 ring-1 ring-brand-500' 
                       : 'bg-white border-slate-200 text-slate-600 hover:border-brand-200'
                    }`}
                 >
                    {size}
                 </button>
              ))}
           </div>
        </div>

        {/* Department */}
        <div className="space-y-2">
           <label className="block text-sm font-semibold text-slate-700">Primary Department</label>
           <div className="relative">
              <select className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all appearance-none text-slate-700">
                 <option value="" disabled selected>Select department...</option>
                 <option value="general">General Admin</option>
                 <option value="sales">Sales</option>
                 <option value="marketing">Marketing</option>
                 <option value="customer_success">Customer Success</option>
                 <option value="hr">HR & Recruiting</option>
              </select>
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
           </div>
        </div>

        <div className="pt-4">
           <Button 
             size="lg" 
             fullWidth 
             onClick={() => navigate('/auth/onboarding/integrations')}
             icon={<ArrowRight size={18} />}
           >
              Continue
           </Button>
        </div>
      </div>
    </div>
  );
};