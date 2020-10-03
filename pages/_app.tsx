import { AppProps } from 'next/app';
import { AppContextProvider } from 'context/AppContext';

import SharedLayout from '@components/SharedLayout/SharedLayout';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Layout from '@components/Layout/Layout';
import { CSSLayout } from '@components/Layout/Layout.styled';
import { Pathnames, Utils } from 'utils/utils';

function App({ Component, pageProps }: AppProps) {
   const router = useRouter();
   const pathname = router.pathname as Pathnames;
   const nameLayout = Utils.customURL(pathname) as keyof typeof CSSLayout;

   return (
      <AppContextProvider>
         <SharedLayout />
         <AnimatePresence exitBeforeEnter>
            <Layout name={nameLayout} key={router.route}>
               <Component {...pageProps} key={router.route} />
            </Layout>
         </AnimatePresence>
      </AppContextProvider>
   );
}

export default App;
