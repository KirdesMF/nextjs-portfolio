import { Header } from '@components/Header/Header';
import { Filters } from '@components/Filters/Filters';
import { Footer } from '@components/Footer/Footer';
import { ReactNode } from 'react';
import { HexesGrid } from '@components/HexesGrid/HexesGrid';

type SharedLayoutProps = {
   children: ReactNode;
};
function SharedLayout(props: SharedLayoutProps) {
   const { children } = props;

   return (
      <>
         <Filters />

         <HexesGrid />
         <Header />

         {children}
      </>
   );
}

/**============= Export ================ */
export { SharedLayout };
