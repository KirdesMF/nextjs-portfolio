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
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { Layout } from '@components/Layout/Layout';
import { CSSLayout } from '@components/Layout/Layout.styled';

function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   const pathname = router.pathname.substr(1) as keyof typeof CSSLayout;

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

         <AnimatePresence exitBeforeEnter>
            <Layout name={pathname} key={router.route}>
               <Component {...pageProps} />
            </Layout>
         </AnimatePresence>
      </AppContextProvider>
   );
}

export default App;
