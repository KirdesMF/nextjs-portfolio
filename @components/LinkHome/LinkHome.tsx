import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon } from '@components/Icon/Icon';
import { COLORS } from 'Theme/colors';

import * as styles from './LinkHome.styles';
import * as variants from './LinkHome.variants';

export function LinkHome() {
   const { pathname } = useRouter();
   const isPresent = pathname === '/' || pathname === '/home';
   return (
      <Link href="/home">
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
            />
         </motion.a>
      </Link>
   );
}
