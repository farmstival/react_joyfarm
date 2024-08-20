import styled from 'styled-components';
import fontSize from '../../styles/fontSize';

const { extraBig } = fontSize;

export const MainTitle = styled.h1`
  font-size: ${extraBig};
  border-bottom: 2px solid #000;
  padding: 0 15px 15px;
  margin: 0 0 20px;
  line-height: 1;
`;

export const SubTitle = styled.h2`
  font-size: ${extraBig};
  border-bottom: 1px solid #000;
  padding: 0 10px 10px;
  margin: 0 0 15px;
  line-height: 1.2;
`;
