import { BREAKPOINTS } from 'Theme/breakpoints';

import { css } from '@linaria/core';

export const header = css`
   position: fixed;
   z-index: 25;
   transition: box-shadow 500ms ease-in-out, background-color 1s ease-in-out;

   @media ${BREAKPOINTS.large} {
      top: 0;
      width: 100%;

      display: grid;
      grid-template:
         'menu title . scheme .' 1fr
         /10% 25% 1fr 25% 20%;

      & [data-area='menu'] {
         grid-area: menu;
      }

      & [data-area='scheme'] {
         grid-area: scheme;
      }
   }
`;
