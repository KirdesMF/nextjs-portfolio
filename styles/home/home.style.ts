import { css } from 'linaria';
import THEME from 'Theme/theme';

// Global section home
const anchor = css`
   &[data-area='about'] {
      grid-area: about;
      transform-origin: 0 0;
      transform: rotateX(15deg);
   }

   &[data-area='works'] {
      grid-area: works;
   }

   &[data-area='contact'] {
      grid-area: contact;
   }
`;

const span = css`
   font-family: ${THEME.FONTS.amstelvar};
   font-size: 8vw;
   font-variation-settings: 'wght' 800;
   color: white;
`;

export default {
   anchor,
   span,
};
