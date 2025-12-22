import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Play, Save, Plus, ArrowLeft, Mail, MessageSquare, Database, Bot, 
  Trash2, Copy, X, CheckCircle2, ChevronDown, Zap, LayoutTemplate, Link2 
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { getTranslation } from '../../i18n';
import { Language } from '../../types';

interface AgentBuilderProps {
  lang: Language;
}

// Node Type Definition
type NodeType = {
  id: string;
  type: 'trigger' | 'logic' | 'action' | 'condition';
  title: string;
  subtitle: string;
  icon: any;
  x: number;
  y: number;
  parentId?: string[]; // For drawing lines
};

export const AgentBuilder: React.FC<AgentBuilderProps> = ({ lang }) => {
  const t = (key: string) => getTranslation(key, lang);
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Animation Styles
  const animationStyles = `
    @keyframes dash-flow {
      0% { stroke-dashoffset: 24; }
      100% { stroke-dashoffset: 0; }
    }
    .animate-flow-line {
      animation: dash-flow 1s linear infinite;
    }
    .node-selected {
      box-shadow: 0 0 0 2px #fff, 0 0 0 5px #8b5cf6, 0 10px 25px -5px rgba(139, 92, 246, 0.4);
      border-color: #7c3aed;
      transform: translate(-50%, -4px);
    }
  `;
  
  // Initial Nodes Data
  const initialNodes: NodeType[] = [
    { id: 'node-1', type: 'trigger', title: 'New Intercom message', subtitle: 'trigger', icon: LayoutTemplate, x: 400, y: 40 },
    { id: 'node-2', type: 'logic', title: 'Check if existing contact?', subtitle: 'branch-1', icon: Bot, x: 400, y: 180, parentId: ['node-1'] },
    // Condition is visual-only in this demo data structure, handled separately or as a label
    { id: 'node-3', type: 'action', title: 'Message sales', subtitle: '#new-leads', icon: MessageSquare, x: 220, y: 400, parentId: ['node-2'] },
    { id: 'node-4', type: 'action', title: 'Create CRM record', subtitle: 'notion-2', icon: Database, x: 580, y: 400, parentId: ['node-2'] },
  ];

  // States
  const [viewState, setViewState] = useState<'empty' | 'generated'>(
    searchParams.get('state') === 'generated' ? 'generated' : 
    searchParams.get('state') === 'empty' ? 'empty' : 'generated'
  );
  
  const [nodes, setNodes] = useState<NodeType[]>(initialNodes);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [showToast, setShowToast] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  const [showTestModal, setShowTestModal] = useState(false);
  const [showAddMenu, setShowAddMenu] = useState(false);

  // Auto-dismiss toast
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Sync URL params
  useEffect(() => {
    const state = searchParams.get('state');
    if (state === 'generated' || state === 'empty') {
      setViewState(state);
      if (state === 'empty') {
         setNodes([]);
      } else {
         setNodes(initialNodes);
      }
    }
  }, [searchParams]);

  // Actions
  const handleSave = () => {
    setShowToast({ message: t('builder.saved_toast'), type: 'success' });
  };

  const handleTestRun = () => {
    setShowTestModal(true);
    // Simulate run
    setTimeout(() => {
      setShowTestModal(false);
      setShowToast({ message: "Run completed successfully", type: 'success' });
      if (viewState === 'empty') {
         setViewState('generated');
         setSearchParams({ state: 'generated' });
         setNodes(initialNodes);
      }
    }, 2500);
  };

  const handleGenerate = () => {
     setViewState('generated');
     setSearchParams({ state: 'generated' });
     setNodes(initialNodes);
     setShowToast({ message: t('builder.generated_toast'), type: 'success' });
  };

  // Add Node Logic
  const handleAddNode = (type: 'trigger' | 'action' | 'logic') => {
    const maxY = Math.max(...nodes.map(n => n.y), 0);
    const newY = maxY + 140; // Add below the lowest node
    
    // Determine parent(s) - basically the lowest nodes
    // For demo simplicity, if we have the split branches, we connect to both (merge)
    // If not, we connect to the last one.
    const lowestNodes = nodes.filter(n => n.y === maxY);
    const parentIds = lowestNodes.map(n => n.id);

    const newNode: NodeType = {
      id: `node-${nodes.length + 1}`,
      type: type,
      title: type === 'action' ? 'New Action' : type === 'logic' ? 'New Logic' : 'New Trigger',
      subtitle: 'Draft',
      icon: type === 'action' ? Zap : type === 'logic' ? Bot : LayoutTemplate,
      x: 400, // Center it
      y: newY,
      parentId: parentIds
    };

    setNodes([...nodes, newNode]);
    setShowAddMenu(false);
    
    // Scroll to bottom
    setTimeout(() => {
       const container = document.getElementById('canvas-container');
       if (container) container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  // Calculate dynamic height for Add Button position
  const maxNodeY = nodes.length > 0 ? Math.max(...nodes.map(n => n.y)) : 0;
  const addButtonY = viewState === 'generated' ? Math.max(520, maxNodeY + 120) : 400;

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      <style>{animationStyles}</style>

      {/* 1. TOP BAR */}
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shadow-sm z-30 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-brand-50 text-brand-600 rounded-lg">
             <Bot size={20} />
          </div>
          <div>
             <div className="flex items-center gap-2">
               <h1 className="text-sm font-bold text-slate-900">{t('builder.title')}</h1>
               <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 uppercase">Draft</span>
             </div>
             <div className="text-xs text-slate-400">Last saved 14:02</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
           <Button variant="ghost" size="sm" onClick={handleSave} className="text-slate-500 font-medium hover:text-slate-900">
             {t('builder.save')}
           </Button>
           <Button variant="primary" size="sm" onClick={handleTestRun} className="bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-500/20 pl-3 pr-4">
             <Play size={16} className="mr-2 fill-current" /> {t('builder.test_run')}
           </Button>
        </div>
      </header>

      {/* 2. CANVAS AREA */}
      <div className="flex-1 relative overflow-hidden flex flex-col">
         {/* Background Grid Pattern */}
         <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
         
         {/* TOAST NOTIFICATION */}
         {showToast && (
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
               <div className="bg-slate-900 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 pr-4">
                  <div className="bg-emerald-500 rounded-full p-0.5"><CheckCircle2 size={14} className="text-white"/></div>
                  <span className="text-sm font-medium">{showToast.message}</span>
                  <button onClick={() => setShowToast(null)} className="ml-2 text-slate-500 hover:text-white"><X size={14}/></button>
               </div>
            </div>
         )}

         {/* EMPTY STATE */}
         {viewState === 'empty' && (
            <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
               <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200 max-w-lg text-center">
                  <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                     <Zap size={32} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{t('builder.empty.title')}</h2>
                  <p className="text-slate-500 mb-8 leading-relaxed">{t('builder.empty.subtitle')}</p>
                  <Button variant="gradient" size="lg" onClick={handleGenerate} icon={<Bot size={18} />}>
                     {t('builder.empty.cta')}
                  </Button>
               </div>
            </div>
         )}

         {/* BUILDER CANVAS */}
         <div 
           id="canvas-container"
           className={`flex-1 overflow-auto relative ${viewState === 'empty' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
           onClick={() => setSelectedNode(null)}
         >
            <div className="min-w-[800px] min-h-[1000px] relative w-full h-full pb-32" onClick={(e) => e.stopPropagation()}>
               
               {/* SVG CONNECTORS LAYER */}
               <svg className="absolute inset-0 pointer-events-none w-full h-full overflow-visible z-0">
                  <defs>
                     <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#cbd5e1" />
                        <stop offset="100%" stopColor="#94a3b8" />
                     </linearGradient>
                  </defs>
                  
                  {/* Base Structure Connectors (Static for the demo core) */}
                  {nodes.some(n => n.id === 'node-1') && nodes.some(n => n.id === 'node-2') && (
                     <path d="M 400 80 L 400 180" stroke="#cbd5e1" strokeWidth="2" fill="none" className="animate-flow-line" strokeDasharray="12 12" />
                  )}
                  {nodes.some(n => n.id === 'node-2') && (
                     <path d="M 400 240 L 400 300" stroke="#cbd5e1" strokeWidth="2" fill="none" className="animate-flow-line" strokeDasharray="12 12" />
                  )}
                  {nodes.some(n => n.id === 'node-3') && (
                     <path d="M 400 320 L 400 350 L 220 350 L 220 400" stroke="#cbd5e1" strokeWidth="2" fill="none" strokeLinejoin="round" className="animate-flow-line" strokeDasharray="12 12" />
                  )}
                  {nodes.some(n => n.id === 'node-4') && (
                     <path d="M 400 320 L 400 350 L 580 350 L 580 400" stroke="#cbd5e1" strokeWidth="2" fill="none" strokeLinejoin="round" className="animate-flow-line" strokeDasharray="12 12" />
                  )}

                  {/* Dynamic Connectors for Added Nodes */}
                  {nodes.filter(n => parseInt(n.id.split('-')[1]) > 4).map(node => {
                     // Find parent coordinates
                     const parents = nodes.filter(p => node.parentId?.includes(p.id));
                     return parents.map(parent => {
                        // Calculate entry/exit points
                        const startX = parent.x;
                        const startY = parent.y + 40; // Bottom of parent (roughly)
                        const endX = node.x;
                        const endY = node.y - 40; // Top of node

                        // Simple Bezier or Elbow
                        const path = `M ${startX} ${startY} C ${startX} ${startY + 50}, ${endX} ${endY - 50}, ${endX} ${endY}`;
                        
                        return (
                           <path 
                              key={`${parent.id}-${node.id}`}
                              d={path} 
                              stroke="#cbd5e1" 
                              strokeWidth="2" 
                              fill="none" 
                              strokeLinejoin="round"
                              className="animate-flow-line" 
                              strokeDasharray="12 12"
                           />
                        );
                     });
                  })}
               </svg>

               {/* NODES RENDER */}
               {nodes.map(node => (
                  <NodeCard
                     key={node.id}
                     {...node}
                     selected={selectedNode === node.id}
                     onClick={() => setSelectedNode(node.id)}
                  />
               ))}

               {/* Condition Chip (Static for demo) */}
               {nodes.some(n => n.id === 'node-3') && (
                 <div 
                     className="absolute top-[300px] left-1/2 -translate-x-1/2 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm text-xs font-bold text-slate-500 z-10 hover:border-brand-300 hover:text-brand-600 cursor-pointer transition-colors"
                     onClick={(e) => { e.stopPropagation(); setSelectedNode('cond-1'); }}
                  >
                     Score {'>'} 80?
                  </div>
               )}

               {/* ADD BUTTON */}
               <div 
                  className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 z-20"
                  style={{ top: addButtonY }}
               >
                  <button 
                     onClick={(e) => { e.stopPropagation(); setShowAddMenu(!showAddMenu); }}
                     className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                        showAddMenu 
                          ? 'bg-brand-600 text-white rotate-45 scale-110' 
                          : 'bg-white text-brand-600 hover:scale-110 hover:shadow-brand-500/20'
                     }`}
                  >
                     <Plus size={24} strokeWidth={3} />
                  </button>
                  
                  {/* Add Menu Overlay */}
                  {showAddMenu && (
                     <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 flex flex-col gap-1 animate-fade-in-up origin-bottom z-50">
                        <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-50 mb-1">Add Node</div>
                        <AddMenuItem icon={LayoutTemplate} label="Trigger" color="text-amber-600 bg-amber-50" onClick={() => handleAddNode('trigger')} />
                        <AddMenuItem icon={Bot} label="AI Action" color="text-brand-600 bg-brand-50" onClick={() => handleAddNode('logic')} />
                        <AddMenuItem icon={Database} label="Integration" color="text-emerald-600 bg-emerald-50" onClick={() => handleAddNode('action')} />
                     </div>
                  )}
               </div>

            </div>
         </div>
      </div>

      {/* 3. INSPECTOR DRAWER (Overlay) */}
      <div 
         className={`fixed top-16 right-0 bottom-0 w-80 bg-white border-l border-slate-200 shadow-2xl transform transition-transform duration-300 z-40 flex flex-col ${selectedNode ? 'translate-x-0' : 'translate-x-full'}`}
      >
         <div className="h-14 border-b border-slate-100 flex items-center justify-between px-6 bg-slate-50/50">
            <span className="font-bold text-slate-700 text-sm">{t('builder.inspector.title')}</span>
            <button onClick={() => setSelectedNode(null)} className="text-slate-400 hover:text-slate-600">
               <X size={18} />
            </button>
         </div>
         <div className="p-6 flex-1 overflow-y-auto space-y-6">
            <div className="space-y-2">
               <label className="text-xs font-bold text-slate-500 uppercase">{t('builder.inspector.node_name')}</label>
               <input type="text" defaultValue={selectedNode ? nodes.find(n => n.id === selectedNode)?.title || 'Selected Node' : ''} className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none" />
            </div>
            
            <div className="space-y-2">
               <label className="text-xs font-bold text-slate-500 uppercase">{t('builder.inspector.model')}</label>
               <div className="relative">
                  <select className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-900 appearance-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none">
                     <option>GPT-4o (Recommended)</option>
                     <option>Claude 3.5 Sonnet</option>
                     <option>Gemini Pro</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
               </div>
            </div>

            <div className="space-y-2">
               <label className="text-xs font-bold text-slate-500 uppercase">Description</label>
               <textarea className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 h-24 resize-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none" defaultValue="Configure the specific parameters for this step in the workflow." />
            </div>
         </div>
         <div className="p-4 border-t border-slate-100 grid grid-cols-2 gap-3 bg-slate-50">
             <button className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <Copy size={14} /> {t('builder.inspector.duplicate')}
             </button>
             <button className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-red-100 bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition-colors">
                <Trash2 size={14} /> {t('builder.inspector.delete')}
             </button>
         </div>
      </div>

      {/* 4. TEST RUN MODAL */}
      {showTestModal && (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md m-4">
               <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                     <div className="absolute inset-0 border-4 border-brand-100 rounded-full border-t-brand-500 animate-spin"></div>
                     <Bot className="text-brand-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Running Simulation...</h3>
                  <p className="text-slate-500 mt-2">Processing triggers and evaluating logic branches.</p>
               </div>
               <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-medium text-emerald-600">
                     <CheckCircle2 size={16} /> Trigger received
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-emerald-600">
                     <CheckCircle2 size={16} /> Context analyzed
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium text-slate-400">
                     <div className="w-4 h-4 rounded-full border-2 border-slate-200 border-t-slate-400 animate-spin"></div>
                     Executing actions...
                  </div>
               </div>
            </div>
         </div>
      )}
    </div>
  );
};

// --- Helper Components ---

const NodeCard = ({ id, type, title, subtitle, icon: Icon, x, y, selected, onClick }: any) => {
   // Styling based on type (Keidra palette)
   const styles = {
      trigger: 'bg-amber-50 border-amber-200 text-amber-900',
      logic: 'bg-brand-50 border-brand-200 text-brand-900',
      action: 'bg-emerald-50 border-emerald-200 text-emerald-900'
   }[type as string] || 'bg-white border-slate-200 text-slate-900';

   const iconStyles = {
      trigger: 'bg-amber-100 text-amber-700',
      logic: 'bg-brand-100 text-brand-700',
      action: 'bg-emerald-100 text-emerald-700'
   }[type as string] || 'bg-slate-100 text-slate-600';

   // Selected state classes applied via conditional + css class
   const selectedClass = selected ? 'node-selected z-20' : 'hover:border-brand-300 hover:shadow-lg hover:-translate-y-1';

   return (
      <div 
         className={`absolute flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 cursor-pointer shadow-sm w-[280px] z-10 ${styles} ${selectedClass}`}
         style={{ left: x, top: y, transform: selected ? 'translate(-50%, -4px)' : 'translate(-50%, 0)' }}
         onClick={(e) => { e.stopPropagation(); onClick(); }}
      >
         <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconStyles}`}>
            <Icon size={24} strokeWidth={1.5} />
         </div>
         <div className="min-w-0">
            <div className="font-bold text-sm truncate">{title}</div>
            <div className="text-xs opacity-70 font-bold uppercase tracking-wide mt-0.5">{subtitle}</div>
         </div>
         {selected && (
            <div className="absolute -right-2 -top-2 w-6 h-6 bg-brand-600 rounded-full text-white flex items-center justify-center shadow-md ring-2 ring-white">
               <CheckCircle2 size={14} strokeWidth={3} />
            </div>
         )}
      </div>
   );
}

const AddMenuItem = ({ icon: Icon, label, color, onClick }: any) => (
   <button onClick={onClick} className="flex items-center gap-3 w-full px-3 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors group">
      <div className={`p-1.5 rounded-lg ${color} group-hover:scale-110 transition-transform`}>
         <Icon size={16} />
      </div>
      {label}
   </button>
)
