import React from 'react';
import { AppProps } from 'next/app';
import { AppContextProvider } from 'context/AppContext';
import CanvasHexagons from '@components/CanvasTransition/CanvasTransition';
import MainTitle from '@components/MainTitle/MainTitle';
import { AnimatePresence } from 'framer-motion';
import Pagination from '@components/Pagination/Pagination';
import ColorScheme from '@components/ColorScheme/ColorScheme';

import 'styles/reset.css';
import 'styles/fonts.css';
import Menu from '@components/Menu/Menu';
import ColorMode from '@components/ColorMode/ColorMode';
function App({ Component, pageProps, router }: AppProps) {
   const pathname = router.pathname as URLType;

   return (
      <>
         <ColorScheme />
         <AppContextProvider>
            <CanvasHexagons />
            <Menu />
            <ColorMode />
            <AnimatePresence exitBeforeEnter>
               <Pagination
                  key={router.route}
                  router={router}
                  pathname={pathname}
               />
            </AnimatePresence>

            <AnimatePresence exitBeforeEnter>
               <MainTitle pathname={pathname} key={router.route} />
            </AnimatePresence>
            <Component {...pageProps} />
         </AppContextProvider>
      </>
   );
}

export default App;
