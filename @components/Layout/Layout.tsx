import React from 'react';
import { SLayout } from './Layout.styled';

type LayoutProps = {
   children: React.ReactNode;
   name: keyof typeof SLayout;
};

const Layout = ({ name, children }: LayoutProps) => {
   const Layout = SLayout[name];
   return <Layout>{children}</Layout>;
};

export { Layout };
