import { css } from '@linaria/core';
import { BREAKPOINTS } from 'Theme/breakpoints';
import { COLORS } from 'Theme/colors';

export const scheme = css`
   grid-area: scheme;

   display: grid;
   grid-template-columns: 2fr 0.5fr 1fr;
   grid-template-rows: 1fr;
   direction: rtl;

   @media ${BREAKPOINTS.large} {
      direction: ltr;
   }
`;

export const range = css`
   display: grid;
   grid-template: 1fr 1fr / 1fr;
   place-items: center;
   row-gap: 1em;

   font-size: 0.5em;
   font-family: 'Decovar';

   > label {
      display: grid;
      grid-template: 1fr / 1fr 1fr;
      column-gap: 1em;
   }
`;

export const btnRange = css`
   > svg {
      height: 2rem;
      filter: drop-shadow(0 0 2px ${COLORS['black-50']});
   }
`;

export const inputTheme = css`
   grid-area: 1 / 3 / -1 / 4;
   place-self: center;
   opacity: 0;

   &:focus + label[for='theme'] {
      outline: 1px solid grey;
   }
`;

export const theme = css`
   grid-area: 1 / 3 / -1 / 4;
   place-self: center;

   > span {
      display: none;
   }
`;
