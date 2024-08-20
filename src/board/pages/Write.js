import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import WriteContainer from '../containers/WriteContainer';
import Layout from '../layouts/Layout';

const Write = () => {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{pageTitle}</MainTitle>
        <WriteContainer setPageTitle={setPageTitle} />
      </OuterBox>
    </Layout>
  );
};

export default React.memo(Write);
