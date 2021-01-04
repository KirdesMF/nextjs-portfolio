import { ReturnedTheme } from '@adobe/leonardo-contrast-colors';

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

export { setCSSCustomProperties, getBackground };
