import styled from 'styled-components';
import { THEME } from 'Theme/colors';

const Canvas = styled.canvas`
   width: 100%;
   height: 100%;

   position: fixed;
   top: 0;
   left: 0;

   z-index: 2;

   background: ${THEME.COLORS.VAR.black};
   filter: brightness(var(--filter-canvas));
`;

export const SCanvasHexagons = {
   Canvas,
};
