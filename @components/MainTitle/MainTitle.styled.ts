import styled from 'styled-components';
import { motion } from 'framer-motion';

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
   font-family: 'Decovar';
   font-size: 4em;
   color: ${({ theme }) => theme.colors.white};
   will-change: transform;
`;

export const SMaintTitle = {
   Title,
   Span,
};
