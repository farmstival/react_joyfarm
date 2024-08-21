import React from 'react';
import styled from 'styled-components';
import { color } from '../../../styles/color';
import MainReviewImage from '../../../images/banner1.jpg'; // Example image path

const { darkGreen, white, dark, midGreen, lightGreen, mid_gray } = color;

const MainBoardWrapper = styled.div`
  padding: 50px 20px;
  background: ${white};
  display: flex;
  justify-content: center; 
`;

const InnerContentWrapper = styled.div`
  max-width: 1440px; 
  width: 100%; 
  margin-bottom: 50px;
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

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ImageBox = styled.div`
  width: 400px;
  height: 200px; /* Adjust height as needed */
  background: ${dark};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  color: ${dark};
`;

const DateText = styled.p`
  font-size: 1em;
  margin: 0;
`;

const NoticeText = styled.p`
  font-size: 1em;
  margin: 0;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NoticeItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${mid_gray};
  padding-bottom: 10px;
`;

const NoticeDate = styled.p`
  font-size: 1em;
  color: ${mid_gray};
  margin-right: 30px;
`;

const NoticeContent = styled.p`
  font-size: 1em;
  color: ${dark};
  margin: 0;
`;

const MainBoard = ({ onButtonClick }) => {
  return (
    <MainBoardWrapper>
      <InnerContentWrapper>
        <Header>
          <Title>조이팜이 전하는 소식들</Title>
          <MoreLink onClick={onButtonClick}>더보기</MoreLink>
        </Header>
        <ContentWrapper>
          <LeftSection>
            <ImageBox>
              <Image src={MainReviewImage} alt="Notice" />
            </ImageBox>
            <TextContainer>
              <DateText>2024.04.12</DateText>
              <NoticeText>[공지사항] 최시원님의 생일은 4월 22일 입니다. 생일을 축하해...</NoticeText>
            </TextContainer>
          </LeftSection>
          <RightSection>
            {[1, 2, 3].map(index => (
              <NoticeItem key={index}>
                <NoticeDate>2024.04.12</NoticeDate>
                <NoticeContent>[공지사항] 최시원님의 생일은 4월 22일 입니다. 생일을 축하해...</NoticeContent>
              </NoticeItem>
            ))}
          </RightSection>
        </ContentWrapper>
      </InnerContentWrapper>
    </MainBoardWrapper>
  );
};

export default React.memo(MainBoard);