import React from 'react';
import { AppProps } from 'next/app';
import Theme from 'Theme/Theme';
import { AppContextProvider } from 'context/AppContext';
import ResetCSS from 'styles/GlobalStyle.styled';
import Fonts from 'styles/Fonts.styled';
import CanvasHexagons from '@components/CanvasTransition/CanvasTransition';
import MainTitle from '@components/MainTitle/MainTitle';
import { AnimatePresence } from 'framer-motion';
import Pagination from '@components/Pagination/Pagination';
import Menu from '@components/Menu/Menu';
import usePathName from 'hooks/usePathName';

/**
 * App component from nextjs
 * import here comon component e.g. Nav Context Theme
 * even global style to be share in every pages
 */

function App({ Component, pageProps, router }: AppProps) {
   const pathname = router.pathname as URLType;
   const { pathToTitle } = usePathName();
   const newPathname = pathToTitle(pathname);

   return (
      <>
         <ResetCSS />
         <Fonts />
         <AppContextProvider>
            <Theme>
               <Menu pathname={newPathname} />
               <CanvasHexagons pathname={newPathname} />

               <AnimatePresence exitBeforeEnter>
                  <Pagination
                     key={router.route}
                     router={router}
                     pathname={pathname}
                  />
               </AnimatePresence>

               <AnimatePresence exitBeforeEnter>
                  <MainTitle pathname={newPathname} key={router.route} />
               </AnimatePresence>
               <Component {...pageProps} />
            </Theme>
         </AppContextProvider>
      </>
   );
}

export default App;
