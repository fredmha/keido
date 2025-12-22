import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../../types';

interface LocaleSwitcherProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
}

export const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({ currentLang, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(currentLang === 'ja' ? 'en' : 'ja')}
      className="flex items-center space-x-2 text-sm text-slate-500 hover:text-slate-800 transition-colors px-3 py-1 rounded-full hover:bg-slate-100"
    >
      <Globe size={16} />
      <span className="uppercase tracking-wide font-semibold">{currentLang}</span>
    </button>
  );
};