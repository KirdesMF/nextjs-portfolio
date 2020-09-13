import React from 'react';
import { AppProps } from 'next/app';
import { AppContextProvider } from 'context/AppContext';
import CanvasHexagons from '@components/CanvasTransition/CanvasTransition';
import MainTitle from '@components/MainTitle/MainTitle';
import { AnimatePresence } from 'framer-motion';
import Pagination from '@components/Pagination/Pagination';

import 'styles/reset.css';
import 'styles/fonts.css';
import Menu from '@components/Menu/Menu';
import AdaptiveColorScheme from '@components/AdaptiveColorScheme/AdaptiveColorScheme';

function App({ Component, pageProps, router }: AppProps) {
   return (
      <AppContextProvider>
         <Component {...pageProps} />

         <CanvasHexagons />
         <Menu />
         <AdaptiveColorScheme />

         <AnimatePresence exitBeforeEnter>
            <Pagination key={router.route} />
         </AnimatePresence>

         <AnimatePresence exitBeforeEnter>
            <MainTitle key={router.route} />
         </AnimatePresence>
      </AppContextProvider>
   );
}

export default App;
