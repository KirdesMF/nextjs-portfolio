import 'styles/reset.css';
import 'styles/fonts.css';

import React from 'react';
import { AppProps } from 'next/app';
import { AppContextProvider } from 'context/AppContext';

import SharedLayout from '@components/SharedLayout/SharedLayout';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Layout from '@components/Layout/Layout';
import { CSSLayout } from '@components/Layout/Layout.styled';

function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   const nameLayout = router.pathname.substr(1) as keyof typeof CSSLayout;
   return (
      <AppContextProvider>
         <SharedLayout />
         <AnimatePresence exitBeforeEnter>
            <Layout name={nameLayout} key={router.route}>
               <Component {...pageProps} />
            </Layout>
         </AnimatePresence>
      </AppContextProvider>
   );
}

export default App;
