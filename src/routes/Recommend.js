import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { load } from 'react-cookies';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

/* 여행지 추천 페이지 S */
const TourPage = loadable(() => import('../recommend/tour/pages/Tour'));
const TourViewPage = loadable(() => import('../recommend/tour/pages/TourView'));
/* 여행지 추천 페이지 E */

const Recommend = () => {
  return (
    <Routes>
      <Route path="/recommend" element={<MainLayout />}>
        <Route path="tour" element={<TourPage />}/>
        <Route path="tour/:seq" element={<TourViewPage />}/>
      </Route>
    </Routes>
  );
};
