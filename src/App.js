import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';

const StyledHeader = styled.h1`
  /* color: red; */
  font-size: 80px;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledHeader>Hello world</StyledHeader>
      ;
    </>
  </ThemeProvider>
);

export default App;
