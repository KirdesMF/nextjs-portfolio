import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';
import { FONTS } from 'Theme/fonts';

export const nav = css`
   height: 60%;
   width: 60%;
   overflow: hidden;
   display: grid;
   grid-template:
      'about' 1fr
      'works' 1fr
      'contact' 1fr
      / 1fr;
   row-gap: 1em;
   place-items: center;

   box-shadow: 0px 0px 5px ${COLORS.works};
   transform: translate3d(0, 0, 0);
   border-radius: 10px;
   padding: 2rem 0;
   background: ${COLORS.text};
`;

export const span = css`
   overflow: hidden;

   font-family: ${FONTS.amstelvar};
   font-variation-settings: 'wght' 800, 'GRAD' 0.5, 'XOPQ' 100;
   text-shadow: 0px 0px 3px black;
   font-size: 3vw;

   transition: font-variation-settings 500ms ease;
   transition-delay: 500ms;
`;

export const div = css`
   --size: calc(110% / 4);
   --offset: calc(-1 * var(--size));

   transform: translate3d(var(--offset), 0, 0);

   display: grid;
   grid-template: 1fr / repeat(5, var(--size));
   place-items: center;
   column-gap: 0;

   animation: marquee 40s linear infinite;
   transition: column-gap 800ms ease;

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

export const anchor = css`
   --rotate: rotate(2deg);

   width: 110%;
   height: 100%;
   overflow: hidden;

   background: ${COLORS.text};
   box-shadow: 0px 0px 5px ${COLORS.works};

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
         column-gap: 3rem;

         .${span} {
            font-variation-settings: 'wght' 900, 'GRAD' 0.9, 'XOPQ' 230;
         }

         .${div} {
            column-gap: 5rem;
            animation-play-state: paused;
         }
      }
   }

   &[data-area='about'] {
      grid-area: about;
      color: ${COLORS.works};
   }

   &[data-area='works'] {
      --rotate: rotate(-2deg);
      grid-area: works;
      transform-origin: right;
      color: ${COLORS.works};
   }

   &[data-area='contact'] {
      grid-area: contact;
      color: ${COLORS.works};
   }
`;
