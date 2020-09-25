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
   z-index: 3;
   overflow: hidden;
   width: 100%;
   height: 100%;
`;

/**
 * Works Layout
 */
const works = css`
   z-index: 15;
   position: relative;

   width: 100%;
   height: 100%;
   display: grid;

   display: grid;
   place-items: center;
`;

/**
 * Contact Layout
 */
const contact = css`
   z-index: 15;
   position: relative;

   width: 100%;
   height: 100%;
   display: grid;

   display: grid;
   grid-template:
      '. . .' 15%
      '. resume .' 1fr
      '. . .' 1fr
      '. button .' 20%
      /20% 1fr 20%;

   place-items: center;
`;

/**================= Export ================ */
/**
 * Object storing Layouts Pages
 */
export const CSSLayout = {
   home,
   about,
   works,
   contact,
};
