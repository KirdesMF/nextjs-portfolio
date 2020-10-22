import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/Layout/Layout';

export default function Welcome() {
   const router = useRouter();
   const goHome = () => router.push('/home');
   let timeOut: NodeJS.Timeout;

   useEffect(() => {
      timeOut = setTimeout(goHome, 5000);

      return () => clearTimeout(timeOut);
   });

   return (
      <Layout name="skills" title="Ced | Welcome">
         <div></div>
      </Layout>
   );
}
