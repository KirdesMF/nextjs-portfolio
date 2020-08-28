import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled.button`
   position: fixed;
   z-index: 5;
   width: 8em;
   height: 6em;

   display: grid;
   place-items: center;
`;

const Svg = styled(motion.svg)`
   width: inherit;
   height: inherit;
   filter: drop-shadow(0 0 5px black);

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
   Button,
   Svg,
   Nav,
};
