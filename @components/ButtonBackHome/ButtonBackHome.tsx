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
      filter: drop-shadow(0 0 5px black);
   }

   /* animation: plane 1s infinite alternate cubic-bezier(0.785, 0.135, 0.15, 0.86);
   animation-play-state: paused;

   @media (hover: hover) and (pointer: fine) {
      &:hover {
         animation-play-state: running;
      }
   }

   @keyframes plane {
      from {
         transform: translate3d(0, -10px, 0);
      }

      to {
         transform: translate3d(0, 10px, 0);
      }
   } */
`;

const variants: Variants = {
   in: {
      opacity: 1,
      y: 0,
      transition: {
         duration: 1,
         ease: 'linear',
      },
   },
   out: {
      opacity: 0,
      y: 50,
      transition: {
         duration: 1,
         ease: 'linear',
      },
   },
   hover: {
      y: [0, -10],
      transition: {
         duration: 1,
         ease: 'linear',
         yoyo: Infinity,
      },
   },
};

function ButtonBackHome() {
   const { pathname } = useRouter();
   return (
      <Link href="/home">
         <motion.a
            className={anchor}
            variants={variants}
            initial="out"
            whileHover="hover"
            animate={pathname === '/home' ? 'out' : 'in'}
            exit="out"
         >
            <Icon
               name="plane"
               size="4rem"
               iconColor={THEME.COLORS['primary-500']}
               hover={THEME.COLORS['secondary-400']}
            />
         </motion.a>
      </Link>
   );
}

export default ButtonBackHome;
