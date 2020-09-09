import styled from 'styled-components';

/**
 * Home Layout
 */
const Home = styled.div`
   width: 100%;
   height: 100%;
`;

/**
 * About Layout
 */
const About = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   background: blue;
`;

/**
 * Works Layout
 */
const Works = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   background: green;
`;

/**
 * Contact Layout
 */
const Contact = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   background: red;
`;

/**================= Export ================ */
/**
 * Object storing Layouts Pages
 */
export const SLayout = {
   Home,
   About,
   Works,
   Contact,
};
