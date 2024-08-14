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
  text-align: center;
  align-item: center;
  img {
    width: 50%;
  }
`;

const MyReservationMain = () => {
  const { t } = useTranslation();
  return (
    <>
      <MemberOnlyContainer>
        <Helmet>
          <title>{t('나의 예약현황')}</title>
        </Helmet>
        <OuterBox>
          <PageNavWrap>
            <PageNavSubWrap>
              <PageNav>
                <h3>이동 / 이동 / 이동</h3>
              </PageNav>
              <PageTitle>
                <h1>예약현황</h1>
              </PageTitle>
            </PageNavSubWrap>
          </PageNavWrap>
          <ContentBox>
            <h2>나의 예약 조회하기</h2>
            <img src={process.env.PUBLIC_URL + '/monday.png'} />
          </ContentBox>
        </OuterBox>
      </MemberOnlyContainer>
    </>
  );
};

export default React.memo(MyReservationMain);
