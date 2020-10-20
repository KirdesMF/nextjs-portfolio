import { css } from 'linaria';

/**
 * Home Layout
 */
const home = css`
   overflow: hidden;
   width: 100%;
   height: 100%;

   overflow: hidden;
   display: grid;
   grid-template:
      '.' 25%
      'nav' 1fr
      '.' 15%
      /1fr;
`;

/**
 * About Layout
 */
const about = css`
   position: relative;
   overflow: hidden;
   width: 100%;
   height: 100%;

   display: grid;
   grid-template:
      '. .' 15%
      'art .' 1fr
      'btn btn' 15%
      '. .' 5%
      /2fr 1fr;

   row-gap: 2%;
   place-items: center;
`;

const skills = css`
   position: relative;
   overflow: hidden;
   width: 100%;
   height: 100%;

   display: grid;
`;

/**
 * Works Layout
 */
const works = css`
   position: relative;
   overflow: hidden;
   width: 100%;
   height: 100%;

   display: grid;
   grid-template:
      '. .' 15%
      'art .' 1fr
      'btn btn' 15%
      '. .' 5%
      /2fr 1fr;

   row-gap: 2%;

   place-items: center;
`;

const projects = css`
   position: relative;
   overflow: hidden;
   width: 100%;
   height: 100%;

   display: grid;
   grid-template:
      '.' 1fr
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

   display: grid;
   grid-template:
      '. .' 15%
      'art .' 1fr
      'btn btn' 15%
      '. .' 5%
      /2fr 1fr;

   row-gap: 2%;
   place-items: center;
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
