import 'styled-components';
import { ColorsType } from 'Theme/colors';
import { BreakpointType } from 'Theme/breakpoints';

declare module 'styled-components' {
   export interface DefaultTheme {
      colors: ColorsType;
      breakpoints?: BreakpointType;
   }
}
