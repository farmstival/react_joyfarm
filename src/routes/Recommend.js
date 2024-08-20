import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

/* 여행 관련 페이지 S - 필요할 때만 로딩하도록 지연로딩 */
const TourPage = loadable(() => import('../recommend/tour/pages/Tour'));
const TourViewPage = loadable(() => import('../recommend/tour/pages/TourView'));
/* 여행 관련 페이지 E */

/* 축제 관련 페이지 S */
const FestivalPage = loadable(() => import('../recommend/Festival/pages/Festival'));
const FestivalViewPage = loadable(() => import('../recommend/Festival/pages/FestivalView'));
/* 축제 관련 페이지 E */

/* 내 위치 주변 여행지 페이지 */
const MylocationPage = loadable(() => import('../recommend/Mylocation/pages/MylocationView'));

const Recommend = () => {
  return (
    <Routes>
      <Route path="/recommend" element={<MainLayout />}>
        <Route path="tour" element={<TourPage />} />
<<<<<<< HEAD
        <Route path="tour/:seq" element={<TourViewPage />} />
        <Route path="festival" element={<FestivalMain />} />
        <Route path="festival/:seq" />
        <Route path="mylocation" element={<MylocationMain />} />
=======
        <Route path="tour/:seq" element={<TourViewPage />}/>
        <Route path="festival" element={<FestivalPage />} />
        <Route path="festival/:seq" element={<FestivalViewPage/>}/>
        <Route path="mylocation" element={<MylocationPage />} />{/* 임시페이지 */}
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
      </Route>
    </Routes>
  );
};

export default React.memo(Recommend);
