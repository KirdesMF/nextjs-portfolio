import { COLORS } from '@components/AdaptiveColorScheme/scheme';
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
};

const SHADOWS = setCSSVar(shadows) as Record<keyof typeof shadows, string>;

const theme = {
   BREAKPOINTS,
   FONTS,
   COLORS,
   SHADOWS,
};

export default theme;

export const html = css`
   :global() {
      :root {
         ${shadows}
      }
   }
`;
