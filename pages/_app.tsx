import React from 'react';
import 'styles/index.css';
import { AppProps } from 'next/app';
import Theme from 'Theme/Theme';

const App = ({ Component, pageProps }: AppProps) => {
   return (
      <Theme>
         <Component {...pageProps} />
      </Theme>
   );
};

export default App;
