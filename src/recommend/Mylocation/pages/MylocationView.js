import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import KakaoMap from '../../../map/KakaoMap';
import {
  OuterBox,
  ContentBox,
} from '../../../commons/components/LayoutBox';
import {
  DetailImgBox,
  DetailTitle,
} from '../../../commons/components/DetailBox';
import Header from '../../layouts/Header';
const options = {
  currentLocation: true,
  zoom: 3,
};

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
            <KakaoMap {...options} />;
          </DetailImgBox>
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(MylocationView);
