import { css } from '@linaria/core';

const intro = css`
   height: 100%;
`;

/**
 * Home Layout
 */
const home = css`
   height: 100%;
   display: grid;
   place-items: center;
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
   row-gap: 2%;
   place-items: center;
`;

const projects = css`
   height: 100%;

   display: grid;
   row-gap: 2%;
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
