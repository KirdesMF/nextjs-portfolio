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
         duration: 1,
         delay: i * 0.1,
         ease: 'circIn',
      },
   }),
   in: (i) => ({
      y: 0,
      transition: {
         duration: 1,
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
         <article className={article} key={router.route}>
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
         </article>
      </AnimatePresence>
   );
}

export default MaintTitle;

const article = css`
   z-index: 3;
   position: fixed;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   overflow: hidden;

   display: flex;

   height: auto;
`;

const span = css`
   font-family: Helvetica, sans-serif;
   text-transform: uppercase;
   font-size: 4em;
   color: ${theme.COLORS['primary-100']};
   will-change: transform;
`;
