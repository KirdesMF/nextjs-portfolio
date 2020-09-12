import { styled } from 'linaria/react';
import { css } from 'linaria';

export const Wrapper = styled.div`
   position: fixed;
   top: 0;
   width: 30%;
   left: 20%;
   z-index: 20;

   & > button {
      margin-right: 1em;
   }
`;

export const wrapper = css`
   position: fixed;
   top: 0;
   width: 30%;
   left: 20%;
   z-index: 20;

   & > button {
      margin-right: 1em;
   }
`;
