import { BigHexagon } from '@components/BigHexagon/BigHexagon';
import { LinkHome } from '@components/LinkHome/LinkHome';
import { Pagination } from '@components/Pagination/Pagination';
import { CanvasContextProvider } from 'context/CanvasContext';
import { CanvasTransition } from '@components/CanvasTransition/CanvasTransition';
import { Header } from '@components/Header/Header';
import { Filters } from '@components/Filters/Filters';
import { Footer } from '@components/Footer/Footer';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';

type SharedLayoutProps = {
   children: ReactNode;
};
function SharedLayout(props: SharedLayoutProps) {
   const { pathname } = useRouter();
   const { children } = props;

   return (
      <>
         <Filters />
         {/* {pathname !== '/' && (
            <>
               <BigHexagon mirror />
               <BigHexagon />
            </>
         )} */}

         <CanvasContextProvider>
            <CanvasTransition />
            <Header />
         </CanvasContextProvider>

         <LinkHome />
         <Pagination />

         {children}
         <Footer />
      </>
   );
}

/**============= Export ================ */
export { SharedLayout };
