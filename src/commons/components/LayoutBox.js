import styled from 'styled-components';
import { color } from '../../styles/color';
const { dark } = color;

export const OuterBox = styled.div`
  margin-bottom: 150px;
`;

export const PageNavWrap = styled.div`
  box-sizing: border-box;
  padding: 48px 20px 20px 48px;
  border-bottom: solid 1.5px rgb(221, 221, 221);
  max-width: 1200px;
  position: relative;
  margin: 0 auto 20px;
`;

export const PageNav = styled.div`
  line-height: normal;
  color: #767676;
  font-size: 13px;
  word-spacing: 0.3rem;
`;

export const PageTitle = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

export const ContentBox = styled.div`
  box-sizing: border-box;
  width: 1200px;
  min-height: 700px;
  padding: 0 20px 50px 20px;
  margin: 0 auto;
  border: solid 1.5px rgb(221, 221, 221);
`;
