import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { MainTitle } from '../../../commons/components/TitleBox';
import TourListContainer from '../containers/TourListContainer';
import {
  PageNavWrap,
  ContentBox,
  OuterBox,
} from '../../../commons/components/LayoutBox';

const Tour = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('추천_여행지')}</title>
      </Helmet>
      <OuterBox>
        <PageNavWrap>
          <MainTitle>{t('추천_여행지')}</MainTitle>
        </PageNavWrap>
        <ContentBox>
          <TourListContainer />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(Tour);
