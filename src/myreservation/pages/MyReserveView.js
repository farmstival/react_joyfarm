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
            <h3>예약 현황 조회 / 상세보기</h3>
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
