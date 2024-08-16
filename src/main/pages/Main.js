import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MainBanner from './components/MainBanner';
import MainLocation from './components/MainLocation'
import MainRecommend from './components/MainRecommend';
import MainReview from './components/MainReview';
import MainBoard from './components/MainBoard';

const Main = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/reservation'); // 원하는 경로로 변경
  };

  return (
    <>
      <MainBanner onButtonClick={handleButtonClick} />
      <MainLocation onButtonClick={handleButtonClick}/>
      <MainRecommend onButtonClick={handleButtonClick}/>
      <MainReview onButtonClick={handleButtonClick}/>
      <MainBoard onButtonClick={handleButtonClick}/>
    </>
  );
};

export default React.memo(Main);
