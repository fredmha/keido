import React from 'react';
import { Zap, Check, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export const BillingUpgrade: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-full flex flex-col items-center justify-center p-8 bg-slate-50">
       <button onClick={() => navigate(-1)} className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors">
          <ArrowLeft size={16} /> Back
       </button>

       <div className="max-w-4xl w-full grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          {/* Left: Info */}
          <div className="p-10 flex flex-col justify-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-wide uppercase mb-6 self-start">
                 <Zap size={14} /> Upgrade to Pro
             </div>
             <h1 className="text-3xl font-bold text-slate-900 mb-4">Unlock unlimited potential.</h1>
             <p className="text-slate-500 mb-8 leading-relaxed">
                You've hit the limit of the Starter plan. Upgrade to Pro to create unlimited agents, access advanced AI models, and remove all usage caps.
             </p>
             
             <div className="space-y-4 mb-8">
                {['Unlimited Agent Runs', 'GPT-4 & Claude Opus Access', 'Priority Support', 'SSO & Advanced Security'].map((feature) => (
                   <div key={feature} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                         <Check size={12} strokeWidth={3} />
                      </div>
                      {feature}
                   </div>
                ))}
             </div>
          </div>

          {/* Right: Payment Stub */}
          <div className="bg-slate-50 p-10 flex flex-col justify-center border-l border-slate-100">
             <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
                <div className="flex justify-between items-baseline mb-4">
                   <span className="font-bold text-slate-900 text-lg">Pro Plan</span>
                   <span className="font-bold text-slate-900 text-3xl">$49<span className="text-sm text-slate-400 font-normal">/mo</span></span>
                </div>
                <div className="h-px bg-slate-100 mb-4"></div>
                <div className="flex justify-between text-sm mb-2">
                   <span className="text-slate-500">Subtotal</span>
                   <span className="font-medium text-slate-900">$49.00</span>
                </div>
                <div className="flex justify-between text-sm">
                   <span className="text-slate-500">Tax</span>
                   <span className="font-medium text-slate-900">$0.00</span>
                </div>
             </div>

             <Button variant="gradient" size="lg" fullWidth className="mb-4 shadow-lg shadow-brand-500/20">
                Confirm Upgrade
             </Button>
             <p className="text-center text-xs text-slate-400">
                Secure payment via Stripe. Cancel anytime.
             </p>
          </div>
       </div>
    </div>
  );
};
