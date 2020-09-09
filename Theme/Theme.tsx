import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { breakpoints } from './breakpoints';
import { fonts } from './fonts';
import { KeyColorsType } from '_types/styled';
import { COLORS_VAR } from './colors';

export const theme = { COLORS_VAR, fonts, breakpoints } as const;

const Theme = ({ children }: { children: React.ReactNode }) => {
   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
