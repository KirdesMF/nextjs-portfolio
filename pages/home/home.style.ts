import { css } from 'linaria';
import THEME from 'Theme/theme';

// Global section home
const section = css`
   width: 100%;
   height: 100%;

   display: grid;
   grid-template:
      '. . .' 20%
      '. art .' 1fr
      '. hr .' 2%
      '. arrow .' 5%
      '. nav .' 1fr
      /20% 1fr 20%;

   justify-items: center;
`;

const article = css`
   grid-area: art;
   display: grid;
   place-items: center;
   width: 100%;
   height: 100%;

   overflow: hidden;

   > p {
      text-align: center;
      font-family: ${THEME.FONTS.amstelvar};
      font-size: 1.5em;
      color: ${THEME.COLORS['primary-500']};
   }
`;

const button = css`
   overflow: hidden;
   grid-area: arrow;
   width: 100%;
   height: 100%;

   position: relative;

   > span {
      display: grid;
      place-items: center;
      width: 100%;
      height: 100%;
   }
`;

const hr = css`
   z-index: 1;
   grid-area: hr;
   width: 100%;
   height: 3px;
   color: ${THEME.COLORS['grey-400']};
   background: ${THEME.COLORS['grey-400']};
   box-shadow: ${THEME.SHADOWS['--box-big']} ${THEME.COLORS['grey-50']};
   align-self: center;
`;

// Nav Home
const nav = css`
   grid-area: nav;
   overflow: hidden;

   display: grid;
   grid-template: 1fr / repeat(3, 1fr);
`;

const anchor = css`
   display: grid;
   grid-template: 1fr / 1fr;

   > svg {
      width: 100%;
      height: 100%;
      grid-area: 1 / -1;

      opacity: 0.5;
      fill: ${THEME.COLORS['primary-400']};
      filter: drop-shadow(0 0 15px ${THEME.COLORS['grey-50']});
      stroke-width: 0.5;
      stroke: ${THEME.COLORS['primary-700']};

      transform: rotate(30deg);
      > polygon {
         transform: scale(0) rotate(0);
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
   section,
   article,
   anchor,
   span,
   button,
   nav,
   hr,
};
