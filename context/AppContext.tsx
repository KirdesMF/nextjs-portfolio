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
   endCanvas: boolean;
   setEndCanvas: (value: boolean) => void;
};

/** Create context */
const AppContext = React.createContext<MainContextType>(undefined!);

/**Context Provider */
const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
   const medium = useMatchMedia(breakpoints.large);
   const large = useMatchMedia(breakpoints.medium);
   const [theme, setTheme] = useState<ThemeStateType>('dark');
   const [colors, setColors] = useState<TColors>(colorSettings);
   const [endCanvas, setEndCanvas] = useState<boolean>(false);

   const value: MainContextType = {
      medium,
      large,
      theme,
      setTheme,
      colors,
      setColors,
      endCanvas,
      setEndCanvas,
   };

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext };
