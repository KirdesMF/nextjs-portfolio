import { css } from '@linaria/core';
import { motion } from 'framer-motion';
import { COLORS } from 'Theme/colors';

export function ResumePages({
   section,
   content,
}: {
   content: string;
   section: string;
}) {
   return (
      <header className={header}>
         <h1 className={h1}>{section}</h1>
         <h2 className={h2}>{content}</h2>
      </header>
   );
}

const wrapper = css`
   display: grid;
`;

const header = css`
   place-self: center;
   display: grid;
   place-items: center start;
   min-height: 100vh;
`;

const h1 = css`
   font-size: calc(1rem + 20vmin);
   font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

   &::first-letter {
      color: red;
   }
`;

const h2 = css`
   font-size: calc(1rem + 2vmin);
   font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
      'Lucida Sans', Arial, sans-serif;
`;
