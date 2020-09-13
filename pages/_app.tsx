import React from 'react';
import { AppProps } from 'next/app';
import { AppContextProvider } from 'context/AppContext';
import CanvasHexagons from '@components/CanvasTransition/CanvasTransition';
import MainTitle from '@components/MainTitle/MainTitle';
import Pagination from '@components/Pagination/Pagination';
import Menu from '@components/Menu/Menu';
import AdaptiveColorScheme from '@components/AdaptiveColorScheme/AdaptiveColorScheme';

import 'styles/reset.css';
import 'styles/fonts.css';

function App({ Component, pageProps }: AppProps) {
   return (
      <AppContextProvider>
         <AdaptiveColorScheme />
         <CanvasHexagons />
         <Menu />
         <Pagination />
         <MainTitle />

         <Component {...pageProps} />
      </AppContextProvider>
   );
}

export default App;
