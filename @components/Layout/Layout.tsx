import React from 'react';
import { CSSLayout } from './Layout.styled';
import { motion, Variants } from 'framer-motion';

type LayoutProps = {
   children: React.ReactNode;
   name: keyof typeof CSSLayout;
};

const variants: Variants = {
   initial: {
      transition: {
         when: 'afterChildren',
      },
   },
   animate: {
      transition: {
         when: 'afterChildren',
      },
   },
   exit: {
      transition: {
         when: 'afterChildren',
      },
   },
};

function Layout({ name, children }: LayoutProps) {
   const classname = CSSLayout[name];

   return (
      <React.Fragment>
         <motion.main
            className={classname}
            variants={variants}
            animate="animate"
            exit="exit"
            initial="initial"
         >
            {children}
         </motion.main>
      </React.Fragment>
   );
}

/**============= Export ================ */
export { Layout };
