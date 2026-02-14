import React from 'react';
import { Content } from '../types';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductSpecsProps {
  content: Content['product'];
}

const ProductSpecs: React.FC<ProductSpecsProps> = ({ content }) => {
  return (
    <section className="py-24 bg-white dark:bg-mildexia-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Packaging Back */}
          <div className="flex justify-center order-2 md:order-1">
             <div className="relative w-64 h-96 bg-transparent flex items-center justify-center">
                <motion.img 
                 src="/assets/Back.png"
                 alt="Mildexia Packaging Back" 
                 className="w-full h-full object-contain drop-shadow-xl"
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
               />
             </div>
          </div>

          {/* Right: Specs */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-display font-bold text-slate-800 dark:text-white mb-10">
              {content.title}
            </h2>
            
            <ul className="space-y-4">
              {content.specs.map((spec, i) => (
                <li key={i} className="flex items-center gap-4 p-4 bg-mildexia-cream dark:bg-white/5 rounded-lg border border-transparent hover:border-mildexia-primary/20 transition-colors">
                  <ShieldCheck className="text-mildexia-primary flex-shrink-0" size={20} />
                  <span className="text-slate-700 dark:text-gray-300 font-medium">
                    {spec}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;