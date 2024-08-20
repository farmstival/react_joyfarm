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
import MyReserveListContainer from '../containers/MyReserveListContainer';

const MyReservList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('나의_예약_현황')}</title>
      </Helmet>
      <OuterBox>
        <PageNavWrap>
          <PageNav>
            <a>예약 현황 조회</a>
          </PageNav>
          <PageTitle>
            <MainTitle>{t('나의_예약_현황')}</MainTitle>
          </PageTitle>
        </PageNavWrap>
        <ContentBox>
          <PageTitle>
            <SubTitle>{t('예약_현황_리스트')}</SubTitle>
          </PageTitle>
          <MyReserveListContainer />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(MyReservList);
