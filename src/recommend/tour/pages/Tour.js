import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
<<<<<<< HEAD
import { OuterBox } from '../../../commons/components/LayoutBox';
import { MainTitle } from '../../../commons/components/TitleBox';
import ListContainer from '../containers/ListContainer';
=======
import ListContainer from '../containers/ListContainer';
import { IoMdHome } from 'react-icons/io';
import {
  OuterBox,
  PageNav,
  PageNavWrap,
  PageTitle,
  ContentBox,
} from '../../../commons/components/LayoutBox';
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293

const Tour = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('추천_여행지')}</title>
      </Helmet>
      <OuterBox>
<<<<<<< HEAD
        <MainTitle>{t('추천_여행지')}</MainTitle>
        <ListContainer />
=======
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
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
      </OuterBox>
    </>
  );
};

export default React.memo(Tour);
