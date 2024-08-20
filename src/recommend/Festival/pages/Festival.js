import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  OuterBox,
  ContentBox,
} from '../../../commons/components/LayoutBox';
import ListContainer from '../containers/ListContainer';
import Header from '../../layouts/Header';

const Festival = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('지역별_축제_정보')}</title>
      </Helmet>
      <OuterBox>
        <Header />
        <ContentBox>
          <h2>지도 클릭하면 지역별 축제를 검색합니다.</h2>
          <ListContainer />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(Festival);
