import {
   generateAdaptiveTheme,
   NamedColorScale,
} from '@adobe/leonardo-contrast-colors';

const primaryRatios = {
   'primary-lower-contrast': 1.1,
   'primary-midlow-contrast': 1.5,
   'primary-low-contrast': 2.5,
   'primary-large-text': 3,
   'primary-normal-text': 4.5,
} as const;

const secondaryRatios = {
   'secondary-lower-contrast': 1.1,
   'secondary-midlow-contrast': 1.4,
   'secondary-low-contrast': 1.9,
   'secondary-large-text': 3,
   'secondary-normal-text': 4.5,
} as const;

const greyRatios = {
   'grey-low-contrast': 1,
   'grey-large-text': 3,
   'grey-normal-text': 4.5,
   'grey-high-contrast': 9,
   'grey-highest-contrast': 12,
};

const greyKeysColor = ['hsl(0, 0%, 10%)', 'hsl(0, 0%, 20%)', 'hsl(0, 0%, 30%)'];

const keysColor = {
   welcome: {
      primary: [
         'hsl(120, 50%, 50%)',
         'hsl(120, 50%, 40%)',
         'hsl(120, 50%, 30%)',
      ],
      secondary: [
         'hsl(20, 50%, 50%)',
         'hsl(20, 50%, 40%)',
         'hsl(20, 50%, 30%)',
      ],
      grey: greyKeysColor,
   },
   home: {
      primary: [
         'hsl(270, 50%, 10%)',
         'hsl(270, 50%, 50%)',
         'hsl(270, 50%, 85%)',
      ],
      secondary: [
         'hsl(250, 50%, 50%)',
         'hsl(250, 50%, 40%)',
         'hsl(250, 50%, 30%)',
      ],
      grey: greyKeysColor,
   },
   about: {
      primary: [
         'hsl(150, 50%, 50%)',
         'hsl(150, 50%, 40%)',
         'hsl(150, 50%, 30%)',
      ],
      secondary: [
         'hsl(50, 50%, 50%)',
         'hsl(50, 50%, 40%)',
         'hsl(50, 50%, 30%)',
      ],
      grey: greyKeysColor,
   },
   works: {
      primary: [
         'hsl(200, 50%, 50%)',
         'hsl(200, 50%, 40%)',
         'hsl(200, 50%, 30%)',
      ],
      secondary: [
         'hsl(20, 50%, 50%)',
         'hsl(20, 50%, 40%)',
         'hsl(20, 50%, 30%)',
      ],
      grey: greyKeysColor,
   },
   contact: {
      primary: ['#bf4055', '#993344', '#732633'],
      secondary: [
         'hsl(250, 50%, 50%)',
         'hsl(250, 50%, 40%)',
         'hsl(250, 50%, 30%)',
      ],
      grey: greyKeysColor,
   },
};

type NamesColorType =
   | keyof typeof primaryRatios
   | keyof typeof secondaryRatios
   | keyof typeof greyRatios
   | 'background';

type KeysColorType = keyof typeof keysColor;

export { primaryRatios, secondaryRatios, greyRatios, keysColor };
export type { NamesColorType, KeysColorType };

let valve: NamedColorScale[] = [
   {
      name: 'primary',
      colorKeys: ['#5CDBFF', '#0000FF'],
      colorspace: 'LCH',
      ratios: {
         'blue--largeText': 3,
         'blue--normalText': 4.5,
      },
   },

   {
      name: 'secondary',
      colorKeys: ['#5CDBFF', '#0000FF'],
      colorspace: 'LCH',
      ratios: {
         'blue--largeText': 3,
         'blue--normalText': 4.5,
      },
   },

   {
      name: 'grey',
      colorKeys: ['#5CDBFF', '#0000FF'],
      colorspace: 'LCH',
      ratios: {
         'blue--largeText': 3,
         'blue--normalText': 4.5,
      },
   },
];

let VALVZE: NamedColorScale[] = [
   {
      name: 'primary',
      colorKeys: ['hsl(50, 50%, 50%)', 'hsl(50, 50%, 50%)'],
      colorspace: 'LCH',
      ratios: {
         'blue--largeText': 3,
         'blue--normalText': 4.5,
      },
   },

   {
      name: 'red',
      colorKeys: ['hsl(150, 50%, 50%)', 'hsl(150, 50%, 50%)'],
      colorspace: 'LCH',
      ratios: {
         'blue--largeText': 3,
         'blue--normalText': 4.5,
      },
   },

   {
      name: 'yellow',
      colorKeys: ['hsl(250, 50%, 50%)', 'hsl(250, 50%, 50%)'],
      colorspace: 'LCH',
      ratios: {
         'blue--largeText': 3,
         'blue--normalText': 4.5,
      },
   },
];

const createColorScales = (name: NamedColorScale[], baseScale: string) =>
   generateAdaptiveTheme({ colorScales: [...name], baseScale: baseScale });

export const thisTheme = createColorScales(VALVZE, 'primary')(50, 1)
console.log(createColorScales(valve, 'primary')(50, 1));
