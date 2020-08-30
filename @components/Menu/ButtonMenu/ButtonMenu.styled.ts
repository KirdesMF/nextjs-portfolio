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
   filter: drop-shadow(0 0 5px black);
`;

const Path = styled(motion.path)`
   fill: transparent;
   stroke-width: 5;
   stroke: ${({ theme }) => theme.colors.white};
   stroke-linecap: round;
`;

export const SButtonMenu = {
   Button,
   Svg,
   Path,
};
