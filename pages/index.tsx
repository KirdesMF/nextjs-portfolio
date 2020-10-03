import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Welcome() {
   const router = useRouter();
   const goHome = () => router.push('/home');
   let timeOut: NodeJS.Timeout;

   useEffect(() => {
      timeOut = setTimeout(goHome, 5000);

      return () => clearTimeout(timeOut);
   });

   return (
      <React.Fragment>
         <Head>
            <title>Ced | Welcome ...</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
      </React.Fragment>
   );
}

/**=============== Export ============ */
