import React, { useState } from 'react';
import { 
  CheckCircle2, Zap, LayoutTemplate, ShieldCheck, Mail, Bot, Database, MessageSquare, 
  Slack, Trello, Github, Figma, Globe, CreditCard, HardDrive, Smartphone, Check, X as XIcon,
  Calendar, Clock, User, Building2, Phone, ArrowRight, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { WorkflowFeatureView } from '../../components/Marketing/WorkflowComponents';
import { HeroWorkflowAnimation } from '../../components/Marketing/HeroWorkflowAnimation';

export const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [caseStudyIndex, setCaseStudyIndex] = useState(0);

  const caseStudies = [
    {
      name: "Sarah Davis",
      title: "Co-owner of HillCrust Pizza",
      quote: "We don't have a huge sales team, so Keidra was like hiring 3 reps overnight. It learns fast, personalizes well, and doesn't miss follow-ups. Our inbound and outbound are now in sync.",
      metrics: [
        { label: "4x", desc: "Increase in outbound responses" },
        { label: "2", desc: "ROI-positive in just 2 weeks" }
      ],
      image: "/images/Generated Image December 23, 2025 - 10_02AM.jpeg"
    },
    {
      name: "Michael Rodriguez",
      title: "Head of Sales, FlowFusion",
      quote: "Keidra transformed how we handle leads. What used to take our team hours now happens automatically. We're closing deals faster and our pipeline has never been healthier.",
      metrics: [
        { label: "3x", desc: "Faster response time" },
        { label: "40%", desc: "Increase in qualified leads" }
      ],
      image: "/images/Generated Image December 23, 2025 - 10_05AM.jpeg"
    },
    {
      name: "Emma Chen",
      title: "VP of Operations, TechFlow",
      quote: "The automation capabilities are incredible. We've eliminated manual data entry across three systems. Our team can finally focus on strategy instead of busywork.",
      metrics: [
        { label: "15hrs", desc: "Saved per week per team member" },
        { label: "99.9%", desc: "Uptime guarantee" }
      ],
      image: "/images/Generated Image December 23, 2025 - 10_07AM.jpeg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] overflow-x-hidden font-sans text-slate-900 selection:bg-brand-200">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[-100px] right-[-200px] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-200/20 rounded-full blur-[100px] mix-blend-multiply" />
          <div className="absolute bottom-[-100px] left-[-200px] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent-100/30 rounded-full blur-[100px] mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text */}
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up self-start">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">v2.0 Now Available</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-slate-900 mb-6 md:mb-8 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Built for enterprise scale<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>and trust.
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed animate-fade-in-up px-2 sm:px-0" style={{ animationDelay: '0.2s' }}>
                Keidra meets the highest security, uptime, and support standards—so your revenue engine never slows down, no matter how fast you grow.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 md:mb-12 animate-fade-in-up px-2 sm:px-0" style={{ animationDelay: '0.3s' }}>
                <Button variant="gradient" size="lg" onClick={() => navigate('/auth/sso')} className="w-full sm:w-auto px-6 sm:px-8 font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all z-10 relative">
                  Get Started
                </Button>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-white shadow-sm font-semibold text-slate-600 px-6 sm:px-8 hover:shadow-md transition-all z-10 relative">
                  Learn how
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-slate-500 font-medium animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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

            {/* Right Column: Workflow Animation */}
            <div className="relative flex justify-center lg:justify-end lg:pr-8 animate-fade-in-up mt-8 lg:mt-0" style={{ animationDelay: '0.5s' }}>
               <div className="relative w-full max-w-[500px] md:max-w-[600px] transform scale-90 sm:scale-100 lg:scale-110">
                  <HeroWorkflowAnimation />
               </div>
            </div>

          </div>
        
          {/* LOGO STRIP */}
          <div className="py-12 md:py-16 mt-8 md:mt-12 border-b border-slate-100 animate-fade-in" style={{ animationDelay: '0.8s' }}>
             <div className="text-center text-xs sm:text-sm font-semibold text-slate-400 mb-6 md:mb-8 uppercase tracking-widest px-4">Trusted by innovative teams</div>
             <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-20 opacity-50 grayscale transition-all hover:grayscale-0 px-4">
                 <div className="flex items-center gap-2 font-bold text-lg sm:text-xl text-slate-800"><HexagonIcon /> ACME Corp</div>
                 <div className="flex items-center gap-2 font-bold text-lg sm:text-xl text-slate-800"><TriangleIcon /> Vercel</div>
                 <div className="flex items-center gap-2 font-bold text-lg sm:text-xl text-slate-800"><CircleIcon /> Loom</div>
                 <div className="flex items-center gap-2 font-bold text-lg sm:text-xl text-slate-800"><SquareIcon /> Raycast</div>
                 <div className="flex items-center gap-2 font-bold text-lg sm:text-xl text-slate-800"><DiamondIcon /> Linear</div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. ROI STATS SECTION */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            
            {/* Left Card: Calendar Booking */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3 md:mb-4">
                Calendar Booking on Autopilot
              </h3>
              <p className="text-base sm:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
                Schedules meetings the moment a lead qualifies—often while your team sleeps. Our AI books 5x more demos without human back-and-forth and drops them straight into your calendar.
              </p>
              
              {/* Visual: 5x Badge with Calendar Interface */}
              <div className="relative mt-8 bg-gradient-to-br from-brand-50 to-white rounded-2xl p-6 border border-brand-100">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center text-white text-2xl font-display font-bold shadow-xl shadow-brand-500/30 z-10">
                  5x
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border border-slate-100 mt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                    <div className="w-10 h-10 rounded-full bg-slate-300 -ml-2"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-slate-200 rounded w-24 mb-2"></div>
                      <div className="h-2 bg-slate-100 rounded w-16"></div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">9:30 am</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <div className="px-3 py-1 bg-slate-50 rounded text-xs text-slate-600 font-medium">Agenda</div>
                    <div className="px-3 py-1 bg-slate-50 rounded text-xs text-slate-600 font-medium">KPI</div>
                    <div className="px-3 py-1 bg-slate-50 rounded text-xs text-slate-600 font-medium">QnA</div>
                  </div>
                  <div className="mt-3 text-xs text-slate-500 font-medium">30 Min Meeting</div>
                </div>
              </div>
            </div>

            {/* Right Card: Scale */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-slate-100 shadow-xl hover:shadow-2xl transition-shadow">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 mb-3 md:mb-4">
                Scale That Humans Can't Match
              </h3>
              <p className="text-base sm:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
                Over one million personalized touches every month—Keidra engages prospects at machine speed while your team focuses on closing.
              </p>
              
              {/* Visual: >1M Badge with Network */}
              <div className="relative mt-8 bg-gradient-to-br from-brand-50 to-white rounded-2xl p-6 border border-brand-100 flex items-center justify-center min-h-[200px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full flex items-center justify-center text-white text-xl font-display font-bold shadow-xl shadow-brand-500/30 z-10">
                  &gt;1M
                </div>
                {/* Network of profile circles */}
                <div className="relative w-full h-full">
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const radius = 60;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    return (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white shadow-md"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. AUTOMATED WORKFLOWS (NEW SECTION) */}
      <section className="py-16 md:py-24 bg-[#fafafa] relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">
            
            {/* Left Copy */}
            <div className="lg:w-5/12 w-full">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-wide uppercase mb-4 md:mb-6">
                 <Zap size={14} /> Automated Workflows
               </div>
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                  Workflows That Think for You
               </h2>
               <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
                  Build intelligent automation chains that adapt to your business logic. Connect triggers, conditions, and actions in minutes—no coding required. Your workflows learn and improve over time.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <Button variant="gradient" size="lg" className="shadow-lg shadow-brand-500/20 w-full sm:w-auto" onClick={() => navigate('/auth/sso')}>
                    Build your workflow
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
      <section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-slate-100">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
               <div className="lg:w-5/12 w-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-wide uppercase mb-4 md:mb-6">
                    <Zap size={14} /> Seamless Integrations
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                     Connect Everything, Automate Anything
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8">
                     Sync data across 200+ tools instantly. When something happens in Slack, update your CRM, send an email, and create a task—all automatically. Your entire tech stack works as one system.
                  </p>
                  <Button variant="gradient" size="lg" className="shadow-lg shadow-brand-500/20 w-full sm:w-auto" onClick={() => navigate('/auth/sso')}>
                     Explore integrations
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

      {/* 4. CASE STUDIES SECTION */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-3 md:mb-4">
                Case Studies
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl">
                See how real teams are transforming their sales and operations. From startups to enterprises, discover the results our customers are achieving.
              </p>
            </div>
            <Button variant="outline" size="lg" className="whitespace-nowrap w-full sm:w-auto mt-4 md:mt-0">
              See all case studies <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>

          {/* Case Study Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${caseStudyIndex * 100}%)` }}
              >
                {caseStudies.map((study, idx) => (
                  <div key={idx} className="min-w-full flex flex-col md:flex-row">
                    {/* Left: Image */}
                    <div className="md:w-2/5 bg-gradient-to-br from-brand-50 to-white p-6 md:p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                      <div className="relative w-full max-w-[300px] md:max-w-[350px] aspect-[3/4]">
                        <img 
                          src={study.image} 
                          alt={`${study.name}, ${study.title}`}
                          className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback if image doesn't load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-2xl pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="md:w-3/5 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-4 md:mb-6">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 mb-1 md:mb-2">
                          {study.name}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-500 font-medium">{study.title}</p>
                      </div>

                      <blockquote className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-6 md:mb-8 italic">
                        "{study.quote}"
                      </blockquote>

                      <div className="flex flex-wrap gap-4 md:gap-6 mb-6">
                        {study.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="flex flex-col">
                            <span className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-600 mb-1">
                              {metric.label}
                            </span>
                            <span className="text-xs sm:text-sm text-slate-600">{metric.desc}</span>
                          </div>
                        ))}
                      </div>

                      <Button variant="secondary" size="md" className="self-start w-full sm:w-auto">
                        See {study.name.split(' ')[0]}'s Story <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCaseStudyIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === caseStudyIndex 
                      ? 'bg-brand-500 w-8' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to case study ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCaseStudyIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors z-10"
              aria-label="Previous case study"
            >
              <ChevronLeft size={18} className="text-slate-600" />
            </button>
            <button
              onClick={() => setCaseStudyIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors z-10"
              aria-label="Next case study"
            >
              <ChevronRight size={18} className="text-slate-600" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. COMPARISON SECTION (DARK MODE) */}
      <section className="py-16 md:py-24 bg-[#1a1825] text-white relative overflow-hidden">
         {/* Glow effects */}
         <div className="absolute top-0 left-1/4 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-brand-500/10 rounded-full blur-[100px]" />
         <div className="absolute bottom-0 right-1/4 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-accent-500/10 rounded-full blur-[100px]" />

         <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 md:mb-16">
               <div className="inline-flex items-center gap-2 text-brand-300 font-bold text-sm tracking-wider uppercase mb-4">
                  <Zap size={14} /> Stay ahead with automation
               </div>
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 md:mb-6">
                  Your competitors are <br className="hidden sm:block"/> automating for a reason
               </h2>
               <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg px-4">
                  Stop wrestling with spreadsheets and manual processes. See how teams like yours are reclaiming 20+ hours per week by letting automation handle the repetitive work.
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

                  {/* Without Keidra Column */}
                  <div className="flex flex-col gap-6 py-8 md:border-t md:border-white/10 text-center md:text-left">
                     <div className="text-lg font-bold text-slate-300 mb-4 md:mb-0 text-center">Without Keidra</div>
                     {/* Mobile Labels included for responsiveness */}
                     <div className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1"><span className="md:hidden text-xs text-slate-500">Task Completion</span><span className="text-slate-300 font-medium">Several days</span></div>
                     <div className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1"><span className="md:hidden text-xs text-slate-500">Error Rate</span><span className="text-slate-300 font-medium">Frequent</span></div>
                     <div className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1"><span className="md:hidden text-xs text-slate-500">Data Visibility</span><span className="text-slate-300 font-medium">Fragmented</span></div>
                     <div className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1"><span className="md:hidden text-xs text-slate-500">Collaboration</span><span className="text-slate-300 font-medium">Disconnected</span></div>
                     <div className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1"><span className="md:hidden text-xs text-slate-500">Automation</span><span className="text-slate-500"><XIcon size={20}/></span></div>
                     <div className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1"><span className="md:hidden text-xs text-slate-500">Onboarding</span><span className="text-slate-300 font-medium">Weeks to Months</span></div>
                     <div className="h-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-1"><span className="md:hidden text-xs text-slate-500">Scalability</span><span className="text-slate-500"><XIcon size={20}/></span></div>
                  </div>

                  {/* With Keidra Column (Highlighted) */}
                  <div className="relative bg-[#252238] rounded-2xl border border-brand-500/30 p-8 shadow-2xl shadow-brand-900/50 overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-accent-500"></div>
                     <div className="flex flex-col gap-6 text-center">
                        <div className="text-lg font-bold text-white mb-4 md:mb-0 flex items-center justify-center gap-2"><Zap size={16} className="text-brand-400 fill-brand-400"/> With Keidra</div>
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

      {/* 6. STEPS SECTION */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
         <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold tracking-wide uppercase mb-4 md:mb-6 shadow-sm">
                  <CheckCircle2 size={14} className="text-brand-500" /> How it works
               </div>
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900">
                  3 simple steps to <br className="hidden sm:block"/> effortless efficiency
               </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
               {[
                  { step: 1, title: "Sign up", desc: "Get started in under 5 minutes. No credit card required. Your team gets instant access to the platform." },
                  { step: 2, title: "Connect your stack", desc: "Link your CRM, email, calendar, and other tools. Our connectors handle the heavy lifting—no API keys or coding required." },
                  { step: 3, title: "Watch it work", desc: "Set your first automation and see results within hours. Your workflows run 24/7, even when you're offline." },
               ].map((item, i) => (
                  <div key={i} className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-500/10 transition-shadow">
                     <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br from-brand-100 to-white border border-brand-100 text-brand-600 flex items-center justify-center text-xl md:text-2xl font-bold mb-4 md:mb-6 shadow-inner">
                        {item.step}
                     </div>
                     <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{item.title}</h3>
                     <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                        {item.desc}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. REQUEST DEMO FORM */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
         <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-8 md:mb-12">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-wide uppercase mb-4 md:mb-6">
                  <Zap size={14} /> Request a Demo
               </div>
               <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 md:mb-6">
                  See it in action
               </h2>
               <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
                  Book a 15-minute walkthrough. We'll show you exactly how teams are saving 20+ hours per week and closing more deals with automated workflows.
               </p>
            </div>

            <div className="max-w-2xl mx-auto bg-brand-50/50 p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-[2rem] border border-brand-100/50 shadow-2xl">
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
                     Book my demo
                  </Button>
               </form>
            </div>
         </div>
      </section>

      {/* 8. ANALYTICS SECTION (Refined) */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
           <div className="flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-16">
              <div className="lg:w-1/2 w-full">
                 <div className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm tracking-wider uppercase mb-3 md:mb-4">
                    <Zap size={16} /> Real-time Analytics
                 </div>
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
                    Real-time insights,<br className="hidden sm:block"/> zero guesswork
                 </h2>
                 <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8 max-w-lg">
                    See exactly what's working and what's not. Our dashboards show you pipeline health, response rates, and conversion metrics in real-time—no more waiting for weekly reports.
                 </p>
                 <Button variant="gradient" size="lg" className="w-full sm:w-auto px-6 md:px-8 shadow-xl shadow-brand-500/20" onClick={() => navigate('/auth/sso')}>
                    See it in action
                 </Button>
              </div>

              <div className="lg:w-1/2 relative w-full">
                 {/* Visual recreation of image 4 (Charts) */}
                 <div className="relative w-full max-w-lg mx-auto">
                    {/* Main Chart Card */}
                    <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-100 relative z-10">
                       <div className="mb-6 md:mb-8">
                          <div className="text-base md:text-lg font-semibold text-slate-500">Performance dashboard</div>
                          <div className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 tracking-tight">98% efficiency</div>
                       </div>
                       <div className="h-40 md:h-48 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                             <BarChart data={[
                               {name: 'Mon', uv: 40}, {name: 'Tue', uv: 30}, {name: 'Wed', uv: 60}, 
                               {name: 'Thu', uv: 90}, {name: 'Fri', uv: 20}, {name: 'Sat', uv: 50}
                             ]}>
                                <Bar dataKey="uv" fill="#a8a8ff" radius={[4, 4, 0, 0]} />
                                {/* Highlight Thursday */}
                                <Bar dataKey="uv" fill="#3d06f8" radius={[4, 4, 0, 0]} />
                             </BarChart>
                          </ResponsiveContainer>
                       </div>
                       <div className="flex justify-between text-xs text-slate-400 mt-4 px-2 font-medium">
                          <span>Mon</span><span>Tue</span><span>Wed</span><span className="font-bold text-brand-600">Thu</span><span>Fri</span><span>Sat</span>
                       </div>
                    </div>

                    {/* Floating Heatmap Card (Fixed overlap) */}
                    <div className="absolute -left-8 md:-left-12 top-8 md:top-10 bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-xl border border-slate-100 z-20 w-40 md:w-48 rotate-[-6deg] hidden sm:block">
                       <div className="grid grid-cols-6 gap-2">
                          {[...Array(24)].map((_, i) => (
                             <div key={i} className={`w-full pt-[100%] rounded-md ${[1,4,5,8,12,15,19,20].includes(i) ? 'bg-brand-500' : 'bg-brand-100'}`}></div>
                          ))}
                       </div>
                    </div>

                    {/* Floating Curve Card */}
                    <div className="absolute -right-4 md:-right-8 -bottom-8 md:-bottom-12 bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-xl border border-slate-100 z-20 w-48 md:w-64 h-32 md:h-40 transform rotate-2 hidden sm:block">
                       <div className="h-full w-full">
                          <ResponsiveContainer width="100%" height="100%">
                             <AreaChart data={[
                               {name: 'A', v: 10}, {name: 'B', v: 30}, {name: 'C', v: 20}, 
                               {name: 'D', v: 50}, {name: 'E', v: 40}, {name: 'F', v: 60}
                             ]}>
                                <Area type="monotone" dataKey="v" stroke="#3d06f8" strokeWidth={3} fill="#e0e0ff" />
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
