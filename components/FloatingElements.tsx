import { type FC } from 'react';
import { motion } from 'framer-motion';

const FloatingElements: FC = () => {
  // Generate random particles
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-mildexia-primary/20 dark:bg-mildexia-neon/20 blur-sm"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Decorative Leaf Shapes (SVG) */}
      <motion.svg
        className="absolute top-20 left-10 w-24 h-24 text-mildexia-primary/10 dark:text-mildexia-neon/5"
        viewBox="0 0 24 24"
        fill="currentColor"
        animate={{ rotate: 360, y: [0, 20, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <path d="M12 2C7.5 2 4 6.5 4 12s4.5 9 9 9 9-4.5 9-9c0-5.5-4.5-10-9-10zm0 16c-3.5 0-6.5-3-6.5-8s3-6.5 6.5-6.5 6.5 3 6.5 8-3 6.5-6.5 6.5z" />
        <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" opacity="0.5" />
      </motion.svg>
    </div>
  );
};

export default FloatingElements;