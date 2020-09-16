import { css } from 'linaria';
import theme from 'Theme/theme';

export const header = css`
   position: fixed;
   z-index: 5;

   @media ${theme.BREAKPOINTS.large} {
      top: 0;
      width: 100%;
      height: 6em;

      display: grid;
      grid-template:
         'menu scheme .' 1fr
         /10% 25% 1fr;

      & [data-area='menu'] {
         grid-area: menu;
      }

      & [data-area='scheme'] {
         grid-area: scheme;
      }
   }
`;
