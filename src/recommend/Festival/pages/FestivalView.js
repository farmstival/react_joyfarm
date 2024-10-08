import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OuterBox, ContentBox } from '../../../commons/components/LayoutBox';
import { IoMdPricetags } from "react-icons/io";

import {
  DetailImgBox,
  DetailTitle,
} from '../../../commons/components/DetailBox';
import ViewContainer from '../containers/ViewContainer';
import Header from '../../../layouts/Header';

const FestivalView = () => {
  const [pageTitle, setPageTitle] = useState('');
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <OuterBox>
        <Header />
        <ContentBox>
          <DetailImgBox>
            <DetailTitle>
              <h1>
              <IoMdPricetags  className='icon' /> {pageTitle}</h1>
            </DetailTitle>
            <ViewContainer setPageTitle={setPageTitle} />
          </DetailImgBox>
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(FestivalView);
