import styled from 'styled-components';
import { motion } from 'framer-motion';

const Svg = styled(motion.svg)`
   width: inherit;
   height: inherit;
   filter: drop-shadow(0 0 5px black);

   /* &:hover {
      transform: scale(1.1);
   } */

   > path {
      fill: transparent;
      stroke-width: 5;
      stroke-linecap: round;
   }
`;

const Nav = styled.nav`
   background: red;
   position: fixed;
   z-index: 6;
   top: 50%;
   left: 50%;

   width: 20%;
   height: 20%;
`;

export const SMenu = {
   Svg,
   Nav,
};
