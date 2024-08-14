import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import FestivalMain from '../recommend/pages/FestivalMain';
import MylocationMain from '../recommend/pages/MylocationMain';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

/* 여행 관련 페이지 S - 필요할 때만 로딩하도록 지연로딩 */
const TourPage = loadable(() => import('../recommend/tour/pages/Tour'));
const TourViewPage = loadable(() => import('../recommend/tour/pages/TourView'));
/* 여행 관련 페이지 E */

/* 축제 관련 페이지 S */
/* 축제 관련 페이지 E */

const Recommend = () => {
  return (
    <Routes>
      <Route path="/recommend" element={<MainLayout />}>
        <Route path="tour" element={<TourPage />} />
        <Route path="tour/:seq" element={<TourViewPage />}/>
        <Route path="festival" element={<FestivalMain />}/>
        <Route path="festival/:seq"/>
        <Route path="mylocation" element={<MylocationMain />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Recommend);