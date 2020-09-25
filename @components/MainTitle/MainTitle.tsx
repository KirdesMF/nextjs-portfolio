import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import { css } from 'linaria';

import { Utils } from 'utils/utils';

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
   --left: 50%;
   --top: 50%;

   position: fixed;
   z-index: 2;
   left: var(--left);
   top: var(--top);

   transform: translate(-50%, -50%);

   display: grid;
   place-items: center;

   &[data-pathname='/home'] {
      --left: 35%;
      --top: 8.5%;
   }
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
   --shadow: 6px;
   font-family: 'Amstelvar', sans-serif;
   text-transform: uppercase;
   font-size: 6rem;
   font-variation-settings: 'XOPQ' 240, 'YTUC' 930;
   color: ${THEME.COLORS.background};
   text-shadow: 0px 0px var(--shadow) black;
   will-change: transform;

   &[data-pathname='/home'] {
      font-size: 1rem;
      --shadow: 1px;
   }
`;

function MaintTitle() {
   const router = useRouter();
   const title = Utils.customURL(router.pathname);

   return (
      <AnimatePresence exitBeforeEnter>
         <article
            className={article}
            key={router.route}
            data-pathname={router.pathname}
         >
            <h1 className={heading}>
               {title.split('').map((letter, i) => (
                  <motion.span
                     className={span}
                     data-pathname={router.pathname}
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
      </AnimatePresence>
   );
}

export default MaintTitle;
