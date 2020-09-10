import React from 'react';
import { AppProps } from 'next/app';
import { AppContextProvider } from 'context/AppContext';
import CanvasHexagons from '@components/CanvasTransition/CanvasTransition';
import MainTitle from '@components/MainTitle/MainTitle';
import { AnimatePresence } from 'framer-motion';
import Pagination from '@components/Pagination/Pagination';
import usePathName from 'hooks/usePathName';
import ColorScheme from '@components/ColorScheme/ColorScheme';

import 'styles/reset.css';
import 'styles/fonts.css';
import Menu from '@components/Menu/Menu';

function App({ Component, pageProps, router }: AppProps) {
   const pathname = router.pathname as URLType;
   const { pathToTitle } = usePathName();
   const newPathname = pathToTitle(pathname);

   return (
      <>
         <ColorScheme />
         <AppContextProvider>
            <CanvasHexagons pathname={newPathname} />
            <Menu />
            <AnimatePresence exitBeforeEnter>
               <Pagination
                  key={router.route}
                  router={router}
                  pathname={pathname}
               />
            </AnimatePresence>

            {/* <AnimatePresence exitBeforeEnter>
               <MainTitle pathname={newPathname} key={router.route} />
            </AnimatePresence> */}
            <Component {...pageProps} />
         </AppContextProvider>
      </>
   );
}

export default App;
