import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';
import { FONTS } from 'Theme/fonts';

export const article = css`
   grid-area: art;
   z-index: 2;

   place-self: center;

   display: grid;
   grid-auto-flow: row;
`;

export const span = css`
   overflow: hidden;
   font-family: ${FONTS.amstelvar};
   font-size: 2rem;
   font-variation-settings: 'wght' 600, 'YTLC' 450;
   color: ${COLORS['about-100']};
   text-shadow: 0px 0px 2px black;
   transform-origin: left;
`;
