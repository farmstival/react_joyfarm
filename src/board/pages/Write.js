import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ContentBox, OuterBox } from '../../commons/components/LayoutBox';
import WriteContainer from '../containers/WriteContainer';
import { useTranslation } from 'react-i18next';
import SubTitleLink from '../../commons/SubTitleLink';
import Header from '../../layouts/Header';
import { useParams } from 'react-router-dom';

const Write = () => {
  const [pageTitle, setPageTitle] = useState('');

  const { t } = useTranslation();

  const { bid } = useParams();

  return (
    <>
      <SubTitleLink text={pageTitle} href={`/board/write/${bid}`} />
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <OuterBox>
        <Header />
        <ContentBox>
          <WriteContainer setPageTitle={setPageTitle} />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(Write);
