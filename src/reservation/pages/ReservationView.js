import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  OuterBox,
  PageNav,
  PageNavWrap,
  PageTitle,
  ContentBox,
} from '../../commons/components/LayoutBox';
import ReserveViewContainer from '../containers/ReserveViewContainer';

const ReservationView = () => {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <OuterBox>
        <PageNavWrap>
          <PageNav>
            <h3>이동 / 이동</h3>
          </PageNav>
          <PageTitle>
            <h1>체험활동_예약</h1>
          </PageTitle>
        </PageNavWrap>
        <ContentBox>
          <ReserveViewContainer setPageTitle={setPageTitle} />
        </ContentBox>
      </OuterBox>
    </>
  );
};

export default React.memo(ReservationView);
