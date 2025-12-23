import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Play, Save, Plus, ArrowLeft, Mail, MessageSquare, Database, Bot, 
  Trash2, Copy, X, CheckCircle2, ChevronDown, Zap, LayoutTemplate, Link2,
  Send, Calendar, FileText, DollarSign, UserCheck, AlertCircle, CheckCircle, Tag
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
  
  // Workflow Templates with Varied Layouts
  
  // 1. Simple Linear (3 nodes) - All green actions in a straight line
  const getSimpleLinearWorkflow = (): NodeType[] => [
    { id: 'node-1', type: 'trigger', title: 'New form submission', subtitle: 'trigger', icon: FileText, x: 400, y: 40 },
    { id: 'node-2', type: 'action', title: 'Send confirmation email', subtitle: 'email-1', icon: Mail, x: 400, y: 200, parentId: ['node-1'] },
    { id: 'node-3', type: 'action', title: 'Add to database', subtitle: 'db-2', icon: Database, x: 400, y: 360, parentId: ['node-2'] },
  ];

  // 2. Branched Sales (4 nodes) - Classic 2-way branch
  const getBranchedSalesWorkflow = (): NodeType[] => [
    { id: 'node-1', type: 'trigger', title: 'Typeform submission', subtitle: 'trigger', icon: FileText, x: 400, y: 40 },
    { id: 'node-2', type: 'logic', title: 'Check lead score', subtitle: 'branch-1', icon: Bot, x: 400, y: 180, parentId: ['node-1'] },
    { id: 'node-3', type: 'action', title: 'Notify sales team', subtitle: 'slack-1', icon: MessageSquare, x: 180, y: 400, parentId: ['node-2'] },
    { id: 'node-4', type: 'action', title: 'Add to CRM', subtitle: 'hubspot-2', icon: Database, x: 620, y: 400, parentId: ['node-2'] },
  ];

  // 3. 3-Way Split (5 nodes) - One trigger → logic → three parallel actions
  const getThreeWaySplitWorkflow = (): NodeType[] => [
    { id: 'node-1', type: 'trigger', title: 'New customer signup', subtitle: 'trigger', icon: UserCheck, x: 400, y: 40 },
    { id: 'node-2', type: 'logic', title: 'Check plan type', subtitle: 'branch-1', icon: Bot, x: 400, y: 180, parentId: ['node-1'] },
    { id: 'node-3', type: 'action', title: 'Schedule onboarding', subtitle: 'calendly-1', icon: Calendar, x: 100, y: 400, parentId: ['node-2'] },
    { id: 'node-4', type: 'action', title: 'Send welcome email', subtitle: 'email-2', icon: Mail, x: 400, y: 400, parentId: ['node-2'] },
    { id: 'node-5', type: 'action', title: 'Create account', subtitle: 'db-3', icon: Database, x: 700, y: 400, parentId: ['node-2'] },
  ];

  // 4. Deep Chain (5 nodes) - Sequential with logic in middle
  const getDeepChainWorkflow = (): NodeType[] => [
    { id: 'node-1', type: 'trigger', title: 'Invoice received', subtitle: 'trigger', icon: FileText, x: 400, y: 40 },
    { id: 'node-2', type: 'action', title: 'Extract details', subtitle: 'ai-1', icon: Bot, x: 400, y: 180, parentId: ['node-1'] },
    { id: 'node-3', type: 'logic', title: 'Check amount', subtitle: 'branch-1', icon: DollarSign, x: 400, y: 320, parentId: ['node-2'] },
    { id: 'node-4', type: 'action', title: 'Approve payment', subtitle: 'quickbooks-1', icon: CheckCircle, x: 400, y: 460, parentId: ['node-3'] },
    { id: 'node-5', type: 'action', title: 'Send receipt', subtitle: 'email-2', icon: Send, x: 400, y: 600, parentId: ['node-4'] },
  ];

  // 5. Multi-Level (6 nodes) - Branch with sub-chain
  const getMultiLevelWorkflow = (): NodeType[] => [
    { id: 'node-1', type: 'trigger', title: 'Support ticket created', subtitle: 'trigger', icon: AlertCircle, x: 400, y: 40 },
    { id: 'node-2', type: 'logic', title: 'Check priority', subtitle: 'branch-1', icon: Bot, x: 400, y: 180, parentId: ['node-1'] },
    { id: 'node-3', type: 'action', title: 'Assign to team', subtitle: 'zendesk-1', icon: UserCheck, x: 180, y: 360, parentId: ['node-2'] },
    { id: 'node-4', type: 'action', title: 'Send notification', subtitle: 'slack-2', icon: MessageSquare, x: 180, y: 520, parentId: ['node-3'] },
    { id: 'node-5', type: 'action', title: 'Create follow-up', subtitle: 'asana-3', icon: CheckCircle, x: 620, y: 360, parentId: ['node-2'] },
    { id: 'node-6', type: 'action', title: 'Log in system', subtitle: 'db-4', icon: Database, x: 620, y: 520, parentId: ['node-5'] },
  ];

  // 6. Complex Parallel (7 nodes) - Multiple action chains
  const getComplexParallelWorkflow = (): NodeType[] => [
    { id: 'node-1', type: 'trigger', title: 'Landing page visit', subtitle: 'trigger', icon: LayoutTemplate, x: 400, y: 40 },
    { id: 'node-2', type: 'logic', title: 'Analyze traffic source', subtitle: 'branch-1', icon: Bot, x: 400, y: 180, parentId: ['node-1'] },
    { id: 'node-3', type: 'action', title: 'Add to campaign', subtitle: 'mailchimp-1', icon: Tag, x: 100, y: 360, parentId: ['node-2'] },
    { id: 'node-4', type: 'action', title: 'Send welcome email', subtitle: 'email-2', icon: Send, x: 100, y: 520, parentId: ['node-3'] },
    { id: 'node-5', type: 'action', title: 'Track conversion', subtitle: 'analytics-3', icon: Zap, x: 400, y: 360, parentId: ['node-2'] },
    { id: 'node-6', type: 'action', title: 'Update CRM', subtitle: 'hubspot-4', icon: Database, x: 400, y: 520, parentId: ['node-5'] },
    { id: 'node-7', type: 'action', title: 'Create task', subtitle: 'asana-5', icon: CheckCircle, x: 700, y: 360, parentId: ['node-2'] },
  ];

  // 7. Action-Heavy (4 nodes) - All green, linear
  const getActionHeavyWorkflow = (): NodeType[] => [
    { id: 'node-1', type: 'trigger', title: 'New email received', subtitle: 'trigger', icon: Mail, x: 400, y: 40 },
    { id: 'node-2', type: 'action', title: 'Analyze content', subtitle: 'ai-1', icon: Bot, x: 400, y: 200, parentId: ['node-1'] },
    { id: 'node-3', type: 'action', title: 'Categorize email', subtitle: 'gmail-2', icon: Tag, x: 400, y: 360, parentId: ['node-2'] },
    { id: 'node-4', type: 'action', title: 'Auto-respond', subtitle: 'email-3', icon: Send, x: 400, y: 520, parentId: ['node-3'] },
  ];

  // 8. Logic-Rich (5 nodes) - Alternating purple/green
  const getLogicRichWorkflow = (): NodeType[] => [
    { id: 'node-1', type: 'trigger', title: 'Payment processed', subtitle: 'trigger', icon: DollarSign, x: 400, y: 40 },
    { id: 'node-2', type: 'logic', title: 'Verify transaction', subtitle: 'branch-1', icon: Bot, x: 400, y: 180, parentId: ['node-1'] },
    { id: 'node-3', type: 'action', title: 'Update order status', subtitle: 'db-1', icon: Database, x: 400, y: 320, parentId: ['node-2'] },
    { id: 'node-4', type: 'logic', title: 'Check delivery date', subtitle: 'branch-2', icon: Calendar, x: 400, y: 460, parentId: ['node-3'] },
    { id: 'node-5', type: 'action', title: 'Send confirmation', subtitle: 'email-2', icon: Mail, x: 400, y: 600, parentId: ['node-4'] },
  ];

  // 9. Sales Outreach V2 - Specific workflow for Sales Outreach
  const getSalesOutreachV2Workflow = (): NodeType[] => [
    { id: 'node-1', type: 'trigger', title: 'New lead captured', subtitle: 'trigger', icon: UserCheck, x: 400, y: 40 },
    { id: 'node-2', type: 'logic', title: 'Qualify lead score', subtitle: 'branch-1', icon: Bot, x: 400, y: 180, parentId: ['node-1'] },
    { id: 'node-3', type: 'action', title: 'Send outreach email', subtitle: 'email-1', icon: Send, x: 150, y: 360, parentId: ['node-2'] },
    { id: 'node-4', type: 'action', title: 'Add to CRM', subtitle: 'hubspot-2', icon: Database, x: 400, y: 360, parentId: ['node-2'] },
    { id: 'node-5', type: 'action', title: 'Notify sales team', subtitle: 'slack-3', icon: MessageSquare, x: 650, y: 360, parentId: ['node-2'] },
    { id: 'node-6', type: 'action', title: 'Schedule follow-up', subtitle: 'calendly-4', icon: Calendar, x: 150, y: 520, parentId: ['node-3'] },
  ];

  // 10. Customer Support - Specific workflow for Customer Support
  const getCustomerSupportWorkflow = (): NodeType[] => [
    { id: 'node-1', type: 'trigger', title: 'Support ticket created', subtitle: 'trigger', icon: AlertCircle, x: 400, y: 40 },
    { id: 'node-2', type: 'logic', title: 'Check ticket priority', subtitle: 'branch-1', icon: Bot, x: 400, y: 180, parentId: ['node-1'] },
    { id: 'node-3', type: 'action', title: 'Assign to agent', subtitle: 'zendesk-1', icon: UserCheck, x: 150, y: 360, parentId: ['node-2'] },
    { id: 'node-4', type: 'action', title: 'Send auto-response', subtitle: 'email-2', icon: Mail, x: 400, y: 360, parentId: ['node-2'] },
    { id: 'node-5', type: 'action', title: 'Create follow-up task', subtitle: 'asana-3', icon: CheckCircle, x: 650, y: 360, parentId: ['node-2'] },
    { id: 'node-6', type: 'action', title: 'Log in system', subtitle: 'db-4', icon: Database, x: 150, y: 520, parentId: ['node-3'] },
    { id: 'node-7', type: 'action', title: 'Send notification', subtitle: 'slack-5', icon: MessageSquare, x: 400, y: 520, parentId: ['node-4'] },
  ];

  // Get workflow template based on URL parameter or random selection
  const getWorkflowTemplate = (workflowParam?: string | null): NodeType[] => {
    // If specific workflow is requested, return that
    if (workflowParam === 'sales-outreach-v2') {
      return getSalesOutreachV2Workflow();
    }
    if (workflowParam === 'customer-support') {
      return getCustomerSupportWorkflow();
    }
    
    // Otherwise, randomly select from all templates
    const templates = [
      getSimpleLinearWorkflow,        // 3 nodes - linear
      getBranchedSalesWorkflow,       // 4 nodes - 2-way branch
      getThreeWaySplitWorkflow,       // 5 nodes - 3-way split
      getDeepChainWorkflow,           // 5 nodes - deep chain
      getMultiLevelWorkflow,          // 6 nodes - multi-level
      getComplexParallelWorkflow,     // 7 nodes - complex parallel
      getActionHeavyWorkflow,         // 4 nodes - action-heavy
      getLogicRichWorkflow,           // 5 nodes - logic-rich
    ];
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    return randomTemplate();
  };

  // States
  const [viewState, setViewState] = useState<'empty' | 'generated'>(
    searchParams.get('state') === 'generated' ? 'generated' : 
    searchParams.get('state') === 'empty' ? 'empty' : 'generated'
  );
  
  const [nodes, setNodes] = useState<NodeType[]>(() => getWorkflowTemplate(searchParams.get('workflow')));
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
    const workflow = searchParams.get('workflow');
    if (state === 'generated' || state === 'empty') {
      setViewState(state);
      if (state === 'empty') {
         setNodes([]);
      } else {
         setNodes(getWorkflowTemplate(workflow));
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
         const workflow = searchParams.get('workflow');
         setSearchParams({ state: 'generated', ...(workflow ? { workflow } : {}) });
         setNodes(getWorkflowTemplate(workflow));
      }
    }, 2500);
  };

  const handleGenerate = () => {
     setViewState('generated');
     const workflow = searchParams.get('workflow');
     setSearchParams({ state: 'generated', ...(workflow ? { workflow } : {}) });
     setNodes(getWorkflowTemplate(workflow));
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
                  
                  {/* Dynamic Connectors - Calculate paths based on node positions and parent relationships */}
                  {nodes.map(node => {
                     if (!node.parentId || node.parentId.length === 0) return null;
                     
                     return node.parentId.map(parentId => {
                        const parent = nodes.find(p => p.id === parentId);
                        if (!parent) return null;

                        // Calculate entry/exit points
                        // Node cards are approximately 80px tall (40px top offset + 40px bottom offset)
                        const startX = parent.x;
                        const startY = parent.y + 80; // Bottom of parent node
                        const endX = node.x;
                        const endY = node.y; // Top of child node

                        // If nodes are aligned vertically (same X), use straight line
                        if (Math.abs(startX - endX) < 10) {
                           const path = `M ${startX} ${startY} L ${endX} ${endY}`;
                           return (
                              <path 
                                 key={`${parent.id}-${node.id}`}
                                 d={path} 
                                 stroke="#cbd5e1" 
                                 strokeWidth="2" 
                                 fill="none" 
                                 className="animate-flow-line" 
                                 strokeDasharray="12 12"
                              />
                           );
                        }

                        // For horizontal branches, use elbow connector
                        const midY = startY + (endY - startY) / 2;
                        const path = `M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${midY} L ${endX} ${endY}`;
                        
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
                  }).flat().filter(Boolean)}
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

               {/* Condition Chips - Dynamic based on logic nodes */}
               {nodes.filter(n => n.type === 'logic').map(logicNode => {
                  const children = nodes.filter(child => child.parentId?.includes(logicNode.id));
                  if (children.length === 0) return null;
                  
                  // Position chip between logic node and its children
                  const logicBottom = logicNode.y + 80;
                  const firstChildTop = Math.min(...children.map(c => c.y));
                  const chipY = logicBottom + (firstChildTop - logicBottom) / 2;
                  
                  // Determine condition text based on workflow type
                  const conditionText = logicNode.title.includes('score') ? 'Score > 80?' :
                                      logicNode.title.includes('urgency') ? 'High urgency?' :
                                      logicNode.title.includes('priority') ? 'Priority > 5?' :
                                      logicNode.title.includes('amount') ? 'Amount > $100?' :
                                      logicNode.title.includes('source') ? 'Source = paid?' :
                                      logicNode.title.includes('plan') ? 'Plan = Pro?' :
                                      logicNode.title.includes('type') ? 'Type = Premium?' :
                                      logicNode.title.includes('transaction') ? 'Valid?' :
                                      logicNode.title.includes('delivery') ? 'On time?' :
                                      logicNode.title.includes('traffic') ? 'Source = organic?' :
                                      'Condition met?';
                  
                  return (
                     <div 
                        key={`cond-${logicNode.id}`}
                        className="absolute left-1/2 -translate-x-1/2 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm text-xs font-bold text-slate-500 z-10 hover:border-brand-300 hover:text-brand-600 cursor-pointer transition-colors"
                        style={{ top: chipY }}
                        onClick={(e) => { e.stopPropagation(); setSelectedNode(`cond-${logicNode.id}`); }}
                     >
                        {conditionText}
                     </div>
                  );
               })}

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
