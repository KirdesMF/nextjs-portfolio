import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const canvas = css`
   width: 100%;
   height: 100%;

   position: fixed;
   top: 0;
   left: 0;
   pointer-events: none;
   background-color: ${COLORS['black-0']};
`;
