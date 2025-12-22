import { LucideIcon } from "lucide-react";

export type Language = 'ja' | 'en';

export interface Translation {
  [key: string]: {
    ja: string;
    en: string;
  };
}

export interface NavItem {
  labelKey: string;
  path: string;
  icon?: LucideIcon;
}

export interface Agent {
  id: string;
  name: string;
  status: 'active' | 'training' | 'paused' | 'error';
  type: string;
  lastRun: string;
  efficiency: number;
}

export interface WorkflowNode {
  id: string;
  type: 'trigger' | 'action' | 'condition' | 'ai';
  label: string;
  x: number;
  y: number;
}

export interface Plan {
  id: string;
  nameKey: string;
  price: string;
  featuresKey: string[];
  recommended?: boolean;
}