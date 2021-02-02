import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';

import * as styles from './NavMenu.styles';
import variants from './NavMenu.variants';
import { COLORS } from 'Theme/colors';

type TNavMenu = {
   isOpen: boolean;
   setIsOpen: (value: React.SetStateAction<boolean>) => void;
};

const LINKS = [
   { name: 'home', href: '/home' },
   { name: 'about', href: '/about' },
   { name: 'works', href: '/works' },
   { name: 'contact', href: '/contact' },
];

export function NavMenu({ isOpen, setIsOpen }: TNavMenu) {
   const { pathname } = useRouter();

   const handleClick = () => setIsOpen(false);

   return (
      <AnimatePresence>
         {isOpen && (
            <motion.section
               animate="in"
               exit="out"
               initial="out"
               variants={variants.section}
               className={styles.section}
            >
               <nav className={styles.nav}>
                  {LINKS.map((link, i) => (
                     <Link key={link.href} href={link.href} passHref>
                        <motion.a
                           className={styles.anchor}
                           onClick={handleClick}
                           custom={i}
                           variants={variants.anchor}
                           animate="in"
                           exit="out"
                           initial="out"
                           data-active={pathname === link.href && 'active'}
                        >
                           <motion.span
                              variants={variants.span}
                              custom={i}
                              animate="in"
                              exit="out"
                              initial="initial"
                              className={styles.span}
                              data-active={pathname === link.href && 'active'}
                           >
                              {link.name}
                           </motion.span>
                        </motion.a>
                     </Link>
                  ))}
               </nav>

               <motion.div
                  variants={variants.overlay}
                  className={styles.overlay}
               ></motion.div>
            </motion.section>
         )}
      </AnimatePresence>
   );
}
