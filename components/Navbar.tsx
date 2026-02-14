import { type FC, useEffect, useState } from 'react';
import { Moon, Sun, Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const NAV_LINKS = {
  fr: [
    { label: 'Accueil', href: '#hero' },
    { label: 'À propos', href: '#about' },
    { label: 'Utilisation', href: '#usage' },
    { label: 'Composition', href: '#formulation' },
    { label: 'Produit', href: '#product' },
    { label: 'Contact', href: '#contact' },
  ],
  en: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Usage', href: '#usage' },
    { label: 'Formulation', href: '#formulation' },
    { label: 'Product', href: '#product' },
    { label: 'Contact', href: '#contact' },
  ],
  ar: [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'من نحن', href: '#about' },
    { label: 'الاستخدام', href: '#usage' },
    { label: 'التركيبة', href: '#formulation' },
    { label: 'المنتج', href: '#product' },
    { label: 'اتصل بنا', href: '#contact' },
  ],
};

const MORE_PRODUCTS = {
  fr: 'Découvrir BlightX',
  en: 'Discover BlightX',
  ar: 'اكتشف BlightX',
};

const Navbar: FC<NavbarProps> = ({ language, setLanguage, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = NAV_LINKS.fr.map(l => l.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const links = NAV_LINKS[language];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/80 dark:bg-mildexia-deep/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-white/10'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#hero')}
            className="flex items-center gap-2 z-10"
          >
            <span className="text-2xl font-display font-bold text-mildexia-primary tracking-tight">
              Mil<span className="text-slate-800 dark:text-white">dexia</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                    ? 'text-mildexia-primary bg-mildexia-primary/10'
                    : 'text-slate-600 dark:text-gray-400 hover:text-mildexia-primary hover:bg-mildexia-primary/5'
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4 z-10">
            {/* Language Toggle */}
            {/* BlightX External Link */}
            <a
              href="https://blight-x.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white text-xs font-bold tracking-wide shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 group"
            >
              <span>{MORE_PRODUCTS[language]}</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                title="Change Language"
                className="flex items-center gap-1.5 text-sm font-medium hover:text-mildexia-primary transition-colors text-slate-600 dark:text-gray-400 group"
              >
                <Globe size={18} />
                <span className="uppercase">{language}</span>
              </button>

              {isLangMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-mildexia-deep border border-gray-100 dark:border-white/10 rounded-lg shadow-lg py-1 z-20">
                    {[
                      { code: 'en', label: 'English' },
                      { code: 'fr', label: 'Français' },
                      { code: 'ar', label: 'العربية' },
                    ].map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as Language);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${language === lang.code
                          ? 'text-mildexia-primary font-medium'
                          : 'text-slate-600 dark:text-gray-300'
                          }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600" />}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen
                ? <X size={22} className="text-slate-700 dark:text-white" />
                : <Menu size={22} className="text-slate-700 dark:text-white" />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'visible' : 'invisible'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute end-0 top-0 h-full w-72 bg-white dark:bg-mildexia-deep shadow-2xl transform transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : 'ltr:translate-x-full rtl:-translate-x-full'
            }`}
        >
          <div className="pt-24 px-6 flex flex-col gap-2">
            {links.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-start px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isActive
                    ? 'text-mildexia-primary bg-mildexia-primary/10'
                    : 'text-slate-700 dark:text-gray-300 hover:text-mildexia-primary hover:bg-mildexia-primary/5'
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
            {/* Mobile BlightX Link */}
            <a
              href="https://blight-x.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white text-base font-bold shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all duration-300 group"
            >
              <span>{MORE_PRODUCTS[language]}</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;