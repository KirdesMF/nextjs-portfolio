import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import * as styles from './MotionLayout.css';

export function MotionLayout({ children }: { children: ReactNode }) {
   return (
      <motion.div data-main="main" className={styles.layout}>
         {children}{' '}
      </motion.div>
   );
}
