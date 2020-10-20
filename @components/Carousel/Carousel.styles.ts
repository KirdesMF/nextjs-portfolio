import { css } from 'linaria';
import THEME from 'Theme/theme';

export const container = css`
   grid-area: 1 / 1 / -1 / -1;

   height: 100%;
   width: 100%;

   display: grid;
   grid-template: 15% 1fr 1fr 15% / 5% 1fr 1fr 5%;
   place-items: center;
`;

export const button = css`
   z-index: 2;
   grid-column: 2/4;
   place-self: center;

   display: grid;
   place-items: center;

   &:first-of-type {
      grid-row: 2 / 3;
   }

   &:last-of-type {
      grid-row: 3 / 4;
   }
`;

export const chevron = css`
   color: ${THEME.COLORS['secondary-400']};
   filter: drop-shadow(0 0 5px black);
   width: 5rem;
`;

export const carousel = css`
   width: 100%;
   height: 100%;

   grid-column: 1 / 3;
   grid-row: 2 / 4;

   display: grid;
   place-items: center;
`;

export const svgCarousel = css`
   grid-area: 1 / 1 / -1 / -1;

   width: 100%;
   height: 100%;

   filter: drop-shadow(0 0 3px black);

   & > line {
      fill: none;
      stroke: ${THEME.COLORS.background};
      stroke-dasharray: 300;
   }

   & > circle {
      fill: ${THEME.COLORS.background};
   }
`;

export const anchorSvg = css`
   & > text {
      font-family: ${THEME.FONTS.amstelvar};
      font-size: 1.5rem;
      text-transform: uppercase;
      fill: ${THEME.COLORS['secondary-400']};
   }
`;

export const hexes = css`
   fill: none;
   stroke-width: 50;

   &:nth-child(odd) {
      transform: rotate(15deg);
   }

   &:nth-child(even) {
      transform: rotate(-15deg);
   }

   &:nth-of-type(1) {
      stroke: ${THEME.COLORS['primary-400']};
   }

   &:nth-of-type(2) {
      stroke: ${THEME.COLORS['primary-500']};
   }

   &:nth-of-type(3) {
      stroke: ${THEME.COLORS['primary-600']};
   }

   &:nth-of-type(4) {
      stroke: ${THEME.COLORS['primary-700']};
   }
`;

export const card = css`
   grid-column: 3 / 4;
   grid-row: 2 / 4;

   width: 100%;
   height: 100%;

   display: grid;
   grid-template: repeat(3, 1fr) / 1fr;
   grid-auto-flow: row;
   row-gap: 2rem;

   > section {
      width: 100%;
      height: 100%;

      display: grid;
   }
`;

export const svgCard = css`
   width: 100%;
   height: 100%;

   filter: drop-shadow(0 0 3px black);

   > line {
      fill: none;
      stroke: ${THEME.COLORS.background};
      stroke-width: 200;
      stroke-dasharray: 200;
   }
`;
