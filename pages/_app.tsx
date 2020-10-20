import { AppProps } from 'next/app';
import { AppContextProvider } from 'context/AppContext';

import SharedLayout from '@components/SharedLayout/SharedLayout';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {
   const router = useRouter();

   return (
      <AppContextProvider>
         <SharedLayout>
            <AnimatePresence exitBeforeEnter>
               <Component {...pageProps} key={router.route} />
            </AnimatePresence>
         </SharedLayout>
      </AppContextProvider>
   );
}

export default App;
