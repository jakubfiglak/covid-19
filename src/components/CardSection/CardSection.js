import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '../Card/Card';

const CardSectionWrapper = styled.section`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin: 30px 20px;
`;

const CardSection = ({ data }) => {
  const {
    NewConfirmed, TotalConfirmed, TotalDeaths, TotalRecovered,
  } = data[0];

  return (
    <CardSectionWrapper>
      <Card activeColor="dark" text="Total cases" number={TotalConfirmed} />
      <Card activeColor="gray" text="New cases" number={NewConfirmed} />
      <Card activeColor="error" text="Total deaths" number={TotalDeaths} />
      <Card activeColor="success" text="Total recovered" number={TotalRecovered} />
    </CardSectionWrapper>
  );
};

CardSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardSection;
