import {
   motion,
   Orchestration,
   Repeat,
   TargetAndTransition,
   Tween,
   Variants,
} from 'framer-motion';
import React from 'react';
import { fonts } from 'Theme/fonts';
import { reset } from 'Theme/reset';
import { globals } from 'Theme/theme';
import { CSSLayout } from './Layout.styled';

type LayoutProps = {
   children: React.ReactNode;
   name: keyof typeof CSSLayout;
};

const transition: Orchestration | Repeat | Tween = {
   when: 'beforeChildren',
   duration: 2,
};

const endTransition: Orchestration | Repeat | Tween = {
   when: 'afterChildren',
   duration: 2,
};

function Layout({ children, name }: LayoutProps) {
   const className = CSSLayout[name];
   return (
      <motion.main
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, transition: transition }}
         exit={{ opacity: 0, transition: endTransition }}
         className={`${className} ${reset} ${globals} ${fonts}`}
      >
         {children}
      </motion.main>
   );
}

/**============= Export ================ */
export default Layout;
