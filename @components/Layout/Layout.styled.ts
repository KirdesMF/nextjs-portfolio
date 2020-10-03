import { css } from 'linaria';

/**
 * Home Layout
 */
const home = css`
   overflow: hidden;
   width: 100%;
   height: 100%;
`;

/**
 * About Layout
 */
const about = css`
   position: relative;
   overflow: hidden;
   width: 100%;
   height: 100%;
`;

const skills = css`
   position: relative;
   overflow: hidden;
   width: 100%;
   height: 100%;
`;

/**
 * Works Layout
 */
const works = css`
   position: relative;
   overflow: hidden;
   width: 100%;
   height: 100%;
`;

const projects = css`
   position: relative;
   overflow: hidden;
   width: 100%;
   height: 100%;

   display: grid;
   grid-template:
      '.' 15%
      'carousel' 1fr
      'footer' 15%
      '.' 5%;
   row-gap: 2%;
`;

/**
 * Contact Layout
 */
const contact = css`
   position: relative;
   overflow: hidden;
   width: 100%;
   height: 100%;
`;

/**================= Export ================ */
/**
 * Object storing Layouts Pages
 */
export const CSSLayout = {
   home,
   about,
   skills,
   works,
   projects,
   contact,
};
