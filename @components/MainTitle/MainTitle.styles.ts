import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const article = css`
   grid-area: 1 / 1 / -1 / -1;

   display: grid;
   place-items: center;
`;

export const heading = css`
   overflow: hidden;
   height: auto;
   padding: 0.5em 0.5em;
   display: grid;
   grid-auto-flow: column;
   place-items: center;
`;

export const span = css`
   font-family: 'Amstelvar', sans-serif;
   text-transform: uppercase;
   font-size: 6rem;
   font-variation-settings: 'XOPQ' 240, 'YTUC' 930;
   color: ${COLORS['white-100']};
   text-shadow: 0px 0px 6px black;
   will-change: transform;
`;
