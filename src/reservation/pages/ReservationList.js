import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox, ContentBox2 } from '../../commons/components/LayoutBox';
import ReserveListContainer from '../containers/ReserveListContainer';
import Header from '../../layouts/Header';
import SubTitleLink from '../../commons/SubTitleLink';

const ReservationList = () => {
  const { t } = useTranslation();

  return (
    <>
      <SubTitleLink text={t('농촌체험활동_예약')} href="/reservation/list" />
      <Helmet>
        <title>{t('농촌체험_예약')}</title>
      </Helmet>
      <OuterBox>
        <Header />
        <ContentBox2>
          <ReserveListContainer />
        </ContentBox2>
      </OuterBox>
    </>
  );
};

export default React.memo(ReservationList);

// <>
//   <Helmet>
//     <title>{t('농촌체험활동_예약')}</title>
//   </Helmet>
//   <OuterBox>
//     <PageNavWrap>
//       <PageNav>
//         <Link to="">체험활동 조회</Link>
//       </PageNav>
//       <PageTitle>
//         <MainTitle>{t('농촌체험_예약')}</MainTitle>
//       </PageTitle>
//     </PageNavWrap>
//     <ContentBox>
//       <PageTitle>
//         <SubTitle>{t('체험활동_리스트')}</SubTitle>
//       </PageTitle>
//       <ReserveListContainer />
//     </ContentBox>
//   </OuterBox>
// </>
