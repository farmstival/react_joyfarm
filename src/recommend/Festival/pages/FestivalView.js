import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox, ContentBox } from '../../../commons/components/LayoutBox';
import Header from '../../layouts/Header';
import SubTitleLink from '../../commons/SubTitleLink';
import {
  DetailImgBox,
  DetailTitle,
} from '../../../commons/components/DetailBox';
import ViewContainer from '../containers/ViewContainer';

const FestivalView = () => {
  const { t } = useTranslation(); 
  const [SubPageTitle, setSubPageTitle] = useState('');
  return (
    <>
    <SubTitleLink text={t('지역별_축제_정보')} href="/recommend/festival" />
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
            <ViewContainer setSubPageTitle={setSubPageTitle} />
          </DetailImgBox>
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(FestivalView);
