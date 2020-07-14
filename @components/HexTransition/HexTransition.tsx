import React, { useEffect, useRef, useState, useContext } from 'react';
import { cubeRing } from 'utils/hexagons/Helpers';
import { Cube, TCube } from 'utils/hexagons/Cube';
import { hexagonPoints } from 'utils/hexagons/DrawHexa';
import { SHexTransition } from './HexTransition.styled';
import { motion, Variants } from 'framer-motion';
import { Convert } from 'utils/hexagons/Convert';
import Link from 'next/link';
import { useRouter } from 'next//router';
import { ThemeContext } from 'styled-components';
import { TPoint } from 'utils/hexagons/Point';

type THexTransProps = {
   hexSize: TPoint;
};

const scale = [1, 0, 0, 1];

export const HexTransition = ({ hexSize }: THexTransProps) => {
   const { pathname } = useRouter();
   const pageName = pathname.substring(1);

   const { colors } = useContext(ThemeContext);

   const svgRef = useRef<SVGSVGElement>(null!);
   const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

   const origin: TPoint = { x: svgSize.width / 2, y: svgSize.height / 2 };
   const cubeCoordOrigin: TCube = Cube({ q: 0, r: 0, s: 0 });
   const radius = Math.round(svgSize.width / hexSize.x);

   const ringCoords = Array.from({ length: radius }, (_, index) => {
      return [...cubeRing({ center: cubeCoordOrigin, radius: index })];
   });
   ringCoords[0] = [cubeCoordOrigin];

   useEffect(() => {
      const svg = svgRef.current;
      let resizeId: number;

      setSvgSize({
         width: svg.clientWidth,
         height: svg.clientHeight,
      });

      window.addEventListener('resize', () => {
         clearTimeout(resizeId);
         resizeId = window.setTimeout(doneResize, 100);
      });

      const doneResize = () => {
         setSvgSize(() => ({
            width: svg.clientWidth,
            height: svg.clientHeight,
         }));
      };

      return () => {
         window.removeEventListener('resize', () => {
            clearTimeout(resizeId);
            resizeId = window.setTimeout(doneResize, 100);
         });
      };
   }, []);

   return (
      <>
         <Link href="/home">
            <a style={{ zIndex: 200, position: 'fixed', top: 50, left: 50 }}>
               home
            </a>
         </Link>

         <Link href="/about">
            <a style={{ zIndex: 200, position: 'fixed', top: 50, left: 150 }}>
               about
            </a>
         </Link>

         <Link href="/works">
            <a style={{ zIndex: 200, position: 'fixed', top: 50, left: 250 }}>
               works
            </a>
         </Link>

         <Link href="/contact">
            <a style={{ zIndex: 200, position: 'fixed', top: 50, left: 350 }}>
               contact
            </a>
         </Link>

         <SHexTransition.Svg
            ref={svgRef}
            viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}
         >
            {ringCoords.map((coord, index) =>
               coord.map((cube, key) => {
                  let hexaPoints = hexagonPoints({ hexSize, cube, origin });
                  let center = Convert.CubeToPoint({ cube, hexSize, origin });
                  if (
                     center.x > svgSize.width + hexSize.x ||
                     center.y > svgSize.height + hexSize.y ||
                     center.x < 0 - hexSize.x ||
                     center.y < 0 - hexSize.y
                  ) {
                     return null;
                  } else {
                     return (
                        <motion.polyline
                           key={key}
                           points={`${hexaPoints}`}
                           fill={colors.black}
                           stroke={colors.black}
                           strokeWidth="5px"
                           style={{
                              originX: `${Math.round(center.x)}px`,
                              originY: `${Math.round(center.y)}px`,
                           }}
                           variants={{
                              [pageName]: (i: number) => ({
                                 fill: [null, colors[pageName]],
                                 stroke: [null, colors[pageName]],
                                 scale: scale,
                                 transition: {
                                    delay: i * 0.1,
                                    duration: 1,
                                    ease: 'easeInOut',
                                 },
                              }),
                           }}
                           custom={index}
                           animate={pageName}
                        ></motion.polyline>
                     );
                  }
               })
            )}
         </SHexTransition.Svg>
      </>
   );
};
