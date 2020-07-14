import React from 'react';
import { SLayout } from './Layout.styled';

type LayoutProps = {
   children: React.ReactNode;
   /**
    * name of layout [Resticted to SLayout name]
    */
   name: keyof typeof SLayout;
};

/**===================== Component =========================== */
/**
 * Component Layout
 * @param name - Name of Layout/Pages [Restricted to pages names]
 * @return <Layout>{children}</Layout>
 * @remarks
 * Example of usage:
 * ```ts
 * <Layout name='home" >{children}</Layout>
 * ```
 */
const Layout = ({ name, children }: LayoutProps) => {
   const Layout = SLayout[name];
   return <Layout>{children}</Layout>;
};

/**============= Export ================ */
export { Layout };
