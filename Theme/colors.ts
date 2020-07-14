export type ColorsType = typeof light;

const light = {
   home: `hsl(250, 60%, 60%)`,
   about: `hsl(200, 60%, 60%)`,
   works: `hsl(150, 60%, 60%)`,
   contact: `hsl(100, 60%, 60%)`,
   active: `hsl(20, 60%, 60%)`,
   white: `hsl(1, 100%, 100%)`,
   black: `hsl(1, 0%, 0%)`,
   inset: `hsl(1, 0%, 0%)`,
};

const dark = {
   home: `hsl(250, 60%, 30%)`,
   about: `hsl(200, 60%, 30%)`,
   works: `hsl(150, 60%, 30%)`,
   contact: `hsl(100, 60%, 30%)`,
   active: `hsl(20, 60%, 60%)`,
   white: `hsl(1, 100%, 100%)`,
   black: `hsl(1, 0%, 0%)`,
   inset: `hsl(1, 0%, 0%)`,
};

const contrast = {
   home: `hsl(250, 100%, 60%)`,
   about: `hsl(200, 100%, 60%)`,
   works: `hsl(150, 100%, 60%)`,
   contact: `hsl(100, 100%, 60%)`,
   active: `hsl(20, 60%, 60%)`,
   white: `hsl(1, 100%, 100%)`,
   black: `hsl(1, 0%, 0%)`,
   inset: `hsl(1, 0%, 0%)`,
};

export const allTheme = {
   light,
   dark,
   contrast,
};
