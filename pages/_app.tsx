import { AppProps } from 'next/app';

import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { MotionWrapper } from '@components/MotionWrapper/MotionWrapper';

import 'styles/reset.css';
import 'styles/colors.css';
import 'styles/fonts.css';
import 'styles/global.css';

function App({ Component, pageProps }: AppProps) {
   const router = useRouter();

   return (
      <AnimatePresence exitBeforeEnter>
         <MotionWrapper>
            <Component {...pageProps} key={router.route} />
         </MotionWrapper>
      </AnimatePresence>
   );
}

export default App;
