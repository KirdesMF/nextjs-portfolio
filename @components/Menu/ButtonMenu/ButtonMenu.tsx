import { useEffect } from 'react';
import { Hexagon } from '@components/Hexagon/Hexagon';
import { motion, useAnimation } from 'framer-motion';
import { menuSettings } from './ButtonMenu.variants';
import { useRouter } from 'next/router';

import * as styles from './ButtonMenu.styles';
import { COLORS } from 'Theme/colors';

type TButtonMenu = {
   isOpen: boolean;
   setIsOpen: (value: React.SetStateAction<boolean>) => void;
};

export function ButtonMenu({ isOpen, setIsOpen }: TButtonMenu) {
   const { VIEWBOX, ORIGIN, burger, hexes } = menuSettings;
   const { HEXMAP, HEX_SIZE, hexesMenuVariants } = hexes;
   const { topPathVariants, midPathVariants, botPathVariants } = burger;

   const router = useRouter();
   const controls = useAnimation();

   const hexesAnimation = {
      onTap: () => controls.start('onTap'),
      onHoverStart: () => controls.start('onHoverStart'),
      onHoverEnd: () => controls.start('onHoverEnd'),
   };

   useEffect(() => {
      controls.start('onHoverEnd');
   }, [router.pathname]);

   return (
      <button
         aria-label="Menu Button"
         onClick={() => setIsOpen((prev) => !prev)}
         className={styles.button}
         onFocus={() => controls.start('onHoverStart')}
      >
         <motion.svg
            className={styles.svg}
            viewBox={VIEWBOX}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            focusable="false"
            initial="initial"
            animate={controls}
            {...hexesAnimation}
            filter="url(#shadow-color)"
         >
            <title>Menu button</title>
            <desc>Hamburger menu with a hexes background animated</desc>

            {HEXMAP.map((hex, i) => {
               return (
                  <Hexagon
                     key={i}
                     custom={i}
                     variants={hexesMenuVariants({
                        delay: i,
                        isOpen: isOpen,
                        color: COLORS.background,
                     })}
                     originHex={ORIGIN}
                     sizeHex={HEX_SIZE}
                     cube={hex}
                     filter="url(#shadow-color)"
                  />
               );
            })}
            <motion.path
               className={styles.path}
               variants={topPathVariants}
               animate={isOpen ? 'open' : 'closed'}
               initial="initial"
            />

            <motion.path
               className={styles.path}
               variants={midPathVariants}
               animate={isOpen ? 'open' : 'closed'}
               initial="initial"
            />
            <motion.path
               className={styles.path}
               variants={botPathVariants}
               animate={isOpen ? 'open' : 'closed'}
               initial="initial"
            />
         </motion.svg>
      </button>
   );
}
