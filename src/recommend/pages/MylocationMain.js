import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('주변 농촌 체험 정보')}</title>
      </Helmet>
      <OuterBox>
        <PageNavWrap>
          <PageNav>
            <h3>이동 / 이동 / 이동</h3>
          </PageNav>
          <PageTitle>
            <h1>주변 농촌 체험 정보</h1>
            {/* 아직 options 못 넣음...! */}
          </PageTitle>
        </PageNavWrap>
        <ContentBox>
          <KakaoMap {...options} />;
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(MylocationMain);
