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
  height: 400px; /* 이미지 비율을 유지하며 배너의 너비에 맞게 조정 */
  display: block; /* 이미지가 inline-block 처럼 보이지 않도록 */
`;

const InfoBar = styled.nav`
  height: 130px; /* InfoBar 높이 조정 */
  color: ${white}; /* 텍스트 색상 */
  background-color: ${darkGreen}; /* 배경 색상 */
  display: flex;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: space-between; /* 양 끝 정렬 */
  padding: 0 40px; /* 양쪽 패딩 추가 */
  font-size: 1.2em; /* 텍스트 크기 */
`;

const InfoBox = styled.div`
  display: block;
  text-align: right; /* 텍스트 오른쪽 정렬 */
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
