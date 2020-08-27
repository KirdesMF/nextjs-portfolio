import styled from 'styled-components';

const Title = styled.article`
   width: 100%;
   height: 100%;
   position: fixed;
   z-index: 3;

   display: grid;
   place-items: center;

   > h1 {
      font-family: 'Decovar';
      font-size: 4em;
      color: ${({ theme }) => theme.colors.white};
      will-change: filter;
   }
`;

export const SMaintTitle = {
   Title,
};
