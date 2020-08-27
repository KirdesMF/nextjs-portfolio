import React, { useState } from 'react';
import useMatchMedia from 'hooks/useMatchMedia';
import { breakpoints } from 'Theme/breakpoints';

type ThemeStateType = 'light' | 'dark' | 'contrast';

export type MainContextType = {
   theme: ThemeStateType;
   setTheme: (value: ThemeStateType) => void;
   medium: boolean;
   large: boolean;
};

/** Create context */
const AppContext = React.createContext<MainContextType>(undefined!);

/**Context Provider */
const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
   const medium = useMatchMedia(breakpoints.large);
   const large = useMatchMedia(breakpoints.medium);
   const [theme, setTheme] = useState<ThemeStateType>('dark');

   const value: MainContextType = {
      medium,
      large,
      theme,
      setTheme,
   };

   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext };
