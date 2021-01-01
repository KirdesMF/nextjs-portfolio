import {
   generateAdaptiveTheme,
   NamedColorScale,
} from '@adobe/leonardo-contrast-colors';
import { createCSSCustomProperties } from './helpers-scheme';

const commonGrey = {
   'grey-50': -1.1,
   'grey-100': 1.1,
   'grey-200': 1.5,
   'grey-400': 4,
};

const commonGreyScale: NamedColorScale = {
   name: 'grey',
   colorKeys: ['hsl(0, 0%, 0%)', 'hsl(0, 5%, 5%)'],
   colorspace: 'LCH',
   ratios: commonGrey,
};

// WELCOME
const WELCOME_RATIOS = {
   primary: {
      'primary-100': 3,
      'primary-200': 4.5,
      'primary-300': 1.08,
      'primary-400': 1.1,
      'primary-500': 1.2,
      'primary-600': 1.3,
      'primary-700': 1.4,
   },
   secondary: {
      'secondary-300': 1,
      'secondary-400': 2,
      'secondary-500': 3,
      'secondary-600': 4.5,
      'secondary-700': 5,
   },
   tertiary: {
      'tertiary-100': 3,
      'tertiary-200': 4.5,
   },
   grey: commonGrey,
};

const WELCOME_SCALE: NamedColorScale[] = [
   {
      name: 'primary',
      colorKeys: ['hsl(0, 10%, 10%)', 'hsl(0, 15%, 10%)'],
      colorspace: 'LCH',
      ratios: WELCOME_RATIOS.primary,
   },
   {
      name: 'secondary',
      colorKeys: ['hsl(0, 10%, 10%)', 'hsl(0, 15%, 10%)'],
      colorspace: 'LCH',
      ratios: WELCOME_RATIOS.secondary,
   },
   {
      name: 'tertiary',
      colorKeys: ['hsl(250, 50%, 50%)', 'hsl(250, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: WELCOME_RATIOS.tertiary,
   },
   commonGreyScale,
];

// HOME
const HOME_RATIOS = {
   primary: {
      'primary-100': 3,
      'primary-200': 4.5,
      'primary-300': 1.08,
      'primary-400': 1.1,
      'primary-500': 1.2,
      'primary-600': 1.3,
      'primary-700': 1.4,
   },
   secondary: {
      'secondary-300': 1,
      'secondary-400': 2,
      'secondary-500': 3,
      'secondary-600': 4.5,
      'secondary-700': 5,
   },
   tertiary: {
      'tertiary-100': 3,
      'tertiary-200': 4.5,
   },
   grey: commonGrey,
};

const HOME_SCALE: NamedColorScale[] = [
   {
      name: 'primary',
      colorKeys: ['hsl(340, 50%, 50%)', 'hsl(340, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: HOME_RATIOS.primary,
   },
   {
      name: 'secondary',
      colorKeys: ['hsl(360, 50%, 50%)', 'hsl(360, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: HOME_RATIOS.secondary,
   },
   {
      name: 'tertiary',
      colorKeys: ['hsl(100, 50%, 50%)', 'hsl(100, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: HOME_RATIOS.tertiary,
   },
   commonGreyScale,
];

// ABOUT
const ABOUT_RATIOS = {
   primary: {
      'primary-100': 3,
      'primary-200': 4.5,
      'primary-300': 1.08,
      'primary-400': 1.1,
      'primary-500': 1.2,
      'primary-600': 1.3,
      'primary-700': 1.4,
   },
   secondary: {
      'secondary-300': 1,
      'secondary-400': 2,
      'secondary-500': 3,
      'secondary-600': 4.5,
      'secondary-700': 5,
   },
   tertiary: {
      'tertiary-100': 3,
      'tertiary-200': 4.5,
   },
   grey: commonGrey,
};

const ABOUT_SCALE: NamedColorScale[] = [
   {
      name: 'primary',
      colorKeys: ['hsl(75, 50%, 50%)', 'hsl(75, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: ABOUT_RATIOS.primary,
   },
   {
      name: 'secondary',
      colorKeys: ['hsl(60, 50%, 50%)', 'hsl(60, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: ABOUT_RATIOS.secondary,
   },
   {
      name: 'tertiary',
      colorKeys: ['hsl(210, 50%, 50%)', 'hsl(210, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: ABOUT_RATIOS.tertiary,
   },
   {
      name: 'grey',
      colorKeys: ['hsl(0, 0%, 0%)'],
      colorspace: 'LCH',
      ratios: ABOUT_RATIOS.grey,
   },
];

// WORKS
const WORKS_RATIOS = {
   primary: {
      'primary-100': 3,
      'primary-200': 4.5,
      'primary-300': 1.08,
      'primary-400': 1.1,
      'primary-500': 1.2,
      'primary-600': 1.3,
      'primary-700': 1.4,
   },
   secondary: {
      'secondary-300': 1,
      'secondary-400': 2,
      'secondary-500': 3,
      'secondary-600': 4.5,
      'secondary-700': 5,
   },
   tertiary: {
      'tertiary-100': 3,
      'tertiary-200': 4.5,
   },
   grey: commonGrey,
};

const WORKS_SCALE: NamedColorScale[] = [
   {
      name: 'primary',
      colorKeys: ['hsl(10, 50%, 50%)', 'hsl(10, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: WORKS_RATIOS.primary,
   },
   {
      name: 'secondary',
      colorKeys: ['hsl(15, 50%, 50%)', 'hsl(15, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: WORKS_RATIOS.secondary,
   },
   {
      name: 'tertiary',
      colorKeys: ['hsl(100, 50%, 50%)', 'hsl(100, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: WORKS_RATIOS.tertiary,
   },
   commonGreyScale,
];

// CONTACT
const CONTACT_RATIOS = {
   primary: {
      'primary-100': 3,
      'primary-200': 4.5,
      'primary-300': 1.08,
      'primary-400': 1.1,
      'primary-500': 1.2,
      'primary-600': 1.3,
      'primary-700': 1.4,
   },
   secondary: {
      'secondary-300': 1,
      'secondary-400': 2,
      'secondary-500': 3,
      'secondary-600': 4.5,
      'secondary-700': 5,
   },
   tertiary: {
      'tertiary-100': 3,
      'tertiary-200': 4.5,
   },
   grey: commonGrey,
};

const CONTACT_SCALE: NamedColorScale[] = [
   {
      name: 'primary',
      colorKeys: ['hsl(320, 50%, 50%)', 'hsl(320, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: CONTACT_RATIOS.primary,
   },
   {
      name: 'secondary',
      colorKeys: ['hsl(150, 50%, 50%)', 'hsl(150, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: CONTACT_RATIOS.secondary,
   },
   {
      name: 'tertiary',
      colorKeys: ['hsl(100, 50%, 50%)', 'hsl(100, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: CONTACT_RATIOS.tertiary,
   },
   commonGreyScale,
];
// THEME
const welcomeColorScheme = generateAdaptiveTheme({
   colorScales: [...WELCOME_SCALE],
   baseScale: 'primary',
});

const homeColorScheme = generateAdaptiveTheme({
   colorScales: [...HOME_SCALE],
   baseScale: 'primary',
});

const aboutColorScheme = generateAdaptiveTheme({
   colorScales: [...ABOUT_SCALE],
   baseScale: 'primary',
});

const worksColorScheme = generateAdaptiveTheme({
   colorScales: [...WORKS_SCALE],
   baseScale: 'primary',
});

const contactColorScheme = generateAdaptiveTheme({
   colorScales: [...CONTACT_SCALE],
   baseScale: 'primary',
});

// CSS Custom Properties
const welcomeCSSVar = createCSSCustomProperties(WELCOME_RATIOS);
const homeCSSVar = createCSSCustomProperties(HOME_RATIOS);
const aboutCSSVar = createCSSCustomProperties(ABOUT_RATIOS);
const worksCSSVar = createCSSCustomProperties(WORKS_RATIOS);
const contactCSSVar = createCSSCustomProperties(CONTACT_RATIOS);

// EXPORTS
export const COLORS = {
   ...welcomeCSSVar,
   ...homeCSSVar,
   ...aboutCSSVar,
   ...worksCSSVar,
   ...contactCSSVar,
   background: 'var(--background)',
};

export const Scheme = {
   welcome: welcomeColorScheme,
   home: homeColorScheme,
   about: aboutColorScheme,
   works: worksColorScheme,
   contact: contactColorScheme,
} as const;

// CSS
