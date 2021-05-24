import { css } from 'linaria';

const baseColors = {
   home: `hsl(300, 50%, 50%)`,
   works: `hsl(10, 50%, 50%)`,
   about: `hsl(180, 50%, 50%)`,
   contact: `hsl(70, 50%, 50%)`,
   text: `hsl(0, 0%, 10%)`,
   background: `hsl(0, 15%, 90%)`,
};

const darkTheme = {
   home: `hsl(340, 50%, 20%)`,
   works: `hsl(200, 50%, 20%)`,
   about: `hsl(180, 50%, 20%)`,
   contact: `hsl(70, 50%, 20%)`,
   text: `hsl(0, 15%, 90%)`,
   background: `hsl(0, 0%, 10%)`,
};

const contrastTheme = {
   home: `hsl(340, 80%, 50%)`,
   works: `hsl(200, 80%, 50%)`,
   about: `hsl(180, 80%, 50%)`,
   contact: `hsl(70, 80%, 50%)`,
   text: `hsl(0, 80%, 95%)`,
   background: `hsl(0, 0%, 0%)`,
};

type HSLColor = {
   name: string;
   h: number;
   s: number;
   l: number;
};

type KeyColors = keyof typeof baseColors;

export const getHSLNumberfromHSLString = (color: string) => {
   const match = color.match(/\d+/g)!;

   return {
      h: parseInt(match[0], 10),
      s: parseInt(match[1], 10),
      l: parseInt(match[2], 10),
   };
};

const convertBaseColors = (colors: typeof baseColors): HSLColor[] => {
   return Object.entries(colors).map(([k, v]) => {
      const hsl = getHSLNumberfromHSLString(v);
      return {
         ...hsl,
         name: k,
      };
   });
};

const getCssVarFromHSLColor = (color: HSLColor) => {
   const hue = `--h-${color.name}`;
   const saturation = `--s-${color.name}`;
   const lightness = `--l-${color.name}`;
   const cssVar = `--color-${color.name}`;

   return {
      [hue]: `${color.h}`,
      [saturation]: `${color.s}%`,
      [lightness]: `${color.l}%`,
      [cssVar]: `hsl(var(${hue}), var(${saturation}), var(${lightness}))`,
   };
};

const createTheme = (settings: HSLColor[]) => {
   return settings.reduce((acc, curr) => {
      return {
         ...acc,
         ...getCssVarFromHSLColor(curr),
      };
   }, {});
};

const getCssVariables = (colors: typeof baseColors) => {
   return Object.keys(colors).reduce((acc, curr) => {
      return {
         ...acc,
         [curr]: `var(--color-${curr})`,
      };
   }, {} as Record<KeyColors, string>);
};

/**
 * Adjust Saturation
 * Saturation can be adjusted by multiplying by a value greater than 0.
 * Values between 0 and 1 will decrease saturation,
 * while values greater than 1 will increate saturation.
 *
 * @param name
 * @param value
 */
export const adjustSaturation = (name: KeyColors, value: number) => {
   return `hsl(
     var(--h-${name}),
     calc(var(--s-${name}) * ${value}),
     var(--l-${name})
   )`;
};

/**
 * This formula uses saturation + (100% - saturation) * v
 * to increase saturation from the current saturation to full.
 * A value of 0 will have no effect
 * and a value of 1 will be 100% saturated.
 *
 * @param name
 * @param value
 */
export const adjustLightness = (name: KeyColors, value: number) => {
   return `hsl(
     var(--h-${name}),
     var(--s-${name}),
     calc(var(--l-${name}) * ${value})
   )`;
};

export const COLORS = getCssVariables(baseColors);

export const globalColors = css`
   :global() {
      :root {
         ${createTheme(convertBaseColors(baseColors))};
      }

      :root[data-theme='dark'] {
         ${createTheme(convertBaseColors(darkTheme))};
      }

      :root[data-theme='contrast'] {
         ${createTheme(convertBaseColors(contrastTheme))};
      }

      body {
         background: ${COLORS.background};
      }
   }
`;
