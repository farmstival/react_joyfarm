import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ListContainer from '../containers/ListContainer';
import { IoMdHome } from 'react-icons/io';
import {
  OuterBox,
  PageNav,
  PageNavWrap,
  PageTitle,
  ContentBox,
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
            <h3>
              <IoMdHome /> &gt; 조이팜의 추천 &gt; 추천 여행지
            </h3>
          </PageNav>
          <PageTitle>
            <h1>추천 여행지</h1>
          </PageTitle>
        </PageNavWrap>
        <ContentBox>
          <ListContainer />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(Tour);
