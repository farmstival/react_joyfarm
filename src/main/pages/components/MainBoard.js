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
  margin-bottom: 70px;
`;

const Title = styled.h2`
  font-size: 3em;
  margin-bottom: 10px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 20px; 
    bottom: -5px; 
    width: 97%;
    height: 10px;
    background-color: ${lightGreen}; 
    border-radius: 5px; 
  }
`;

const MoreLink = styled.a`
  font-size: 1.5em;
  color: ${darkGreen};
  font-weight: bold;
  cursor: pointer;
     &:hover {
      text-decoration-line: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 10px;
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
  height: 200px; 
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
  cursor: pointer; 
`;

const DateText = styled.p`
  font-size: 1.5em;
  color: ${mid_gray};
  font-weight: bold;
  margin-bottom: 30px;
`;

const NoticeText = styled.p`
  font-size: 1.2em;
  color: ${dark};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70%;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const NoticeItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${mid_gray};
  padding: 25px 0;
`;

const NoticeDate = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: ${mid_gray};
  margin-right: 30px;
`;

const NoticeContent = styled.p`
  font-size: 1.2em;
  color: ${dark};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70%;
`;

const MainBoard = ({ onButtonClick }) => {
  const handleNoticeClick = (url) => {
    window.location.href = url; 
  };

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
            <TextContainer onClick={() => handleNoticeClick('/notice/1')}>
              <DateText>2024.04.12</DateText>
              <NoticeText>[공지사항] 최시원님의 생일은 4월 22일 입니다. 생일을 축하해...</NoticeText>
            </TextContainer>
          </LeftSection>
          <RightSection>
            {[1, 2, 3].map(index => (
              <NoticeItem key={index} onClick={() => handleNoticeClick(`/notice/${index}`)}>
                <NoticeDate>2024.04.12</NoticeDate>
                <NoticeContent>[공지사항] 최시원님의 생일은 4월 22일 입니다. 생일을 최시원님의 생일은 4월 22일 입니다. 생일을 축하해...</NoticeContent>
              </NoticeItem>
            ))}
          </RightSection>
        </ContentWrapper>
      </InnerContentWrapper>
    </MainBoardWrapper>
  );
};

export default React.memo(MainBoard);
