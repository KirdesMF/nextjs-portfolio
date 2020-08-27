import React, { useState, useContext, useEffect } from 'react';
import { SMenu } from './Menu.styled';
import { ThemeContext } from 'styled-components';
import { createHexMapShapeHexagons } from 'utils/hexagons/helpers';
import { Hexagon } from '@components/Hexagon/Hexagon.styled';

import useClientRect from 'hooks/useClientRect';
import usePathName from 'hooks/usePathName';
import { Variants } from 'framer-motion';

type TMenuProps = {
   pathname: string;
};

export default function Menu({ pathname }: TMenuProps) {
   const { colors } = useContext(ThemeContext);
   const { pathToTitle } = usePathName();
   const [rect, ref] = useClientRect();

   const [isMenuVisible, setIsMenuVisible] = useState(false);
   const [colorAnimation, setColorAnimation] = useState(
      colors[pathToTitle(pathname)]
   );

   const textBtn = isMenuVisible ? 'Close' : 'Menu';
   const viewBox = rect && `0 0 ${~~rect.width} ${~~rect.height}`;
   const origin = {
      x: rect && ~~(rect.width / 2),
      y: rect && ~~(rect.height / 2),
   };
   const HEX_SIZE = 25;
   const RADIUS = 1;

   const hexmap = createHexMapShapeHexagons(RADIUS);

   function handleClickMenu() {
      setIsMenuVisible((prev) => !prev);
   }

   const variants: Variants = {
      initial: {
         opacity: 0,
         fill: colors.black,
         stroke: colors.black,

         transform: `rotateY(0deg)`,
      },
      hover: (i) => ({
         opacity: 0.8,
         fill: colors[pathToTitle(pathname)],
         stroke: colors.white,

         transform: `rotateY(${360 * 2}deg)`,

         transition: {
            delay: i * 0.06,
            duration: 2,
            ease: 'backInOut',
         },
      }),
   };

   useEffect(() => {
      setColorAnimation(() => colors[pathToTitle(pathname)]);
   }, [colorAnimation]);

   return (
      <>
         <SMenu.Button onClick={handleClickMenu}>
            <SMenu.Svg
               initial="initial"
               whileHover="hover"
               animate="initial"
               ref={ref}
               xmlns="http://www.w3.org/2000/svg"
               version="1.1"
               viewBox={viewBox}
            >
               {hexmap.map((hex, i) => {
                  return (
                     <Hexagon
                        custom={i}
                        variants={variants}
                        key={i}
                        originHex={origin}
                        sizeHex={HEX_SIZE}
                        cube={hex}
                        pathname={pathToTitle(pathname)}
                     />
                  );
               })}
            </SMenu.Svg>
            <SMenu.Title>{textBtn}</SMenu.Title>
         </SMenu.Button>
         {isMenuVisible && <SMenu.Nav></SMenu.Nav>}
      </>
   );
}
