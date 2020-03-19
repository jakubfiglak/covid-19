import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import Header from './components/Header/Header';
import SearchInput from './components/SearchInput/SearchInput';
import CardSection from './components/CardSection/CardSection';


class App extends Component {
  state = {
    countries: [],
  }

  async componentDidMount() {
    const data = await this.fetchData();
    this.setState({
      countries: data.Countries,
    });
    console.log(this.state.countries);
  }

  fetchData = async () => {
    const response = await fetch('https://api.covid19api.com/summary');
    const data = await response.json();
    return data;
  }


  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <SearchInput placeholder="Search a country" />
          <CardSection />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
