import { css } from 'linaria';

/**
 * Home Layout
 */
const home = css`
   position: relative;
   z-index: 3;
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
   overflow-x: auto;
   width: 100%;
   height: 100%;
`;

/**
 * Works Layout
 */
const works = css`
   position: relative;
   z-index: 3;
   overflow: hidden;
   width: 100%;
   height: 100%;
`;

/**
 * Contact Layout
 */
const contact = css`
   position: relative;
   z-index: 3;
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
   works,
   contact,
};
