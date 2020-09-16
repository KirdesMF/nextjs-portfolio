import { ReturnedTheme } from '@adobe/leonardo-contrast-colors';

type KeyOfDistributed<T> = T extends any ? keyof T : never;
type RatiosName<T> = KeyOfDistributed<T[keyof T]>;
type RatiosType = {
   [group: string]: { [ratio: string]: number };
};

function createCSSCustomProperties<T extends RatiosType>(ratios: T) {
   const obj = {} as Record<RatiosName<T>, string>;

   for (const ratio of Object.values(ratios)) {
      for (const key in ratio) {
         const name = key as RatiosName<T>;
         obj[name] = `var(--${key})`;
      }
   }
   return obj;
}

function setCSSCustomProperties(theme: ReturnedTheme) {
   const rootElement = document.documentElement;

   for (const obj of theme) {
      if ('values' in obj) {
         for (const scheme of obj.values) {
            rootElement.style.setProperty(`--${scheme.name}`, scheme.value);
         }
      } else {
         rootElement.style.setProperty(`--background`, obj.background);
      }
   }
}

function getBackground(theme: ReturnedTheme) {
   let color = '';

   for (const obj of Object.values(theme)) {
      if ('background' in obj) {
         color += obj.background;
      }
   }

   return color;
}

type SetMinMaxDark = {
   contrastRef: React.MutableRefObject<HTMLInputElement>;
   brightnessRef: React.MutableRefObject<HTMLInputElement>;
};

export { createCSSCustomProperties, setCSSCustomProperties, getBackground };
