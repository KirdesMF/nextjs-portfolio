import React from 'react';
import { motion } from 'framer-motion';

import * as styles from './MainTitle.styles';
import * as variants from './MainTitle.variants';

type MainTitleProps = {
   title: string;
};

export function MaintTitle({ title }: MainTitleProps) {
   return (
      <article className={styles.article}>
         <h1 className={styles.heading}>
            {title.split('').map((letter, i) => (
               <motion.span
                  className={styles.span}
                  key={i}
                  custom={i}
                  variants={variants.title}
                  initial="initial"
                  animate="in"
                  exit="out"
               >
                  {letter}
               </motion.span>
            ))}
         </h1>
      </article>
   );
}
