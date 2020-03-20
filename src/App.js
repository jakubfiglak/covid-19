import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import Header from './components/Header/Header';
import Select from './components/Select/Select';
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
    console.log(this.state.countries.filter((country) => country.Country === 'Poland'));
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
          <Select />
          <CardSection />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
