import { css } from 'linaria';
import theme from 'Theme/theme';

export const nav = css`
   display: grid;
   grid-gap: 3rem;
   place-items: center;

   & > :nth-child(1) {
      margin-right: 15rem;
   }

   & > :nth-child(3) {
      margin-left: 18rem;
   }
`;

export const anchor = css`
   font: 3.5em/1 'Amstelvar';
   font-variation-settings: 'wght' 600, 'opsz' 60, 'ytuc' 800, 'GRAD' -1;
   color: ${theme.COLORS['secondary-500']};
   border-bottom: 2px solid ${theme.COLORS['grey-200']};
`;
export const svg = css`
   width: 100%;
   height: 100%;
   font: 8em /1 Arial;
   stroke-width: 3;
   fill: none;
`;