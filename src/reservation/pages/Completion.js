import React from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import ReserveCompletionContainer from '../containers/ReserveCompletionContainer';
const Completion = () => {
  return (
    <MemberOnlyContainer>
      <ReserveCompletionContainer />
    </MemberOnlyContainer>
  );
};

export default React.memo(Completion);
