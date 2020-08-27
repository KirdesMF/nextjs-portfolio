import React from 'react';
import styled from 'styled-components';
const Example = styled.div`
   display: grid;
`;

const NestedGrid = styled.div`
   display: grid;
`;

const Works = () => {
   return (
      <Example>
         <NestedGrid></NestedGrid>
      </Example>
   );
};

export default Works;
