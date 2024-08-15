import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { MainTitle } from '../../commons/components/TitleBox';
import { OuterBox, PageNav, PageNavWrap, PageTitle, ContentBox } from '../../commons/components/LayoutBox';
import ReserveListContainer from '../containers/ReserveListContainer';

const ReservationList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('지역별_축제_정보')}</title>
      </Helmet>
      <OuterBox>
        <PageNavWrap>
            <PageNav>
              <h3>이동 / 이동</h3>
            </PageNav>
            <PageTitle>
              <MainTitle>{t('농촌체험활동_예약')}</MainTitle>
            </PageTitle>
        </PageNavWrap>
        <ContentBox>
          <PageTitle>{t('체험활동_목록')}</PageTitle>
          <ReserveListContainer />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(ReservationList);
