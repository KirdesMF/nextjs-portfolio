import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';
import { FONTS } from 'Theme/fonts';

export const anchor = css`
   z-index: 2;
   grid-area: btn;

   width: 100%;
   height: 100%;

   display: grid;
   place-items: center;

   background: ${COLORS.contact};
   color: ${COLORS.contact};
   text-shadow: 0px 0px 2px black;
   box-shadow: 0px 0px 2px black;

   font-family: ${FONTS.amstelvar};
   font-size: 2.5rem;
   font-variation-settings: 'wght' 500, 'GRAD' 0.5, 'YTLC' 400;
   letter-spacing: 0em;
   text-transform: uppercase;

   transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

   @media (hover: hover) and (pointer: fine) {
      &:hover {
         box-shadow: 0px 0px 2px black;
         font-variation-settings: 'wght' 800, 'GRAD' 0.9, 'YTLC' 500;
         letter-spacing: 0.2em;
         transform: scaleY(1.1);
      }
   }
`;
