import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CSSVAR } from '@components/ColorScheme/ColorScheme';

const Title = styled.article`
   z-index: 3;
   position: fixed;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   overflow: hidden;

   display: flex;
`;

const Span = styled(motion.span)`
   font-family: Helvetica, sans-serif;
   text-transform: uppercase;
   font-size: 4em;
   color: ${CSSVAR['grey-normal-text']};
   will-change: transform;
`;

export const SMaintTitle = {
   Title,
   Span,
};
