import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ContentBox, OuterBox } from '../../commons/components/LayoutBox';
import SubTitleLink from '../../commons/SubTitleLink';
import Header from '../../layouts/Header';
import ListContainer from '../containers/ListContainer';
import { useParams } from 'react-router-dom';



const List = () => {
    const [pageTitle, setPageTitle] = useState('');

    const { t } = useTranslation();
  
    const { bid } = useParams();

    return (
      <>
        <SubTitleLink text={pageTitle} href={`/board/list/${bid}`} />
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <OuterBox>
          <Header />
          <ContentBox>
            <ListContainer setPageTitle={setPageTitle} />
          </ContentBox>
        </OuterBox>
      </>
    );
 };

export default React.memo(List);