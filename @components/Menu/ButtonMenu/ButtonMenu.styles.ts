import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const button = css`
   grid-area: menu;
   place-self: center;

   height: 5.5rem;
   width: 6rem;

   border-radius: 10px;
   z-index: 2;
   border: 0px solid ${COLORS['white-450']};
   appearance: none;

   &:focus {
      outline: none;
      border: 0.5px solid ${COLORS['white-450']};
   }
`;

export const svg = css`
   width: 100%;
   height: 100%;
`;

export const path = css`
   stroke: ${COLORS['white-300']};
   stroke-width: 10;
   stroke-linecap: round;
   transform-box: fill-box;
`;
