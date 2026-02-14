import { type FC, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Content } from '../types';

interface HeroProps {
  content: Content['hero'];
}

const Hero: FC<HeroProps> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values that track cursor position (0 to 1 range)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Map mouse position to rotation angles
  const rawRotateX = useTransform(mouseY, [0, 1], [12, -12]);
  const rawRotateY = useTransform(mouseX, [0, 1], [-12, 12]);

  // Spring physics for buttery-smooth movement
  const rotateX = useSpring(rawRotateX, { stiffness: 120, damping: 20, mass: 0.8 });
  const rotateY = useSpring(rawRotateY, { stiffness: 120, damping: 20, mass: 0.8 });
  const scale = useSpring(1, { stiffness: 200, damping: 22, mass: 0.6 });



  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
    scale.set(1.07);

  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    scale.set(1);

  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
          className="text-start"
        >
          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
            <span className="text-mildexia-primary">Mildexia</span> <br />
            <span className="text-slate-800 dark:text-gray-100 text-3xl lg:text-5xl font-light block mt-2">
              {content.title}
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed border-s-4 border-mildexia-primary ps-6">
            {content.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-mildexia-primary hover:bg-mildexia-darkPrimary text-white rounded-full font-medium transition-all shadow-lg shadow-mildexia-primary/30 transform hover:-translate-y-1"
            >
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

          {/* 3D Interaction Container — full hover zone */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-80 h-[480px] lg:w-96 lg:h-[580px] flex items-center justify-center overflow-visible cursor-pointer"
            style={{ perspective: '1000px' }}
          >
            {/* Float animation (continuous gentle bob) */}
            <motion.div
              className="relative w-full h-full"
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Cursor-tracked 3D tilt layer */}
              <motion.div
                className="relative w-full h-full"
                style={{
                  rotateX,
                  rotateY,
                  scale,
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src="/assets/Front.png"
                  alt="Mildexia Packaging Front"
                  className="w-full h-full object-contain select-none pointer-events-none"
                  draggable={false}
                  style={{
                    filter: 'drop-shadow(0 35px 50px rgba(0,0,0,0.4))',
                  }}
                />


              </motion.div>
            </motion.div>

            {/* Animated ground shadow */}
            <motion.div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-52 h-8 bg-black/20 dark:bg-black/40 rounded-full blur-xl pointer-events-none"
              animate={{
                scaleX: [1, 1.15, 1],
                opacity: [0.4, 0.25, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
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