import { css } from 'linaria';
import theme from 'Theme/theme';

export const button = css`
   display: grid;
   place-items: center;
`;

export const path = css`
   fill: transparent;
   stroke-width: 5;
   stroke: ${theme.COLORS['primary-200']};
   stroke-linecap: round;
   transform-box: fill-box;
`;

export const svg = css`
   filter: drop-shadow(0 0 5px ${theme.COLORS['grey-200']});
`;
