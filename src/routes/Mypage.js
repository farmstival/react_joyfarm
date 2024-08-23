import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));
/* 마이페이지 S */
const MypageMain = loadable(() => import('../mypage/pages/MypageMain'));
const InfoPage = loadable(() => import('../mypage/pages/Info.js')); // 회원정보 수정
const ReservationPage = loadable(() => import('../mypage/pages/Reservation')); // 예약관리
const BoardPage = loadable(() => import('../mypage/pages/Board')); // 게시글 관리

const WishListPage = loadable(()=>{import('../mypage/pages/WishList')}); //찜하기 목록
/* 마이페이지 E */

const Mypage = () => {
  return (
    <Routes>
      <Route path="/mypage" element={<MainLayout />}>
        <Route index element={<MypageMain />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="reservation" element={<ReservationPage />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="wishList/:tab" element={<WishListPage/>} />
      </Route>
    </Routes>
  );
};

export default React.memo(Mypage);
