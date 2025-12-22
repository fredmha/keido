import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, MoreHorizontal, Filter, PlayCircle, PauseCircle, Clock } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';

interface AgentsListProps {
  lang: Language;
}

export const AgentsList: React.FC<AgentsListProps> = ({ lang }) => {
  const navigate = useNavigate();
  const t = (key: string) => getTranslation(key, lang);
  const [searchTerm, setSearchTerm] = useState('');

  const agents = [
    { id: 1, name: 'Sales Outreach V2', status: 'active', lastRun: '2 mins ago', performance: '98%', type: 'Sales' },
    { id: 2, name: 'Customer Support', status: 'active', lastRun: '1 hour ago', performance: '94%', type: 'Support' },
    { id: 3, name: 'Lead Qualifier', status: 'paused', lastRun: '2 days ago', performance: '88%', type: 'Sales' },
    { id: 4, name: 'Invoice Processing', status: 'draft', lastRun: '-', performance: '-', type: 'Finance' },
    { id: 5, name: 'Weekly Report Gen', status: 'active', lastRun: '5 days ago', performance: '100%', type: 'Ops' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t('agents.title')}</h1>
          <p className="text-slate-500 mt-1">{t('agents.subtitle')}</p>
        </div>
        <Button onClick={() => navigate('/app/builder/agent-design?state=empty')} icon={<Plus size={18} />} className="shadow-lg shadow-brand-500/20">
           {t('dash.create_agent')}
        </Button>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-4 mb-6 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
         <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
               type="text" 
               placeholder="Search agents..." 
               className="w-full pl-10 pr-4 py-2 bg-transparent border-none outline-none text-sm font-medium"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
            />
         </div>
         <div className="h-6 w-px bg-slate-200"></div>
         <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            <Filter size={16} /> Filters
         </button>
      </div>

      {/* Agents Table/Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
         <table className="w-full text-left border-collapse">
            <thead>
               <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <th className="px-6 py-4">{t('agents.col.name')}</th>
                  <th className="px-6 py-4">{t('agents.col.status')}</th>
                  <th className="px-6 py-4">{t('agents.col.last_run')}</th>
                  <th className="px-6 py-4">{t('agents.col.performance')}</th>
                  <th className="px-6 py-4 text-right">Actions</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
               {agents.map((agent) => (
                  <tr 
                     key={agent.id} 
                     className="group hover:bg-slate-50 transition-colors cursor-pointer"
                     onClick={() => navigate('/app/builder/agent-design')}
                  >
                     <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                           <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold ${
                              agent.type === 'Sales' ? 'bg-amber-100 text-amber-700' : 
                              agent.type === 'Support' ? 'bg-purple-100 text-purple-700' : 
                              'bg-slate-100 text-slate-700'
                           }`}>
                              {agent.type.substring(0,2).toUpperCase()}
                           </div>
                           <div>
                              <div className="font-bold text-slate-900">{agent.name}</div>
                              <div className="text-xs text-slate-400">{agent.type} Team</div>
                           </div>
                        </div>
                     </td>
                     <td className="px-6 py-4">
                        <StatusBadge status={agent.status} />
                     </td>
                     <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                           <Clock size={14} className="text-slate-400" />
                           {agent.lastRun}
                        </div>
                     </td>
                     <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                           <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full" style={{ width: agent.performance !== '-' ? agent.performance : '0%' }}></div>
                           </div>
                           <span className="text-xs font-bold text-slate-700">{agent.performance}</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 text-right">
                        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-lg transition-all" onClick={(e) => e.stopPropagation()}>
                           <MoreHorizontal size={18} />
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
   const styles = {
      active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      paused: 'bg-amber-50 text-amber-700 border-amber-200',
      draft: 'bg-slate-50 text-slate-600 border-slate-200'
   }[status] || 'bg-slate-50 text-slate-600';

   const icon = {
      active: <PlayCircle size={12} className="fill-current opacity-50" />,
      paused: <PauseCircle size={12} className="fill-current opacity-50" />,
      draft: <div className="w-2 h-2 rounded-full bg-slate-400"></div>
   }[status];

   return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${styles} uppercase tracking-wide`}>
         {icon}
         {status}
      </span>
   );
}
