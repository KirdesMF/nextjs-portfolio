import React from 'react';
import { SHeader } from './Header.styled';
import { PagesNameType, URLType } from '_types/common';
import Link from 'next/link';

type LinksType = {
   name: PagesNameType;
   href: URLType;
};

/**================= Settings ======================= */
/**
 * Links Array
 */
const linksNavigation: LinksType[] = [
   { name: 'home', href: '/' },
   { name: 'about', href: '/about' },
   { name: 'works', href: '/works' },
   { name: 'contact', href: '/contact' },
];

/**================= Component ===================== */
/**
 * Header Component
 * contain Navigation
 */
const Header = () => {
   return (
      <SHeader.Header>
         <SHeader.Navigation>
            {linksNavigation.map((link) => (
               <Link key={link.name} href={link.href}>
                  <SHeader.Anchor>{link.name}</SHeader.Anchor>
               </Link>
            ))}
         </SHeader.Navigation>
      </SHeader.Header>
   );
};

export default Header;
