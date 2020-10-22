import { css } from 'linaria';
import THEME from 'Theme/theme';

export const container = css`
   position: relative;

   width: 70%;
   height: 80%;
   place-self: center;

   display: grid;
   grid-template:
      'icons' 1fr
      /1fr;

   box-shadow: ${THEME.SHADOWS['--box-big']} black;
   overflow: hidden;
   border-radius: 10px;
`;

export const title = css`
   position: absolute;

   top: 0;
   left: 0;

   text-transform: uppercase;
   font-family: ${THEME.FONTS.amstelvar};
   font-size: 2rem;
   color: ${THEME.COLORS['primary-500']};
`;

export const iconTitle = css`
   position: absolute;
   right: 2%;
   bottom: -40%;
   width: 10rem;
   transform: rotate(15deg);
   color: ${THEME.COLORS.background};
   opacity: 0.85;
   filter: drop-shadow(0 5px 5px black);
`;

export const list = css`
   grid-area: icons;
   place-self: center;
   width: 80%;
   display: grid;
   grid-auto-flow: column;

   & > li {
      display: grid;
      place-items: center;
   }
`;

export const icon = css`
   width: 3rem;
   color: ${THEME.COLORS['secondary-400']};
   filter: drop-shadow(0 0 5px black);
`;
