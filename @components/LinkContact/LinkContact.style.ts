import { css } from 'linaria';
import THEME from 'Theme/theme';

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
   box-shadow: ${THEME.SHADOWS['--box-thin']} black;
   overflow: hidden;

   position: relative;
`;

export const span = css`
   grid-area: 1 / 1 / -1 / -1;
   z-index: 1;
   font-family: ${THEME.FONTS.amstelvar};
   font-size: 2rem;
   font-variation-settings: 'wght' 800, 'XOPQ' 200;
   color: ${THEME.COLORS['secondary-600']};
   text-shadow: 0px 5px 10px black;
   text-transform: uppercase;
`;

export const icon = css`
   position: absolute;
   right: 5%;
   width: 10rem;
   transform: rotate(15deg);
   color: ${THEME.COLORS.background};
   filter: drop-shadow(0 5px 5px black);

   > polygon {
      fill: none;
      stroke: ${THEME.COLORS['secondary-300']};
      stroke-width: 5;
   }

   > g {
      color: ${THEME.COLORS['secondary-300']};
   }
`;
