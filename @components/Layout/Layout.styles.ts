import { css } from '@linaria/core';
import { adjustLightness, COLORS } from 'Theme/colors';

const intro = css`
   height: 100%;
   width: 100%;
`;

/**
 * Home Layout
 */
const home = css`
   position: relative;
   min-height: 100vh;

   width: 80%;
   margin: 0 auto;

   display: grid;
   place-items: center;

   & > nav {
      display: grid;
      place-items: center start;
      font-size: calc(1rem + 20vmin);
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
      line-height: 0.9em;

      & a {
         display: grid;
         grid-auto-flow: column;
         place-items: baseline;
         color: ${COLORS.text};
      }
      & > a > span {
         height: calc(1rem + 1.5vmin);
         width: calc(1rem + 1.5vmin);
         background: ${COLORS.contact};
         border-radius: 50%;
         display: block;
      }
   }
`;

/**
 * About Layout
 */
const about = css`
   height: 100%;
   display: grid;
   place-items: center;
`;

const works = css`
   height: 100%;
   display: grid;
   place-items: center;
`;

const projects = css`
   height: 100%;
   display: grid;
`;

/**
 * Contact Layout
 */
const contact = css`
   width: 100%;
   height: 100%;

   display: grid;
   place-items: center;
   column-gap: 2rem;
`;

export const CSSLayout = {
   intro,
   home,
   about,
   works,
   projects,
   contact,
};
