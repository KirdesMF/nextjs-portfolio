import { AnimatePresence, motion, Variants } from 'framer-motion';
import { css } from 'linaria';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import THEME from 'Theme/theme';
import { Icon } from '@components/Icon/Icon';

const anchor = css`
   position: fixed;
   z-index: 20;
   bottom: 10%;
   right: 6%;

   > svg {
      filter: drop-shadow(0 0 5px ${THEME.COLORS['grey-100']});
   }
`;

const variants: Variants = {
   initial: {
      opacity: 0,
      y: 50,
   },
   in: {
      opacity: 1,
      y: 0,
   },
   out: {
      opacity: 0,
      y: 50,
   },
};

function ButtonBackHome() {
   const { pathname } = useRouter();
   return (
      <Link href="/home">
         <motion.a
            className={anchor}
            variants={variants}
            initial="initial"
            animate={pathname === '/home' ? 'out' : 'in'}
            exit="out"
         >
            <Icon
               name="chevrons"
               size="4rem"
               iconColor={THEME.COLORS['secondary-500']}
            />
         </motion.a>
      </Link>
   );
}

export default ButtonBackHome;
