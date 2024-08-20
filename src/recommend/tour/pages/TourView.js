import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { OuterBox } from '../../../commons/components/LayoutBox';
=======
import { PageNavWrap, ContentBox, OuterBox } from '../../../commons/components/LayoutBox';
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
import { MainTitle } from '../../../commons/components/TitleBox';
import ViewContainer from '../containers/ViewContainer';

const TourView = () => {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <OuterBox>
<<<<<<< HEAD
        {' '}
        // css 스타일 에밥마
        <MainTitle>{pageTitle}</MainTitle>
        <ViewContainer setPageTitle={setPageTitle} />
=======
      <PageNavWrap>
        <MainTitle>{pageTitle}</MainTitle>
        </PageNavWrap>
        <ContentBox>
        <ViewContainer setPageTitle={setPageTitle} />
        </ContentBox>
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
      </OuterBox>
    </>
  );
};

export default React.memo(TourView);
