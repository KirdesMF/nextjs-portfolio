import { css } from '@linaria/core';
import { COLORS } from 'Theme/colors';

export const canvas = css`
   width: 50%;
   height: 50%;
   margin: 0 auto;
   position: fixed;
   top: 15%;
   left: 40%;
   pointer-events: none;
   background-color: ${COLORS.text};
   box-shadow: 0px 0px 10px black;
`;
