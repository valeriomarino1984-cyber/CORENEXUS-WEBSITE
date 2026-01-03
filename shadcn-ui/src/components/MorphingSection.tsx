import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface MorphingSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function MorphingSection({ children, className = '', delay = 0 }: MorphingSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        scale: 0.8,
        rotateX: -15,
        y: 50,
      }}
      animate={inView ? { 
        opacity: 1, 
        scale: 1,
        rotateX: 0,
        y: 0,
      } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      {children}
    </motion.div>
  );
}