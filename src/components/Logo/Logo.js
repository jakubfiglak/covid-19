import styled from 'styled-components';
import virusIcon from '../../assets/icons/virus.svg';

const Logo = styled.div`
color: ${({ theme }) => theme.success};
font-size: ${({ theme }) => theme.fontSize.xxl};
font-weight: ${({ theme }) => theme.bold};
background: url(${virusIcon}) no-repeat 0 50%;
background-size: 40px;
padding-left: 55px;
text-transform: uppercase;
`;

export default Logo;
