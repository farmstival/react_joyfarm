import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import KakaoMap from '../../map/KakaoMap';

const OuterBox = styled.div`
  margin-bottom: 150px;
`;

const PageNavWrap = styled.div`
  box-sizing: border-box;
  padding: 0 20px 20px 0;
`;

const PageNavSubWrap = styled.div`
  border-bottom: solid 1.5px rgb(221, 221, 221);
  max-width: 1200px;
  padding: 48px 0;
  position: relative;
  margin: 0 auto;
`;

const PageNav = styled.div`
  line-height: normal;
`;

const PageTitle = styled.div`
  margin-top: 20px;
`;

const ContentBox = styled.div`
  box-sizing: border-box;
  width: 1200px;
  min-height: 700px;
  padding: 0 20px 50px 20px;
  margin: 0 auto;
  border: solid 1.5px rgb(221, 221, 221);
`;

const options = {
    currentLocation: true,
    zoom: 3,
  };

const TravelMain = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('주변 농촌 체험 정보')}</title>
      </Helmet>
      <OuterBox>
        <PageNavWrap>
          <PageNavSubWrap>
            <PageNav>
              <h3>이동 / 이동 / 이동</h3>
            </PageNav>
            <PageTitle>
            <h1>주변 농촌 체험 정보</h1>
                {/* 아직 options 못 넣음...! */}
            </PageTitle>
          </PageNavSubWrap>
        </PageNavWrap>
        <ContentBox>
          <KakaoMap {...options} />;
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(TravelMain);
