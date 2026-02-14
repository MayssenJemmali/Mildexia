import { type FC, useRef } from 'react';
import { Content } from '../types';
import { ShieldCheck, Package } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import BackImage from '../assets/Back.png';

interface ProductSpecsProps {
  content: Content['product'];
}

const ProductSpecs: FC<ProductSpecsProps> = ({ content }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values that track cursor position (0 to 1 range)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Map mouse position to rotation angles
  const rawRotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rawRotateY = useTransform(mouseX, [0, 1], [-10, 10]);

  // Spring physics for smooth movement
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
    scale.set(1.06);

  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    scale.set(1);

  };

  return (
    <section id="product" className="py-24 bg-white dark:bg-mildexia-charcoal">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left: Packaging Back */}
          <div className="flex justify-center order-2 md:order-1">
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
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* Cursor-tracked 3D tilt layer */}
                <motion.div
                  className="relative w-full h-full"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  style={{
                    rotateX,
                    rotateY,
                    scale,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img
                    src={BackImage}
                    alt="Mildexia Packaging Back"
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
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/15 dark:bg-black/35 rounded-full blur-xl pointer-events-none"
                animate={{
                  scaleX: [1, 1.12, 1],
                  opacity: [0.35, 0.2, 0.35],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </div>

          {/* Right: Specs + Packaging */}
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

            {/* Packaging Options */}
            <div className="mt-10">
              <h3 className="text-xl font-display font-semibold text-slate-800 dark:text-white mb-5 flex items-center gap-3">
                <Package className="text-mildexia-primary" size={22} />
                {content.packaging.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.packaging.options.map((pkg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="relative group p-5 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-mildexia-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-mildexia-primary/10"
                  >
                    {/* Weight badge */}
                    <div className="w-14 h-14 rounded-full bg-mildexia-primary/10 dark:bg-mildexia-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-mildexia-primary font-bold text-lg">{pkg.weight}</span>
                    </div>

                    <span className="block text-sm font-semibold uppercase tracking-wider text-mildexia-primary mb-1.5">
                      {pkg.label}
                    </span>
                    <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed">
                      {pkg.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;