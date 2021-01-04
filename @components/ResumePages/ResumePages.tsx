import { motion } from 'framer-motion';

import * as styles from './ResumePages.styles';
import * as variants from './ResumePages.variants';

type ResumePagesProps = {
   spans: Record<'content', string>[];
};

export function ResumePages({ spans }: ResumePagesProps) {
   return (
      <motion.article
         variants={variants.article}
         animate="in"
         exit="out"
         initial="out"
         className={styles.article}
      >
         {spans.map((s) => (
            <motion.span
               key={s.content}
               variants={variants.span}
               className={styles.span}
            >
               {s.content}
            </motion.span>
         ))}
      </motion.article>
   );
}
