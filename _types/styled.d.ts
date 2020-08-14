import 'styled-components';
import { BreakpointType } from 'Theme/breakpoints';
import { FontsType } from 'Theme/fonts';
import { TColors } from 'context/AppContext';

declare module 'styled-components' {
   export interface DefaultTheme {
      colors: {
         [key in keyof TColors]: string;
      };
      breakpoints?: BreakpointType;
      fonts?: FontsType;
   }
}
