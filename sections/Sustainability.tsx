import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types';
import { Leaf, CheckCircle2 } from 'lucide-react';

interface SustainabilityProps {
  content: Content['sustainability'];
}

const Sustainability: React.FC<SustainabilityProps> = ({ content }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start at second 2 on load
    if (videoRef.current) {
      videoRef.current.currentTime = 2;
    }
  }, []);

  const handleEnded = () => {
    if (videoRef.current) {
      // Loop back to second 2 instead of 0
      videoRef.current.currentTime = 2;
      videoRef.current.play().catch(e => console.error("Loop playback failed", e));
    }
  };

  return (
    <section className="py-32 relative bg-mildexia-deep text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://picsum.photos/seed/agriculture/1920/1080")' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mildexia-deep via-transparent to-mildexia-deep" />

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                   <div className="w-16 h-16 bg-mildexia-primary rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                        <Leaf size={32} className="text-white" />
                   </div>
                   <h2 className="text-4xl font-display font-bold mb-8 leading-tight">
                       {content.title}
                   </h2>
                   <div className="space-y-6">
                       {content.points.map((point, i) => (
                           <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="flex items-start gap-4"
                           >
                               <CheckCircle2 className="text-mildexia-neon mt-1 flex-shrink-0" />
                               <p className="text-lg text-gray-300 font-light">{point}</p>
                           </motion.div>
                       ))}
                   </div>
                </div>
                
                <div className="order-1 lg:order-2 bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10 shadow-2xl">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                        <video 
                          ref={videoRef}
                          className="w-full h-full object-cover"
                          autoPlay 
                          muted 
                          playsInline 
                          // Using onEnded to implement custom loop behavior (skip 0-2s on replay)
                          onEnded={handleEnded}
                        >
                          <source src="/assets/Marketing_Video_Generation_From_Photo.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        
                        {/* Overlay gradient for aesthetics */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Sustainability;