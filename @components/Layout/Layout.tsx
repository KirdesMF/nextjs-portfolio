import { motion, Orchestration, Repeat, Tween } from 'framer-motion';
import Head from 'next/head';
import React from 'react';
import { fonts } from 'Theme/fonts';
import { reset } from 'Theme/reset';
import { globals } from 'Theme/theme';
import { CSSLayout } from './Layout.styled';

const transition: Orchestration | Repeat | Tween = {
   when: 'beforeChildren',
   duration: 1,
};

const endTransition: Orchestration | Repeat | Tween = {
   when: 'afterChildren',
   duration: 1,
};

type LayoutProps = {
   children: React.ReactNode;
   name: keyof typeof CSSLayout;
   title?: string;
   description?: string;
   url?: string;
};

export default function Layout(props: LayoutProps) {
   const { children, name, title, description, url } = props;
   const className = CSSLayout[name];

   return (
      <>
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" key="ogtype" />
            <meta property="og:url" content={url} key="ogurl" />
            <meta property="og:site_name" content="" key="ogsitename" />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta
               property="og:description"
               content={description}
               key="ogdesc"
            />
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: transition }}
            exit={{ opacity: 0, transition: endTransition }}
            className={`${className} ${reset} ${globals} ${fonts}`}
         >
            {children}
         </motion.main>
      </>
   );
}
