import { css } from 'linaria';
import theme from 'Theme/theme';

export const header = css`
   position: fixed;
   z-index: 25;
   transition: box-shadow 500ms ease-in-out, background-color 1s ease-in-out;

   @media (hover: hover) and (pointer: fine) {
      &:hover {
         box-shadow: ${theme.SHADOWS['--box-thin']} black;
      }
   }

   @media ${theme.BREAKPOINTS.large} {
      top: 0;
      width: 100%;

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
