import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDatas } from 'hooks/useDatas';

import { AnimatePresence, motion } from 'framer-motion';

import * as styles from './NavMenu.styles';
import variants from './NavMenu.variants';

type TNavMenu = {
   isOpen: boolean;
   setIsOpen: (value: React.SetStateAction<boolean>) => void;
};

export function NavMenu({ isOpen, setIsOpen }: TNavMenu) {
   const router = useRouter();
   const { pathname } = router;
   const data = useDatas();

   const handleClick = () => setIsOpen(false);

   if (!data) return <div>Loading</div>;

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
                  {Object.values(data).map((link, i) => (
                     <Link key={link.title} href={`/${link.title}`} passHref>
                        <motion.a
                           className={styles.anchor}
                           onClick={handleClick}
                           custom={i}
                           variants={variants.anchor}
                           animate="in"
                           exit="out"
                           initial="out"
                           data-active={
                              pathname === `/${link.title}` && 'active'
                           }
                        >
                           <motion.span
                              variants={variants.span}
                              custom={i}
                              animate="in"
                              exit="out"
                              initial="initial"
                              className={styles.span}
                              data-active={
                                 pathname === `/${link.title}` && 'active'
                              }
                           >
                              {link.title}
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
