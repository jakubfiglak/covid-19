import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';

const CardSectionWrapper = styled.section`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin: 30px 20px;
`;

const CardSection = () => (
  <CardSectionWrapper>
    <Card activeColor="dark" text="Total cases" number="3000" />
    <Card activeColor="gray" text="New cases" number="150" />
    <Card activeColor="error" text="Total deaths" number="50" />
    <Card activeColor="success" text="Total recovered" number="100" />
  </CardSectionWrapper>
);

export default CardSection;
