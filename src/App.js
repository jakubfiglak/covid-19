import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import Header from './components/Header/Header';


const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header />
    </>
  </ThemeProvider>
);

export default App;
