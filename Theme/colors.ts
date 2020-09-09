export type ColorName = keyof typeof COLORS_VAR;

type Mode = {
   light: string;
   dark: string;
   contrast: string;
};

type HSLType = {
   hue: string;
   saturation: Mode;
   lightness: Mode;
};
type BreakpointType = typeof breakpoints;
type ColorsType = Record<ColorName, HSLType>;

export const COLORS_VAR = {
   welcome: `hsl(20, 50%, 50%)`,
   home: `hsl(50, 50%, 50%)`,
   about: `hsl(150, 50%, 50%)`,
   works: `hsl(250, 50%, 50%)`,
   contact: `hsl(350, 50%, 50%)`,
   white: `hsl(20, 50%, 100%)`,
   black: `hsl(0, 50%, 0%)`,
} as const;

const ColorsTheme: ColorsType = {
   welcome: {
      hue: '20',
      saturation: {
         light: '50%',
         dark: '50%',
         contrast: '100%',
      },
      lightness: {
         light: '50%',
         dark: '10%',
         contrast: '50%',
      },
   },
   home: {
      hue: '50',
      saturation: {
         light: '50%',
         dark: '50%',
         contrast: '100%',
      },
      lightness: {
         light: '50%',
         dark: '10%',
         contrast: '50%',
      },
   },
   about: {
      hue: '150',
      saturation: {
         light: '50%',
         dark: '50%',
         contrast: '100%',
      },
      lightness: {
         light: '50%',
         dark: '10%',
         contrast: '50%',
      },
   },
   works: {
      hue: '250',
      saturation: {
         light: '50%',
         dark: '50%',
         contrast: '100%',
      },
      lightness: {
         light: '50%',
         dark: '10%',
         contrast: '50%',
      },
   },
   contact: {
      hue: '350',
      saturation: {
         light: '50%',
         dark: '50%',
         contrast: '100%',
      },
      lightness: {
         light: '50%',
         dark: '10%',
         contrast: '50%',
      },
   },
   black: {
      hue: '0',
      saturation: {
         light: '0%',
         dark: '0%',
         contrast: '0%',
      },
      lightness: {
         light: '0%',
         dark: '0%',
         contrast: '0%',
      },
   },
   white: {
      hue: '20',
      saturation: {
         light: '100%',
         dark: '100%',
         contrast: '100%',
      },
      lightness: {
         light: '100%',
         dark: '100%',
         contrast: '100%',
      },
   },
};

const breakpoints = {
   medium: `screen and (min-width: 70em)`,
   large: `screen and (min-width: 90em)`,
} as const;

function keyToCSS(key: string) {
   return `var(--color-${key.toLowerCase()})`;
}

function shadeColor(key: string, percent: string) {
   return `hsl(var(--${key}-h), var(--${key}-s), calc(var(--${key}-l) ${percent}%))`;
}

function createCSSVariables(colors: ColorsType, breakpoints: BreakpointType) {
   const setTheme = Object.entries(colors).reduce(
      (acc, [key, value]) => ({
         ...acc,
         light: {
            ...acc.light,
            [`--${key}-h`]: value.hue,
            [`--${key}-s`]: value.saturation.light,
            [`--${key}-l`]: value.lightness.light,
            [`--color-${key}`]: `hsl(var(--${key}-h), var(--${key}-s), var(--${key}-l))`,
         },
         dark: {
            ...acc.dark,
            [`--${key}-s`]: value.saturation.dark,
            [`--${key}-l`]: value.lightness.dark,
         },
         contrast: {
            ...acc.contrast,
            [`--${key}-s`]: value.saturation.contrast,
            [`--${key}-l`]: value.lightness.contrast,
         },
      }),
      {} as Record<keyof Mode, Record<string, string>>
   );

   const VAR = Object.keys(colors).reduce(
      (acc, key) => ({
         ...acc,
         [key]: keyToCSS(key),
      }),
      {} as Record<keyof typeof colors, string>
   );

   const SHADE = Object.keys(colors).reduce(
      (acc, key) => ({
         ...acc,
         [key]: (percent: string) => shadeColor(key, percent),
      }),
      {} as Record<keyof typeof colors, (percent: string) => string>
   );

   const BREAKPOINTS = breakpoints;

   return {
      BREAKPOINTS,
      COLORS: {
         setTheme,
         VAR,
         SHADE,
      },
   };
}

export const THEME = createCSSVariables(ColorsTheme, breakpoints);
