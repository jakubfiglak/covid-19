import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  display: block;
  width: 340px;
  height: 40px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  border: none;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.dark};
  padding-left: 15px;
  margin: 50px auto;

  &:focus {
    outline: 0;
  }
`;

class Select extends Component {
  state = {
    countries: [],
  };

  async componentDidMount() {
    const data = await this.fetchCountries();
    const countriesArr = data.map((el) => el.Country);
    this.setState((prevState) => ({
      countries: [...prevState.countries, ...countriesArr],
    }));
  }

  fetchCountries = async () => {
    const res = await fetch('https://api.covid19api.com/countries');
    const data = await res.json();
    return data;
  }

  render() {
    const { countries } = this.state;
    const { onChange } = this.props;

    return (
      <StyledSelect onChange={onChange}>
        {countries.map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </StyledSelect>
    );
  }
}

export default Select;
