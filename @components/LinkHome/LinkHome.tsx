import { motion, Variants } from 'framer-motion';
import { css } from 'linaria';
import Link from 'next/link';
import { useRouter } from 'next/router';
import THEME from 'Theme/theme';
import { Icon } from '@components/Icon/Icon';

const anchor = css`
   position: fixed;
   z-index: 20;
   bottom: 10%;
   right: 6%;
`;

const icon = css`
   filter: drop-shadow(0 0 5px black);
   color: ${THEME.COLORS['primary-500']};
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

export default function LinkHome() {
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
               classname={icon}
               size="4vw"
               hover={THEME.COLORS['primary-300']}
            />
         </motion.a>
      </Link>
   );
}
