import React from 'react';
import { SLayout } from './Layout.styled';
import MaintTitle from '@components/MainTitle/MainTitle';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Menu from '@components/Menu/Menu';
import Head from 'next/head';
import ColorMode from '@components/ColorMode/ColorMode';
import { AnimatePresence } from 'framer-motion';

type LayoutProps = {
   children: React.ReactNode;
   /**
    * name of layout [Resticted to SLayout name]
    */
   name: keyof typeof SLayout;
   title: string;
};

export const getStaticProps: GetStaticProps = async (context) => {
   return {
      props: {},
   };
};

function Layout({ name, title, children }: LayoutProps) {
   const router = useRouter();
   const Layout = SLayout[name];
   return (
      <Layout>
         <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Menu />
         <ColorMode />
         {/* <AnimatePresence exitBeforeEnter>
            <MaintTitle
               pathname={router.pathname.substr(1)}
               key={router.route}
            />
         </AnimatePresence> */}
         {children}
      </Layout>
   );
}

/**============= Export ================ */
export { Layout };
