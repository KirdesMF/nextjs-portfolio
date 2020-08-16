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
   home: { h: 290, s: 100, l: 50 },
   about: { h: 250, s: 50, l: 50 },
   works: { h: 150, s: 100, l: 50 },
   contact: { h: 75, s: 50, l: 50 },
   white: { h: 0, s: 100, l: 100 },
   black: { h: 20, s: 50, l: 10 },
};
