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
import MyReserveViewContainer from '../containers/MyReserveViewContainer';
import { Link, NavLink } from 'react-router-dom';

const MyReserveView = () => {
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
            <NavLink Link to="/myreservation/list">
              예약 현황 조회
            </NavLink>
            <span> | </span>
            <Link to="">상세보기</Link>
          </PageNav>
          <PageTitle>
            <MainTitle>{t('예약내역_상세')}</MainTitle>
          </PageTitle>
        </PageNavWrap>
        <ContentBox>
          <MyReserveViewContainer setPageTitle={setPageTitle} />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(MyReserveView);
