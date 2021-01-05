import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const button = css`
   grid-area: menu;

   display: grid;
   place-items: center;
`;

export const svg = css`
   width: 10rem;
   filter: drop-shadow(0 0 3px ${COLORS['black-450']});
`;

export const path = css`
   fill: transparent;
   stroke-width: 8;
   stroke: ${COLORS['white-450']};
   stroke-linecap: round;
   transform-box: fill-box;
`;
