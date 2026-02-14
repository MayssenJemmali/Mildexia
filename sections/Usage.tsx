import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types';
import { Scale, Waves, SprayCan, ArrowRight } from 'lucide-react';

interface UsageProps {
  content: Content['usage'];
}

const Usage: FC<UsageProps> = ({ content }) => {
  const steps = [
    {
      key: 'dosage',
      icon: Scale,
      data: content.cards.dosage,
      // Gentle rocking for scale
      animation: { rotate: [0, -3, 3, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const } }
    },
    {
      key: 'prep',
      icon: Waves,
      data: content.cards.prep,
      // Liquid motion effect
      animation: { y: [1, -1, 1], x: [-1, 1, -1], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const } }
    },
    {
      key: 'app',
      icon: SprayCan,
      data: content.cards.app,
      // Spraying tilt
      animation: { rotate: [0, -15, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 1 } }
    },
  ];

  return (
    <section id="usage" className="py-32 bg-mildexia-cream dark:bg-mildexia-deep relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-mildexia-sage/30 dark:bg-mildexia-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-mildexia-primary/5 dark:bg-mildexia-neon/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-slate-800 dark:text-white mb-6">
            {content.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-mildexia-primary to-transparent mx-auto rounded-full opacity-80" />
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                className="group relative flex flex-col items-center"
              >
                {/* Large Background Number */}
                <div className="absolute -top-16 -left-0 md:-left-4 text-[140px] leading-none font-display font-bold text-slate-200 dark:text-white/[0.03] select-none z-0 pointer-events-none transition-colors duration-500 group-hover:text-mildexia-sage/50 dark:group-hover:text-white/[0.05]">
                  0{index + 1}
                </div>

                {/* Visual Icon Container */}
                <div className="relative z-10 mb-8">
                  {/* Outer Glow Ring */}
                  <div className="w-32 h-32 rounded-full border border-white/50 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-md shadow-lg flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-500">
                    {/* Inner Circle */}
                    <div className="w-24 h-24 rounded-full bg-white dark:bg-mildexia-charcoal border border-slate-100 dark:border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-mildexia-primary/50 transition-colors duration-500">
                      <motion.div animate={step.animation} className="relative z-10">
                        <Icon className="text-mildexia-primary dark:text-mildexia-neon" size={36} strokeWidth={1.5} />
                      </motion.div>

                      {/* Subtle internal gradient */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-mildexia-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="w-full relative z-10">
                  <div className="text-center p-8 rounded-2xl bg-white/60 dark:bg-white/[0.02] backdrop-blur-md border border-white/50 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group-hover:border-mildexia-primary/20">
                    <h3 className="text-xl font-display font-bold text-slate-800 dark:text-white mb-3 tracking-wide uppercase">
                      {step.data.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-mildexia-primary/30 mx-auto mb-4" />
                    <p className="text-lg text-slate-600 dark:text-gray-300 font-medium leading-relaxed">
                      {step.data.text}
                    </p>
                  </div>
                </div>

                {/* Mobile connector arrow */}
                {index < 2 && (
                  <div className="md:hidden mt-8 mb-4 text-mildexia-primary/30 animate-pulse">
                    <ArrowRight size={24} className="rotate-90" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Usage;