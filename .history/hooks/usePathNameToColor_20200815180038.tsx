import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import useAppContext from './useAppContext';
function usePathNameToColor() {
   const { colors } = useAppContext();

   const pathnameToColors = {
      '/': colors.black,
      '/home': colors.home,
      '/about': colors.about,
      '/works': colors.works,
      '/contact': colors.contact,
   };

   const pathToColor = (pathname: string) =>
      pathnameToColors[pathname as keyof typeof pathnameToColors];

   return pathToColor;
}

export default usePathNameToColor;
