import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CSSVAR } from '@components/ColorScheme/ColorScheme';

const Nav = styled(motion.nav)`
   position: fixed;
   z-index: 15;
   height: 65%;
   width: 30%;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);

   display: grid;
   grid-template-columns: 1fr;
   grid-auto-rows: 1fr;
   grid-gap: 0.5em;
   place-items: center;
   padding: 3em;

   background: var(--background);
   border-radius: 2em;
   box-shadow: var(--box-shadow-thin);

   transition: background 0.5s ease;
`;

const Link = styled(motion.a)`
   font-family: 'Decovar';
   font-size: 1em;
   color: ${CSSVAR['grey-normal-text']};
`;

const Svg = styled.svg`
   filter: drop-shadow(0 0 5px ${CSSVAR['grey-high-contrast']});
   position: absolute;
   bottom: 0%;
   height: 30%;
   width: 100%;
   border-bottom-right-radius: inherit;
   border-bottom-left-radius: inherit;

   > path {
      fill: ${CSSVAR['primary-midlow-contrast']};
      stroke: ${CSSVAR['primary-midlow-contrast']};
      transition: all 1s ease;

      stroke-width: 2;
      stroke-linecap: round;
   }
`;

export const SNavMenu = {
   Nav,
   Link,
   Svg,
};
