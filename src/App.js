import { Routes, Route, useLocation } from 'react-router-dom';
import loadable from '@loadable/component';
import Reservation from './routes/Reservation';


const MainLayout = loadable(() => import('./layouts/MainLayout'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));
const Main = loadable(() => import('./main/pages/Main')); // 메인페이지

// 회원 페이지
const Member = loadable(() => import('./routes/Member'));

// 마이 페이지
const Mypage = loadable(() => import('./routes/Mypage'));

// 추천 페이지
const Recommend = loadable(() => import('./routes/Recommend'));

// 게시판
const Community = loadable(() => import('./routes/Community'));


const routeUrlPaths = [
  'member',
  'mypage',
  'festival',
  'recommend',
  'community'
];


//컴포넌트 형태로 라우터 구성, 주소 구분 편의성 위함
const App = () => {
  const location = useLocation();
  return routeUrlPaths.includes(location.pathname.split('/')[1]) ? (
    <>
      <Member />
      <Mypage />
      <Recommend />
      <Community />
    </>
  ) : (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} /> {/* 메인 페이지 */}
        <Route path="*" element={<NotFound />} /> {/* 없는 페이지 */}
      </Route>
    </Routes>
  );
};

export default App;