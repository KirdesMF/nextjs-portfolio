import { motion } from 'framer-motion';
import Link from 'next/link';

import * as styles from './LinkPages.styles';
import * as variants from './LinkPages.variants';

type ButtonPagesProps = {
   content: string;
   href: string;
};

export function LinkPages({ content, href }: ButtonPagesProps) {
   return (
      <Link href={href}>
         <motion.a variants={variants.button} className={styles.anchor}>
            {content}
         </motion.a>
      </Link>
   );
}
