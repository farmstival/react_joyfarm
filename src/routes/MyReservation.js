import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

/* 예약현황 관련 페이지 S */
const MyReserveList = loadable(() =>
  import('../myreservation/pages/MyReserveList'),
);
const MyReserveView = loadable(() =>
  import('../myreservation/pages/MyReserveView'),
);
/* 예약현황 관련 페이지 E */

const MyReservation = () => {
  return (
    <Routes>
      <Route path="/myreservation" element={<MainLayout />}>
        <Route path="list" element={<MyReserveList />} />
        <Route path="view/:seq" element={<MyReserveView />} />
      </Route>
    </Routes>
  );
};

export default React.memo(MyReservation);
