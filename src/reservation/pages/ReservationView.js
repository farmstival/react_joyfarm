import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  OuterBox,
  PageNav,
  PageNavWrap,
  PageTitle,
  ContentBox,
} from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import ReserveViewContainer from '../containers/ReserveViewContainer';
import { Link } from 'react-router-dom';

const ReservationView = () => {
  const { t } = useTranslation();
  const [pageTitle, setPageTitle] = useState('');

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <OuterBox>
        <PageNavWrap>
          <PageNav>
            <Link to='/reservation/list'>체험활동 조회</Link>
            <span> / </span>
            <Link to=''>상세보기</Link>
          </PageNav>
          <PageTitle>
            <MainTitle>{t('체험활동_상세')}</MainTitle>
          </PageTitle>
        </PageNavWrap>
        <ContentBox>
          <ReserveViewContainer setPageTitle={setPageTitle} />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(ReservationView);
