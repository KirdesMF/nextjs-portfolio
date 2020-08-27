import styled from 'styled-components';

const Navigation = styled.nav`
   --height: 20%;

   position: fixed;
   z-index: 4;
   right: 1%;
   top: calc(50% - var(--height) / 2);

   height: var(--height);
   width: 8%;

   display: grid;
   grid-template-areas:
      'prev'
      'title'
      'next';
   grid-template-rows: repeat(3, 1fr);
`;

type TButton = {
   prev?: boolean;
};
const Button = styled.button<TButton>`
   grid-area: ${({ prev }) => (prev ? 'prev' : 'next')};
   outline: none;
`;

const Title = styled.span`
   grid-area: title;
   place-self: center;
   overflow: hidden;
   padding: 0.5rem;
   width: 100%;
   text-align: center;
   border-top: 1px solid ${({ theme }) => theme.colors.white};
   border-bottom: 1px solid ${({ theme }) => theme.colors.white};

   > h2 {
      color: ${({ theme }) => theme.colors.white};
      text-transform: uppercase;
      font-family: 'Amstelvar';
      font-size: 1.3rem;
      transform-origin: 200%;
   }
`;

export const SPagination = {
   Navigation,
   Button,
   Title,
};
