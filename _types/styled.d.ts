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
