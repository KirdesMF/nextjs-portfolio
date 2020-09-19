import { css } from 'linaria';

/**
 * Home Layout
 */
const home = css`
   width: 100%;
   height: 100%;
   position: relative;

   display: grid;
   grid-template: 1fr 20%/ 1fr;
   place-items: center;
`;

/**
 * About Layout
 */
const about = css`
   width: 100%;
   height: 100%;
   display: grid;
`;

/**
 * Works Layout
 */
const works = css`
   width: 100%;
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
