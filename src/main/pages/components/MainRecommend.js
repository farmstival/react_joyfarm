import React from 'react';
import styled from 'styled-components';
import { color } from '../../../styles/color';
import MainRecommendImage from '../../../images/banner1.jpg';

const { darkGreen, white, dark, mid_gray, midGreen } = color;

const MainRecommendWrapper = styled.div`
  padding: 100px;
  background: ${white};
  margin-bottom: 100px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: ${darkGreen};
`;

const MoreLink = styled.a`
  font-size: 1em;
  color: ${darkGreen};
  cursor: pointer;
  text-decoration: underline;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 20px;
  margin-top: 70px;
`;

const Item = styled.div`
  text-align: left; 
  cursor: pointer; 
`;

const Image = styled.img`
  width: 300px;
  height: 350px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  opacity: 0.7; 
  &:hover {
    opacity: 1; 
  }
  margin-bottom: 0; /* 이미지와 InfoBox 사이의 공백 제거 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InfoBox = styled.div`
  border: 1px solid ${midGreen};
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 300px;
  margin-top: -4px; 
`;

const Description = styled.p`
  margin-top: 20px; 
  margin-left: 20px;
  font-size: 1.5em;
  font-weight: bold;
  color: ${dark};
  line-height: 1.5; 
`;

const ExtraInfo = styled.p`
  font-size: 1em;
  color: ${dark};
  margin-top: 10px;
  margin-left: 20px;
`;

const Address = styled.p`
  font-size: 1em;
  color: ${mid_gray};
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 20px;
`;

const handleItemClick = (url) => {
  window.location.href = url; // 클릭 시 경로로 이동
};

const MainRecommend = ({ onButtonClick }) => {
  return (
    <MainRecommendWrapper>
      <Header>
        <Title>이런 여행지는 어떠세요?</Title>
        <MoreLink onClick={onButtonClick}>더보기</MoreLink>
      </Header>
      <Grid>
        <Item onClick={() => handleItemClick('path_to_destination1')}>
          <Image src={MainRecommendImage} alt="Travel Destination 1" />
          <InfoBox>
            <Description>소 젖먹이기 체험</Description>
            <ExtraInfo>
              젖소 먹이주기 체험, 치즈만들기 체험,<br />
              소고기 구워먹기 등등 많은 체험들이 있습니다.<br />
              많이들 참가해서 좋은 추억을 만드세요.
            </ExtraInfo>
            <Address>경기도 군포시 산본로 142 52-11</Address>
          </InfoBox>
        </Item>
        <Item onClick={() => handleItemClick('path_to_destination2')}>
          <Image src={MainRecommendImage} alt="Travel Destination 2" />
          <InfoBox>
            <Description>소 젖먹이기 체험</Description>
            <ExtraInfo>
              젖소 먹이주기 체험, 치즈만들기 체험,<br />
              소고기 구워먹기 등등 많은 체험들이 있습니다.<br />
              많이들 참가해서 좋은 추억을 만드세요.
            </ExtraInfo>
            <Address>경기도 군포시 산본로 142 52-11</Address>
          </InfoBox>
        </Item>
        <Item onClick={() => handleItemClick('path_to_destination3')}>
          <Image src={MainRecommendImage} alt="Travel Destination 3" />
          <InfoBox>
            <Description>소 젖먹이기 체험</Description>
            <ExtraInfo>
              젖소 먹이주기 체험, 치즈만들기 체험,<br />
              소고기 구워먹기 등등 많은 체험들이 있습니다.<br />
              많이들 참가해서 좋은 추억을 만드세요.
            </ExtraInfo>
            <Address>경기도 군포시 산본로 142 52-11</Address>
          </InfoBox>
        </Item>
        <Item onClick={() => handleItemClick('path_to_destination4')}>
          <Image src={MainRecommendImage} alt="Travel Destination 4" />
          <InfoBox>
            <Description>소 젖먹이기 체험</Description>
            <ExtraInfo>
              젖소 먹이주기 체험, 치즈만들기 체험,<br />
              소고기 구워먹기 등등 많은 체험들이 있습니다.<br />
              많이들 참가해서 좋은 추억을 만드세요.
            </ExtraInfo>
            <Address>경기도 군포시 산본로 142 52-11</Address>
          </InfoBox>
        </Item>
      </Grid>
    </MainRecommendWrapper>
  );
};

export default React.memo(MainRecommend);
