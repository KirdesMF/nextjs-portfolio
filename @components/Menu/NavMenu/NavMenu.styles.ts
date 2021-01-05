import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const section = css`
   position: fixed;
   width: 100%;
   height: 100%;

   display: grid;
   grid-template: 1fr / 35% 1fr;
`;

export const overlay = css`
   @supports (backdrop-filter: blur(5px) grayscale(30%)) {
      backdrop-filter: blur(5px) grayscale(30%);
      background: unset;
   }

   background: hsla(0, 0%, 0%, 0.6);
`;

export const nav = css`
   z-index: 2;
   overflow: hidden;

   display: grid;
   grid-template: repeat(4, 1fr) / 1fr;
   place-items: center;
   row-gap: 3rem;

   background: ${COLORS.background};
   box-shadow: 0px 0px 2px black;

   padding: 10rem 0;
`;

export const anchor = css`
   width: 105%;
   overflow: hidden;

   display: grid;
   place-items: center;

   transform: rotate(2deg);
   background: ${COLORS.background};
   box-shadow: 0px 0px 6px black;

   font-variation-settings: 'wght' 800, 'YTUC' 700, 'XOPQ' 100;
   text-transform: uppercase;
   transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);

   @media (hover: hover) and (pointer: fine) {
      &:hover {
         font-variation-settings: 'wght' 900, 'YTUC' 800, 'XOPQ' 230;
         box-shadow: 0px 0px 2px black;
      }
   }

   &:nth-child(odd) {
      transform-origin: left;
   }

   &:nth-child(even) {
      transform-origin: right;
   }
`;

export const span = css`
   pointer-events: none;
   display: grid;
   place-items: center;
   font-family: 'Amstelvar';
   font-size: 2em;
   text-shadow: 0px 0px 2px black;
   padding: 0.5em 0.5em;

   &[data-active='active'] {
      filter: blur(5px) grayscale(90%);
      text-decoration: line-through;
   }
`;
