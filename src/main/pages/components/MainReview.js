import React from 'react';
import styled, { keyframes } from 'styled-components';
import { color } from '../../../styles/color';
import MainReviewImage from '../../../images/banner1.jpg'; // 예시 이미지 경로

const { darkGreen, white, dark, midGreen, lightGreen } = color;

const MainReviewWrapper = styled.div`
  background: ${lightGreen};
  display: flex;
  justify-content: center; /* 중앙 정렬 */
  height: 950px;
`;

const InnerContentWrapper = styled.div`
  max-width: 1440px; /* 최대 너비 제한 */
  width: 100%; /* 너비를 100%로 설정하여 부모 요소의 너비에 맞추도록 함 */
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const scrollUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const scrollDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 950px; 
  width: 300px;
  margin-right: 40px;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 640px; 
  width: 300px;
`;

const ImageBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ImageBox = styled.div`
  width: 300px;
  height: 190px;
  background: ${dark};
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox1 = styled(ImageBoxContainer)`
  animation: ${scrollUp} 15s linear infinite;
`;

const ImageBox2 = styled(ImageBoxContainer)`
  animation: ${scrollDown} 15s linear infinite;
`;

const ReviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
  line-height: 1.4;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: ${midGreen};
  background: ${white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: ${darkGreen};
    color: ${white};
  }
`;

const MainReview = ({ onButtonClick }) => {
  return (
    <MainReviewWrapper>
      <InnerContentWrapper>
        <LeftSection>
          <ImageBox1>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 1" />
            </ImageBox>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 2" />
            </ImageBox>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 3" />
            </ImageBox>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 4" />
            </ImageBox>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 5" />
            </ImageBox>
          </ImageBox1>
          <ImageBox2>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 1" />
            </ImageBox>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 2" />
            </ImageBox>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 3" />
            </ImageBox>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 4" />
            </ImageBox>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 5" />
            </ImageBox>
          </ImageBox2>
        </LeftSection>
        <RightSection>
          <ImageBoxContainer>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 1" />
            </ImageBox>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 2" />
            </ImageBox>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 3" />
            </ImageBox>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 4" />
            </ImageBox>
            <ImageBox>
              <ReviewImage src={MainReviewImage} alt="Review 5" />
            </ImageBox>
          </ImageBoxContainer>
        </RightSection>
        <ContentWrapper>
          <Title>특별했던 순간을 공유하세요!</Title>
          <Subtitle>
            짜릿하고 즐거웠던 체험의 순간들을<br />
            사람들과 공유하며 행복을 나눠보세요!
          </Subtitle>
          <Button onClick={onButtonClick}>체험후기 바로가기</Button>
        </ContentWrapper>
      </InnerContentWrapper>
    </MainReviewWrapper>
  );
};

export default React.memo(MainReview);
