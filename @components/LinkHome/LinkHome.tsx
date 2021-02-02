import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon } from '@components/Icon/Icon';
import { COLORS } from 'Theme/colors';

import * as styles from './LinkHome.styles';
import * as variants from './LinkHome.variants';
import { Utils } from 'utils/utils';

export function LinkHome() {
   const { pathname } = useRouter();
   const customPathname = Utils.customURL(pathname);
   const colorIcon = `${customPathname}-300` as keyof typeof COLORS;
   const isPresent = pathname === '/' || pathname === '/home';

   return (
      <Link href="/home" passHref>
         <motion.a
            className={styles.anchor}
            variants={variants.variants}
            initial="out"
            whileHover="hover"
            animate={isPresent ? 'out' : 'in'}
            exit="out"
         >
            <Icon
               name="plane"
               classname={styles.icon}
               size="3vw"
               hover={COLORS['black-100']}
               iconColor={COLORS[colorIcon]}
            />
         </motion.a>
      </Link>
   );
}
