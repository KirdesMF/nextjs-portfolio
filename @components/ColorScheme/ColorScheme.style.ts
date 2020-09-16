import { css } from 'linaria';

export const container = css`
   display: grid;
   grid-template: 1fr / 0.5fr 1fr 1fr;
   place-items: center;
   background: transparent;
`;

export const theme = css`
   display: grid;
   grid-template: 1fr 1fr / 1fr;
   place-items: center;
   row-gap: 1em;

   font-size: 0.5em;
   font-family: 'Decovar';

   > label {
      display: grid;
      grid-template: 1fr / 0.5fr 1fr;
      column-gap: 1em;
      place-items: center;
   }
`;

export const settings = css`
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
