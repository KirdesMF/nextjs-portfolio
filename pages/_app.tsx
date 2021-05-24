import { AppProps } from 'next/app';

import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { MotionWrapper } from '@components/MotionWrapper/MotionWrapper';

import 'styles/reset.css';
import 'styles/colors.css';
import 'styles/fonts.css';
import 'styles/global.css';
import { Fragment } from 'react';
import { Header } from '@components/Header/Header';
import { Footer } from '@components/Footer/Footer';

function App({ Component, pageProps }: AppProps) {
   const router = useRouter();

   return (
      <Fragment>
         <Header />
         <AnimatePresence>
            <MotionWrapper>
               <Component {...pageProps} key={router.route} />
            </MotionWrapper>
         </AnimatePresence>
         <Footer />
      </Fragment>
   );
}

export default App;
