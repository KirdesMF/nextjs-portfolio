import 'styled-components';
import { BreakpointType } from 'Theme/breakpoints';
import { FontsType } from 'Theme/fonts';

declare module 'styled-components' {
   export interface DefaultTheme {
      colors: {
         [key: string]: string;
      };
      breakpoints?: BreakpointType;
      fonts?: FontsType;
   }
}
// import {} from 'styled-components';
// import theme from '../theme';
// declare module 'styled-components' {
// type Theme = typeof theme;
// export interface DefaultTheme extends Theme {}
// }
