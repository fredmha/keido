import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Activity, Users, Zap, DollarSign, UserPlus, X, Copy, Mail, Shield, CheckCircle2, Loader2, Plus } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';
import { Button } from '../../components/ui/Button';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [showInviteModal, setShowInviteModal] = useState(false);
  
  // Invite Modal States
  const [inviteEmails, setInviteEmails] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [inviteSent, setInviteSent] = useState(false);

  // Trigger Invite Modal if new_user param is present
  useEffect(() => {
    if (searchParams.get('new_user') === 'true') {
      setShowInviteModal(true);
      // Clean up params so it doesn't show again on refresh
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('new_user');
      setSearchParams(newParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const handleAddEmail = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (emailInput.trim() && emailInput.includes('@')) {
      setInviteEmails([...inviteEmails, emailInput.trim()]);
      setEmailInput('');
    }
  };

  const removeEmail = (email: string) => {
    setInviteEmails(inviteEmails.filter(e => e !== email));
  };

  const handleSendInvites = () => {
    if (inviteEmails.length === 0 && !emailInput) return;
    
    // Auto-add input if present
    if (emailInput) handleAddEmail();

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setInviteSent(true);
    }, 1500);
  };

  const stats = [
    { label: 'dash.stat.active_agents', value: '12', change: '+2', trend: 'up', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'dash.stat.tasks_completed', value: '1,429', change: '+12%', trend: 'up', icon: Activity, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'dash.stat.efficiency', value: '94.2%', change: '+1.4%', trend: 'up', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'dash.stat.savings', value: '$4,200', change: '-5%', trend: 'down', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  return (
    <div className="p-8 space-y-8 animate-fade-in relative">
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
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
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

        {/* Right Column - Live Feed Only (Usage moved to sidebar) */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Live Feed</h3>
            <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar flex-1">
              {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-slate-200 mt-2 z-10 relative"></div>
                    {i !== 5 && <div className="absolute top-2 left-1 w-px h-full bg-slate-100 -ml-[0.5px]"></div>}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-800">Sales Agent <span className="text-slate-400 font-normal">updated CRM contact</span></p>
                    <p className="text-xs text-slate-400 mt-1">2 mins ago</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 text-xs font-bold text-brand-600 hover:text-brand-700 hover:underline">View all activity</button>
          </div>
        </div>
      </div>

      {/* INVITE MODAL */}
      {showInviteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm animate-fade-in px-4">
           <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative animate-fade-in-up">
              
              {/* Close Button */}
              <button 
                 onClick={() => setShowInviteModal(false)}
                 className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
              >
                 <X size={20} />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-brand-50 to-white p-8 pb-6 border-b border-slate-100">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-brand-600 mb-4">
                    <UserPlus size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900 mb-1">Invite your team</h2>
                 <p className="text-slate-500">Collaborate on workflows and share agents.</p>
              </div>

              {/* Body */}
              <div className="p-8">
                 {!inviteSent ? (
                    <div className="space-y-6">
                       
                       {/* Email Input */}
                       <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">Email Addresses</label>
                          <div className="p-2 bg-white border border-slate-200 rounded-xl focus-within:ring-2 focus-within:ring-brand-500/20 focus-within:border-brand-500 transition-all">
                             <div className="flex flex-wrap gap-2 mb-2">
                                {inviteEmails.map(email => (
                                   <div key={email} className="flex items-center gap-1 bg-brand-50 text-brand-700 px-2 py-1 rounded-lg text-xs font-medium border border-brand-100 animate-fade-in">
                                      {email}
                                      <button onClick={() => removeEmail(email)} className="hover:text-brand-900"><X size={12}/></button>
                                   </div>
                                ))}
                             </div>
                             <form onSubmit={handleAddEmail} className="relative">
                                <Mail className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                <input 
                                   type="email" 
                                   value={emailInput}
                                   onChange={(e) => setEmailInput(e.target.value)}
                                   onKeyDown={(e) => {
                                      if (e.key === 'Enter' || e.key === ',') {
                                         e.preventDefault();
                                         handleAddEmail();
                                      }
                                   }}
                                   placeholder={inviteEmails.length > 0 ? "Add another email..." : "colleague@company.com"} 
                                   className="w-full pl-8 pr-8 py-1.5 bg-transparent border-none outline-none text-sm placeholder:text-slate-400"
                                />
                                {emailInput && (
                                   <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-600 hover:text-brand-800">
                                      <Plus size={16} />
                                   </button>
                                )}
                             </form>
                          </div>
                          <p className="text-xs text-slate-400">Press Enter to add multiple emails.</p>
                       </div>
                       
                       {/* Role Selection */}
                       <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-700">Role</label>
                          <div className="flex gap-3">
                             <div className="flex-1 p-3 border border-brand-200 bg-brand-50 rounded-xl flex items-center gap-2 cursor-pointer relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-1"><CheckCircle2 size={12} className="text-brand-600" /></div>
                                <Shield size={16} className="text-brand-600" />
                                <div>
                                   <div className="text-sm font-bold text-brand-900">Admin</div>
                                   <div className="text-[10px] text-brand-600/70 leading-tight">Full access</div>
                                </div>
                             </div>
                             <div className="flex-1 p-3 border border-slate-200 rounded-xl flex items-center gap-2 cursor-pointer hover:border-slate-300 bg-white">
                                <Users size={16} className="text-slate-400" />
                                <div>
                                   <div className="text-sm font-medium text-slate-600">Member</div>
                                   <div className="text-[10px] text-slate-400 leading-tight">Edit access</div>
                                </div>
                             </div>
                          </div>
                       </div>

                       <div className="pt-2 flex gap-3">
                          <Button variant="secondary" fullWidth onClick={() => setShowInviteModal(false)}>
                             Skip
                          </Button>
                          <Button 
                             variant="primary" 
                             fullWidth 
                             onClick={handleSendInvites}
                             disabled={isSending || (inviteEmails.length === 0 && !emailInput)}
                          >
                             {isSending ? <Loader2 size={18} className="animate-spin" /> : 'Send Invites'}
                          </Button>
                       </div>
                    </div>
                 ) : (
                    <div className="text-center py-8">
                       <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-fade-in-up">
                          <CheckCircle2 size={32} />
                       </div>
                       <h3 className="text-xl font-bold text-slate-900 mb-2">Invites Sent!</h3>
                       <p className="text-slate-500 mb-8">
                          {inviteEmails.length > 0 ? `We've emailed ${inviteEmails.length} people.` : 'Your invite has been sent.'}
                       </p>
                       <Button variant="primary" onClick={() => setShowInviteModal(false)}>
                          Done
                       </Button>
                    </div>
                 )}
                 
                 {/* Footer Copy Link */}
                 {!inviteSent && (
                    <div className="mt-8 flex items-center justify-center gap-2 text-xs text-brand-600 font-medium cursor-pointer hover:underline">
                       <Copy size={12} />
                       Copy invite link
                    </div>
                 )}
              </div>
           </div>
        </div>
      )}
    </div>
  );
};
