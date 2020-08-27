import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { breakpoints } from './breakpoints';
import { fonts } from './fonts';
import { colors } from './colors';

const Theme = ({ children }: { children: React.ReactNode }) => {
   const myTheme: DefaultTheme = {
      colors: { ...colors },
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
