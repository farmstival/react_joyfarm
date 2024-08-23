import React from 'react';
import styled from 'styled-components';
import { color } from '../styles/color';
import FooterImage1 from '../images/KF_logo_black.png';
import FooterImage2 from '../images/KR_logo_black.png';
import FooterImage3 from '../images/logo.png';

const { dark_gray, mid_gray } = color;

const FooterBox = styled.footer`
  min-height: 270px;
  background: ${dark_gray};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterWrap = styled.div`
  width: 1440px;
  display:flex;
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

const FooterContentBox = styled.div`
  margin-bottom: 20px; 

`;

const FooterImageBox = styled.div`
  display: flex; 
  justify-content: center; 
  gap: 20px; 
  margin-left: 500px;
  margin-top:100px;
`;

const Image = styled.img`
  width: 150px; 
  height: auto; 
   object-fit: contain;
`;

const Footer = () => {
  return (
    <FooterBox>
      <FooterWrap>
      <FooterContentBox>
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
      </FooterContentBox>
      <FooterImageBox>
        <Image src={FooterImage1} alt="1" />
        <Image src={FooterImage2} alt="2" />
        <Image src={FooterImage3} alt="3" />
      </FooterImageBox>
      </FooterWrap>
    </FooterBox>
  );
};

export default React.memo(Footer);