import React from 'react';
import {Routes, Route} from 'react-router-dom';
import loadable from '@loadable/component';

//레이아웃 분리 가능
//지연로딩
const MainLayout = loadable(()=> import("../layouts/MainLayout"));

//여행 관련 페이지 S
const TourPage = loadable(()=> import("../recommend/tour/pages/Tour"));
const TourViewPage = loadable(()=> import("../recommend/tour/pages/TourView"));
//여행 관련 페이지 E


const Recommend = () => {
    return (
        <Routes>
            <Route path="/recommend" element={<MainLayout/>}>
                <Route path="tour" element={<TourPage/>}/>
                <Route path="tour/:seq" element={<TourViewPage/>}/>
            </Route>
        </Routes>
    );
};

export default React.memo(Recommend)