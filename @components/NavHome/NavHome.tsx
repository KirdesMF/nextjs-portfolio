import Link from 'next/link';
import { motion } from 'framer-motion';

import * as styles from './NavHome.styles';
import * as variants from './NavHome.variants';

const linksArray = [
   {
      area: 'about',
      href: '/about',
   },
   {
      area: 'works',
      href: '/works',
   },
   {
      area: 'contact',
      href: '/contact',
   },
];

export function NavHome({ content }: { content: string[] }) {
   return (
      <nav className={styles.nav}>
         {linksArray.map((link, index) => (
            <Link key={link.area} href={link.href}>
               <motion.a
                  variants={variants.anchor}
                  animate="in"
                  exit="out"
                  initial="out"
                  className={styles.anchor}
                  data-area={link.area}
               >
                  <div className={styles.div} data-name={link.area}>
                     {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={styles.span}>
                           {content[index + 1]}
                        </span>
                     ))}
                  </div>
               </motion.a>
            </Link>
         ))}
      </nav>
   );
}
