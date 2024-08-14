import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import MyReservationMain from '../my_reservation/pages/MyReservationMain';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

/* 예약 관련 페이지 S - 필요할 때만 로딩하도록 지연로딩 */

/* 예약 관련 페이지 E */

const MyReservation = () => {
  return (
    <Routes>
      <Route path="/my_reservation" element={<MainLayout />}>
        <Route index element={<MyReservationMain />} />
      </Route>
    </Routes>
  );
};

export default React.memo(MyReservation);
