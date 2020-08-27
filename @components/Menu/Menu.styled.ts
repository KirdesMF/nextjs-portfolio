import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled.button`
   position: fixed;
   z-index: 5;
   width: 20%;
   height: 20%;

   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: 1fr;
   place-items: center;
`;

const Svg = styled(motion.svg)`
   width: 100%;
   height: 100%;
   grid-column: 1/2;
   grid-row: 1/2;
   filter: drop-shadow(0 0 10px black);
`;

const Title = styled.p`
   z-index: 6;
   grid-column: 1/2;
   grid-row: 1/2;
   font-family: 'Decovar';
   font-size: 0.8em;
   color: ${({ theme }) => theme.colors.white};
   pointer-events: none;
   text-shadow: 2px 1px 5px ${({ theme }) => theme.colors.black};
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
   Title,
   Nav,
};
