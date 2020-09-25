import { css } from 'linaria';
import THEME from 'Theme/theme';

// Global section home

const nav = css`
   overflow: hidden;

   height: 100%;

   display: grid;
   grid-template:
      '.' 25%
      'about' 1fr
      'works' 1fr
      'contact' 1fr
      '.' 15%
      / 1fr;
   row-gap: 1.5em;
   place-items: center;
`;

const logo = css`
   grid-area: 1 / 1 / 6 / 2;

   display: grid;
   place-items: center;

   > svg {
      filter: drop-shadow(0 0 5px black);
   }
`;

const social = css`
   display: grid;
   grid-auto-flow: column;

   place-items: center;
`;

const anchor = css`
   --rotate: rotate(2deg);

   width: 105%;
   height: 100%;
   overflow: hidden;

   background: ${THEME.COLORS.background};
   box-shadow: ${THEME.SHADOWS['--box-thin']} black;

   transform: var(--rotate) scaleY(1);
   transform-origin: left;
   transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55),
      box-shadow 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

   display: grid;
   place-items: center;

   @media (hover: hover) and (pointer: fine) {
      &:hover,
      &:focus {
         transform: var(--rotate) scaleY(1.1);
         box-shadow: ${THEME.SHADOWS['--box-big']} black;
      }
   }

   &[data-area='about'] {
      grid-area: about;
   }

   &[data-area='works'] {
      --rotate: rotate(-2deg);
      grid-area: works;
      transform-origin: right;
   }

   &[data-area='contact'] {
      grid-area: contact;
   }

   &[data-area='skills'] {
      grid-area: skills;
   }
`;

const div = css`
   --size: calc(100% / 4);
   --offset: calc(-1 * var(--size));

   width: 100%;
   transform: translate3d(var(--offset), 0, 0);

   display: grid;
   grid-template: 1fr / repeat(5, var(--size));
   place-items: center;

   animation: marquee 40s linear infinite;
   will-change: tranform;

   &[data-name='works'] {
      animation: marquee 35s linear infinite reverse;
      animation-delay: 500ms;
   }

   @keyframes marquee {
      from {
         transform: translate3d(var(--offset), 0, 0);
      }
      to {
         transform: translate3d(0, 0, 0);
      }
   }
`;

const span = css`
   overflow: hidden;

   font-family: ${THEME.FONTS.amstelvar};
   font-variation-settings: 'wght' 800, 'GRAD' 0.5, 'XOPQ' 100;
   text-shadow: 0px 0px 3px black;
   font-size: 4vw;

   color: ${THEME.COLORS['secondary-400']};
   transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

   @media (hover: hover) and (pointer: fine) {
      &:hover {
         font-variation-settings: 'wght' 900, 'GRAD' 0.9, 'XOPQ' 230;
      }
   }
`;

export default {
   nav,
   logo,
   social,
   anchor,
   span,
   div,
};
