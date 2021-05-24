import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

import * as styles from './styles.css';

const variants: Variants = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
   },
   exit: {
      opacity: 0,
   },
};

export function MotionWrapper({ children }: { children: ReactNode }) {
   return (
      <motion.main
         variants={variants}
         initial="initial"
         animate="animate"
         exit="exit"
         data-col="main"
         className={styles.layout}
      >
         {children}
      </motion.main>
   );
}
