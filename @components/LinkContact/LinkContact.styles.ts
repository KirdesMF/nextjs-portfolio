import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';
import { FONTS } from 'Theme/fonts';

export const container = css`
   grid-area: card;

   width: 80%;
   height: 90%;

   display: grid;
   grid-auto-rows: 1fr;
   grid-template-columns: 1fr;
   place-items: center;
`;

export const anchor = css`
   width: 90%;
   height: 80%;

   display: grid;
   place-items: center;

   border-radius: 10px;
   box-shadow: 0px 0px 5px black;
   overflow: hidden;

   position: relative;

   background: ${COLORS.background};
`;

export const span = css`
   grid-area: 1 / 1 / -1 / -1;
   z-index: 1;
   font-family: ${FONTS.amstelvar};
   font-size: 2rem;
   font-variation-settings: 'wght' 800, 'XOPQ' 200;
   color: ${COLORS['white-100']};
   text-shadow: 0px 5px 10px black;
   text-transform: uppercase;
`;

export const icon = css`
   position: absolute;
   right: 5%;
   width: 10rem;
   transform: rotate(15deg);
   color: ${COLORS['contact-300']};
   filter: drop-shadow(0 5px 5px black);

   > polygon {
      fill: none;
      stroke: ${COLORS['white-100']};
      stroke-width: 5;
   }

   > g {
      color: ${COLORS['black-100']};
   }
`;
