import React, { useState } from 'react';
import useMatchMedia from 'hooks/useMatchMedia';
import { breakpoints } from 'Theme/breakpoints';
import { colorSettings } from 'Theme/colors';

type ThemeStateType = 'light' | 'dark' | 'contrast';
export type TColors = typeof colorSettings;

export type MainContextType = {
   theme: ThemeStateType;
   setTheme: (value: ThemeStateType) => void;
   medium: boolean;
   large: boolean;
   colors: TColors;
   setColors: (value: TColors) => void;
};

/** Create context */
const AppContext = React.createContext<MainContextType>(undefined!);

/**Context Provider */
const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
   const medium = useMatchMedia(breakpoints.large);
   const large = useMatchMedia(breakpoints.medium);
   const [theme, setTheme] = useState<ThemeStateType>('dark');
   const [colors, setColors] = useState<TColors>(colorSettings);

   const value: MainContextType = {
      medium,
      large,
      theme,
      setTheme,
      colors,
      setColors,
   };

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext };
