import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { MainTitle, SubTitle } from '../../commons/components/TitleBox';
import {
  OuterBox,
  PageNav,
  PageNavWrap,
  PageTitle,
  ContentBox,
} from '../../commons/components/LayoutBox';
import ReserveListContainer from '../containers/ReserveListContainer';
import { Link } from 'react-router-dom';

const ReservationList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('농촌체험활동_예약')}</title>
      </Helmet>
      <OuterBox>
        <PageNavWrap>
          <PageNav>
            <Link to="">체험활동 조회</Link>
          </PageNav>
          <PageTitle>
            <MainTitle>{t('농촌체험_예약')}</MainTitle>
          </PageTitle>
        </PageNavWrap>
        <ContentBox>
          <PageTitle>
            <SubTitle>{t('체험활동_리스트')}</SubTitle>
          </PageTitle>
          <ReserveListContainer />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(ReservationList);
