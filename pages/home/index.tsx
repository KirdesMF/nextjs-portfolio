import React from 'react';
import HomeNav from '@components/HomeNav/HomeNav';
import Head from 'next/head';
import { css } from 'linaria';
import { motion, Variants } from 'framer-motion';
import THEME from 'Theme/theme';
import { Icon } from '@components/Icon/Icon';

const title = 'Ced | Home';

const textVariants: Variants = {
   in: {
      y: 0,
      transition: {
         duration: 0.5,
         ease: 'linear',
         delay: 0.5,
      },
   },

   out: {
      y: 300,
      transition: {
         duration: 0.5,
      },
   },
};

const hrVariants: Variants = {
   in: {
      scaleX: '100%',
      transition: {
         duration: 1,
         ease: 'linear',
      },
   },

   out: {
      scaleX: '0%',
      transition: {
         duration: 1,
         ease: 'linear',
         delay: 0.5,
      },
   },
};

const buttonVariants: Variants = {
   in: {
      y: 0,
      transition: {
         duration: 1,
         ease: 'linear',
         delay: 0.2,
      },
   },

   out: {
      y: '-100%',
      transition: {
         duration: 1,
         ease: 'circOut',
      },
   },
};

const section = css`
   width: 100%;
   height: 100%;

   display: grid;
   grid-template:
      '. . .' 20%
      '. art .' 1fr
      '. hr .' 2%
      '. arrow .' 5%
      '. nav .' 1fr
      /20% 1fr 20%;
   place-items: center;
`;

const article = css`
   grid-area: art;
   display: grid;
   place-items: center;
   width: 100%;
   height: 100%;

   overflow: hidden;

   > p {
      text-align: center;
      font-family: ${THEME.FONTS.amstelvar};
      font-size: 1.5em;
      color: ${THEME.COLORS['primary-500']};
   }
`;

const button = css`
   overflow: hidden;
   grid-area: arrow;
   width: 100%;
   display: grid;
   place-items: center;

   position: relative;
`;

const hr = css`
   z-index: 1;
   grid-area: hr;
   width: 100%;
   height: 3px;
   color: ${THEME.COLORS['grey-400']};
   background: ${THEME.COLORS['grey-400']};
   box-shadow: ${THEME.SHADOWS['--box-big']} ${THEME.COLORS['grey-50']};
`;

function Home() {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>

         <section className={section}>
            <article className={article}>
               <motion.p variants={textVariants}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Harum, ipsam quasi aspernatur ad dolores maiores.
               </motion.p>
            </article>

            <motion.hr variants={hrVariants} className={hr} />

            <button className={button}>
               <motion.span variants={buttonVariants}>
                  <Icon
                     name="chevron"
                     size="2em"
                     iconColor={THEME.COLORS['primary-500']}
                     rotation="180deg"
                  />
               </motion.span>
            </button>

            <HomeNav />
         </section>
      </>
   );
}

/**=============== Export ============ */
export default Home;
