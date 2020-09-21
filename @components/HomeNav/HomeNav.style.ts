import { css } from 'linaria';
import THEME from 'Theme/theme';

const nav = css`
   --width: 6rem;
   --height: 6rem;

   position: relative;

   grid-area: nav;
   justify-self: center;
   align-self: start;

   display: grid;
   place-items: center;

   transition: all 1s ease;
`;

const anchor = css`
   position: absolute;
   top: 0;

   display: grid;
   place-items: center;

   width: var(--width);
   height: var(--height);

   color: ${THEME.COLORS['secondary-500']};
   background: ${THEME.COLORS['primary-300']};
   color: ${THEME.COLORS['grey-200']};
   box-shadow: ${THEME.SHADOWS['--box-thin']} ${THEME.COLORS['grey-400']};
   border-radius: 50%;

   font: 0.5em/1 'Amstelvar';
   font-variation-settings: 'wght' 600, 'opsz' 60, 'ytuc' 800, 'GRAD' -1;
   /* 
   &[data-anchor='about'] {
      transform: translateX(-50px);
   }

   &[data-anchor='works'] {
      transform: translateX(-50px);
   }

   &[data-anchor='contact'] {
      transform: translateX(-50px);
   } */
`;

const button = css`
   width: var(--width);
   height: var(--height);

   display: grid;
   place-items: center;

   outline: none; /** need style */

   background: ${THEME.COLORS['primary-300']};
   color: ${THEME.COLORS['grey-200']};
   box-shadow: ${THEME.SHADOWS['--box-big']} ${THEME.COLORS['grey-400']};
   border-radius: 50%;
   transition: box-shadow 500ms ease, transform 500ms ease;

   &:active {
      box-shadow: unset;
   }

   &:hover {
      transform: rotate(180deg) !important;
   }
`;

export default {
   nav,
   anchor,
   button,
};
