import 'styled-components';
import { ColorsType } from 'Theme/colors';
import { BreakpointType } from 'Theme/breakpoints';
import { FontsType } from 'Theme/fonts';

declare module 'styled-components' {
   export interface DefaultTheme {
      colors: ColorsType & {
         [key: string]: string;
      };
      breakpoints?: BreakpointType;
      fonts?: FontsType;
   }
}
