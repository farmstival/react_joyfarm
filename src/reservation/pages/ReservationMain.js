import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import ReserveListContainer from '../containers/ReserveListContainer';
import styled from 'styled-components';

// const OuterBox = styled.div`
//   margin-bottom: 150px;
// `;

//띄어쓰기 사용 시->언더바 필수
const ReservationMain = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('농촌체험_예약')}</title>
      </Helmet>
      <OuterBox className="layout-width">
        <MainTitle>{t('농촌체험활동_리스트')}</MainTitle>
        <ReserveListContainer/>
      </OuterBox>
    </>
  );
};

export default React.memo(ReservationMain);
