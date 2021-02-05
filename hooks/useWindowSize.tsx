import { useState, useEffect } from 'react';

type TUseWindow = {
   width: number;
   height: number;
};

function useWindowSize() {
   const isWindow = typeof window === 'object';

   const [windowSize, setWindowSize] = useState<TUseWindow>({
      width: isWindow ? window.innerWidth : 1920,
      height: isWindow ? window.innerHeight : 800,
   });

   useEffect(() => {
      function handleResize() {
         setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
         });
      }
      handleResize();

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
   }, [isWindow, setWindowSize]);

   return windowSize;
}

export { useWindowSize };
