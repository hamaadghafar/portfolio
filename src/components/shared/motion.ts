import type { Variants } from 'framer-motion';

export const stagger = (staggerChildren = 0.12): Variants => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren } },
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
