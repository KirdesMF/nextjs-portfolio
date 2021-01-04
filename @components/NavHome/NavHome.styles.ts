import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';
import { FONTS } from 'Theme/fonts';

export const nav = css`
   grid-area: nav;
   height: 100%;

   display: grid;
   grid-template:
      'about' 1fr
      'works' 1fr
      'contact' 1fr
      / 1fr;
   row-gap: 1.5em;
   place-items: center;
`;

export const anchor = css`
   --rotate: rotate(2deg);

   width: 105%;
   height: 100%;
   overflow: hidden;

   background: ${COLORS['white-100']};
   box-shadow: 0px 0px 5px black;

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
         box-shadow: 0px 0px 5px black;
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

export const div = css`
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

export const span = css`
   overflow: hidden;

   font-family: ${FONTS.amstelvar};
   font-variation-settings: 'wght' 800, 'GRAD' 0.5, 'XOPQ' 100;
   text-shadow: 0px 0px 3px black;
   font-size: 4vw;

   color: ${COLORS['about-100']};
   transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

   @media (hover: hover) and (pointer: fine) {
      &:hover {
         font-variation-settings: 'wght' 900, 'GRAD' 0.9, 'XOPQ' 230;
      }
   }
`;
