import { Translation, Language } from "./types";

export const translations: Translation = {
  // Navigation
  "nav.product": { ja: "Product", en: "Product" },
  "nav.features": { ja: "Features", en: "Features" },
  "nav.howItWorks": { ja: "How it works", en: "How it works" },
  "nav.testimonials": { ja: "Testimonials", en: "Testimonials" },
  "nav.faq": { ja: "FAQ", en: "FAQ" },
  "nav.pricing": { ja: "Pricing", en: "Pricing" },
  "nav.resources": { ja: "Resources", en: "Resources" },
  "nav.login": { ja: "Log in", en: "Log in" },
  "nav.getStarted": { ja: "Launch with Keido", en: "Launch with Keido" },
  "nav.dashboard": { ja: "Dashboard", en: "Dashboard" },
  "nav.agents": { ja: "Agents", en: "Agents" },
  "nav.builder": { ja: "Builder", en: "Builder" },
  "nav.settings": { ja: "Settings", en: "Settings" },
  "nav.recent": { ja: "RECENT", en: "RECENT" },
  "nav.logout": { ja: "Log out", en: "Log out" },

  // Hero
  "hero.title": { ja: "Boost your productivity\nwithout the overwhelm.", en: "Boost your productivity\nwithout the overwhelm." },
  "hero.subtitle": { 
    ja: "Imagine your tasks running themselves. With Keido, centralize operations, ditch tedious work, and free your team to innovate and grow.", 
    en: "Imagine your tasks running themselves. With Keido, centralize operations, ditch tedious work, and free your team to innovate and grow." 
  },
  "hero.cta.primary": { ja: "Experience Effortless Efficiency", en: "Experience Effortless Efficiency" },
  "hero.cta.secondary": { ja: "Learn how", en: "Learn how" },

  // Dashboard
  "dash.welcome": { ja: "Welcome back", en: "Welcome back" },
  "dash.overview": { ja: "Operational Overview", en: "Operational Overview" },
  "dash.stat.active_agents": { ja: "Active Agents", en: "Active Agents" },
  "dash.stat.tasks_completed": { ja: "Tasks Completed", en: "Tasks Completed" },
  "dash.stat.efficiency": { ja: "Efficiency", en: "Efficiency" },
  "dash.stat.savings": { ja: "Est. Savings", en: "Est. Savings" },
  "dash.create_agent": { ja: "Create New Agent", en: "Create New Agent" },

  // Agents List
  "agents.title": { ja: "Your Agents", en: "Your Agents" },
  "agents.subtitle": { ja: "Manage and monitor your automated workforce.", en: "Manage and monitor your automated workforce." },
  "agents.col.name": { ja: "Name", en: "Name" },
  "agents.col.status": { ja: "Status", en: "Status" },
  "agents.col.last_run": { ja: "Last Run", en: "Last Run" },
  "agents.col.performance": { ja: "Performance", en: "Performance" },
  "agents.status.active": { ja: "Active", en: "Active" },
  "agents.status.paused": { ja: "Paused", en: "Paused" },
  "agents.status.draft": { ja: "Draft", en: "Draft" },

  // Builder
  "builder.title": { ja: "Agent Design", en: "Agent Design" },
  "builder.save": { ja: "Save", en: "Save" },
  "builder.test_run": { ja: "Test Run", en: "Test Run" },
  "builder.saved_toast": { ja: "Changes saved successfully", en: "Changes saved successfully" },
  "builder.generated_toast": { ja: "Workflow Generated Successfully", en: "Workflow Generated Successfully" },
  "builder.inspector.title": { ja: "Properties", en: "Properties" },
  "builder.inspector.node_name": { ja: "Node Name", en: "Node Name" },
  "builder.inspector.model": { ja: "AI Model", en: "AI Model" },
  "builder.inspector.delete": { ja: "Delete Node", en: "Delete Node" },
  "builder.inspector.duplicate": { ja: "Duplicate", en: "Duplicate" },
  "builder.empty.title": { ja: "Start from scratch or use AI", en: "Start from scratch or use AI" },
  "builder.empty.subtitle": { ja: "Describe what you want this agent to do, and we'll build the workflow.", en: "Describe what you want this agent to do, and we'll build the workflow." },
  "builder.empty.cta": { ja: "Generate with AI", en: "Generate with AI" },

  // Billing
  "billing.upgrade.title": { ja: "Upgrade to Pro", en: "Upgrade to Pro" },
  "billing.upgrade.subtitle": { ja: "Unlock unlimited agents and advanced logic.", en: "Unlock unlimited agents and advanced logic." },
  "billing.current_plan": { ja: "Current Plan", en: "Current Plan" },
  "billing.usage": { ja: "Usage", en: "Usage" },

  // Pricing Page
  "pricing.title": { ja: "Plans that scale with your team", en: "Plans that scale with your team" },
  "pricing.subtitle": { ja: "Simple, transparent pricing. No hidden fees.", en: "Simple, transparent pricing. No hidden fees." },
  "pricing.monthly": { ja: "Monthly", en: "Monthly" },
  "pricing.annual": { ja: "Annual", en: "Annual" },
  "pricing.save20": { ja: "Save 20%", en: "Save 20%" },
  
  // Tiers
  "pricing.free.name": { ja: "Starter", en: "Starter" },
  "pricing.free.desc": { ja: "For individuals exploring automation.", en: "For individuals exploring automation." },
  "pricing.free.cta": { ja: "Try for Free", en: "Try for Free" },
  "pricing.pro.name": { ja: "Pro", en: "Pro" },
  "pricing.pro.desc": { ja: "For growing teams that need power.", en: "For growing teams that need power." },
  "pricing.pro.cta": { ja: "Upgrade to Pro", en: "Upgrade to Pro" },
  "pricing.pro.badge": { ja: "Most Popular", en: "Most Popular" },

  // FAQ
  "faq.q1": { ja: "Can I cancel anytime?", en: "Can I cancel anytime?" },
  "faq.a1": { ja: "Yes, you can downgrade to the free plan at any time.", en: "Yes, you can downgrade to the free plan at any time. Your access will remain until the end of your billing cycle." },
  "faq.q2": { ja: "What happens if I hit the agent limit?", en: "What happens if I hit the agent limit?" },
  "faq.a2": { ja: "Your agents will pause until the next day.", en: "On the Free plan, agents pause until the daily reset. On Pro, there are no limits." },
  "faq.q3": { ja: "Is my data secure?", en: "Is my data secure?" },
  "faq.a3": { ja: "We are SOC2 and GDPR compliant.", en: "Absolutely. We are SOC2 and GDPR compliant, and all data is encrypted at rest and in transit." },
  "faq.q4": { ja: "Do you offer enterprise SLAs?", en: "Do you offer enterprise SLAs?" },
  "faq.a4": { ja: "Yes, contact sales.", en: "Yes, for our Enterprise customers we offer custom SLAs and dedicated support channels." },

  // Auth & Onboarding
  "auth.sso.title": { ja: "Create your Keido account", en: "Create your Keido account" },
  "auth.sso.subtitle": { ja: "Start automating in seconds. No credit card required.", en: "Start automating in seconds. No credit card required." },
  "auth.sso.google": { ja: "Continue with Google", en: "Continue with Google" },
  "auth.sso.microsoft": { ja: "Continue with Microsoft", en: "Continue with Microsoft" },
  "auth.sso.email": { ja: "Continue with Email", en: "Continue with Email" },
  "auth.sso.toc": { ja: "By continuing, you agree to our Terms and Privacy Policy.", en: "By continuing, you agree to our Terms and Privacy Policy." },
  
  "onboarding.workspace.title": { ja: "Name your workspace", en: "Name your workspace" },
  "onboarding.workspace.subtitle": { ja: "This will be your team's home base.", en: "This will be your team's home base." },
  "onboarding.workspace.label": { ja: "Workspace Name", en: "Workspace Name" },
  "onboarding.workspace.placeholder": { ja: "e.g. Acme Corp", en: "e.g. Acme Corp" },
  
  "onboarding.integrations.title": { ja: "Connect your stack", en: "Connect your stack" },
  "onboarding.integrations.subtitle": { ja: "Keido works best with your existing tools. Select at least one.", en: "Keido works best with your existing tools. Select at least one." },
  "onboarding.integrations.skip": { ja: "I'll do this later", en: "I'll do this later" },

  "onboarding.cat.title": { ja: "How will you use Keido?", en: "How will you use Keido?" },
  "onboarding.cat.subtitle": { ja: "We'll customize your templates based on your role.", en: "We'll customize your templates based on your role." },
  "onboarding.cat.business": { ja: "Business Automation", en: "Business Automation" },
  "onboarding.cat.personal": { ja: "Personal Productivity", en: "Personal Productivity" },
  "onboarding.cat.edu": { ja: "Education / Research", en: "Education / Research" },
  "onboarding.cat.other": { ja: "Other", en: "Other" },

  "onboarding.prompt.title": { ja: "What is your first mission?", en: "What is your first mission?" },
  "onboarding.prompt.subtitle": { ja: "Describe a task you want to automate. Keido will build the agent for you.", en: "Describe a task you want to automate. Keido will build the agent for you." },
  "onboarding.prompt.placeholder": { ja: "e.g. When a new lead fills out a Typeform, add them to HubSpot and send a Slack notification...", en: "e.g. When a new lead fills out a Typeform, add them to HubSpot and send a Slack notification..." },
  "onboarding.prompt.button": { ja: "Generate Agent", en: "Generate Agent" },
  "onboarding.prompt.error": { ja: "Please describe your agent to continue.", en: "Please describe your agent to continue." },

  "onboarding.thinking.title": { ja: "Building your agent...", en: "Building your agent..." },
  "onboarding.step.analyze": { ja: "Analyzing requirements", en: "Analyzing requirements" },
  "onboarding.step.draft": { ja: "Drafting logic flow", en: "Drafting logic flow" },
  "onboarding.step.connect": { ja: "Configuring API connectors", en: "Configuring API connectors" },
  "onboarding.step.finalize": { ja: "Finalizing agent structure", en: "Finalizing agent structure" },
};

export const getTranslation = (key: string, lang: Language): string => {
  return translations[key]?.[lang] || key;
};
