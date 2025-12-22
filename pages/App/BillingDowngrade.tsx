import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const BillingDowngrade: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'confirm' | 'feedback' | 'done'>('confirm');

  const handleDowngrade = () => {
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('keido_plan', 'starter');
      setStep('done');
    }, 800);
  };

  return (
    <div className="min-h-full flex flex-col items-center justify-center p-8 bg-slate-50">
       <button onClick={() => navigate(-1)} className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors">
          <ArrowLeft size={16} /> Cancel
       </button>

       <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          
          {step === 'confirm' && (
             <div className="p-10">
                <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-6">
                   <AlertTriangle size={32} />
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Are you sure?</h1>
                <p className="text-slate-500 mb-8 leading-relaxed">
                   Downgrading to Starter will limit you to 10 agent runs per day and restrict access to GPT-4o models. Your existing advanced agents will be paused.
                </p>

                <div className="bg-slate-50 rounded-xl p-4 mb-8 border border-slate-100">
                   <h3 className="text-sm font-bold text-slate-900 mb-2">You will lose access to:</h3>
                   <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div> Unlimited Agent Runs</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div> Priority Email Support</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div> Team Collaboration Features</li>
                   </ul>
                </div>

                <div className="flex flex-col gap-3">
                   <Button variant="danger" fullWidth onClick={handleDowngrade}>
                      Confirm Downgrade
                   </Button>
                   <Button variant="ghost" fullWidth onClick={() => navigate(-1)}>
                      Keep Pro Plan
                   </Button>
                </div>
             </div>
          )}

          {step === 'done' && (
             <div className="p-10 text-center animate-fade-in">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                   <CheckCircle2 size={32} />
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Downgrade Successful</h1>
                <p className="text-slate-500 mb-8">
                   Your plan has been switched to Starter. You can upgrade again at any time.
                </p>
                <Button variant="primary" fullWidth onClick={() => navigate('/app/dashboard')}>
                   Return to Dashboard
                </Button>
             </div>
          )}
       </div>
    </div>
  );
};