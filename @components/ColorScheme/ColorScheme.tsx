import React from 'react';
import {
   generateAdaptiveTheme,
   NamedColorScale,
   ReturnedTheme,
} from '@adobe/leonardo-contrast-colors';
import { createGlobalStyle } from 'styled-components';
import {
   primaryRatios,
   secondaryRatios,
   NamesColorType,
   KeysColorType,
   keysColor,
   greyRatios,
} from './color-scheme';

type Global = {
   [key in 'dark' | 'light' | 'contrast']: Record<string, string>;
};

const InjectColorTheme = createGlobalStyle<Global>`
   :root{
      ${({ light }) => light};
      --filter-canvas: 100%;
   }

   :root[data-theme = 'dark']{
      ${({ dark }) => dark};
      --filter-canvas: 5%;
   }

   :root[data-theme = 'contrast']{
      ${({ contrast }) => contrast};
      --filter-canvas: 0%;
   }


`;

function setCSSVariables(theme: ReturnedTheme) {
   let ROOT = {} as Record<string, string>;

   for (const obj of theme) {
      if ('values' in obj) {
         for (const scheme of obj.values) {
            ROOT[`--${scheme.name}`] = scheme.value;
         }
      } else {
         ROOT[`--background`] = obj.background;
      }
   }

   return ROOT;
}

function createCSSVariables() {
   let VAR = {} as Record<NamesColorType, string>;

   const background = { [`background`]: `var(--background)` };
   const ratios = { ...primaryRatios, ...secondaryRatios, ...greyRatios };

   for (const obj in ratios) {
      VAR[obj as NamesColorType] = `var(--${obj})`;
   }

   return {
      ...VAR,
      ...background,
   };
}

export default function ColorScheme({ pathname }: { pathname: KeysColorType }) {
   const primaryScale: NamedColorScale = {
      name: 'primary',
      colorspace: 'HSL',
      colorKeys: keysColor[pathname].primary,
      ratios: primaryRatios,
   };

   const secondaryScale: NamedColorScale = {
      name: 'secondary',
      colorspace: 'HSL',
      colorKeys: keysColor[pathname].secondary,
      ratios: secondaryRatios,
   };

   const greyScale: NamedColorScale = {
      name: 'grey',
      colorspace: 'HSL',
      colorKeys: keysColor[pathname].grey,
      ratios: greyRatios,
   };

   const myTheme = generateAdaptiveTheme({
      colorScales: [primaryScale, secondaryScale, greyScale],
      baseScale: 'primary',
      output: 'HEX',
      contrast: 1,
   });

   const light = setCSSVariables(myTheme(100, 1) as ReturnedTheme);
   const dark = setCSSVariables(myTheme(20, 1.5) as ReturnedTheme);
   const contrast = setCSSVariables(myTheme(5, 3) as ReturnedTheme);

   return <InjectColorTheme light={light} dark={dark} contrast={contrast} />;
}

export const CSSVAR = createCSSVariables();
