import { type FC } from 'react';
import { Content } from '../types';

interface CTAProps {
  content: Content['cta'];
}

const CTA: FC<CTAProps> = ({ content }) => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-mildexia-primary to-mildexia-darkPrimary text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-12">
          {content.title}
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="px-8 py-4 bg-white text-mildexia-darkPrimary font-bold rounded-full shadow-lg hover:bg-gray-100 hover:-translate-y-1 transition-all">
            {content.buttons.contact}
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 hover:-translate-y-1 transition-all">
            {content.buttons.demo}
          </button>
          <button className="px-8 py-4 bg-mildexia-deep/20 text-white font-medium rounded-full hover:bg-mildexia-deep/30 transition-all backdrop-blur-sm">
            {content.buttons.distributor}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;