import React from 'react';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import { Utils } from 'utils/utils';
import { css } from 'linaria';
import { Theme } from 'Theme/Theme';

const variants: Variants = {
   initial: {
      y: 150,
   },
   out: (i) => ({
      y: 150,
      transition: {
         duration: 0.9,
         delay: i * 0.05,
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

type TMaintTitle = {
   pathname: string;
};

function MaintTitle() {
   const { pathname } = useRouter();
   const title = Utils.customURL(pathname);
   return (
      <article className={article}>
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
`;

const span = css`
   font-family: Helvetica, sans-serif;
   text-transform: uppercase;
   font-size: 4em;
   color: ${Theme.COLORS['home-primary-100']};
   will-change: transform;
`;
