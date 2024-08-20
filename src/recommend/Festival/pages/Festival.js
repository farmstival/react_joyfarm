import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
<<<<<<< HEAD:src/recommend/pages/MylocationMain.js
import KakaoMap from '../../map/KakaoMap';
import {
  OuterBox,
  PageNav,
  PageNavWrap,
  PageTitle,
  ContentBox,
} from '../../commons/components/LayoutBox';

const options = {
  currentLocation: true,
  zoom: 3,
};

const MylocationMain = () => {
=======
import { OuterBox, PageNav, PageNavWrap, PageTitle, ContentBox } from '../../../commons/components/LayoutBox';
import ListContainer from '../containers/ListContainer';

const Festival = () => {
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293:src/recommend/Festival/pages/Festival.js
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('지역별_축제_정보')}</title>
      </Helmet>
      <OuterBox>
        <PageNavWrap>
<<<<<<< HEAD:src/recommend/pages/MylocationMain.js
          <PageNav>
            <h3>이동 / 이동 / 이동</h3>
          </PageNav>
          <PageTitle>
            <h1>주변 농촌 체험 정보</h1>
            {/* 아직 options 못 넣음...! */}
          </PageTitle>
=======
            <PageNav>
              <h3>이동 / 이동 / 이동</h3>
            </PageNav>
            <PageTitle>
              <h1>지역별 축제 정보</h1>
            </PageTitle>
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293:src/recommend/Festival/pages/Festival.js
        </PageNavWrap>
        <ContentBox>
          <h2>지도 클릭하면 지역별 축제를 검색합니다.</h2>
          <img src={process.env.PUBLIC_URL + '/무색.png'} width={'300px'}/>
          <PageTitle>{t('축제_목록')}</PageTitle>
        <ListContainer />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(Festival);
