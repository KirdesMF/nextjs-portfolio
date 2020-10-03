import { motion } from 'framer-motion';
import React from 'react';
import { fonts } from 'Theme/fonts';
import { reset } from 'Theme/reset';
import { globals } from 'Theme/theme';
import { CSSLayout } from './Layout.styled';

type LayoutProps = {
   children: React.ReactNode;
   name: keyof typeof CSSLayout;
};
function Layout({ children, name }: LayoutProps) {
   const className = CSSLayout[name];
   return (
      <motion.main
         animate="in"
         exit="out"
         initial="out"
         className={`${className} ${reset} ${globals} ${fonts}`}
      >
         {children}
      </motion.main>
   );
}

/**============= Export ================ */
export default Layout;
