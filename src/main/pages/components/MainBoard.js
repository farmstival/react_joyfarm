import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; 
import { color } from '../../../styles/color';
import MainReviewImage from '../../../images/ReviewImage1.jpg';

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
`;

const Underline = styled.span`
  display: block;
  width: 400px;
  height: 10px;
  background-color: ${lightGreen};
  margin-top: -5px; 
  margin-left: 20px;
  border-radius: 5px;
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
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;  
  text-align: left;  /* 텍스트 왼쪽 정렬 */
  background: ${white};
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const ImageBox = styled.div`
  width: 100%; 
  max-width: 400px;
  height: 250px; 
  border-radius: 15px;
  background: ${dark};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 15px;
  height: 100%;
  object-fit: cover;
`;

const TextContainer = styled.div`
  width: 100%; 
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
  max-width: 100%;  /* 텍스트의 최대 너비를 100%로 설정 */
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center; 
  background: ${white};
  padding: 20px 20px 30px; /* 위 아래 여백 조정 */
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const NoticeItem = styled.div`
  width: 90%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center; 
  border-bottom: 1px solid ${mid_gray};
  &:first-child {
    border-top: 1px solid ${mid_gray}; 
  }
  padding: 10px 0;
`;

const NoticeDate = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: ${mid_gray};
  margin-left: 20px;
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
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('https://api.example.com/notices'); // 실제 API URL로 변경
        setNotices(response.data);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []);

  const handleNoticeClick = (url) => {
    window.location.href = url; 
  };

  return (
    <MainBoardWrapper>
      <InnerContentWrapper>
        <Header>
          <Title>
            조이팜이 전하는 소식들
            <Underline />
          </Title>
          <MoreLink onClick={onButtonClick}>더보기</MoreLink>
        </Header>
        <ContentWrapper>
          <LeftSection>
            <ImageBox>
              <Image src={MainReviewImage} alt="Notice" />
            </ImageBox>
            <TextContainer onClick={() => handleNoticeClick('/notice/1')}>
              <DateText>2024.04.12</DateText>
              <NoticeText>[공지사항] 최시원님의 생일은 4월 22일 입니다. 생일을 축하해..<br/> 최시원님의 생일은 4월 22일 입니다. 생일을 축하해....</NoticeText>
            </TextContainer>
          </LeftSection>
          
          <RightSection>
            {[1, 2, 3, 4].map(index => (
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
