import { css } from 'linaria';
import THEME from 'Theme/theme';

// Global section home

const article = css`
   grid-area: 1 / 1 / 6 / 2;

   display: grid;
   place-items: center;
   color: ${THEME.COLORS.background};

   > svg {
      filter: drop-shadow(0 0 5px black);
      width: 30vw;
   }
`;

const social = css`
   display: grid;
   grid-auto-flow: column;

   place-items: center;
`;

const anchor = css`
   width: 105%;
   height: 100%;
   overflow: hidden;
   transition: transform 500ms ease-in-out;
   background: ${THEME.COLORS.background};
   transform: rotate(2deg);
   transform-origin: 0 0;

   display: grid;
   place-items: center;
   box-shadow: ${THEME.SHADOWS['--box-thin']} black;

   &[data-area='about'] {
      grid-area: about;
      /* transform: rotate(5deg); */
   }

   &[data-area='works'] {
      grid-area: works;
      transform: rotate(-1.8deg);
      transform-origin: right;
   }

   &[data-area='contact'] {
      grid-area: contact;
      /* transform: rotate(5deg); */
   }

   &[data-area='skills'] {
      grid-area: skills;
      /* transform: rotate(5deg); */
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

   &:hover {
      font-variation-settings: 'wght' 900, 'GRAD' 0.9, 'XOPQ' 230;
   }
`;

export default {
   article,
   social,
   anchor,
   span,
   div,
};
