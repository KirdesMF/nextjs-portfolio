import { css } from 'linaria';
import THEME from 'Theme/theme';

const nav = css`
   grid-area: nav;
   overflow: hidden;

   display: grid;
   grid-template: 1fr / repeat(3, 1fr);
   column-gap: 2em;
`;

const anchor = css`
   display: grid;
   grid-template: 1fr / 1fr;
   place-items: center;

   > svg {
      width: 100%;
      height: 100%;
      grid-area: 1 / -1;

      opacity: 0.5;
      fill: ${THEME.COLORS['primary-400']};
      filter: drop-shadow(0 0 15px ${THEME.COLORS['grey-50']});
      stroke-width: 0.5;
      stroke: ${THEME.COLORS['primary-700']};

      > polygon {
         /* animation: rotate infinite 2s cubic-bezier(0.785, 0.135, 0.15, 0.86); */
      }
   }

   @keyframes rotate {
      from {
         transform: scale(1) rotate(-360deg);
      }
      50% {
         transform: scale(0.6);
      }
      to {
         transform: scale(1) rotate(360deg);
      }
   }
`;

const span = css`
   pointer-events: none;
   display: grid;
   place-items: center;
   z-index: 1;
   grid-area: 1 / -1;
   text-transform: uppercase;
   font-family: ${THEME.FONTS.amstelvar};
   font-size: 3rem;
   font-variation-settings: 'XOPQ' 210, 'YTUC' 800;
   color: ${THEME.COLORS['primary-700']};

   filter: drop-shadow(0 0 15px ${THEME.COLORS['grey-50']});
`;

export default {
   nav,
   anchor,
   span,
};
