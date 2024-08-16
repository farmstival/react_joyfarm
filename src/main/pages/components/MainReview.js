import React from 'react';
import styled, { keyframes } from 'styled-components';
import { color } from '../../../styles/color';
import MainReviewImage from '../../../images/banner1.jpg'; // 예시 이미지 경로

const { darkGreen, white, dark, midGreen, lightGreen } = color;

const MainReviewWrapper = styled.div`
  background: ${lightGreen};
  display: flex;
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
  height: 640px; 
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
  animation: ${scrollUp} 15s linear infinite;
  height: 100%;
`;

const ImageBoxContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${scrollDown} 15s linear infinite;
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

const ImageBoxRight = styled.div`
  width: 300px;
  height: 190px;
  background: ${dark};
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
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
      <LeftSection>
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
        </ImageBoxContainer>
      </LeftSection>
      <RightSection>
        <ImageBoxContainerRight>
          <ImageBoxRight>
            <ReviewImage src={MainReviewImage} alt="Review 1" />
          </ImageBoxRight>
          <ImageBoxRight>
            <ReviewImage src={MainReviewImage} alt="Review 2" />
          </ImageBoxRight>
          <ImageBoxRight>
            <ReviewImage src={MainReviewImage} alt="Review 3" />
          </ImageBoxRight>
          <ImageBoxRight>
            <ReviewImage src={MainReviewImage} alt="Review 4" />
          </ImageBoxRight>
        </ImageBoxContainerRight>
      </RightSection>
      <div>
        <Title>특별했던 순간을 공유하세요!</Title>
        <Subtitle>
          짜릿하고 즐거웠던 체험의 순간들을<br />
          사람들과 공유하며 행복을 나눠보세요!
        </Subtitle>
        <Button onClick={onButtonClick}>체험후기 바로가기</Button>
      </div>
    </MainReviewWrapper>
  );
};

export default React.memo(MainReview);
