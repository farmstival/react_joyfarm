import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

const CommunityMain = loadable(() => import('../community/pages/CommunityMain'));

const Community = () => {
  return (
    <Routes>
      <Route path="/community" element={<MainLayout />}>
        <Route path="sub1" element={<CommunityMain />} />
      </Route>
    </Routes>
  );
};

export default React.memo(Community);