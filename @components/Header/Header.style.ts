import { css } from 'linaria';
import THEME from 'Theme/theme';

const header = css`
   position: fixed;
   z-index: 25;
   transition: box-shadow 500ms ease-in-out, background-color 1s ease-in-out;

   @media ${THEME.BREAKPOINTS.large} {
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

const title = css`
   grid-area: title;
   place-self: center;
   font-family: ${THEME.FONTS.amstelvar};
   font-size: 1.2rem;
   color: ${THEME.COLORS['secondary-400']};
   font-variation-settings: 'wght' 500;
   text-shadow: 0px 0px 1.2px black;
`;

export default {
   header,
   title,
};
