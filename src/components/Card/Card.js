import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CountUp from 'react-countup';

const StyledCardWrapper = styled.div`
width: 300px;
background: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : 'transparent')};
box-shadow: 0px 1px 25px rgba(0, 0, 0, 0.08);
border-radius: 8px;
text-align: center;
margin: 20px;
`;

const StyledCardHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const StyledCardNumber = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.bold};
`;

const Card = ({ activeColor, text, number }) => (
  <StyledCardWrapper activeColor={activeColor}>
    <StyledCardHeading>{text}</StyledCardHeading>
    <StyledCardNumber>
      <CountUp end={parseInt(number)} duration={2} useEasing={false} />
    </StyledCardNumber>
  </StyledCardWrapper>
);

Card.propTypes = {
  activeColor: PropTypes.oneOf(['dark', 'gray', 'error', 'success']),
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

Card.defaultProps = {
  activeColor: 'dark',
};

export default Card;
