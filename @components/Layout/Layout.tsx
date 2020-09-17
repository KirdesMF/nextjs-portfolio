import React from 'react';
import { CSSLayout } from './Layout.styled';
import Head from 'next/head';

type LayoutProps = {
   children: React.ReactNode;
   name: keyof typeof CSSLayout;
   title: string;
};

function Layout({ name, title, children }: LayoutProps) {
   const classname = CSSLayout[name];
   return (
      <main className={classname}>
         <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         {children}
      </main>
   );
}

/**============= Export ================ */
export { Layout };
