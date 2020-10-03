import BigHexagon from '@components/BigHexagon/BigHexagon';
import LinkHome from '@components/LinkHome/LinkHome';
import Pagination from '@components/Pagination/Pagination';
import { CanvasContextProvider } from 'context/CanvasContext';
import CanvasHexagons from '@components/CanvasTransition/CanvasTransition';
import Header from '@components/Header/Header';
import { useRouter } from 'next/router';
import Filters from '@components/Filters/Filters';
import Footer from '@components/Footer/Footer';

function SharedLayout() {
   return (
      <>
         <Filters />
         <BigHexagon mirror />
         <BigHexagon />

         <CanvasContextProvider>
            <CanvasHexagons />
            <Header />
         </CanvasContextProvider>

         <LinkHome />
         <Pagination />

         <Footer />
      </>
   );
}

/**============= Export ================ */
export default SharedLayout;
