import { AppProps } from 'next/app';

import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

import 'styles/reset.css';
import 'styles/colors.css';
import 'styles/fonts.css';
import 'styles/global.css';

function App({ Component, pageProps }: AppProps) {
   const router = useRouter();

   return (
      <AnimatePresence exitBeforeEnter>
         <Component {...pageProps} key={router.route} />
      </AnimatePresence>
   );
}

export default App;
