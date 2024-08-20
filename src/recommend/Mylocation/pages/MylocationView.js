import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import {
  OuterBox,
  ContentBox,
} from '../../../commons/components/LayoutBox';
import SubTitleLink from '../../../commons/SubTitleLink';
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
    <SubTitleLink text={t('내_위치_주변_여행지')} href="/recommend/mylocation" />
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
