import React, { useState } from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import { Helmet } from 'react-helmet-async';
import ReservationApplyContainer from '../containers/ReserveApplyContainer';

const Apply = () => {
  const [pageTitle, setPageTitle] = useState('');
  //컨테이너에서 데이터 불러와서 사용

  return (
    <MemberOnlyContainer>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{pageTitle}</MainTitle>
        <ReservationApplyContainer setPageTitle={setPageTitle} />
      </OuterBox>
    </MemberOnlyContainer>
  );
};

export default React.memo(Apply);
