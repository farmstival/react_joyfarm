import React from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';

const Completion = () => {
  return (
    <MemberOnlyContainer>
      <h1>예약 완료</h1>;
    </MemberOnlyContainer>
  );
};

export default React.memo(Completion);
