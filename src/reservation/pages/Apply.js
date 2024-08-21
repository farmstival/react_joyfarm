import React, {useState} from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import { Helmet } from 'react-helmet-async';
import ReservationApplyContainer from '../containers/ReserveApplyContainer';

const Apply = () => {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <MemberOnlyContainer>
      <Helmet>{pageTitle}</Helmet>
      <OuterBox>
        <MainTitle>{pageTitle}</MainTitle>
        <ReservationApplyContainer />
      </OuterBox>
    </MemberOnlyContainer>
  );
};

export default React.memo(Apply);
