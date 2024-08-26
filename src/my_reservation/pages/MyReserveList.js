import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { MainTitle, SubTitle } from '../../commons/components/TitleBox';
import { OuterBox, PageNav, PageNavWrap, PageTitle, ContentBox } from '../../commons/components/LayoutBox';
import MyReserveListContainer from '../containers/MyReserveListContainer';
import { Link } from 'react-router-dom';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';

const MyReservList = () => {
  const { t } = useTranslation();

  return (
    <MemberOnlyContainer>
      <Helmet>
        <title>{t('나의_예약_현황')}</title>
      </Helmet>
      <OuterBox>
        <PageNavWrap>
            <PageNav>
              <Link to=''>예약 현황 조회</Link>
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
    </MemberOnlyContainer>
  );
};

export default React.memo(MyReservList);
