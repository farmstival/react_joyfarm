import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

/* 예약 관련 페이지 S */
const ReservationList = loadable(() => import('../reservation/pages/ReservationList'));
const ReservationView = loadable(() => import('../reservation/pages/ReservationView'));
const ApplyPage = loadable(() => import('../reservation/pages/Apply'));
const CompletionPage = loadable(() =>
  import('../reservation/pages/Completion'),
);
/* 예약 관련 페이지 E */

const Reservation = () => {
  return (
    <Routes>
      <Route path="/reservation" element={<MainLayout />}>
        <Route path="list" element={<ReservationList/>}/>
        <Route path="view/:seq" element={<ReservationView/>}/>
        <Route path="complete" element={<CompletionPage />} />
        <Route path=":seq" element={<ApplyPage />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Reservation);