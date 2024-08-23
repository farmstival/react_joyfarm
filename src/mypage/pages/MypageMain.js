import React, { useState } from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import Styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
import { BigButton } from '../../commons/components/Buttons';
import InputBox from '../../commons/components/InputBox';
import MessageBox from '../../commons/components/MessageBox';
import UserInfoContext from '../../member/modules/UserInfoContext';



const FormBox = styled.form`
  display: flex;
  .box {
    flex-grow: 1;
    width: 0;
  }
  .box + .box {
    margin-left: 30px;
  }
`;
const mypageForm = ({
  data,
  form,
  onSubmit,
  onChange,
  errors,
}) => {  

const MypageMain = () => {
  return (
    <MemberOnlyContainer>
      <h1>마이페이지</h1>
    </MemberOnlyContainer>
  );
};
 
};

export default React.memo(MypageMain);