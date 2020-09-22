import React from 'react';
import Head from 'next/head';

import { motion, Variants } from 'framer-motion';
import { css } from 'linaria';
import THEME from 'Theme/theme';
import Layout from '@components/Layout/Layout';

const title = 'Ced | About';

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

function About() {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>

         <article className={article}>
            <motion.p variants={variants}></motion.p>
         </article>
      </>
   );
}

export default About;
