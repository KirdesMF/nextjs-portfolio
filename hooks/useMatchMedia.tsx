import { useState, useEffect } from 'react';

/**
 *
 * @param mediaQuery breakpoint to provide
 * @returns boolean
 */
const useMatchMedia = (mediaQuery: string) => {
   const isWindow = typeof window === 'object';

   if (isWindow) {
      const [isMatches, setIsMatches] = useState(
         window.matchMedia(mediaQuery).matches
      );
      useEffect(() => {
         const updateStateisMatches = (event: MediaQueryListEvent) =>
            setIsMatches(event.matches);

         const mediaQueryList = window.matchMedia(mediaQuery);
         setIsMatches(mediaQueryList.matches);
         mediaQueryList.addListener(updateStateisMatches);

         return () => mediaQueryList.removeListener(updateStateisMatches);
      }, [mediaQuery]);

      return isMatches;
   } else return false;
};

export default useMatchMedia;
