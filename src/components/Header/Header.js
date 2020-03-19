import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';

const StyledHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => (
  <StyledHeaderWrapper>
    <Logo>covid-19</Logo>
  </StyledHeaderWrapper>
);

export default Header;
