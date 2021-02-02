import { BREAKPOINTS } from 'Theme/breakpoints';

import { css } from '@linaria/core';

export const header = css`
   /** Mobile */
   position: fixed;
   bottom: 0;

   width: 100%;
   height: 6rem;

   display: grid;
   grid-template:
      'scheme  menu' 1fr
      / 2fr 0.5fr;

   transition: box-shadow 500ms ease-in-out, background-color 1s ease-in-out;

   /** Desktop */
   @media ${BREAKPOINTS.large} {
      top: 0;
      bottom: unset;

      grid-template:
         'menu . scheme' 1fr
         / 0.3fr 1.5fr 1fr;
   }
`;
