import React, { useTransition } from 'react';
import { Helmet } from 'react-helmet-async';
import { OuterBox } from '../../../commons/components/LayoutBox';
import { MainTitle } from '../../../commons/components/TitleBox';
import TourListContainer from '../containers/TourListContainer';

const TourList = () => {
  const { t } = useTransition();

  return (
    <>
      <Helmet>
        <title>{t('여행지_목록')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('여행지_목록')}</MainTitle>
        <TourListContainer />
      </OuterBox>
    </>
  );
};

export default React.memo(TourList);
