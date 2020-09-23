import { motion } from 'framer-motion';
import React from 'react';
import { CSSLayout } from './Layout.styled';

type LayoutProps = {
   children: React.ReactNode;
   name: keyof typeof CSSLayout;
};
function Layout({ children, name }: LayoutProps) {
   const classname = CSSLayout[name];

   if (name === 'home') {
      return (
         <motion.main
            animate="in"
            exit="out"
            initial="out"
            className={classname}
         >
            {children}
         </motion.main>
      );
   } else {
      return (
         <motion.main
            animate="in"
            exit="out"
            initial="out"
            className={classname}
         >
            {children}
         </motion.main>
      );
   }
}

/**============= Export ================ */
export default Layout;
