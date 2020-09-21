import React from 'react';
import Head from 'next/head';

import { motion, Variants } from 'framer-motion';
import { css } from 'linaria';
import THEME from 'Theme/theme';
import Layout from '@components/Layout/Layout';

const title = 'Ced | About';

function About() {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>

         <article className={article}>
            <motion.p variants={variants}>BITE</motion.p>
         </article>
      </>
   );
}

export default About;

const variants: Variants = {
   in: {
      opacity: 1,
   },

   out: {
      opacity: 0,
   },
};

const article = css`
   width: 100%;
   height: 100%;

   position: relative;

   display: grid;
   place-items: center;

   > p {
      font-family: ${THEME.FONTS.amstelvar};
      font-size: 1.5em;
      color: ${THEME.COLORS['primary-500']};
   }
`;

// const article = css`
//    grid-area: 2 / 2/ 4/ 3;

//    transform: translate(-50%, -10%);

//    display: grid;
//    place-items: center;
//    color: ${THEME.COLORS['primary-300']};

//    > svg {
//       filter: drop-shadow(0 0 5px ${THEME.COLORS['grey-400']});
//       opacity: 0.4;
//    }
// `;

// const button = css`
//    width: 3rem;
//    height: 3rem;
//    display: grid;
//    place-items: center;
//    grid-area: button;
//    border-radius: 100%;
//    background: ${THEME.COLORS['primary-300']};
//    box-shadow: ${THEME.SHADOWS['--box-big']} ${THEME.COLORS['grey-400']};
//    font-family: ${THEME.FONTS.amstelvar};
//    text-transform: uppercase;
//    transition: transform 500ms ease-in-out;
//    &:hover {
//       transform: rotate(90deg);
//    }
// `;
