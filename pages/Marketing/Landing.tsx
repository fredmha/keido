import React from 'react';
import { 
  CheckCircle2, Zap, LayoutTemplate, ShieldCheck, Mail, Bot, Database, MessageSquare, 
  Slack, Trello, Github, Figma, Globe, CreditCard, HardDrive, Smartphone, Check, X as XIcon,
  Calendar, Clock, User, Building2, Phone, ArrowRight
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { AppMockFrame, WorkflowFeatureView } from '../../components/Marketing/WorkflowComponents';

export const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBFF] overflow-x-hidden font-sans text-slate-900 selection:bg-brand-200">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand-200/20 rounded-full blur-[100px] mix-blend-multiply" />
          <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-accent-100/30 rounded-full blur-[100px] mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">v2.0 Now Available</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Boost your <span className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg shadow-brand-100 border border-slate-100 mx-2 align-middle text-brand-500 transform hover:scale-105 transition-transform"><Zap size={36} fill="currentColor" className="text-brand-500"/></span> productivity<br />
            without the overwhelm.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Imagine your tasks running themselves. With Keido, centralize operations,
            ditch tedious work, and free your team to innovate and grow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="secondary" size="lg" className="bg-white shadow-sm font-semibold text-slate-600 px-8 hover:shadow-md transition-all">
              Learn how
            </Button>
            <Button variant="gradient" size="lg" onClick={() => navigate('/auth/sso')} className="px-8 font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all">
              Experience Effortless Efficiency
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-500" /> Quick setup
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand-500" /> GDPR compliant
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand-500" /> ISO27001
            </div>
          </div>
        </div>

        {/* HERO MOCKUP (Upgraded High Fidelity) */}
        <div className="container mx-auto px-4 mt-24">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <AppMockFrame />
          </div>
        
          {/* LOGO STRIP */}
          <div className="py-16 mt-12 border-b border-slate-100">
             <div className="text-center text-sm font-semibold text-slate-400 mb-8 uppercase tracking-widest">Trusted by innovative teams</div>
             <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale transition-all hover:grayscale-0">
                 <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><HexagonIcon /> ACME Corp</div>
                 <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><TriangleIcon /> Vercel</div>
                 <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><CircleIcon /> Loom</div>
                 <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><SquareIcon /> Raycast</div>
                 <div className="flex items-center gap-2 font-bold text-xl text-slate-800"><DiamondIcon /> Linear</div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. AUTOMATED WORKFLOWS (NEW SECTION) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Copy */}
            <div className="lg:w-5/12">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-wide uppercase mb-6">
                 <Zap size={14} /> Automated Workflows
               </div>
               <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 leading-tight">
                  Save hours every day
               </h2>
               <p className="text-lg text-slate-500 leading-relaxed mb-8">
                  Let our intelligent automation tools handle repetitive tasks, so you can reclaim your time and focus on strategic initiatives.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <Button variant="gradient" size="lg" className="shadow-lg shadow-brand-500/20" onClick={() => navigate('/auth/sso')}>
                    Request your demo
                 </Button>
               </div>
            </div>

            {/* Right Visual (Feature Diagram) */}
            <div className="lg:w-7/12 w-full">
               <WorkflowFeatureView />
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTEGRATIONS SECTION */}
      <section className="py-24 bg-[#FDFBFF] relative overflow-hidden border-t border-slate-100">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-20">
               <div className="lg:w-5/12">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-wide uppercase mb-6">
                    <Zap size={14} /> Seamless Integrations
                  </div>
                  <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 leading-tight">
                     Connect all your <br/> tools in one place
                  </h2>
                  <p className="text-lg text-slate-500 leading-relaxed mb-8">
                     Integrate your favorite apps effortlessly, ensuring a smooth flow of information and reducing friction across your tech stack.
                  </p>
                  <Button variant="gradient" size="lg" className="shadow-lg shadow-brand-500/20" onClick={() => navigate('/auth/sso')}>
                     Request your demo
                  </Button>
               </div>

               <div className="lg:w-7/12 relative">
                  {/* Grid Background Fade */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
                  
                  {/* Icons Grid */}
                  <div className="grid grid-cols-4 gap-4 md:gap-6 opacity-80">
                     {[
                        { icon: Slack, color: "text-rose-500", bg: "bg-rose-50" },
                        { icon: Trello, color: "text-blue-500", bg: "bg-blue-50" },
                        { icon: Github, color: "text-slate-700", bg: "bg-slate-100" },
                        { icon: Figma, color: "text-purple-500", bg: "bg-purple-50" },
                        { icon: CreditCard, color: "text-emerald-500", bg: "bg-emerald-50" },
                        { icon: HardDrive, color: "text-orange-500", bg: "bg-orange-50" },
                        { icon: Smartphone, color: "text-cyan-500", bg: "bg-cyan-50" },
                        { icon: Globe, color: "text-indigo-500", bg: "bg-indigo-50" },
                     ].map((item, i) => (
                        <div key={i} className={`aspect-square rounded-2xl ${item.bg} flex items-center justify-center transform transition-transform hover:scale-110 shadow-sm`}>
                           <item.icon className={`w-8 h-8 ${item.color}`} />
                        </div>
                     ))}
                     
                     {/* Center Rocket (Absolute) */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center z-20 border-4 border-slate-50">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-brand-500 to-accent-500 flex items-center justify-center text-white shadow-inner">
                           <Zap size={40} fill="currentColor" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. COMPARISON SECTION (DARK MODE) */}
      <section className="py-24 bg-[#1a1825] text-white relative overflow-hidden">
         {/* Glow effects */}
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px]" />
         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px]" />

         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 text-brand-300 font-bold text-sm tracking-wider uppercase mb-4">
                  <Zap size={14} /> Stay ahead with automation
               </div>
               <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                  Your competitors are <br/> automating for a reason!
               </h2>
               <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                  Ditch the old, clunky systems. Compare how your day-to-day transforms when you power up with automation, clarity, and unstoppable efficiency.
               </p>
            </div>

            <div className="max-w-4xl mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 items-end">
                  {/* Labels Column (Hidden on mobile mostly, or adapted) */}
                  <div className="hidden md:flex flex-col gap-6 py-8 text-slate-400 font-medium text-sm">
                     <div className="h-12 flex items-center">Task Completion</div>
                     <div className="h-12 flex items-center">Error Rate</div>
                     <div className="h-12 flex items-center">Data Visibility</div>
                     <div className="h-12 flex items-center">Team Collaboration</div>
                     <div className="h-12 flex items-center">Workflow Automation</div>
                     <div className="h-12 flex items-center">Onboarding Speed</div>
                     <div className="h-12 flex items-center">Scalability</div>
                  </div>

                  {/* Without Keido Column */}
                  <div className="flex flex-col gap-6 py-8 md:border-t md:border-white/10 text-center md:text-left">
                     <div className="text-lg font-bold text-slate-300 mb-4 md:mb-0 text-center">Without Keido</div>
                     {/* Mobile Labels included for responsiveness */}
                     <div className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1"><span className="md:hidden text-xs text-slate-500">Task Completion</span><span className="text-slate-300 font-medium">Several days</span></div>
                     <div className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1"><span className="md:hidden text-xs text-slate-500">Error Rate</span><span className="text-slate-300 font-medium">Frequent</span></div>
                     <div className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1"><span className="md:hidden text-xs text-slate-500">Data Visibility</span><span className="text-slate-300 font-medium">Fragmented</span></div>
                     <div className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1"><span className="md:hidden text-xs text-slate-500">Collaboration</span><span className="text-slate-300 font-medium">Disconnected</span></div>
                     <div className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1"><span className="md:hidden text-xs text-slate-500">Automation</span><span className="text-slate-500"><XIcon size={20}/></span></div>
                     <div className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1"><span className="md:hidden text-xs text-slate-500">Onboarding</span><span className="text-slate-300 font-medium">Weeks to Months</span></div>
                     <div className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1"><span className="md:hidden text-xs text-slate-500">Scalability</span><span className="text-slate-500"><XIcon size={20}/></span></div>
                  </div>

                  {/* With Keido Column (Highlighted) */}
                  <div className="relative bg-[#252238] rounded-2xl border border-brand-500/30 p-8 shadow-2xl shadow-brand-900/50 overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-accent-500"></div>
                     <div className="flex flex-col gap-6 text-center">
                        <div className="text-lg font-bold text-white mb-4 md:mb-0 flex items-center justify-center gap-2"><Zap size={16} className="text-brand-400 fill-brand-400"/> With Keido</div>
                        <div className="h-12 flex flex-col items-center justify-center"><span className="text-white font-bold">Instantly</span></div>
                        <div className="h-12 flex flex-col items-center justify-center"><span className="text-white font-bold">Near-zero mistakes</span></div>
                        <div className="h-12 flex flex-col items-center justify-center"><span className="text-white font-bold">Real-Time, Centralized</span></div>
                        <div className="h-12 flex flex-col items-center justify-center"><span className="text-white font-bold">Seamless</span></div>
                        <div className="h-12 flex flex-col items-center justify-center"><span className="text-brand-400"><Check size={24} strokeWidth={3}/></span></div>
                        <div className="h-12 flex flex-col items-center justify-center"><span className="text-white font-bold">Minutes</span></div>
                        <div className="h-12 flex flex-col items-center justify-center"><span className="text-brand-400"><Check size={24} strokeWidth={3}/></span></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. STEPS SECTION */}
      <section className="py-24 bg-[#FDFBFF]">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
                  <CheckCircle2 size={14} className="text-brand-500" /> How it works
               </div>
               <h2 className="text-4xl md:text-5xl font-semibold text-slate-900">
                  3 simple steps to <br/> effortless efficiency
               </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
               {[
                  { step: 1, title: "Sign up", desc: "Create your account in minutes and gain immediate access to our intuitive dashboard." },
                  { step: 2, title: "Integrate your tools", desc: "Connect your existing apps and systems — no technical expertise needed." },
                  { step: 3, title: "Automate & Optimize", desc: "Set up your custom workflows and watch as your daily operations transform." },
               ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-500/10 transition-shadow">
                     <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-100 to-white border border-brand-100 text-brand-600 flex items-center justify-center text-2xl font-bold mb-6 shadow-inner">
                        {item.step}
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                     <p className="text-slate-500 leading-relaxed">
                        {item.desc}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. REQUEST DEMO FORM */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-wide uppercase mb-6">
                  <Zap size={14} /> Request a Demo
               </div>
               <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">
                  Request your demo
               </h2>
               <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                  Book your demo now and see our experts transform your workflow. Unlock real-time insights, effortless automation, and instant productivity boosts.
               </p>
            </div>

            <div className="max-w-2xl mx-auto bg-brand-50/50 p-8 md:p-12 rounded-[2rem] border border-brand-100/50 shadow-2xl">
               <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); navigate('/auth/sso'); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Name*</label>
                        <input type="text" placeholder="Jane" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Surname*</label>
                        <input type="text" placeholder="Smith" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-semibold text-slate-700">Business Email*</label>
                     <input type="email" placeholder="jane@company.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white" />
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-semibold text-slate-700">Telephone</label>
                     <input type="tel" placeholder="+44" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white" />
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-semibold text-slate-700">Company*</label>
                     <input type="text" placeholder="Your company name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Earliest Availability</label>
                        <div className="relative">
                           <input type="text" placeholder="dd/mm/yyyy" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white pl-10" />
                           <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">Time</label>
                        <div className="relative">
                           <input type="text" placeholder="--:-- --" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white pl-10" />
                           <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        </div>
                     </div>
                  </div>

                  <Button variant="gradient" size="lg" fullWidth className="mt-8 font-semibold text-lg shadow-lg shadow-brand-500/20">
                     Request Demo
                  </Button>
               </form>
            </div>
         </div>
      </section>

      {/* 7. ANALYTICS SECTION (Refined) */}
      <section className="py-24 bg-[#FDFBFF] relative overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2">
                 <div className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm tracking-wider uppercase mb-4">
                    <Zap size={16} /> Real-time Analytics
                 </div>
                 <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
                    Make informed<br/> decisions instantly
                 </h2>
                 <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                    Gain instant insights into your operations with dynamic dashboards and reports, empowering you to act on data the moment it matters.
                 </p>
                 <Button variant="gradient" size="lg" className="px-8 shadow-xl shadow-brand-500/20" onClick={() => navigate('/auth/sso')}>
                    Request your demo
                 </Button>
              </div>

              <div className="lg:w-1/2 relative">
                 {/* Visual recreation of image 4 (Charts) */}
                 <div className="relative w-full max-w-lg mx-auto">
                    {/* Main Chart Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-100 relative z-10">
                       <div className="mb-8">
                          <div className="text-lg font-semibold text-slate-500">Performance dashboard</div>
                          <div className="text-4xl font-bold text-slate-900 mt-2 tracking-tight">98% efficiency</div>
                       </div>
                       <div className="h-48 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                             <BarChart data={[
                               {name: 'Mon', uv: 40}, {name: 'Tue', uv: 30}, {name: 'Wed', uv: 60}, 
                               {name: 'Thu', uv: 90}, {name: 'Fri', uv: 20}, {name: 'Sat', uv: 50}
                             ]}>
                                <Bar dataKey="uv" fill="#c4b5fd" radius={[4, 4, 0, 0]} />
                                {/* Highlight Thursday */}
                                <Bar dataKey="uv" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                             </BarChart>
                          </ResponsiveContainer>
                       </div>
                       <div className="flex justify-between text-xs text-slate-400 mt-4 px-2 font-medium">
                          <span>Mon</span><span>Tue</span><span>Wed</span><span className="font-bold text-brand-600">Thu</span><span>Fri</span><span>Sat</span>
                       </div>
                    </div>

                    {/* Floating Heatmap Card (Fixed overlap) */}
                    <div className="absolute -left-12 top-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 w-48 rotate-[-6deg] hidden md:block">
                       <div className="grid grid-cols-6 gap-2">
                          {[...Array(24)].map((_, i) => (
                             <div key={i} className={`w-full pt-[100%] rounded-md ${[1,4,5,8,12,15,19,20].includes(i) ? 'bg-brand-500' : 'bg-brand-100'}`}></div>
                          ))}
                       </div>
                    </div>

                    {/* Floating Curve Card */}
                    <div className="absolute -right-8 -bottom-12 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 w-64 h-40 transform rotate-2">
                       <div className="h-full w-full">
                          <ResponsiveContainer width="100%" height="100%">
                             <AreaChart data={[
                               {name: 'A', v: 10}, {name: 'B', v: 30}, {name: 'C', v: 20}, 
                               {name: 'D', v: 50}, {name: 'E', v: 40}, {name: 'F', v: 60}
                             ]}>
                                <Area type="monotone" dataKey="v" stroke="#8b5cf6" strokeWidth={3} fill="#f5f3ff" />
                             </AreaChart>
                          </ResponsiveContainer>
                          {/* Dot */}
                          <div className="absolute top-[40%] left-[60%] w-4 h-4 bg-accent-500 rounded-full border-2 border-white shadow-md"></div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

// Generic Shape Icons for Placeholders
const HexagonIcon = () => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l0 10l10 5l10 -5l0 -10z" /></svg>
)
const TriangleIcon = () => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z" /></svg>
)
const CircleIcon = () => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
)
const SquareIcon = () => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" /></svg>
)
const DiamondIcon = () => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 12l10 10l10 -10z" /></svg>
)
