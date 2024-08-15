import React from 'react';
import styled from 'styled-components';
import { color } from '../../../styles/color';
import mapImage from '../../../images/banner1.jpg';
import logoImage from '../../../images/logo.png';

const { dark, light, midGreen, white, lightGreen, darkGreen } = color;

const MainLocationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  background: linear-gradient(to bottom, ${lightGreen}, ${white});
  padding: 50px;
  height: 800px; 
  position: relative; /* 초록색 상자를 오른쪽 끝까지 이어지게 하기 위해 relative 위치 지정 */
`;

const MapImage = styled.img`
  margin-top: 100px;
  width: 40%; 
  height: auto;
  object-fit: cover;
  margin-bottom: 20px; 
`;

const ContentWrapper = styled.div`

  margin-top: 100px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  width: 60%; /* ContentWrapper가 MainLocationWrapper의 60%를 차지하도록 설정 */
`;

const LogoImage = styled.img`
  width: 400px; 
  margin-bottom: 10px; 
`;

const HighlightBox = styled.div`
  background-color: ${darkGreen};
  color: ${white};
  padding: 15px;
  width: calc(100% - 20px); /* 오른쪽 마진을 없애기 위해 계산된 너비 사용 */
  margin-bottom: 20px; 
  display: flex;
  font-size: 1.2em;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  margin-right: 0; /* 오른쪽 마진 제거 */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px; /* 버튼 간격 */
  width: 70%; /* 버튼 컨테이너 너비를 100%로 설정 */
`;

const Button = styled.button`
  background-color: ${white};
  color: ${dark};
  border-radius: 15px;
  width: 150px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
  border: none; 
  &:hover {
    color: ${darkGreen};
    background-color: ${white};
    border: none;
  }
`;

const MainLocation = ({ onButtonClick }) => {
  return (
    <MainLocationWrapper>
      <MapImage src={mapImage} alt="Map" />
      <ContentWrapper>
        <LogoImage src={logoImage} alt="Logo" />
        <HighlightBox>어떤지역으로 가시나요?</HighlightBox>
        <ButtonContainer>
          <Button onClick={onButtonClick}>서울</Button>
          <Button onClick={onButtonClick}>경기 인천</Button>
          <Button onClick={onButtonClick}>충청도</Button>
          <Button onClick={onButtonClick}>강원도</Button>
          <Button onClick={onButtonClick}>전라도</Button>
          <Button onClick={onButtonClick}>경상도</Button>
        </ButtonContainer>
      </ContentWrapper>
    </MainLocationWrapper>
  );
};

export default React.memo(MainLocation);
