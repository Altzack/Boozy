import React from 'react';
import styled from 'styled-components/macro';

const NotFound = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  color: #fff;
`;
const FourOhFour = () => {
  return <NotFound>404 PAGE DOESN'T EXIST</NotFound>;
};

export default FourOhFour;
