import React from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('../layouts/MainLayout'));

const NoticePage = loadable(() => import('../community/notice/pages/NoticeMain'));

const QnAPage = loadable(() => import('../community/qna/pages/QnaMain'))

const ReviewPage = loadable(() => import('../community/review/pages/ReviewMain'));


const Community = () => {
  return (
    <Routes>
      <Route path="/community" element={<MainLayout />}>
        <Route path="qna" element={<QnAPage />} />
        <Route path='notice' element={<NoticePage />} />
        <Route path='review' element={<ReviewPage/>}/>
      </Route>
    </Routes>
  );
};

export default React.memo(Community);