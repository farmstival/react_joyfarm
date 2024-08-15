import React from 'react';
import styled from 'styled-components';
import bannerImage from '../../../images/banner1.jpg';
import { color } from '../../../styles/color';

const { dark, light, midGreen, white, darkGreen } = color;

const MainBannerWrapper = styled.nav`
  position: relative; /* 이미지의 절대 위치를 조정할 수 있도록 설정 */
  overflow: hidden; /* 배너 영역을 벗어난 이미지는 숨김 */
  background-color: ${midGreen};
`;

const BannerImage = styled.img`
  width: 100%;
  height: 400px; 
  display: block; /* 이미지가 inline-block 처럼 보이지 않도록 */
`;

const InfoBar = styled.nav`
  height: 130px; 
  color: ${white}; 
  background-color: ${darkGreen}; 
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  padding: 0 40px; 
  font-size: 1.2em; 
`;

const InfoBox = styled.div`
  display: block;
  text-align: right; 
`;

const InfoText = styled.div`
  margin-right: 100px;
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
  transition: background-color 0.3s ease, color 0.3s ease; /* 트랜지션 추가 */
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
          <InfoText isHeader>여행가세요!</InfoText>
          <InfoText>
            뭐라고 작성해야할지 모르겠지만,<br />
            일단 있어 보이게 하기위해서 글을 작성해 놓습니다.
          </InfoText>
        </InfoBox>
      </InfoBar>
    </MainBannerWrapper>
  );
};

export default React.memo(MainBanner);
