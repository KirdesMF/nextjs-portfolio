import React from 'react';
import Link from 'next/link';

import * as styles from './HomeNav.style';

function HomeNav() {
   return (
      <nav className={styles.nav}>
         <Link href="/about">
            <a className={styles.anchor}>ABOUT</a>
         </Link>
         <Link href="/works">
            <a className={styles.anchor}>WORKS</a>
         </Link>
         <Link href="/contact">
            <a className={styles.anchor}>CONTACT</a>
         </Link>
      </nav>
   );
}

export default HomeNav;
