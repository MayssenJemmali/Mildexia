import React, { useEffect, useState } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-mildexia-deep/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
           {/* Logo Text */}
           <span className="text-2xl font-display font-bold text-mildexia-primary tracking-tight">
             Mil<span className="text-slate-800 dark:text-white">dexia</span>
           </span>
        </div>

        <div className="flex items-center gap-6">
          {/* Language Toggle */}
          <button 
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-2 text-sm font-medium hover:text-mildexia-primary transition-colors"
          >
            <Globe size={18} />
            <span className="uppercase">{language}</span>
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;