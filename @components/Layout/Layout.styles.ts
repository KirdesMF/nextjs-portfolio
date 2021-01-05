import { css } from '@linaria/core';

const intro = css`
   width: 100%;
   height: 100%;

   display: grid;
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
   grid-template:
      '. . .  ' 20%
      '. code .' 1fr
      '. libs .' 1fr
      '. tools .' 1fr
      '. . . ' 10%
      /15% 1fr 15%;
`;

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
      '. . .' 15%
      '. card .' 1fr
      '. . . ' 15%
      /10% 1fr 15%;
   place-items: center;
   column-gap: 2rem;
`;

export const CSSLayout = {
   intro,
   home,
   about,
   skills,
   works,
   projects,
   contact,
};
