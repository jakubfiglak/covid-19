import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import Header from './components/Header/Header';
import SearchInput from './components/SearchInput/SearchInput';
import CardSection from './components/CardSection/CardSection';


const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header />
      <SearchInput placeholder="Search a country" />
      <CardSection />
    </>
  </ThemeProvider>
);

export default App;
