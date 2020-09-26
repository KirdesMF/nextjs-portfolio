import React from 'react';
import BigHexagon from '@components/BigHexagon/BigHexagon';
import ButtonBackHome from '@components/ButtonBackHome/ButtonBackHome';
import Pagination from '@components/Pagination/Pagination';
import { CanvasContextProvider } from 'context/CanvasContext';
import CanvasHexagons from '@components/CanvasTransition/CanvasTransition';
import Header from '@components/Header/Header';
import { useRouter } from 'next/router';

function SharedLayout() {
   const { pathname } = useRouter();
   return (
      <React.Fragment>
         <CanvasContextProvider>
            <CanvasHexagons />
            <Header />
         </CanvasContextProvider>

         <BigHexagon top />
         <BigHexagon />

         <ButtonBackHome />
         {pathname !== '/home' && <Pagination />}
      </React.Fragment>
   );
}

/**============= Export ================ */
export default SharedLayout;
