import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ContentBox, OuterBox } from '../../commons/components/LayoutBox';
import SubTitleLink from '../../commons/SubTitleLink';
import Header from '../../layouts/Header';
import ViewContainer from '../containers/ViewContainer';
import { useParams } from 'react-router-dom';

const View = () => { /** 수정 예정 */

  const [pageTitle, setPageTitle] = useState('');
  const { seq} = useParams();

  return (
    <>
      <SubTitleLink text={pageTitle} href={`/board/update/${seq}`} />
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <OuterBox>
        <Header />
        <ContentBox>
          <ViewContainer setPageTitle={setPageTitle} />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(View);
