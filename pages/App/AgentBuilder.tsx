import React, { useState, useEffect } from 'react';
import { Mail, Search, MessageSquare, Database, Plus, Play, Save, CheckCircle2, X } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { getTranslation } from '../../i18n';
import { Language, WorkflowNode } from '../../types';
import { useLocation } from 'react-router-dom';

interface AgentBuilderProps {
  lang: Language;
}

export const AgentBuilder: React.FC<AgentBuilderProps> = ({ lang }) => {
  const t = (key: string) => getTranslation(key, lang);
  const location = useLocation();
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Simulated initial nodes
  const [nodes] = useState<WorkflowNode[]>([
    { id: '1', type: 'trigger', label: 'builder.node.trigger', x: 50, y: 50 },
    { id: '2', type: 'ai', label: 'builder.node.analyze', x: 50, y: 180 },
    { id: '3', type: 'condition', label: 'Score > 80?', x: 50, y: 310 },
    { id: '4', type: 'action', label: 'builder.node.action', x: 200, y: 420 },
    { id: '5', type: 'action', label: 'builder.node.reply', x: -100, y: 420 },
  ]);

  useEffect(() => {
    // Check for generated flag
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('generated') === 'true') {
      setShowSuccess(true);
      // Auto-dismiss after 5 seconds
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const getNodeIcon = (type: string) => {
    switch(type) {
      case 'trigger': return <Mail size={16} />;
      case 'ai': return <Search size={16} />;
      case 'action': return <Database size={16} />;
      case 'condition': return <div className="text-xs font-bold">?</div>;
      default: return <MessageSquare size={16} />;
    }
  };

  const getNodeColor = (type: string) => {
     switch(type) {
      case 'trigger': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'ai': return 'bg-brand-100 text-brand-700 border-brand-200';
      case 'action': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'condition': return 'bg-slate-100 text-slate-700 border-slate-200';
      default: return 'bg-white';
    }
  };

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col relative">
      
      {/* Success Toast */}
      {showSuccess && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-fade-in-up">
           <div className="bg-emerald-500 rounded-full p-0.5"><CheckCircle2 size={16} /></div>
           <span className="font-medium">{t('builder.success_toast')}</span>
           <button onClick={() => setShowSuccess(false)} className="ml-2 text-slate-400 hover:text-white"><X size={14}/></button>
        </div>
      )}

      {/* Builder Toolbar */}
      <div className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shadow-sm z-10">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-brand-50 text-brand-600 rounded-lg">
            <MessageSquare size={20} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">{t('builder.title')}</h2>
            <div className="text-xs text-slate-500">Last saved 14:02</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
           <Button variant="ghost" size="sm">
              <Save className="w-4 h-4 mr-2"/> Save
           </Button>
           <Button size="sm">
              <Play className="w-4 h-4 mr-2"/> Test Run
           </Button>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 bg-slate-50 relative overflow-hidden bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px]">
        <div className="absolute inset-0 flex items-center justify-center p-10 overflow-auto">
           <div className="relative w-full h-full max-w-3xl mx-auto mt-20">
              
              {/* Draw connections (static svg for demo) */}
              <svg className="absolute inset-0 pointer-events-none w-full h-full overflow-visible">
                 <path d="M 150 90 L 150 180" stroke="#cbd5e1" strokeWidth="2" fill="none" />
                 <path d="M 150 220 L 150 310" stroke="#cbd5e1" strokeWidth="2" fill="none" />
                 <path d="M 150 350 L 150 380 L 0 380 L 0 420" stroke="#cbd5e1" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                 <path d="M 150 350 L 150 380 L 300 380 L 300 420" stroke="#cbd5e1" strokeWidth="2" fill="none" />
              </svg>

              {nodes.map((node) => (
                <div
                  key={node.id}
                  className={`absolute w-48 p-3 rounded-xl border shadow-sm flex items-center gap-3 cursor-move hover:shadow-md transition-shadow ${getNodeColor(node.type)}`}
                  style={{
                    left: `calc(50% + ${node.x}px)`,
                    top: `${node.y}px`,
                    transform: 'translateX(-50%)'
                  }}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/50 flex items-center justify-center flex-shrink-0">
                     {getNodeIcon(node.type)}
                  </div>
                  <div className="text-sm font-medium leading-tight">{t(node.label)}</div>
                </div>
              ))}

              {/* Add Node Button Placeholder */}
              <div 
                className="absolute top-[520px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center cursor-pointer hover:bg-brand-500 hover:text-white transition-colors"
              >
                <Plus size={16} />
              </div>

           </div>
        </div>
      </div>
    </div>
  );
};