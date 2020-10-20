import { motion, Variants } from 'framer-motion';
import { css } from 'linaria';
import React from 'react';
import THEME from 'Theme/theme';

const article = css`
   grid-area: art;
   z-index: 2;

   place-self: center;

   display: grid;
   grid-auto-flow: row;
`;

const span = css`
   overflow: hidden;
   font-family: ${THEME.FONTS.amstelvar};
   font-size: 2rem;
   font-variation-settings: 'wght' 600, 'YTLC' 450;
   color: ${THEME.COLORS['secondary-500']};
   text-shadow: 0px 0px 2px black;
   transform-origin: left;
`;

const articleVariants: Variants = {
   in: {
      transition: {
         staggerChildren: 0.1,
         delayChildren: 0.8,
      },
   },
   out: {
      transition: {
         staggerChildren: 0.1,
      },
   },
};

const spanVariants: Variants = {
   in: {
      rotate: 0,
      opacity: 1,
      transition: {
         duration: 1,
         ease: 'circOut',
      },
   },
   out: {
      rotate: 5,
      opacity: 0,
      transition: {
         duration: 1,
         ease: 'circIn',
      },
   },
};

type ResumePagesProps = {
   spans: Record<'content', string>[];
};

export default function ResumePages({ spans }: ResumePagesProps) {
   return (
      <motion.article
         variants={articleVariants}
         animate="in"
         exit="out"
         initial="out"
         className={article}
      >
         {spans.map((s) => (
            <motion.span
               key={s.content}
               variants={spanVariants}
               className={span}
            >
               {s.content}
            </motion.span>
         ))}
      </motion.article>
   );
}
