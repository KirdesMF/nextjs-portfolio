import { validateNumbers } from 'utils/validateNumbers';

const hsl = (hue: number, saturation: number, lightness: number) => {
   return `hsl(
      ${validateNumbers.hue(hue)}, 
      ${validateNumbers.percent(saturation)},
      ${validateNumbers.percent(lightness)}
      )`;
};

export const colors = (lightness: number) => ({
   home: hsl(250, 50, lightness),
   about: hsl(250, 50, lightness),
   works: hsl(250, 50, lightness),
   contact: hsl(250, 50, lightness),
   black: hsl(250, 50, lightness),
   white: hsl(250, 50, lightness),
   active: hsl(250, 50, lightness),
});

export const lightColors: ColorsType = {
   home: colors(80).home,
   about: colors(50).about,
   works: colors(60).works,
   contact: colors(40).contact,
   black: colors(0).black,
   white: colors(100).white,
   active: colors(90).active,
};

export type ColorsType = ReturnType<typeof colors>;
