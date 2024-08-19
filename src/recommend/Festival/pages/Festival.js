import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  OuterBox,
  PageTitle,
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
          <img src={process.env.PUBLIC_URL + '/무색.png'} width={'300px'} /> {/* 임의로 지도 이미지 넣은 것! */}
          <PageTitle><h2>{t('축제_목록')}</h2></PageTitle>
          <ListContainer />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(Festival);
