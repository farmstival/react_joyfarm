import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MainBanner from './components/MainBanner'; // 컴포넌트를 default import

const MainLocation = styled.nav``;
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
      <MainLocation>{/* Location 관련 콘텐츠 */}</MainLocation>
      <MainRecommend>{/* Recommend 관련 콘텐츠 */}</MainRecommend>
      <MainReview>{/* Review 관련 콘텐츠 */}</MainReview>
      <MainBoard>{/* Board 관련 콘텐츠 */}</MainBoard>
    </>
  );
};

export default React.memo(Main);
