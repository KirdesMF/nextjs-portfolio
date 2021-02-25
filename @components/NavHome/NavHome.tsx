import Link from 'next/link';
import { motion } from 'framer-motion';
import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export function NavHome({ content }: { content: string[] }) {
   return (
      <section className={wrapper}>
         <nav className={nav}>
            {content.map((link, index) => (
               <Link key={link} href={`/${link}`}>
                  <motion.a custom={index}>
                     <p>{link}</p>
                     <span
                        style={{
                           background: `${COLORS[link as keyof typeof COLORS]}`,
                        }}
                     ></span>
                  </motion.a>
               </Link>
            ))}
         </nav>
      </section>
   );
}

const wrapper = css`
   min-height: 100vh;
   display: grid;
   grid-template-columns: minmax(1rem, 1fr) 2fr minmax(1rem, 1fr);
   place-items: center;
`;

const nav = css`
   grid-column: 2;
   display: grid;
   place-items: center start;
   row-gap: 0.5rem;

   & a {
      display: grid;
      grid-auto-flow: column;
      column-gap: 1rem;
      place-items: baseline;
      color: ${COLORS.text};
   }

   & a > p {
      font-size: calc(1rem + 20vmin);
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      line-height: 0.9em;

      &::first-letter {
         color: ${COLORS.works};
      }
   }

   & > a > span {
      height: calc(1rem + 1.5vmin);
      width: calc(1rem + 1.5vmin);
      border-radius: 50%;
   }
`;
