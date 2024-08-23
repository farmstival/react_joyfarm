import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MypageLayout = loadable(() => import('../layouts/MypageLayout'));
/* 마이페이지 S */
const MypageMain = loadable(() => import('../mypage/pages/Main'));
const InfoPage = loadable(() => import('../mypage/pages/Info.js')); // 회원정보 수정
const ReservationPage = loadable(() => import('../mypage/pages/Reservation')); // 예약관리
const BoardPage = loadable(() => import('../mypage/pages/Board')); // 게시글 관리

// 찜하기 목록
const WishListPage = loadable(() => import('../mypage/pages/WishList'));

/* 마이페이지 E */

const Mypage = () => {
  return (
    <Routes>
      <Route path="/mypage" element={<MypageLayout />}>
        <Route index element={<MypageMain />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="reservation" element={<ReservationPage />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="wishlist/:tab" element={<WishListPage />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Mypage);
