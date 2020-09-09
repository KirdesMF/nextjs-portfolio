import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CSSVAR } from '@components/ColorScheme/ColorScheme';

const Button = styled.button`
   position: fixed;
   z-index: 5;
   width: 8em;
   height: 6em;

   display: grid;
   place-items: center;
`;
const Svg = styled(motion.svg)`
   filter: drop-shadow(0 0 5px ${CSSVAR['grey-normal-text']});
`;

const Path = styled(motion.path)`
   fill: transparent;
   stroke-width: 5;
   stroke: ${CSSVAR['grey-normal-text']};
   stroke-linecap: round;
   transform-box: fill-box;
`;

export const SButtonMenu = {
   Button,
   Svg,
   Path,
};
