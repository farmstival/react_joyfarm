import React from 'react';
import styled from 'styled-components';
import { color } from '../../../styles/color';
import mapImage from '../../../images/banner1.jpg';
import logoImage from '../../../images/logo.png';

const { dark, light, midGreen, white, lightGreen, darkGreen } = color;

const MainLocationWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, ${lightGreen}, ${white});
  padding: 50px 0; 
  min-height: 700px; 
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1440px; 
  width: 100%; 
  padding: 0 20px;
`;

const MapImage = styled.img`
  margin-top: 100px;
  width: 40%; 
  height: auto;
  object-fit: cover;
  margin-bottom: 20px; 
`;

const InnerContentWrapper = styled.div`
  margin-top: 100px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  width: 60%; 
`;

const LogoImage = styled.img`
  width: 400px; 
  margin-bottom: 10px; 
`;

const HighlightBox = styled.div`
  background-color: ${darkGreen};
  color: ${white};
  padding: 15px;
  width: calc(100% - 20px); 
  margin-bottom: 20px; 
  display: flex;
  font-size: 1.5em;
  font-weight: bold;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  margin-right: 0; 
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px; 
  width: 70%; 
`;

const Button = styled.button`
  background-color: ${white};
  color: ${dark};
  border-radius: 15px;
  width: 150px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
  border: none; 
  &:hover {
      border: none;
     text-decoration-line: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 10px;
      color: ${midGreen};
      transform: scale(1.07);
  }
`;

const MainLocation = ({ onButtonClick }) => {
  return (
    <MainLocationWrapper>
      <ContentWrapper>
        <MapImage src={mapImage} alt="Map" />
        <InnerContentWrapper>
          <LogoImage src={logoImage} alt="Logo" />
          <HighlightBox>어떤지역으로 가시나요?</HighlightBox>
          <ButtonContainer>
            <Button onClick={onButtonClick}>서울</Button>
            <Button onClick={onButtonClick}>경기•인천</Button>
            <Button onClick={onButtonClick}>충청도</Button>
            <Button onClick={onButtonClick}>강원도</Button>
            <Button onClick={onButtonClick}>전라도</Button>
            <Button onClick={onButtonClick}>경상도</Button>
          </ButtonContainer>
        </InnerContentWrapper>
      </ContentWrapper>
    </MainLocationWrapper>
  );
};

export default React.memo(MainLocation);
