import styled from 'styled-components';

const Canvas = styled.canvas`
   z-index: 1;
   position: fixed;
   top: 0;
   grid-area: nav;
   width: 100%;
   height: 100%;

   background: black;
`;

export const SCanvas = {
   Canvas,
};
