import { Routes, Route, useLocation } from 'react-router-dom';
import loadable from '@loadable/component';
import Reservation from './routes/Reservation';


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
  //지연로딩, 페이지 접근 시 로딩
  import('./reservation/pages/ReservationMain'),
);
const ReservationView = loadable(() =>
  import('./reservation/pages/ReservationView'),
);
/* 농촌체험 예약 페이지 E */

/* 여행 추천 페이지 S */
const Tour = loadable(() => import('./recommend/tour/pages/Tour'));
const TourView = loadable(() => import('./recommend/tour/pages/TourView'));
/* 여행 추천 페이지 E */

/* 지역별 축제 정보 페이지 S */
const FestivalMain = loadable(() => import('./recommend/pages/FestivalMain'));
/* 지역별 축제 정보 페이지 E */

/* 주변 농촌 체험 정보 S */
const MylocationMain = loadable(() =>
  import('./recommend/pages/MylocationMain'),
);
/* 주변 농촌 체험 정보 E */

/* 나의 예약현황 페이지 S */
const MyReservationMain = loadable(() =>
  import('./my_reservation/pages/MyReservationMain'),
);
/* 나의 예약현황 페이지 E */

/* 게시판 페이지 S */
const CommunityMain = loadable(() => import('./community/pages/CommunityMain'));
/* 게시판 페이지 E */

/* 축제 페이지 S */
const FestivalList = loadable(() =>
  import('./recommend/Festival/pages/FestivalList'),
);
const FestivalView = loadable(() =>
  import('./recommend/Festival/pages/FestivalView'),
);
/* 축제 페이지 E */

const routeUrlPaths = ['member', 'mypage', 'reservation', 'recommand'];

//컴포넌트 형태로 라우터 구성, 주소 구분 편의성 위함
const App = () => {
  const location = useLocation();
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
          <Route index element={<ReservationMain />} />
          <Route path=":category?" element={<ReservationView />} />
        </Route>
        {/* 농촌체험 예약 페이지 E */}
        {/* 여행 추천 페이지 S */}
        <Route path="recommend/tour">
        <Route index element={<Tour />} />
          <Route path=":category?" element={<TourView />} />
        </Route>
        {/* 지역별 축제 페이지 */}
        <Route path="recommend/festival">
          <Route path=":category?" element={<FestivalMain></FestivalMain>} />
        </Route>
        {/* 주변 농촌 체험 정보 */}
        <Route path="recommend/mylocation">
          <Route
            path=":category?"
            element={<MylocationMain></MylocationMain>}
          />
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
        <Route path="/festival">
          <Route index element={<FestivalList />} />
          <Route path=":id" element={<FestivalView />} />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* 없는 페이지 */}
      </Route>
    </Routes>
  );
};

export default App;
