import { css } from 'linaria';
import THEME from 'Theme/theme';

export const section = css`
   grid-area: 1 / 1 /-1/-1;

   height: 100%;
   width: 100%;

   display: grid;
   grid-template: repeat(3, 1fr) / 5% 1fr 1fr 5%;
   place-items: center;
`;

export const carousel = css`
   grid-row: 1 / -1;
   position: relative;

   &[data-area='one'] {
      grid-column: 1 / 3;
   }

   &[data-area='two'] {
      grid-column: 3 / -1;
   }

   overflow: hidden;
   height: 20vw;
   width: 20vw;
   display: grid;
   place-items: center;

   border-radius: 50%;
   box-shadow: inset 0px 0px 35px black;
`;

export const circle = css`
   grid-row: 1 / -1;

   border-radius: 50%;
   filter: drop-shadow(0px 0px 5px black);

   &[data-circle='one'] {
      grid-column: 1 / 3;

      height: 25vw;
      width: 25vw;
      border: 2vw solid ${THEME.COLORS['primary-500']};
   }

   &[data-circle='two'] {
      grid-column: 1 / 3;

      height: 28vw;
      width: 28vw;
      border: 2vw solid ${THEME.COLORS['primary-600']};
   }

   &[data-circle='four'] {
      grid-column: 3 / -1;

      height: 25vw;
      width: 25vw;
      border: 2vw solid ${THEME.COLORS['primary-500']};
   }

   &[data-circle='five'] {
      grid-column: 3 / -1;

      height: 28vw;
      width: 28vw;
      border: 2vw solid ${THEME.COLORS['primary-600']};
   }
`;

export const rope = css`
   height: 100vh;
   width: 1%;

   display: grid;
   grid-template: repeat(7, 1fr) / 1fr;
   place-content: center;

   background: ${THEME.COLORS.background};
   box-shadow: ${THEME.SHADOWS['--box-thin']} black;
`;

export const dot = css`
   height: 3vh;
   width: 3vh;
   place-self: center;

   background: ${THEME.COLORS.background};
   box-shadow: ${THEME.SHADOWS['--box-thin']} black;
   border-radius: 100%;
`;

export const anchor = css`
   position: absolute;
   color: ${THEME.COLORS['secondary-400']};
   font-family: ${THEME.FONTS.amstelvar};
   text-transform: uppercase;
   white-space: nowrap;
`;

export const icon = css`
   color: ${THEME.COLORS['secondary-400']};
   width: 6vw;
   grid-area: 1 / 1 / -1 / -1;
   filter: drop-shadow(0 0 5px black);
`;

export const button = css`
   z-index: 2;
   grid-column: 2/4;
   place-self: center;

   display: grid;
   place-items: center;

   &[data-area='up'] {
      grid-row: 1 / 3;
   }

   &[data-area='down'] {
      grid-row: 2/4;
   }
`;

export const chevron = css`
   color: ${THEME.COLORS['secondary-400']};
   filter: drop-shadow(0 0 5px black);
   width: 5vw;
`;
