import styled from 'styled-components';
import searchIcon from '../../assets/icons/search.svg';

const SearchInput = styled.input.attrs(() => ({
  type: 'search',
}))`
  display: block;
  width: 340px;
  height: 40px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
  border-radius: 23px;
  border: none;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.dark} url(${searchIcon}) no-repeat 15px 50%;
  padding-left: 40px;
  margin: 50px auto;

  &:focus {
    outline: 0;
  }
`;

export default SearchInput;
