import React from 'react';
import BigHexagon from '@components/BigHexagon/BigHexagon';
import ButtonBackHome from '@components/ButtonBackHome/ButtonBackHome';
import Pagination from '@components/Pagination/Pagination';
import MaintTitle from '@components/MainTitle/MainTitle';
import { CanvasContextProvider } from 'context/CanvasContext';
import CanvasHexagons from '@components/CanvasTransition/CanvasTransition';
import Header from '@components/Header/Header';

type SharedLayoutProps = {
   children: React.ReactNode;
};

function SharedLayout() {
   return (
      <React.Fragment>
         <CanvasContextProvider>
            <CanvasHexagons />
            <Header />
         </CanvasContextProvider>

         <BigHexagon top />
         <BigHexagon />

         <ButtonBackHome />
         <Pagination />
         <MaintTitle />
      </React.Fragment>
   );
}

/**============= Export ================ */
export default SharedLayout;
