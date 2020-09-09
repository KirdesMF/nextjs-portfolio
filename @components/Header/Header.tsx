import React from 'react';
import { SHeader } from './Header.styled';
import Link from 'next/link';

/**================= Settings ======================= */
/**
 * Links Array
 */
const linksNavigation = [
   { name: 'home', href: '/home' },
   { name: 'about', href: '/about' },
   { name: 'works', href: '/works' },
   { name: 'contact', href: '/contact' },
];

/**================= Component ===================== */
/**
 * Header Component
 * contain Navigation
 */
function Header() {
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
}

export default Header;
