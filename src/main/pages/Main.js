import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MainBanner from './components/MainBanner';
import MainLocation from './components/MainLocation'

const MainRecommend = styled.nav``;
const MainReview = styled.nav``;
const MainBoard = styled.nav``;

const Main = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/reservation'); // 원하는 경로로 변경
  };

  return (
    <>
      <MainBanner onButtonClick={handleButtonClick} />
      <MainLocation onButtonClick={handleButtonClick}/>
      <MainRecommend>{/* Recommend 관련 콘텐츠 */}</MainRecommend>
      <MainReview>{/* Review 관련 콘텐츠 */}</MainReview>
      <MainBoard>{/* Board 관련 콘텐츠 */}</MainBoard>
    </>
  );
};

export default React.memo(Main);
