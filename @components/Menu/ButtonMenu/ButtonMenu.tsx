import React, { useEffect } from 'react';
import Hexagon from '@components/Hexagon/Hexagon';
import { motion, useAnimation } from 'framer-motion';
import { menuSettings } from './ButtonMenu.variants';
import { useRouter } from 'next/router';
import { css } from 'linaria';
import theme from 'Theme/theme';

type TButtonMenu = {
   isOpen: boolean;
   setIsOpen: (value: React.SetStateAction<boolean>) => void;
};

function ButtonMenu({ isOpen, setIsOpen }: TButtonMenu) {
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
      <button className={button} onClick={() => setIsOpen((prev) => !prev)}>
         <motion.svg
            className={svg}
            viewBox={VIEWBOX}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="xMidYMid"
            initial="initial"
            animate={controls}
            {...hexesAnimation}
         >
            {HEXMAP.map((hex, i) => {
               return (
                  <Hexagon
                     key={i}
                     custom={i}
                     variants={hexesMenuVariants({
                        delay: i,
                        isOpen: isOpen,
                        color: theme.COLORS['primary-200'],
                     })}
                     originHex={ORIGIN}
                     sizeHex={HEX_SIZE}
                     cube={hex}
                  />
               );
            })}
            <motion.path
               className={path}
               variants={topPathVariants}
               animate={isOpen ? 'open' : 'closed'}
               initial="initial"
            />

            <motion.path
               className={path}
               variants={midPathVariants}
               animate={isOpen ? 'open' : 'closed'}
               initial="initial"
            />
            <motion.path
               className={path}
               variants={botPathVariants}
               animate={isOpen ? 'open' : 'closed'}
               initial="initial"
            />
         </motion.svg>
      </button>
   );
}
export default ButtonMenu;

const button = css`
   position: fixed;
   top: 0;
   z-index: 5;
   width: 8em;
   height: 6em;

   display: grid;
   place-items: center;
`;

const path = css`
   fill: transparent;
   stroke-width: 5;
   stroke: ${theme.COLORS['primary-200']};
   stroke-linecap: round;
   transform-box: fill-box;
`;

const svg = css`
   filter: drop-shadow(0 0 5px ${theme.COLORS['grey-200']});
`;
