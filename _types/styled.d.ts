import {} from 'styled-components';
import { BreakpointType } from 'Theme/breakpoints';
import { FontsType } from 'Theme/fonts';
import { theme } from 'Theme/Theme';

type ThemeType = typeof theme;
type KeyColorsType = keyof typeof theme['COLORS']['background'];

declare module 'styled-components' {
   export interface DefaultTheme extends ThemeType {}
}
// import {} from 'styled-components';
// import theme from '../theme';
// declare module 'styled-components' {
// type Theme = typeof theme;
// export interface DefaultTheme extends Theme {}
// }
