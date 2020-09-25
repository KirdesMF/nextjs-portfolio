import { motion, Variants } from 'framer-motion';
import { css } from 'linaria';
import React from 'react';
import THEME from 'Theme/theme';

const button = css`
   grid-area: btn;

   width: 100%;
   height: 100%;

   background: ${THEME.COLORS.background};
   color: ${THEME.COLORS['secondary-400']};
   text-shadow: 0px 0px 2px black;
   box-shadow: ${THEME.SHADOWS['--box-thin']} black;

   font-family: ${THEME.FONTS.amstelvar};
   font-size: 2.5rem;
   font-variation-settings: 'wght' 500, 'GRAD' 0.5, 'YTLC' 400;
   letter-spacing: 0em;
   text-transform: uppercase;

   transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

   @media (hover: hover) and (pointer: fine) {
      &:hover {
         box-shadow: ${THEME.SHADOWS['--box-big']} black;
         font-variation-settings: 'wght' 800, 'GRAD' 0.9, 'YTLC' 500;
         letter-spacing: 0.2em;
         transform: scaleY(1.1);
      }
   }
`;

const buttonVariants: Variants = {
   in: {
      x: 0,
      opacity: 1,
      transition: {
         duration: 1,
         ease: 'circOut',
      },
   },
   out: {
      x: 50,
      opacity: 0,
      transition: {
         duration: 1,
         ease: 'circIn',
      },
   },
};

type ButtonPagesProps = {
   content: string;
   onClick?: () => void;
};

export default function ButtonPages({ content, onClick }: ButtonPagesProps) {
   return (
      <motion.button
         onClick={onClick}
         variants={buttonVariants}
         className={button}
      >
         {content}
      </motion.button>
   );
}
