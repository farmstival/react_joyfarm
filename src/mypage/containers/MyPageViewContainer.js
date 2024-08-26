import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import UserInfoContext from '../../member/modules/UserInfoContext';
import InputBox from '../../commons/components/InputBox';
import fontSize from '../../styles/fontSize';
import { ButtonGroup, MidButton } from '../../commons/components/Buttons';
import { color } from '../../styles/color';
const { small, big, medium } = fontSize;
const { midGreen, whiteGray } = color;

const FormBox = styled.form`
  width: 500px;
  margin: 0 auto;
  margin-top: 50px;
  font-size: ${medium};

  input {
    margin-bottom: 10px;
  }

  dl + dl {
    padding-top: 20px;
  }

  button {
    color: white;
    background: ${midGreen};
  }

  button a {
    color:white;
    background: ${midGreen};
  }
`;

const MyPageView = () => {
  const { t } = useTranslation();
  const {
    states: { userInfo },
    actions: { setUserInfo },
  } = useContext(UserInfoContext);
  // 'UserInfoContext'로 로그인 상태, 사용자 정보 가져옴

  const _onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      // 현재 userInfo 상태를 복사한 후 변경된 값을 덮어씀
      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    },
    [userInfo, setUserInfo],
  );

  //const onToggle = useCallback(setUserInfo(...userInfo));

  const updateUserInfo = () => {
    setUserInfo(userInfo);
    alert(t('회원정보가_수정되었습니다.'));
  };

  return (
    <FormBox>
      <div class="mypage">
        <dl>
          <dt>{t('이메일')}</dt>
          <dd>
            <InputBox
              type="text"
              name="email"
              value={userInfo.email ?? ''}
              onChange={_onChange}
            />
          </dd>
        </dl>
        <dl>
          <dt>{t('비밀번호')}</dt>
          <dd>
            <InputBox
              type="password"
              name="password"
              value={userInfo.password ?? ''} // blank로 처리하기
              onChange={_onChange}
            />
          </dd>
        </dl>
        <dl>
          <dt>{t('회원명')}</dt>
          <dd>
            <InputBox
              type="text"
              name="userName"
              value={userInfo.userName ?? ''}
              onChange={_onChange}
            />
          </dd>
        </dl>
        <dl>
          <dt>{t('휴대전화번호')}</dt>
          <dd>
            <InputBox
              type="text"
              name="mobile"
              value={userInfo.mobile ?? ''}
              onChange={_onChange}
            />
          </dd>
        </dl>
      </div>
      <ButtonGroup>
        <MidButton type="button" onClick={updateUserInfo}>
          {t('회원정보_수정하기')}
        </MidButton>
        <MidButton type="button">
          <NavLink to="/">{t('회원탈퇴하기')}</NavLink>
          {/* 탈퇴하기 누르면 메인페이지로 이동(기능 아직 X) */}
        </MidButton>
      </ButtonGroup>
    </FormBox>
  );
};

export default React.memo(MyPageView);
