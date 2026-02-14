import React from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types';

interface HeroProps {
  content: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mildexia-sage/30 via-mildexia-cream to-white dark:from-mildexia-deep dark:via-mildexia-charcoal dark:to-[#05100a] z-0" />
      
      {/* Mist Effect */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mildexia-primary/10 dark:bg-mildexia-neon/5 rounded-full blur-[100px] z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
            <span className="text-mildexia-primary">Mildexia</span> <br />
            <span className="text-slate-800 dark:text-gray-100 text-3xl lg:text-5xl font-light block mt-2">
              {content.title}
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed border-l-4 border-mildexia-primary pl-6">
            {content.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-4">
             {/* Placeholder buttons for aesthetic, actions can be linked later */}
            <button className="px-8 py-3 bg-mildexia-primary hover:bg-mildexia-darkPrimary text-white rounded-full font-medium transition-all shadow-lg shadow-mildexia-primary/30 transform hover:-translate-y-1">
              {content.buttons.contact}
            </button>
          </div>
        </motion.div>

        {/* Right Content - Product Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
            {/* Halo Glow */}
            <div className="absolute inset-0 bg-mildexia-primary/20 dark:bg-mildexia-neon/10 blur-3xl rounded-full" />
            
            {/* Product Image */}
            <div className="relative w-64 h-96 lg:w-80 lg:h-[500px] bg-transparent flex items-center justify-center overflow-visible group perspective-1000">
               {/* Simulating the Bag Image */}
               <motion.img 
                 src="/assets/Front.png"
                 alt="Mildexia Packaging Front" 
                 className="w-full h-full object-contain drop-shadow-2xl z-10"
                 whileHover={{ scale: 1.05, rotateY: 5 }}
                 transition={{ duration: 0.5 }}
               />
               
               {/* Spray Particles */}
               <motion.div 
                  className="absolute -right-10 top-20 w-32 h-32 bg-white/30 dark:bg-white/10 blur-2xl rounded-full pointer-events-none"
                  animate={{ x: [0, 20, 0], opacity: [0, 0.4, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
               />
            </div>
        </motion.div>

      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-gray-600 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-mildexia-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;