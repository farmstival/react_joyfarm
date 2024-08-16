import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageNavWrap, ContentBox, OuterBox } from '../../../commons/components/LayoutBox';
import { MainTitle } from '../../../commons/components/TitleBox';
import TourViewContainer from '../containers/TourViewContainer';

const TourView = () => {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <OuterBox>
      <PageNavWrap>
        <MainTitle>{pageTitle}</MainTitle>
        </PageNavWrap>
        <ContentBox>
        <TourViewContainer setPageTitle={setPageTitle} />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(TourView);
