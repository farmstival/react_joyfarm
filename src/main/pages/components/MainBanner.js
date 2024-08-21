import React from 'react';
import styled from 'styled-components';
import { color } from '../../../styles/color';
import bannerImage from '../../../images/banner1.jpg';

const { darkGreen, white, mid_gray, light } = color;

const MainBannerWrapper = styled.div`
  position: relative; 
  overflow: hidden; 
  background-color: ${darkGreen}; 
`;

const BannerImage = styled.img`
  width: 100%;
  height: 650px; 
  display: block; 
  object-fit: cover; 
`;

const InfoBar = styled.nav`
  height: 150px;
  color: ${white};
  width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  font-size: 1.2em;
  max-width: 1440px; 
  width: 100%; 
  bottom: 0; 
  box-sizing: border-box;
  left: 50%;
`;

const InfoBox = styled.div`
  display: block;
  text-align: right;
`;

const InfoText = styled.div`
  margin-right: 100px;
  color: ${light}
  font-size: ${props => (props.isHeader ? '1.5em' : '1em')};
  margin-top: ${props => (props.isHeader ? '0' : '5px')};
  margin-bottom: ${props => (props.isHeader ? '10px' : '0')};
`;

const Button = styled.button`
  margin-left: 100px;
  background-color: ${darkGreen};
  color: ${white};
  border: 1px solid ${white};
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  &:hover {
    color: ${darkGreen};
    border: 1px solid ${white};
    background-color: ${white};
    border: none;
  }
`;

const MainBanner = ({ onButtonClick }) => {
  return (
    <MainBannerWrapper>
      <BannerImage src={bannerImage} alt="Main Banner" />
      <InfoBar>
        <Button onClick={onButtonClick}>지금 바로 예약하기</Button>
        <InfoBox>
          <InfoText isHeader>조이팜과 함께 떠나는 즐거운 농촌체험!</InfoText>
          <InfoText>
            전국에 있는 체험가능한 농촌들을 방문하여, 좋은 경험과 추억을 쌓아보세요!<br />
            
          </InfoText>
        </InfoBox>
      </InfoBar>
    </MainBannerWrapper>
  );
};

export default React.memo(MainBanner);