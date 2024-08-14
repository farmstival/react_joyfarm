import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import ReservationMain from '../reservation/pages/ReservationMain';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

const ApplyPage = loadable(() => import('../reservation/pages/Apply'));
const CompletionPage = loadable(() =>
  import('../reservation/pages/Completion'),
);
const Reservation = () => {
  return (
    <Routes>
      <Route path="/reservation" element={<MainLayout />}>
        <Route path="complete" element={<CompletionPage />} />
        <Route path=":seq" element={<ApplyPage />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Reservation);
