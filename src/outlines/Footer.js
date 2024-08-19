import React from 'react';
import styled from 'styled-components';
import { color } from '../styles/color';
import fontSize from '../styles/fontSize';
import { Link, NavLink } from 'react-router-dom';

const { dark_gray, mid_gray,light, white } = color;

const FooterBox = styled.footer`
  min-height: 270px;
  background: ${dark_gray};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Address = styled.div`
  width: 100%;  
  font-size: 16px;
  margin-left: 100px;
  margin-bottom: 30px;
  color: ${mid_gray};
  font-weight: bold;
`;

const Information = styled.div`
  width: 100%;  
  font-size: 13px;
  margin-left: 100px;
  margin-bottom: 20px;
  line-height: 1.5;
  color: ${mid_gray};
`;

const Information2 = styled.div`
  width: 100%;  
  font-size: 13px;
  margin-left: 100px;
  line-height: 1.5;
  color: ${mid_gray};
`;

const Footer_ContentBox = styled.div`

`;

const Footer_ImageBox = styled.div`

`;
const Footer = () => {
  return (
    <FooterBox>
      <Footer_ContentBox>
        <Address>
          서울특별시 송파구 올림픽로 300 | 대표자 : 김이름
        </Address>
        <Information>
          명예라는 건 허무한 군더더기다.
          <br />
          공로가 없어도 때로는 수중에 들어오지만, 죄를 안져도 없어질 때가 있다.
        </Information>
        <Information2>
          가난해도 족함을 알면 백만장자가 부럽지 않지만,
          <br />
          아무리 부자라 한들 가난뱅이가 되면 어떡하나 하고
          <br />
          걱정만 한다면, 엄동설한 같이 쓸쓸하기 그지없다.
        </Information2>
      </Footer_ContentBox>
      <Footer_ImageBox>

      </Footer_ImageBox>
    </FooterBox>
  );
};

export default React.memo(Footer);
