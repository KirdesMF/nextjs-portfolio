import React from 'react';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import { css } from 'linaria';

import THEME from 'Theme/theme';

const variants: Variants = {
   initial: {
      y: 200,
   },
   out: (i) => ({
      y: 200,
      transition: {
         duration: 0.8,
         delay: i * 0.1,
         ease: 'circIn',
      },
   }),
   in: (i) => ({
      y: 0,
      transition: {
         duration: 0.8,
         delay: i * 0.1,
         ease: 'circOut',
      },
   }),
};

const article = css`
   grid-area: 1 / 1 / -1 / -1;

   display: grid;
   place-items: center;
`;

const heading = css`
   overflow: hidden;
   height: auto;
   padding: 0.5em 0.5em;
   display: grid;
   grid-auto-flow: column;
   place-items: center;
`;

const span = css`
   font-family: 'Amstelvar', sans-serif;
   text-transform: uppercase;
   font-size: 6rem;
   font-variation-settings: 'XOPQ' 240, 'YTUC' 930;
   color: ${THEME.COLORS.background};
   text-shadow: 0px 0px 6px black;
   will-change: transform;
`;

type MainTitleProps = {
   title: string;
};

function MaintTitle({ title }: MainTitleProps) {
   return (
      <article className={article}>
         <h1 className={heading}>
            {title.split('').map((letter, i) => (
               <motion.span
                  className={span}
                  key={i}
                  custom={i}
                  variants={variants}
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

export default MaintTitle;
