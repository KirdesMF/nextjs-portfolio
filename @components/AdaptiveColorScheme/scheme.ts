import {
   generateAdaptiveTheme,
   NamedColorScale,
} from '@adobe/leonardo-contrast-colors';
import { createCSSCustomProperties } from './helpers-scheme';

// Types

// WELCOME
const WELCOME_RATIOS = {
   primary: {
      'welcome-primary-100': 3,
      'welcome-primary-200': 4.5,
   },
   secondary: {
      'welcome-secondary-300': 1,
      'welcome-secondary-400': 2,
      'welcome-secondary-500': 3,
      'welcome-secondary-600': 4.5,
      'welcome-secondary-700': 5,
   },
   tertiary: {
      'welcome-tertiary-100': 3,
      'welcome-tertiary-200': 4.5,
   },
};

const WELCOME_SCALE: NamedColorScale[] = [
   {
      name: 'primary',
      colorKeys: ['hsl(50, 50%, 50%)', 'hsl(50, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: WELCOME_RATIOS.primary,
   },
   {
      name: 'secondary',
      colorKeys: ['hsl(150, 50%, 50%)', 'hsl(150, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: WELCOME_RATIOS.secondary,
   },
   {
      name: 'tertiary',
      colorKeys: ['hsl(250, 50%, 50%)', 'hsl(250, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: WELCOME_RATIOS.tertiary,
   },
];

// HOME
const HOME_RATIOS = {
   primary: {
      'home-primary-100': 3,
      'home-primary-200': 4.5,
   },
   secondary: {
      'home-secondary-300': 1,
      'home-secondary-400': 2,
      'home-secondary-500': 3,
      'home-secondary-600': 4.5,
      'home-secondary-700': 5,
   },
   tertiary: {
      'home-tertiary-100': 3,
      'home-tertiary-200': 4.5,
   },
};

const HOME_SCALE: NamedColorScale[] = [
   {
      name: 'primary',
      colorKeys: ['hsl(350, 50%, 50%)', 'hsl(350, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: HOME_RATIOS.primary,
   },
   {
      name: 'secondary',
      colorKeys: ['hsl(150, 50%, 50%)', 'hsl(150, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: HOME_RATIOS.secondary,
   },
   {
      name: 'tertiary',
      colorKeys: ['hsl(250, 50%, 50%)', 'hsl(250, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: HOME_RATIOS.tertiary,
   },
];

// THEME
export const welcomeColorScheme = generateAdaptiveTheme({
   colorScales: [...WELCOME_SCALE],
   baseScale: 'primary',
   output: 'HSL',
});

export const homeColorScheme = generateAdaptiveTheme({
   colorScales: [...HOME_SCALE],
   baseScale: 'primary',
});

// CSS Custom Properties
const welcomeCSSVar = createCSSCustomProperties(WELCOME_RATIOS);
const homeCSSVar = createCSSCustomProperties(HOME_RATIOS);

export const CSSVar = {
   ...welcomeCSSVar,
   ...homeCSSVar,
};
