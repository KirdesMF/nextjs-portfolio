import { css } from 'linaria';

/**
 * Home Layout
 */
const home = css`
   position: relative;
   overflow: hidden;

   height: 100%;
   display: grid;
   grid-template:
      'article' 25%
      'about' 1fr
      'works' 1fr
      'contact' 1fr
      '.' 15%
      / 1fr;
   row-gap: 1.5em;
   justify-items: center;
   align-items: center;
`;

/**
 * About Layout
 */
const about = css`
   position: relative;

   height: 100%;

   display: flex;
   flex-wrap: nowrap;

   overflow-x: auto;
   scrollbar-width: none;

   &::-webkit-scrollbar {
      display: none;
   }
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
