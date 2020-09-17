import { css } from 'linaria';
import theme from 'Theme/theme';

export const button = css`
   grid-area: menu;

   display: grid;
   place-items: center;
`;

export const svg = css`
   width: 10rem;
   filter: drop-shadow(0 0 5px ${theme.COLORS['grey-200']});
`;

export const path = css`
   fill: transparent;
   stroke-width: 8;
   stroke: ${theme.COLORS['primary-200']};
   stroke-linecap: round;
   transform-box: fill-box;
`;
