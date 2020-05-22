import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { lightColors } from './colors';
import { breakpoints } from './breakpoints';

type ThemeProps = {
   children: React.ReactNode;
};

const Theme = ({ children }: ThemeProps) => {
   const theme: DefaultTheme = {
      colors: { ...lightColors },
      breakpoints: {
         medium: breakpoints(70)['medium'],
         large: breakpoints(90)['large'],
      },
   };
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
