import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.background}
}

/* clears the 'X' from Internet Explorer */
input[type=search]::-ms-clear,
input[type=search]::-ms-reveal {
    display: none; 
    width : 0; 
    height: 0; 
    }

/* clears the 'X' from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration { 
  display: none; 
  }
`;

export default GlobalStyle;
