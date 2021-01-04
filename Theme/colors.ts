import {
   generateAdaptiveTheme,
   NamedColorScale,
} from '@adobe/leonardo-contrast-colors';

const BASE_COLORS = {
   intro: '#080705',
   home: 'hsl(208, 50%, 46%)',
   about: '#D72638',
   works: '#F4D35E',
   contact: '#80D39B',
   black: '#080705',
   white: '#E0DFD5',
};

const RATIOS = {
   50: -1.5,
   100: 1,
   200: 2,
   300: 3,
   450: 4.5,
   700: 7,
   1100: 11,
};

type RatioType = keyof typeof RATIOS;
type BaseType = keyof typeof BASE_COLORS;
type CustomPropType = `${BaseType}-${RatioType}`;

const createCustomProp = () => {
   const obj = {} as Record<CustomPropType, string>;
   for (const colors in BASE_COLORS) {
      for (const ratios in RATIOS) {
         const key = `${colors}-${ratios}` as CustomPropType;
         obj[key] = `var(--${colors}-${ratios})`;
      }
   }
   return {
      ...obj,
      background: 'var(--background)',
   };
};

const createRatio = (name: string, ratios: Record<string, number>) => {
   return Object.entries(ratios).reduce(
      (acc, [key, value]) => ({
         ...acc,
         [`${name}-${key}`]: value,
      }),
      {} as Record<string, number>
   );
};

const SCALES: NamedColorScale[] = [
   {
      name: 'intro',
      colorKeys: [BASE_COLORS.intro],
      colorspace: 'HSL',
      ratios: createRatio('intro', RATIOS),
   },
   {
      name: 'home',
      colorKeys: [BASE_COLORS.home],
      colorspace: 'HSL',
      ratios: createRatio('home', RATIOS),
   },
   {
      name: 'about',
      colorKeys: [BASE_COLORS.about],
      colorspace: 'HSL',
      ratios: createRatio('about', RATIOS),
   },
   {
      name: 'works',
      colorKeys: [BASE_COLORS.works],
      colorspace: 'HSL',
      ratios: createRatio('works', RATIOS),
   },
   {
      name: 'contact',
      colorKeys: [BASE_COLORS.contact],
      colorspace: 'HSL',
      ratios: createRatio('contact', RATIOS),
   },
   {
      name: 'white',
      colorKeys: [BASE_COLORS.white],
      colorspace: 'HSL',
      ratios: createRatio('white', RATIOS),
   },
   {
      name: 'black',
      colorKeys: [BASE_COLORS.black],
      colorspace: 'HSL',
      ratios: createRatio('black', RATIOS),
   },
];

const generateTheme = (baseScale: string) =>
   generateAdaptiveTheme({
      colorScales: [...SCALES],
      baseScale: baseScale,
      output: 'HSL',
   });

const COLORS = createCustomProp();

export { COLORS, generateTheme };
