import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { MainTitle } from '../../../commons/components/TitleBox';
import ListContainer from '../containers/ListContainer';
import {
  OuterBox, PageNav, PageNavWrap, PageTitle, ContentBox
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
        <PageNav>
              <h3>이동 / 이동 / 이동</h3>
            </PageNav>
            <PageTitle>
              <h1>추천 여행지</h1>
            </PageTitle>
        </PageNavWrap>
        <ContentBox>
        <PageTitle>{t('추천_여행지')}</PageTitle>
          <ListContainer />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(Tour);
