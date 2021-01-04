import { css } from '@linaria/core';

export const nav = css`
   position: fixed;
   z-index: 20;
   right: 3%;
   top: 50%;
   transform: translateY(-50%);

   height: 20%;
   width: 8%;

   display: grid;
   grid-template-areas:
      'prev'
      'title'
      'next';
   grid-template-rows: repeat(3, 1fr);
`;

export const button = css`
   &[data-area='prev'] {
      grid-area: prev;
   }

   &[data-area='next'] {
      grid-area: next;
   }
`;

export const span = css`
   grid-area: title;
   place-self: center;
   overflow: hidden;
   padding: 0.5rem;
   width: 100%;
   text-align: center;
   border-top: 1px solid red;
   border-bottom: 1px solid red;

   > h2 {
      color: red;
      text-transform: uppercase;
      font-family: 'Amstelvar';
      font-size: 1.3rem;
      transform-origin: 200%;
   }
`;
