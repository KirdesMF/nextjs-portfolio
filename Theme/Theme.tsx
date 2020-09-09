import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { breakpoints } from './breakpoints';
import { fonts } from './fonts';
import { KeyColorsType } from '_types/styled';
import { COLORS_VAR } from './colors';

export const theme = { COLORS_VAR, fonts, breakpoints } as const;

type Type = {
   [key in KeyColorsType]: string;
};

const darkMode = (obj: Type) => {
   return Object.entries(obj)
      .map(([key, value], i) => ({
         [key]: 'hsl(5, 50%, 85%)',
      }))
      .reduce((acc, curr) => ({
         ...acc,
         ...curr,
      })) as Type;
};

const Theme = ({ children }: { children: React.ReactNode }) => {
   const myTheme: typeof theme = {
      ...theme,
      ...COLORS_VAR,
   };
   return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
};

export default Theme;
