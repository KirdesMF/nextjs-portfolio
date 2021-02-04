import { motion } from 'framer-motion';

import * as styles from './ResumePages.styles';
import * as variants from './ResumePages.variants';

export function ResumePages({ content }: { content: string }) {
   return (
      <motion.article
         variants={variants.article}
         animate="in"
         exit="out"
         initial="out"
         className={styles.article}
      >
         {content}
      </motion.article>
   );
}
