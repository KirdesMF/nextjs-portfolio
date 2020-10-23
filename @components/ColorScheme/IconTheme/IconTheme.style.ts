import { css } from 'linaria';
import THEME from 'Theme/theme';

export const svg = css`
   width: 5em;
   filter: drop-shadow(0 0 5px black);
   transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
      fill 0.5s ease-in-out;

   &:hover,
   &:focus {
      transform: scale(1.05) rotate(10deg);
   }
`;

export const earth = css`
   & > path:nth-of-type(1) {
      fill: ${THEME.COLORS.background};
   }

   & > path:nth-of-type(2),
   & > path:nth-of-type(3) {
      fill: ${THEME.COLORS['primary-200']};
   }
`;

export const cloud = css`
   & path {
      fill: ${THEME.COLORS['primary-600']};
   }
`;

export const sun = css`
   & > path {
      fill: ${THEME.COLORS['secondary-600']};
   }

   & > circle {
      fill: ${THEME.COLORS['secondary-300']};
   }
`;

export const moon = css`
   fill: ${THEME.COLORS['secondary-600']};
`;

export const stars = css`
   & circle {
      fill: ${THEME.COLORS['primary-600']};
   }
`;

export const line = css`
   fill: none;
   stroke: ${THEME.COLORS['secondary-300']};
   stroke-width: 1;
`;
