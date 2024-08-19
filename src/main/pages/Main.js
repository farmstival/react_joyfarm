import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MainBanner from './components/MainBanner';
import MainLocation from './components/MainLocation';
import MainRecommend from './components/MainRecommend';
import MainReview from './components/MainReview';
import MainBoard from './components/MainBoard';
import Sidebar from './components/SideBar'; // 사이드바 임포트

// 헤더 높이 변수 설정
const HEADER_HEIGHT = 60; // 헤더의 높이, 실제 높이로 조정 필요

const Main = () => {
  const navigate = useNavigate();

  const top = useRef(null);
  const locationRef = useRef(null);
  const recommendRef = useRef(null);
  const reviewRef = useRef(null);
  const boardRef = useRef(null);

  const handleButtonClick = () => {
    navigate('/reservation'); // 원하는 경로로 변경
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
        <MainBanner onButtonClick={handleButtonClick} />
      </div>
      <div ref={locationRef}>
        <MainLocation onButtonClick={handleButtonClick} />
      </div>
      <div ref={recommendRef}>
        <MainRecommend onButtonClick={handleButtonClick} />
      </div>
      <div ref={reviewRef}>
        <MainReview onButtonClick={handleButtonClick} />
      </div>
      <div ref={boardRef}>
        <MainBoard onButtonClick={handleButtonClick} />
      </div>
      <Sidebar onLinkClick={handleLinkClick} /> {/* 사이드바 추가 */}
    </>
  );
};

export default React.memo(Main);
