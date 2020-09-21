import React from 'react';
import HomeNav from '@components/HomeNav/HomeNav';
import Head from 'next/head';
import { css } from 'linaria';
import { motion, Variants } from 'framer-motion';
import THEME from 'Theme/theme';

const title = 'Ced | Home';

const variants: Variants = {
   in: {
      opacity: 1,
   },

   out: {
      opacity: 0,
   },
};

const section = css`
   width: 100%;
   height: 100%;

   flex: 0 0 auto;

   display: grid;
   grid-template:
      '. . .' 15%
      '. art .' 1fr
      '. nav .' 25%
      /20% 1fr 20%;
`;

const article = css`
   position: relative;
   grid-area: art;
   display: grid;
   place-items: center;

   > p {
      text-align: center;
      font-family: ${THEME.FONTS.amstelvar};
      font-size: 1.5em;
      color: ${THEME.COLORS['primary-500']};
   }
`;

function Home() {
   return (
      <>
         <Head>
            <title>{title}</title>
         </Head>

         <section className={section}>
            <article className={article}>
               <motion.p variants={variants}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae perferendis ea, dolorum vero explicabo repellendus
                  quisquam aliquam, quibusdam sed tempore obcaecati, magni eum?
                  Beatae fugiat adipisci non facere! Praesentium, iure....
               </motion.p>
            </article>

            <HomeNav />
         </section>
      </>
   );
}

/**=============== Export ============ */
export default Home;
