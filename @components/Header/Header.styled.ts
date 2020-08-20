import styled from 'styled-components';

const Header = styled.header`
   z-index: 4;
   position: fixed;
   top: 0;

   width: 100%;
   height: 10%;

   display: grid;
   grid-template:
      '. nav .' 1fr
      /2fr 1fr 15%;

   background: transparent;
`;

const Navigation = styled.nav`
   grid-area: nav;

   display: grid;
   grid-auto-flow: column;
   gap: 2rem;

   place-items: center;
`;

const Anchor = styled.a`
   color: ${({ theme }) => theme.colors.white};
`;

export const SHeader = {
   Header,
   Navigation,
   Anchor,
};
