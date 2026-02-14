import React from 'react';
import { Content } from '../types';

interface FooterProps {
  content: Content['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="py-12 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-2xl font-display font-bold text-mildexia-primary">Mildexia</span>
          <p className="text-sm text-slate-500 dark:text-gray-500 mt-2">
            {content.tagline}
          </p>
        </div>

        <div className="text-center md:text-right">
          <a href={`mailto:${content.contact}`} className="text-slate-700 dark:text-gray-300 hover:text-mildexia-primary block mb-2 transition-colors">
            {content.contact}
          </a>
          <span className="text-sm text-slate-400 font-medium">
            {content.country}
          </span>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-slate-300 dark:text-gray-700">
        © {new Date().getFullYear()} Mildexia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;