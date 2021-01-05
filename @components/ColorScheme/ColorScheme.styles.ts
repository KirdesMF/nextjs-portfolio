import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const container = css`
   position: relative;

   display: grid;
   grid-template:
      'settings btn theme' 1fr
      /1fr 1fr 1fr;
   place-items: center;
   background: transparent;
`;

export const theme = css`
   position: relative;
   grid-area: theme;

   display: grid;
   place-items: center;
   font-size: 0.5em;
   font-family: 'Decovar';

   > input {
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
   }

   > span {
      display: none;
   }
`;

export const button = css`
   > svg {
      filter: drop-shadow(0 0 2px ${COLORS['black-50']});
   }
`;

export const settings = css`
   grid-area: settings;

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
