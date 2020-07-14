import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { allTheme } from './colors';
import { breakpoints } from './breakpoints';
import { fonts } from './fonts';
import useAppContext from 'hooks/useAppContext';

const Theme = ({ children }: { children: React.ReactNode }) => {
   const { theme } = useAppContext();

   const myTheme: DefaultTheme = {
      colors: allTheme[theme],
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
