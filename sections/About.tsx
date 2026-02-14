import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types';

interface AboutProps {
  content: Content['about'];
}

const About: FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-mildexia-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-800 dark:text-white mb-8">
            {content.title}
          </h2>

          <div className="w-24 h-1 bg-mildexia-primary mx-auto mb-10 rounded-full" />

          <p className="text-xl lg:text-2xl font-light text-slate-700 dark:text-gray-300 leading-relaxed mb-6">
            {content.description}
          </p>
          <p className="text-lg text-slate-500 dark:text-gray-400">
            {content.description2}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;