import { createGlobalStyle } from 'styled-components';

const ResetCSS = createGlobalStyle`
html {
   box-sizing: border-box;
};

*,
*:before,
*:after {
   box-sizing: inherit;
};

html,
body {
   margin: 0;
   padding: 0;

   height: 100%;
   background: black;

}

body > * {
   height: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
   margin: 0;
   padding: 0;
}

ul,
li {
   list-style: none;
   padding: 0;
   margin: 0;
}

a {
   text-decoration: none;
   color: unset;
   cursor: pointer;
}

button{
   padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  outline: none;
}

`;

export default ResetCSS;
