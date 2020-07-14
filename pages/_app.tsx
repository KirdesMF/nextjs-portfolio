import React from 'react';
import { AppProps } from 'next/app';
import Theme from 'Theme/Theme';
import { AppContextProvider } from 'context/AppContext';
import ResetCSS from 'styles/GlobalStyle.styled';
import Fonts from 'styles/Fonts.styled';
import Colors from 'styles/Colors.styled';
import { HexTransition } from '@components/HexTransition/HexTransition';
import Particles from '@components/Particles/Particles';

/**
 * App component from nextjs
 * import here comon component e.g. Nav Context Theme
 * even global style to be share in every pages
 */
const App = ({ Component, pageProps }: AppProps) => {
   return (
      <AppContextProvider>
         <ResetCSS />
         <Fonts />
         <Colors />
         <Theme>
            <Component {...pageProps} />
            <HexTransition hexSize={{ x: 90, y: 90 }} />
            <Particles />
         </Theme>
      </AppContextProvider>
   );
};

export default App;
