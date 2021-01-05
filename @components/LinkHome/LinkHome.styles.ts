import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const anchor = css`
   position: fixed;
   z-index: 20;
   bottom: 10%;
   right: 6%;
`;

export const icon = css`
   filter: drop-shadow(0 0 2px black);
   color: ${COLORS.background};
`;
