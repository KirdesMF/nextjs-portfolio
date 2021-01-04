import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const svg = css`
   --hex-width: 30vw;
   --half: calc(var(--hex-width) / 2);
   --neg: calc(var(--half) * -1);

   pointer-events: none;
   position: fixed;
   z-index: 999;
   width: var(--hex-width);
   transform: rotate(15deg);
`;

export const top = css`
   top: var(--neg);
   right: var(--neg);
`;

export const bottom = css`
   bottom: var(--neg);
   left: var(--neg);
`;

export const hex = css`
   stroke-width: 5;
   fill: ${COLORS['black-100']};
`;
