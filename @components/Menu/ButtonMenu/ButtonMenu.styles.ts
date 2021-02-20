import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const button = css`
   place-self: center;

   height: var(--height-header);
   width: 6rem;

   border-radius: 10px;
   z-index: 2;
   border: 0px solid ${COLORS.works};
   appearance: none;

   &:focus {
      outline: none;
      border: 0.5px solid ${COLORS.works};
   }
`;

export const svg = css`
   width: 100%;
   height: 100%;
`;

export const path = css`
   stroke: ${COLORS.works};
   stroke-width: 10;
   stroke-linecap: round;
   transform-box: fill-box;
`;
