import React from 'react';
import { AppProps } from 'next/app';
import { AppContextProvider } from 'context/AppContext';
import CanvasHexagons from '@components/CanvasTransition/CanvasTransition';
import MainTitle from '@components/MainTitle/MainTitle';
import Pagination from '@components/Pagination/Pagination';

import 'styles/reset.css';
import 'styles/fonts.css';
import { CanvasContextProvider } from 'context/CanvasContext';
import Header from '@components/Header/Header';
import BigHexagon from '@components/BigHexagon/BigHexagon';

function App({ Component, pageProps }: AppProps) {
   return (
      <AppContextProvider>
         <CanvasContextProvider>
            <CanvasHexagons />
            <Header />
         </CanvasContextProvider>

         <BigHexagon top />
         <BigHexagon />

         <Pagination />
         <MainTitle />

         <Component {...pageProps} />
      </AppContextProvider>
   );
}

export default App;
