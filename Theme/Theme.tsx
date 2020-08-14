import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { breakpoints } from './breakpoints';
import { fonts } from './fonts';
import useAppContext from 'hooks/useAppContext';

const Theme = ({ children }: { children: React.ReactNode }) => {
   const { colors } = useAppContext();

   const createColors = (name: keyof typeof colors) => {
      return `hsl(${colors[name].h}, ${colors[name].s}%, ${colors[name].l}%)`;
   };

   const myTheme: DefaultTheme = {
      colors: {
         home: createColors('home'),
         about: createColors('about'),
         works: createColors('works'),
         contact: createColors('contact'),
         black: createColors('black'),
         white: createColors('white'),
      },
      breakpoints: {
         ...breakpoints,
      },
      fonts: {
         ...fonts,
      },
   };
   return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
};

export default Theme;
