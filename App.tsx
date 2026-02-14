import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FloatingElements from './components/FloatingElements';
import Hero from './sections/Hero';
import About from './sections/About';
import Usage from './sections/Usage';
import Crops from './sections/Crops';
import Formulation from './sections/Formulation';
import Sustainability from './sections/Sustainability';
import ProductSpecs from './sections/ProductSpecs';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import { Language } from './types';
import { CONTENT } from './constants';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('fr');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check system preference or saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const currentContent = CONTENT[language];

  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden transition-colors duration-500">
      
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <main className="relative">
        <FloatingElements />
        
        <Hero content={currentContent.hero} />
        <About content={currentContent.about} />
        <Usage content={currentContent.usage} />
        <Crops content={currentContent.crops} />
        <Formulation content={currentContent.formulation} />
        <Sustainability content={currentContent.sustainability} />
        <ProductSpecs content={currentContent.product} />
        <CTA content={currentContent.cta} />
      </main>

      <Footer content={currentContent.footer} />
    </div>
  );
};

export default App;