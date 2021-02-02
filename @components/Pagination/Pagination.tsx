import { AnimateSharedLayout, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { COLORS } from 'Theme/colors';

import * as styles from './Pagination.styles';

const LINKS = [
   { href: '/home', color: COLORS['home-300'] },
   { href: '/about', color: COLORS['about-300'] },
   { href: '/works', color: COLORS['works-300'] },
   { href: '/contact', color: COLORS['contact-300'] },
];

export function Pagination() {
   const { pathname } = useRouter();

   return (
      <nav className={styles.nav}>
         <AnimateSharedLayout>
            {LINKS.map(({ href, color }) => (
               <Link key={href} href={href} passHref>
                  <a
                     className={styles.anchor}
                     aria-label={`Link to ${href}`}
                     title={`Link to ${href}`}
                  >
                     {pathname === href && (
                        <motion.span
                           layoutId="outline"
                           aria-hidden
                           className={styles.span}
                           style={{
                              borderColor: color,
                           }}
                           transition={{
                              type: 'spring',
                              bounce: 0.5,
                              duration: 1,
                              delay: 1,
                           }}
                        />
                     )}
                  </a>
               </Link>
            ))}
         </AnimateSharedLayout>
      </nav>
   );
}
