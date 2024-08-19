import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {
  OuterBox,
  PageNav,
  PageNavWrap,
  PageTitle,
  ContentBox,
} from '../../../commons/components/LayoutBox';
import { DetailImgBox, DetailTitle } from '../../../commons/components/DetailBox';
import ViewContainer from '../containers/ViewContainer';

const TourView = () => {
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
            <h1>추천 여행지</h1>
          </PageTitle>
        </PageNavWrap>
        <ContentBox>
          <DetailImgBox>
            <DetailTitle>
              <h1>{SubPageTitle}</h1>
            </DetailTitle>
            <ViewContainer setSubPageTitle={setSubPageTitle} />
          </DetailImgBox>
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(TourView);
