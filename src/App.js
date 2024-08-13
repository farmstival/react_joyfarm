import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const MainLayout = loadable(() => import('./layouts/MainLayout'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));
const Main = loadable(() => import('./main/pages/Main')); // 메인페이지

/* 회원 페이지 S */
//lodable: 지연로딩
const Join = loadable(() => import('./member/pages/Join'));
const Login = loadable(() => import('./member/pages/Login'));
/* 회원 페이지 E */

/* 마이페이지 S */
const MypageMain = loadable(() => import('./mypage/pages/MypageMain'));
/* 마이페이지 E */

/* 농촌체험 예약 페이지 S */
const ReservationMain = loadable(() =>
  import('./reservation/pages/ReservationMain'),
);
/* 농촌체험 예약 페이지 E */

/* 여행 추천 페이지 S */
const TravelMain = loadable(() => import('./recommend/pages/TravelMain'));
/* 여행 추천 페이지 E */

/* 지역별 축제 정보 페이지 S */
const FestivalMain = loadable(() => import('./recommend/pages/FestivalMain'));
/* 지역별 축제 정보 페이지 E */

/* 주변 농촌 체험 정보 S */
const MylocationMain = loadable(() => import('./recommend/pages/MylocationMain'));
/* 주변 농촌 체험 정보 E */

/* 나의 예약현황 페이지 S */
const MyReservationMain = loadable(() =>
  import('./my_reservation/pages/MyReservationMain'),
);
/* 나의 예약현황 페이지 E */

/* 게시판 페이지 S */
const CommunityMain = loadable(() => import('./community/pages/CommunityMain'));
/* 게시판 페이지 E */

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} /> {/* 메인 페이지 */}
        {/* 회원 페이지 S */}
        <Route path="member">
          <Route path="join" element={<Join />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* 회원 페이지 E */}
        {/* 마이페이지 S */}
        <Route path="mypage">
          <Route index element={<MypageMain />} />
        </Route>
        {/* 마이페이지 E */}
        {/* 농촌체험 예약 페이지 S */}
        <Route path="reservation">
          <Route path=":category?" element={<ReservationMain />} />
        </Route>
        {/* 농촌체험 예약 페이지 E */}
        {/* 여행 추천 페이지 S */}
        <Route path="recommend">
          <Route path=":category?" element={<TravelMain />} />
        </Route>
        {/* 지역별 축제 페이지 */}
        <Route path="festival">
          <Route path=":category?" element={<FestivalMain></FestivalMain>} />
        </Route>
        {/* 주변 농촌 체험 정보 */}
        <Route path="mylocation">
          <Route path=":category?" element={<MylocationMain></MylocationMain>} />
        </Route>
        {/* 여행 추천 페이지 E */}
        {/* 나의 예약현황 페이지 S */}
        <Route path="my_reservation">
          <Route path=":category?" element={<MyReservationMain />} />
        </Route>
        {/* 나의 예약현황 페이지 E */}
        {/* 게시판 페이지 S */}
        <Route path="community">
          <Route path=":category?" element={<CommunityMain />} />
        </Route>
        {/* 게시판 페이지 E */}
        <Route path="*" element={<NotFound />} /> {/* 없는 페이지 */}
      </Route>
    </Routes>
  );
};

export default App;