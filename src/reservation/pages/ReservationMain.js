import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import styled from 'styled-components';

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

const ReservationMain = () => {
  const { t } = useTranslation();
  return (
    <MemberOnlyContainer>
      <Helmet>
        <title>{t('농촌체험 예약')}</title>
      </Helmet>
      <OuterBox className="layout-width">
        <PageNavWrap>
          <PageNavSubWrap>
            <PageNav>
              <h3>이동 / 이동 </h3>
            </PageNav>
            <PageTitle>
              <h1>농촌체험 예약</h1>
            </PageTitle>
          </PageNavSubWrap>
        </PageNavWrap>
        <ContentBox>
          <h2>지역별 체험활동 리스트 출력</h2>
        </ContentBox>
      </OuterBox>
    </MemberOnlyContainer>
  );
};

export default React.memo(ReservationMain);
