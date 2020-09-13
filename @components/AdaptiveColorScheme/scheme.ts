import {
   generateAdaptiveTheme,
   NamedColorScale,
} from '@adobe/leonardo-contrast-colors';
import { createCSSCustomProperties } from './helpers-scheme';

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
      colorKeys: ['hsl(15, 50%, 50%)', 'hsl(15, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: HOME_RATIOS.secondary,
   },
   {
      name: 'tertiary',
      colorKeys: ['hsl(100, 50%, 50%)', 'hsl(100, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: HOME_RATIOS.tertiary,
   },
];

// ABOUT
const ABOUT_RATIOS = {
   primary: {
      'about-primary-100': 3,
      'about-primary-200': 4.5,
   },
   secondary: {
      'about-secondary-300': 1,
      'about-secondary-400': 2,
      'about-secondary-500': 3,
      'about-secondary-600': 4.5,
      'about-secondary-700': 5,
   },
   tertiary: {
      'about-tertiary-100': 3,
      'about-tertiary-200': 4.5,
   },
   black: {
      'about-black-100': 3,
      'about-black-200': 4.5,
   },
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
      colorKeys: ['hsl(15, 50%, 50%)', 'hsl(15, 30%, 50%)'],
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
      name: 'black',
      colorKeys: ['hsl(0, 0%, 0%)'],
      colorspace: 'LCH',
      ratios: ABOUT_RATIOS.black,
   },
];

// WORKS
const WORKS_RATIOS = {
   primary: {
      'works-primary-100': 3,
      'works-primary-200': 4.5,
   },
   secondary: {
      'works-secondary-300': 1,
      'works-secondary-400': 2,
      'works-secondary-500': 3,
      'works-secondary-600': 4.5,
      'about-secondary-700': 5,
   },
   tertiary: {
      'works-tertiary-100': 3,
      'works-tertiary-200': 4.5,
   },
   black: {
      'works-black-100': 3,
      'works-black-200': 4.5,
   },
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
   {
      name: 'black',
      colorKeys: ['hsl(0, 0%, 0%)'],
      colorspace: 'LCH',
      ratios: WORKS_RATIOS.black,
   },
];

// CONTACT
const CONTACT_RATIOS = {
   primary: {
      'contact-primary-100': 3,
      'contact-primary-200': 4.5,
   },
   secondary: {
      'contact-secondary-300': 1,
      'contact-secondary-400': 2,
      'contact-secondary-500': 3,
      'contact-secondary-600': 4.5,
      'contact-secondary-700': 5,
   },
   tertiary: {
      'contact-tertiary-100': 3,
      'contact-tertiary-200': 4.5,
   },
   black: {
      'contact-black-100': 3,
      'contact-black-200': 4.5,
   },
};

const CONTACT_SCALE: NamedColorScale[] = [
   {
      name: 'primary',
      colorKeys: ['hsl(350, 50%, 50%)', 'hsl(350, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: CONTACT_RATIOS.primary,
   },
   {
      name: 'secondary',
      colorKeys: ['hsl(15, 50%, 50%)', 'hsl(15, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: CONTACT_RATIOS.secondary,
   },
   {
      name: 'tertiary',
      colorKeys: ['hsl(100, 50%, 50%)', 'hsl(100, 30%, 50%)'],
      colorspace: 'LCH',
      ratios: CONTACT_RATIOS.tertiary,
   },
   {
      name: 'black',
      colorKeys: ['hsl(0, 0%, 0%)'],
      colorspace: 'LCH',
      ratios: CONTACT_RATIOS.black,
   },
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
