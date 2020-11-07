import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/Layout/Layout';
import { Introduction } from '@components/Introduction/Introduction';

export default function Welcome() {
   const router = useRouter();
   const goHome = () => router.push('/home');
   let timeOut: NodeJS.Timeout;

   useEffect(() => {
      timeOut = setTimeout(goHome, 8000);

      return () => clearTimeout(timeOut);
   });

   return (
      <Layout name="intro" title="Ced | Welcome">
         <Introduction />
      </Layout>
   );
}
