import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const svg = css`
   width: 5em;
   filter: drop-shadow(0 0 2px ${COLORS['black-50']});
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
      fill: ${COLORS['contact-200']};
   }
`;

export const cloud = css`
   & path {
      fill: ${COLORS['contact-300']};
   }
`;

export const sun = css`
   & > path {
      fill: ${COLORS['contact-100']};
   }

   & > circle {
      fill: ${COLORS['contact-200']};
   }
`;

export const moon = css`
   fill: ${COLORS['contact-300']};
`;

export const stars = css`
   & circle {
      fill: ${COLORS['contact-100']};
   }
`;

export const line = css`
   fill: none;
   stroke: ${COLORS['white-300']};
   stroke-width: 1;
`;
