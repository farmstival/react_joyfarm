import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  OuterBox,
  ContentBox,
} from '../../../commons/components/LayoutBox';
import {
  DetailImgBox,
  DetailTitle,
} from '../../../commons/components/DetailBox';
import Header from '../../layouts/Header';
import ViewContainer from '../containers/ViewContainer';


const MylocationView = () => {
  const [SubPageTitle, setSubPageTitle] = useState('');
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{SubPageTitle}</title>
      </Helmet>
      <OuterBox>
        <Header />
        <ContentBox>
          <DetailImgBox>
            <DetailTitle>
              <h1>{SubPageTitle}</h1>
            </DetailTitle>
            <ViewContainer />
          </DetailImgBox>
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(MylocationView);
