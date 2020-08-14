export type TNameCOlors =
   | 'home'
   | 'about'
   | 'works'
   | 'contact'
   | 'white'
   | 'black';

type TColorSet = {
   [key in TNameCOlors]: {
      h: number;
      s: number;
      l: number;
   };
};

export const colorSettings: TColorSet = {
   home: { h: 360, s: 100, l: 50 },
   about: { h: 250, s: 50, l: 50 },
   works: { h: 75, s: 100, l: 50 },
   contact: { h: 120, s: 50, l: 50 },
   white: { h: 0, s: 100, l: 100 },
   black: { h: 0, s: 0, l: 0 },
};
