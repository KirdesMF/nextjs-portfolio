import { css } from 'linaria';
import THEME from 'Theme/theme';

const section = css`
   position: fixed;
   width: 100%;
   height: 100%;

   display: grid;
   grid-template: 1fr / 35% 1fr;
`;

const overlay = css`
   @supports (backdrop-filter: blur(5px) grayscale(30%)) {
      backdrop-filter: blur(5px) grayscale(30%);
      background: unset;
   }

   background: hsla(0, 0%, 0%, 0.6);
`;

const nav = css`
   z-index: 2;
   overflow: hidden;

   display: grid;
   grid-template: repeat(4, 1fr) / 1fr;
   place-items: center;
   row-gap: 3rem;

   background: ${THEME.COLORS.background};
   box-shadow: ${THEME.SHADOWS['--box-thin']} black;

   padding: 10rem 0;
`;

const anchor = css`
   width: 105%;
   overflow: hidden;

   display: grid;
   place-items: center;

   transform: rotate(2deg);
   background: ${THEME.COLORS.background};
   box-shadow: ${THEME.SHADOWS['--box-big']} black;

   font-variation-settings: 'wght' 800, 'YTUC' 700, 'XOPQ' 100;
   text-transform: uppercase;
   transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

   @media (hover: hover) and (pointer: fine) {
      &:hover {
         font-variation-settings: 'wght' 900, 'YTUC' 800, 'XOPQ' 230;
         box-shadow: ${THEME.SHADOWS['--box-thin']} black;
      }
   }

   &:nth-child(odd) {
      transform-origin: left;
   }

   &:nth-child(even) {
      transform-origin: right;
   }
`;

const span = css`
   pointer-events: none;
   display: grid;
   place-items: center;
   font-family: 'Amstelvar';
   font-size: 2em;
   color: ${THEME.COLORS['secondary-400']};
   text-shadow: 0px 0px 2px black;
   padding: 0.5em 0.5em;

   &[data-active='active'] {
      filter: blur(5px) grayscale(90%);
      text-decoration: line-through;
   }
`;

export default {
   section,
   overlay,
   nav,
   anchor,
   span,
};
