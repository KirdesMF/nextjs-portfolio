import { motion, Variants } from 'framer-motion';
import React from 'react';
import { fonts } from 'Theme/fonts';
import { reset } from 'Theme/reset';
import { globals } from 'Theme/theme';
import { CSSLayout } from './Layout.styled';

type LayoutProps = {
   children: React.ReactNode;
   name: keyof typeof CSSLayout;
};

const variants: Variants = {
   in: {
      opacity: 1,
      transition: {
         when: 'beforeChildren',
      },
   },
   out: {
      opacity: 0,
      transition: {
         when: 'afterChildren',
      },
   },
};
function Layout({ children, name }: LayoutProps) {
   const className = CSSLayout[name];
   return (
      <motion.main
         animate="in"
         exit="out"
         initial="out"
         variants={variants}
         className={`${className} ${reset} ${globals} ${fonts}`}
      >
         {children}
      </motion.main>
   );
}

/**============= Export ================ */
export default Layout;
