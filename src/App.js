import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import { theme } from './theme/mainTheme';
import Header from './components/Header/Header';
import Select from './components/Select/Select';
import CardSection from './components/CardSection/CardSection';
import Spinner from './components/Spinner/Spinner';

class App extends Component {
  state = {
    country: 'Afghanistan',
    data: [],
  }

  async componentDidMount() {
    const data = await this.fetchData();
    this.setState({
      data: data.Countries,
    });
  }

  handleSelectChange = (e) => {
    const country = e.target.value;
    this.setState({ country });
  }

  fetchData = async () => {
    const response = await fetch('https://api.covid19api.com/summary');
    const data = await response.json();
    return data;
  }

  render() {
    const { country, data } = this.state;
    const selectedCountryData = data.filter((el) => el.Country === country);

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <Select onChange={this.handleSelectChange} />
          {data.length === 0 ? <Spinner /> : <CardSection data={selectedCountryData} />}
        </>
      </ThemeProvider>
    );
  }
}

export default App;
