import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import ReservationMain from '../reservation/pages/ReservationMain';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

/* 예약 관련 페이지 S - 필요할 때만 로딩하도록 지연로딩 */

/* 예약 관련 페이지 E */

const Reservation = () => {
  return (
    <Routes>
      <Route path="/reservation" element={<MainLayout />}>
        <Route path="/reservation" element={<ReservationMain />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Reservation);
