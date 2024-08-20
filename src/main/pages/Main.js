
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MainBanner from './components/MainBanner';
import MainLocation from './components/MainLocation';
import MainRecommend from './components/MainRecommend';
import MainReview from './components/MainReview';
import MainBoard from './components/MainBoard';
import Sidebar from './components/SideBar'; 

const HEADER_HEIGHT = 60; 

const Main = () => {
  const navigate = useNavigate();

  const top = useRef(null);
  const locationRef = useRef(null);
  const recommendRef = useRef(null);
  const reviewRef = useRef(null);
  const boardRef = useRef(null);

  const handleButtonReservation = () => {
    navigate('/reservation'); 
  };

  const handleButtonLocation = () => {
    navigate('/recommend/festival'); 
  };

  const handleButotnReview = () => {
    navigate('/community/review'); 
  };

  const handleButtonRecommend = () => {
    navigate('/recommend/tour'); 
  };

  const handleButtonBoard = () => {
    navigate('/community/notice'); 
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // 스크롤 위치 조정
      window.scrollBy(0, -HEADER_HEIGHT); // 헤더 높이만큼 스크롤 위치를 조정
    }
  };

  const handleLinkClick = (section) => {
    switch (section) {
      case 'top':
        scrollToSection(top);
        break;
      case 'location':
        scrollToSection(locationRef);
        break;
      case 'recommend':
        scrollToSection(recommendRef);
        break;
      case 'review':
        scrollToSection(reviewRef);
        break;
      case 'board':
        scrollToSection(boardRef);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div ref={top}>
        <MainBanner onButtonClick={handleButtonReservation} />
      </div>
      <div ref={locationRef}>
        <MainLocation onButtonClick={handleButtonLocation} />
      </div>
      <div ref={recommendRef}>
        <MainRecommend onButtonClick={handleButtonRecommend} />
      </div>
      <div ref={reviewRef}>
        <MainReview onButtonClick={handleButotnReview} />
      </div>
      <div ref={boardRef}>
        <MainBoard onButtonClick={handleButtonBoard} />
      </div>
      <Sidebar onLinkClick={handleLinkClick} /> {/* 사이드바 추가 */}
    </>
  );
};

export default React.memo(Main);
