import React from 'react';
import HomeNav from '@components/HomeNav/HomeNav';
import Head from 'next/head';
import { css } from 'linaria';
import theme from 'Theme/theme';

const title = 'Ced | Home';
/**
 * Home Pages Component
 */

function Home() {
   return (
      <React.Fragment>
         <Head>
            <title>{title}</title>
         </Head>
         <article className={article}>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Repudiandae perferendis ea, dolorum vero explicabo repellendus
               quisquam aliquam, quibusdam sed tempore obcaecati, magni eum?
               Beatae fugiat adipisci non facere! Praesentium, iure....
            </p>
         </article>
         <HomeNav />
      </React.Fragment>
   );
}

/**=============== Export ============ */
export default Home;

const article = css`
   grid-area: 1 / 1 / 3 / 2;
   width: 50%;
   height: 50%;

   display: grid;
   place-items: center;

   > p {
      font-family: ${theme.FONTS.amstelvar};
      font-size: 1.5em;
      color: ${theme.COLORS['primary-500']};
   }
`;
