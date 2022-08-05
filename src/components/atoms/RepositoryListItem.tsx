import type { VariantLabels, Variants } from 'framer-motion';
import { motion, TargetAndTransition } from 'framer-motion';
import type { ReactNode } from 'react';

type Variant = TargetAndTransition | VariantLabels;

type ResultItemProps = {
  children: ReactNode;
  whileHover?: Variant;
  whileTap?: Variant;
  whileFocus?: Variant;
};

export const containerVariants: Variants = {
  initial: {
    x: -40,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.25,
      mass: 1.2,
      type: 'spring',
    },
  },
};

export const ResultListItem = ({ children, whileHover, whileTap, whileFocus }: ResultItemProps) => {
  return (
    <motion.li
      variants={containerVariants}
      whileHover={whileHover ?? {}}
      whileTap={whileTap ?? {}}
      whileFocus={whileFocus ?? {}}
    >
      {children}
    </motion.li>
  );
};
