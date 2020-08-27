import styled, { css, keyframes } from 'styled-components';
import { hexCornersPoints } from 'utils/hexagons/helpers';
import { TPoint, TCube, cubeToPoint } from 'utils/hexagons/convert';
import { motion } from 'framer-motion';

type THex = {
   originHex: TPoint;
   cube: TCube;
   sizeHex: number;
   pathname: string;
   centers?: TPoint;
};

type TCreateAtt = {
   originHex: TPoint;
   cube: TCube;
   sizeHex: number;
};

function createAttribPoints({ originHex, cube, sizeHex }: TCreateAtt) {
   return hexCornersPoints({ origin: originHex, cube, size: sizeHex })
      .map((corner) => `${~~corner.x} ${~~corner.y}`)
      .join(',');
}

const Hex = styled.polygon<THex>`
   stroke-width: 5;
   stroke-linejoin: round;
   transform-origin: ${({ centers }) =>
      centers && `${~~centers.x}px ${~~centers.y}px`};
`;

export const Hexagon = styled(motion.custom(Hex)).attrs<THex>(
   ({ originHex, sizeHex, cube }) => ({
      points: createAttribPoints({ originHex, sizeHex, cube }),
      centers: cubeToPoint({ origin: originHex, size: sizeHex, cube }),
   })
)(Hex);
