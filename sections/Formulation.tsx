import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types';
import { Dna, Leaf, Wheat, Citrus, TreeDeciduous, Droplets, Gem, Mountain, Shell } from 'lucide-react';

interface FormulationProps {
  content: Content['formulation'];
}

const Formulation: FC<FormulationProps> = ({ content }) => {

  const icons = [
    <Wheat size={20} />,          // Prêle sèche (Dried Horsetail)
    <Citrus size={20} />,         // Extrait ail (Garlic Extract)
    <TreeDeciduous size={20} />,  // Neem
    <Droplets size={20} />,       // Huile romarin (Rosemary Oil)
    <Gem size={20} />,            // Bicarbonate (crystalline mineral)
    <Mountain size={20} />,       // Argile kaolin (Kaolin Clay)
    <Shell size={20} />           // Extrait algues (Seaweed Extract)
  ];

  return (
    <section id="formulation" className="py-20 relative overflow-hidden bg-gradient-to-b from-mildexia-cream to-white dark:from-mildexia-deep dark:to-black">
      <div className="container mx-auto px-6 text-center relative z-10">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-mildexia-primary/10 text-mildexia-primary text-sm font-semibold mb-4">
            <Dna size={16} /> BIOTECH
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-bold dark:text-white mb-6">
            {content.title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-gray-500 uppercase tracking-widest">
            {content.disclaimer}
          </p>
        </motion.div>

        {/* Circular Layout Container */}
        <div className="relative w-full max-w-xl mx-auto aspect-square hidden lg:block">
          {/* Center Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-white dark:bg-mildexia-charcoal rounded-full shadow-[0_0_60px_rgba(16,185,129,0.2)] flex flex-col items-center justify-center z-20 border border-mildexia-primary/20">
            <div className="p-3 bg-mildexia-primary/10 rounded-full mb-2">
              <Leaf className="text-mildexia-primary" size={32} />
            </div>
            <span className="font-display font-bold text-2xl text-mildexia-primary">Mildexia</span>
            <span className="text-xs text-slate-400 mt-1">COMPLEXE</span>
          </div>

          {/* Orbit Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border border-dashed border-slate-300 dark:border-gray-700 rounded-full opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-slate-200 dark:border-gray-800 rounded-full opacity-30" />

          {/* Ingredients */}
          {content.ingredients.map((item, index) => {
            const total = content.ingredients.length;
            // Distribute evenly around the circle
            const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top (-90deg)
            const radius = 46; // percentage
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);

            return (
              <motion.div
                key={index}
                className="absolute w-32 -ml-16 -mt-7 flex flex-col items-center gap-1.5"
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-10 h-10 bg-white dark:bg-mildexia-charcoal rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center text-mildexia-primary dark:text-mildexia-neon">
                  {icons[index] || <Leaf size={20} />}
                </div>
                <div className="bg-white/90 dark:bg-mildexia-charcoal/90 px-3 py-1.5 rounded-lg shadow-sm backdrop-blur-sm border border-gray-100 dark:border-gray-700">
                  <span className="text-sm font-semibold text-slate-700 dark:text-gray-200 block whitespace-nowrap">
                    {item}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile/Tablet Grid View */}
        <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4">
          {content.ingredients.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/10 flex flex-col items-center gap-3 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full bg-mildexia-primary/10 flex items-center justify-center text-mildexia-primary">
                {icons[index] || <Leaf size={18} />}
              </div>
              <span className="text-sm font-semibold dark:text-white">{item}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Formulation;