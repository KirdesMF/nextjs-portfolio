import { css } from 'linaria';
import THEME from 'Theme/theme';

const nav = css`
   --width: 3rem;
   --height: 3rem;

   position: relative;

   grid-area: 2 / 1 / 3 / 3;
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

   &[data-anchor='about'] {
      left: 4rem;
   }

   &[data-anchor='works'] {
      left: 8rem;
   }

   &[data-anchor='contact'] {
      left: 12rem;
   }
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
      transform: rotate(180deg);
   }
`;

export default {
   nav,
   anchor,
   button,
};
