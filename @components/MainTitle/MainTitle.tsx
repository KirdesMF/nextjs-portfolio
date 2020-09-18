import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import { Utils } from 'utils/utils';
import { css } from 'linaria';
import theme from 'Theme/theme';

const variants: Variants = {
   initial: {
      y: 150,
   },
   out: (i) => ({
      y: 150,
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

function MaintTitle() {
   const router = useRouter();
   const title = Utils.customURL(router.pathname);

   return (
      <AnimatePresence exitBeforeEnter>
         <article
            className={article}
            key={router.route}
            data-path={router.route.substr(1)}
         >
            {title.split('').map((letter, i) => (
               <motion.span
                  className={span}
                  data-path={router.route.substr(1)}
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
         </article>
      </AnimatePresence>
   );
}

export default MaintTitle;

const article = css`
   --left: 50%;
   --top: 50%;
   z-index: 3;
   position: fixed;
   left: var(--left);
   top: var(--top);
   transform: translate(-50%, -50%);
   overflow: hidden;

   display: flex;

   height: auto;

   &[data-path='home'] {
      left: 10%;
      top: 20%;
      transform: translate(-20%, -20%);
   }
`;

const span = css`
   font-family: 'Amstelvar', sans-serif;
   text-transform: uppercase;
   font-size: 4em;
   color: ${theme.COLORS['primary-100']};
   will-change: transform;

   &[data-path='home'] {
      font-size: 1em;
   }
`;
