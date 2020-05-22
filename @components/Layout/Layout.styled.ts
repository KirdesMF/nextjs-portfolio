import styled from 'styled-components';

const Home = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   background: rebeccapurple;
`;

const About = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   background: blue;
`;

const Works = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   background: ${({ theme }) => theme.colors.works};
`;

const Contact = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   background: red;
`;

export const SLayout = {
   Home,
   About,
   Works,
   Contact,
};
