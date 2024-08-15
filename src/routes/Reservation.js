import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

/* 예약 관련 페이지 S */
const ReservationList = loadable(() => import('../reservation/pages/ReservationList'));
const ReservationView = loadable(() => import('../reservation/pages/ReservationView'));
/* 예약 관련 페이지 E */

const reservation = () => {
  return (
  <Routes>
    <Route path="/reservation" element={<MainLayout/>}>
        <Route path="list" element={<ReservationList/>}/>
        <Route path="view/:seq" element={<ReservationView/>}/>
    </Route>
  </Routes>
  );
};

export default React.memo(reservation);