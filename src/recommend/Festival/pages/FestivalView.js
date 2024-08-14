import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  OuterBox,
  PageNav,
  PageNavWrap,
  PageTitle,
  ContentBox,
} from '../../../commons/components/LayoutBox';
import ViewContainer from '../containers/ViewContainer';

const FestivalView = () => {
  const [SubPageTitle, setSubPageTitle] = useState('');
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{SubPageTitle}</title>
      </Helmet>
      <OuterBox>
        <PageNavWrap>
          <PageNav>
            <h3>이동 / 이동 / 이동</h3>
          </PageNav>
          <PageTitle>
            <h1>지역별 축제 정보</h1>
          </PageTitle>
        </PageNavWrap>
        <ContentBox>
          <h1>{SubPageTitle}</h1>
          <ViewContainer setSubPageTitle={setSubPageTitle} />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(FestivalView);
