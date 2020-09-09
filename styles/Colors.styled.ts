import { createGlobalStyle } from 'styled-components';
import { THEME } from 'Theme/colors';

const Colors = createGlobalStyle`

   html{
      ${THEME.COLORS.setTheme.light}
      --box-shadow-big: 0px 0px 30px 10px black;
      --box-shadow-thin: 0px 0px 10px 0px black;
      --filter-canvas: 100%;
   } 

   html[data-theme = 'dark']{
      ${THEME.COLORS.setTheme.dark};
      --filter-canvas: 0%;
   }

   html[data-theme = 'contrast']{
      ${THEME.COLORS.setTheme.contrast};
      --filter-canvas: 0%;
   }
`;

export default Colors;
