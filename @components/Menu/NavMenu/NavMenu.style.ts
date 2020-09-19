import { css } from 'linaria';
import theme from 'Theme/theme';

const shadow = theme.SHADOWS['--box-big'];
const black = theme.COLORS['grey-100'];

const nav = css`
   position: fixed;
   width: 100%;
   height: 100%;

   display: grid;
   grid-template: 1fr / repeat(4, 1fr);
`;

const anchor = css`
   display: grid;
   place-items: center;

   background: ${theme.COLORS['secondary-300']};
   box-shadow: ${shadow} black;

   &:hover > span::after {
      width: 100%;
   }
`;

const span = css`
   display: inline-block;
   font-family: 'Amstelvar';
   font-size: 2em;
   color: ${theme.COLORS['secondary-700']};

   &[data-active='active'] {
      filter: blur(5px);
   }

   &::after {
      content: '';
      display: block;
      width: 20%;
      height: 2px;
      background: ${theme.COLORS['secondary-700']};
      transition: width 500ms ease-in-out;
   }
`;

const svg = css`
   filter: drop-shadow(0 0 5px ${theme.COLORS['grey-200']});
   position: absolute;
   bottom: 0%;
   height: 30%;
   width: 100%;
`;

const path = css`
   stroke-width: 2;
   stroke-linecap: round;
   fill: ${theme.COLORS['grey-200']};
`;

export default {
   nav,
   svg,
   path,
   anchor,
   span,
};
