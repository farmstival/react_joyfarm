import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; 
import { color } from '../../../styles/color';
import MainReviewImage from '../../../images/QnAImage.png';

const { darkGreen, white, dark, midGreen, lightGreen, mid_gray, line_gray } = color;

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
  margin-bottom: 40px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center; 
`;

const QnATitle = styled.h2`
  font-size: 3em;
  margin-bottom: 10px;
  position: relative;
  text-align: center;
  margin-left: 150px;
`;

const NoticeTitle = styled.h2`
  font-size: 3em;
  margin-bottom: 10px;
  position: relative;
  text-align: center;
  margin-left: 320px;
`;

const Underline = styled.span`
  display: block;
  width: 150px; 
  height: 10px;
  background-color: ${lightGreen};
  margin: 0 auto;
  border-radius: 5px;
`;

const MoreLink = styled.a`
  font-size: 1.5em;
  color: ${darkGreen};
  font-weight: bold;
  margin-right:170px;
  margin-top: 70px;
  cursor: pointer;
  &:hover {
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 10px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 70px;
  margin: 0 auto;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  text-align: center; 
  background: ${white};
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  padding-bottom: 30px;
  margin-left: 150px;
`;

const ImageBox = styled.div`
  width: 100%; 
  max-width: 450px;
  height: 230px; 
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: ${dark};
  margin-bottom: 20px; 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
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
  font-weight:bold;
  color: ${midGreen};
  font-weight: bold;
  margin-bottom: 20px;
`;

const NoticeText = styled.p`
  font-size: 1.2em;
  line-height:1.5;
  color: ${dark};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const RightSection = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  text-align: center; 
  background: ${white};
  padding-top: 40px; 
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const NoticeHeader = styled.div`
  font-size: 1.6em;
  font-weight: bold;
  color: ${dark};
  margin-bottom: 25px;
  width: 70%;
  margin-left: 80px;
  text-align: left;
`;

const NoticeItem = styled.div`
  width: 80%;
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-left: 60px;
  border-bottom: 1px solid ${line_gray};
  padding: 5px 0;
  &:nth-child(5) {
    border-bottom: none;
  }
`;
const NoticeDate = styled.p`
  font-size: 1.4em;
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
          <TitleWrapper>
            <QnATitle>
              QnA
              <Underline />
            </QnATitle>
            <NoticeTitle>
              공지사항
              <Underline />
            </NoticeTitle>
          </TitleWrapper>
          <MoreLink onClick={onButtonClick}>더보기</MoreLink>
        </Header>
        <ContentWrapper>
          <LeftSection>
            <ImageBox>
              <Image src={MainReviewImage} alt="QnA" />
            </ImageBox>
            <TextContainer onClick={() => handleNoticeClick('/board/list/qna')}>
              <DateText>문의 사항이 있으시다면 알려주세요!</DateText>
              <NoticeText>당신의 소중한 의견을 받아,< br/>
               더 나은 서비스가 되도록 노력하겠습니다.</NoticeText>
            </TextContainer>
          </LeftSection>
          
          <RightSection>
            <NoticeHeader>공지사항</NoticeHeader>
            {[1, 2, 3, 4].map(index => (
              <NoticeItem key={index} onClick={() => handleNoticeClick(`/notice/${index}`)}>
                <NoticeDate>2024.04.12</NoticeDate>
                <NoticeContent>[공지사항] 24년 9월 30일은 수료일입니다. 프로젝트 화이팅...</NoticeContent>
              </NoticeItem>
            ))}
          </RightSection>
        </ContentWrapper>
      </InnerContentWrapper>
    </MainBoardWrapper>
  );
};

export default React.memo(MainBoard);