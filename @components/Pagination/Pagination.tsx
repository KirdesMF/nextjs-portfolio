import { AnimateSharedLayout, motion } from 'framer-motion';
import useMatchMedia from 'hooks/useMatchMedia';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BREAKPOINTS } from 'Theme/breakpoints';
import { COLORS } from 'Theme/colors';

import * as styles from './Pagination.styles';

const LINKS = [
   { href: '/home', color: COLORS.works },
   { href: '/about', color: COLORS.works },
   { href: '/works', color: COLORS.works },
   { href: '/contact', color: COLORS.works },
];

export function Pagination() {
   const { pathname } = useRouter();
   const isMobile = useMatchMedia(`(min-width: ${BREAKPOINTS.large})`);

   if (!isMobile) return null;

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
