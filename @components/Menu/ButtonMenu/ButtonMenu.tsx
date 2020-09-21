import React, { useEffect } from 'react';
import Hexagon from '@components/Hexagon/Hexagon';
import { motion, useAnimation } from 'framer-motion';
import { menuSettings } from './ButtonMenu.variants';
import { useRouter } from 'next/router';

import style from './ButtonMenu.style';
import THEME from 'Theme/theme';

type TButtonMenu = {
   isOpen: boolean;
   setIsOpen: (value: React.SetStateAction<boolean>) => void;
   area: string;
};

function ButtonMenu({ isOpen, setIsOpen, area }: TButtonMenu) {
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
         tabIndex={0}
         className={style.button}
         data-area={area}
         onClick={() => setIsOpen((prev) => !prev)}
      >
         <motion.svg
            className={style.svg}
            viewBox={VIEWBOX}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="xMidYMid"
            aria-hidden="true"
            focusable="false"
            initial="initial"
            animate={controls}
            {...hexesAnimation}
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
                        color: THEME.COLORS['primary-200'],
                     })}
                     originHex={ORIGIN}
                     sizeHex={HEX_SIZE}
                     cube={hex}
                  />
               );
            })}
            <motion.path
               className={style.path}
               variants={topPathVariants}
               animate={isOpen ? 'open' : 'closed'}
               initial="initial"
            />

            <motion.path
               className={style.path}
               variants={midPathVariants}
               animate={isOpen ? 'open' : 'closed'}
               initial="initial"
            />
            <motion.path
               className={style.path}
               variants={botPathVariants}
               animate={isOpen ? 'open' : 'closed'}
               initial="initial"
            />
         </motion.svg>
      </button>
   );
}
export default ButtonMenu;
