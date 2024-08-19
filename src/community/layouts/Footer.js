import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.footer`
  min-height: 170px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const Footer = () => {
    return (
        <FooterBox>
            <hr/>
            커뮤니티 푸터영역
        </FooterBox>
    )
}

export default Footer;