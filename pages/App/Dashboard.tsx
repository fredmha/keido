import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Activity, Users, Zap, DollarSign } from 'lucide-react';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';

interface DashboardProps {
  lang: Language;
}

const mockData = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 550 },
  { name: 'Thu', value: 450 },
  { name: 'Fri', value: 650 },
  { name: 'Sat', value: 480 },
  { name: 'Sun', value: 700 },
];

export const Dashboard: React.FC<DashboardProps> = ({ lang }) => {
  const t = (key: string) => getTranslation(key, lang);

  const stats = [
    { label: 'dash.stat.active_agents', value: '12', change: '+2', trend: 'up', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'dash.stat.tasks_completed', value: '1,429', change: '+12%', trend: 'up', icon: Activity, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'dash.stat.efficiency', value: '94.2%', change: '+1.4%', trend: 'up', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'dash.stat.savings', value: '$4,200', change: '-5%', trend: 'down', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  return (
    <div className="p-8 space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t('dash.welcome')}</h1>
          <p className="text-slate-500 mt-1">{t('dash.overview')}</p>
        </div>
        <div className="text-sm text-slate-400">
           Last updated: Just now
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <div className={`flex items-center text-xs font-medium ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-500'}`}>
                {stat.change}
                {stat.trend === 'up' ? <ArrowUpRight size={14} className="ml-1" /> : <ArrowDownRight size={14} className="ml-1" />}
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
            <div className="text-sm text-slate-500 mt-1">{t(stat.label)}</div>
          </div>
        ))}
      </div>

      {/* Main Chart Area */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">{t('dash.stat.tasks_completed')}</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                  itemStyle={{color: '#0f172a', fontWeight: 600}}
                  cursor={{stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4'}}
                />
                <Area type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Column / Recent Activity */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Live Feed</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="relative">
                   <div className="w-2 h-2 rounded-full bg-slate-200 mt-2 z-10 relative"></div>
                   {i !== 3 && <div className="absolute top-2 left-1 w-px h-full bg-slate-100 -ml-[0.5px]"></div>}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-800">Sales Agent <span className="text-slate-400 font-normal">updated CRM contact</span></p>
                  <p className="text-xs text-slate-400 mt-1">2 mins ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};