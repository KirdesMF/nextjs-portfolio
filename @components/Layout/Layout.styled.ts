import { css } from 'linaria';

/**
 * Home Layout
 */
const home = css`
   width: 100%;
   height: 100%;
   display: grid;
`;

/**
 * About Layout
 */
const about = css`
   width: 100%;
   height: 100%;
   display: grid;
   background: blue;
`;

/**
 * Works Layout
 */
const works = css`
   width: 100%;
   height: 100%;
   display: grid;
   background: green;
`;

/**
 * Contact Layout
 */
const contact = css`
   width: 100%;
   height: 100%;
   display: grid;
   background: red;
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
