import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const svg = css`
   width: 5em;
   filter: drop-shadow(0 0 5px black);
   transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
      fill 0.5s ease-in-out;

   @media (hover: hover) and (pointer: fine) {
      &:hover {
         transform: scale(1.05) rotate(10deg);
      }
   }
`;

export const earth = css`
   & > path:nth-of-type(1) {
      fill: ${COLORS['contact-100']};
   }

   & > path:nth-of-type(2),
   & > path:nth-of-type(3) {
      fill: red;
   }
`;

export const cloud = css`
   & path {
      fill: red;
   }
`;

export const sun = css`
   & > path {
      fill: red;
   }

   & > circle {
      fill: red;
   }
`;

export const moon = css`
   fill: red;
`;

export const stars = css`
   & circle {
      fill: red;
   }
`;

export const line = css`
   fill: none;
   stroke: red;
   stroke-width: 1;
`;
