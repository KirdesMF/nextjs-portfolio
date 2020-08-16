import React from 'react';
import { AppProps } from 'next/app';
import Theme from 'Theme/Theme';
import { AppContextProvider } from 'context/AppContext';
import ResetCSS from 'styles/GlobalStyle.styled';
import Fonts from 'styles/Fonts.styled';
import Colors from 'styles/Colors.styled';
import { CanvasHexagons } from '@components/CanvasTransition/CanvasTransition';
import Header from '@components/Header/Header';

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
            <Header />
            <CanvasHexagons />
         </Theme>
      </AppContextProvider>
   );
};

export default App;
