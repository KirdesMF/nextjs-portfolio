import React from 'react';
import { AppProps } from 'next/app';
import Theme from 'Theme/Theme';
import { AppContextProvider } from 'context/AppContext';
import ResetCSS from 'styles/GlobalStyle.styled';
import Fonts from 'styles/Fonts.styled';
import { CanvasHexagons } from '@components/CanvasTransition/CanvasTransition';
import Header from '@components/Header/Header';
import SvgTitle from '@components/SvgTitle/SvgTitle';
import { AnimatePresence } from 'framer-motion';
import Pagination from '@components/Pagination/Pagination';

/**
 * App component from nextjs
 * import here comon component e.g. Nav Context Theme
 * even global style to be share in every pages
 */
function App({ Component, pageProps, router }: AppProps) {
   return (
      <>
         <ResetCSS />
         <Fonts />
         <AppContextProvider>
            <Theme>
               <Header />
               <Pagination pathname={router.pathname} />
               <CanvasHexagons />
               <AnimatePresence exitBeforeEnter>
                  <Component {...pageProps} key={router.route} />
               </AnimatePresence>
               <AnimatePresence exitBeforeEnter>
                  <SvgTitle pathname={router.pathname} key={router.route} />
               </AnimatePresence>
            </Theme>
         </AppContextProvider>
      </>
   );
}

export default App;
