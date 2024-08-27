import React, { useContext, useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cookies from 'react-cookies';
import UserInfoContext from '../../member/modules/UserInfoContext';
import InputBox from '../../commons/components/InputBox';
import fontSize from '../../styles/fontSize';
import { ButtonGroup, MidButton } from '../../commons/components/Buttons';
import { color } from '../../styles/color';
import { apiUpdate } from '../apis/apiUpdate';
import apiDelete from '../apis/apiDelete';
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
    border: none;
    color: white;
    background: ${midGreen};
  }

  button a {
    border: none;
    color: white;
    background: ${midGreen};
  }
`;

const MyPageView = () => {
  const {
    states: { isLogin, userInfo, isAdmin },
    actions: { setIsLogin, setIsAdmin, setUserInfo },
  } = useContext(UserInfoContext);
  // 'UserInfoContext'로 로그인 상태, 사용자 정보 가져옴

  const initialForm = userInfo;
  delete initialForm.password;
  const [form, setForm] = useState(initialForm);

  const { t } = useTranslation();

  const { seq } = useParams();

  const _onChange = useCallback((e) => {
    const { name, value } = e.target;
    // 현재 userInfo 상태를 복사한 후 변경된 값을 덮어씀
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  }, []);

  //로그아웃
  const onLogout = useCallback(() => {
    setIsLogin(false);
    setIsAdmin(false);
    setUserInfo(null);
    cookies.remove('token', { path: '/' });
  }, [setIsLogin, setIsAdmin, setUserInfo]);

  const navigate = useNavigate();

  const updateUserInfo = () => {
    apiUpdate(form)
      .then(() => {
        setUserInfo(form);
        alert(t('회원정보가_수정되었습니다'));
        navigate('/', { replace: true });
      })
      .catch((error) => {
        console.error(error);
        alert(t('회원정보 수정 중 오류가 발생했습니다.'));
      });
  };

  const deleteUserInfo = async () => {
    try {
      if (window.confirm(t('정말 삭제하시겠습니까?'))) {
        await apiDelete(seq);
        alert(t('회원탈퇴가 완료되었습니다.'));
        onLogout(); // 로그아웃 처리
        navigate('/', { replace: true }); // 메인 페이지로 이동
      }
    } catch (error) {
      console.error(error);
      alert(t('회원탈퇴 중 오류가 발생했습니다.'));
    }
  };
  
/*
  const deleteUserInfo = async () => {
    try {
      const form = { email: form.email }; // 필요한 데이터를 폼에 포함
      if (window.confirm(t('정말 삭제하시겠습니까?'))) {
        await apiDelete(form);
        setUserInfo(null); // 유저 정보를 초기화하여 로그아웃 상태로 변경
        alert(t('회원탈퇴가 완료되었습니다.'));
        onLogout(); // 로그아웃 처리
        navigate('/', { replace: true }); // 메인 페이지로 이동
      }
    } catch (error) {
      console.error(error);
      alert(t('회원탈퇴 중 오류가 발생했습니다.'));
    }
  };*/
    
  return (
    <FormBox>
      <div className="mypage">
        <dl>
          <dt>{t('이메일')}</dt>
          <dd>
            <InputBox
              type="text"
              name="email"
              value={form?.email}
              disabled
              onChange={_onChange}
            />
          </dd>
        </dl>
        <dl>
          <dt>{t('비밀번호')}</dt>
          <dd>
            <InputBox
              name="password"
              type="password"
              value={form?.password}
              onChange={_onChange}
            />
          </dd>
        </dl>
        <dl>
          <dt>{t('비밀번호_확인')}</dt>
          <dd>
            <InputBox
              name="confirmPassword"
              type="password"
              value={form?.confirmPassword}
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
              value={form?.userName}
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
              value={form?.mobile}
              onChange={_onChange}
            />
          </dd>
        </dl>
      </div>
      <ButtonGroup>
        <MidButton type="button" onClick={updateUserInfo}>
          {t('회원정보_수정하기')}
        </MidButton>
        <MidButton
          type="button"
          onClick={deleteUserInfo}
        >
          {t('회원탈퇴하기')}
          {/* 탈퇴하기 누르면 메인페이지로 이동(기능 아직 X) */}
        </MidButton>
      </ButtonGroup>
    </FormBox>
  );
};

export default React.memo(MyPageView);
