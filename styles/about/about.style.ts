import { css } from 'linaria';
import THEME from 'Theme/theme';

const left = css`
   width: 100%;
   height: 100%;

   display: grid;
   grid-template:
      '. .' 15%
      'art .' 1fr
      'btn btn' 15%
      '. .' 5%
      /2fr 1fr;

   row-gap: 2%;

   place-items: center;
`;

const presentation = css`
   grid-area: art;

   place-self: center;

   display: grid;
   grid-auto-flow: row;

   > span {
      overflow: hidden;
      font-family: ${THEME.FONTS.amstelvar};
      font-size: 2rem;
      font-variation-settings: 'wght' 600, 'YTLC' 450;
      color: ${THEME.COLORS['secondary-500']};
      text-shadow: 0px 0px 2px black;
      transform-origin: left;
   }
`;

const button = css`
   grid-area: btn;

   width: 100%;
   height: 100%;

   background: ${THEME.COLORS.background};
   color: ${THEME.COLORS['secondary-400']};
   text-shadow: 0px 0px 2px black;
   box-shadow: ${THEME.SHADOWS['--box-thin']} black;

   font-family: ${THEME.FONTS.amstelvar};
   font-size: 2.5rem;
   font-variation-settings: 'wght' 500, 'GRAD' 0.5, 'YTLC' 400;
   letter-spacing: 0em;

   transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

   @media (hover: hover) and (pointer: fine) {
      &:hover {
         box-shadow: ${THEME.SHADOWS['--box-big']} black;
         font-variation-settings: 'wght' 800, 'GRAD' 0.9, 'YTLC' 500;
         letter-spacing: 0.2em;
         transform: scaleY(1.1);
      }
   }
`;

export default {
   left,
   presentation,
   button,
};
