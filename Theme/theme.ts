import { COLORS } from '@components/ColorScheme/utils/scheme';
import { css } from 'linaria';

function setCSSVar(properties: Record<string, string>) {
   const css = {} as Record<string, string>;

   for (const keys in properties) {
      css[keys] = `var(${keys})`;
   }

   return css;
}

const BREAKPOINTS = {
   medium: `screen and (min-width: 70em)`,
   large: `screen and (min-width: 90em)`,
};

const FONTS = {
   amstelvar: 'Amstelvar',
   decovar: 'Decovar',
};

const shadows = {
   '--box-thin': '0px 0px 5px',
   '--box-big': '0px 0px 15px',
   '--paper-shadow-top': '0px 15px 10px -10px ',
   '--paper-shadow-bot': '0px -15px 8px -10px',
   '--paper-shadow-left': '15px 0px 8px -10px ',
   '--paper-shadow-right': '-15px 0px 8px -10px',
};

const SHADOWS = setCSSVar(shadows) as Record<keyof typeof shadows, string>;

const THEME = {
   BREAKPOINTS,
   FONTS,
   COLORS,
   SHADOWS,
};

export default THEME;

export const globals = css`
   :global(html) {
      ${shadows}
   }
`;
