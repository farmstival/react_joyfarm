import React, { useContext, useCallback } from 'react';
import cookies from 'react-cookies';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import fontSize from '../styles/fontSize';
import { color } from '../styles/color';
import MainMenu from './MainMenu';
import UserInfoContext from '../member/modules/UserInfoContext';
import { GrUserManager } from 'react-icons/gr';
import { BiLock, BiLockOpen, BiUserPlus, BiWinkSmile } from 'react-icons/bi';

const { midGreen } = color;

const HeaderBox = styled.header`
  .site-top {
    background: #fff;
    height: 35px;

    div {
      text-align: right;

      a {
        display: inline-block;
        line-height: 34px;
        margin: 0 10px;
        font-size: ${fontSize.normal};

        &.on {
          color: ${midGreen};
        }
      }
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const {
    states: { isLogin, userInfo, isAdmin },
    actions: { setIsLogin, setIsAdmin, setUserInfo },
  } = useContext(UserInfoContext);

  const onLogout = useCallback(() => {
    setIsLogin(false);
    setIsAdmin(false);
    setUserInfo(null);
    cookies.remove('token', { path: '/' });
  }, [setIsLogin, setIsAdmin, setUserInfo]);

  //관리자 url, 환경 변수로 추가함
  const adminUrl = process.env.REACT_APP_ADMIN_URL+ '?token=' + cookies.load('token');
  // console.log(adminUrl);

  return (
    <HeaderBox>
      <section className="site-top">
        <div className="layout-width">
          {isLogin ? (
            <>
              {/* 로그인 상태 */}
              {/* <span>
                {userInfo?.userName}({userInfo?.email}){t('님_로그인')}
              </span> */}
              {isAdmin && (
                <a href={adminUrl} target="_blank">
                  <GrUserManager />
                  {t('사이트_관리')}
                </a>
                //컴포넌트를 교체하는 방식인데 a태그로 새 창 이동해서 페이지 교체  
              )}
              <NavLink
                to="/mypage"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                <BiWinkSmile />
                {t('마이페이지')}
              </NavLink>
              <NavLink onClick={onLogout}>
                <BiLockOpen />
                {t('로그아웃')}
              </NavLink>
              {/*
              <NavLink
                to="/member/logout"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                {t('로그아웃')}
              </NavLink> */}
            </>
          ) : (
            <>
              {/* 미로그인 상태 */}
              <NavLink
                to="/member/join"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                <BiUserPlus />
                {t('회원가입')}
              </NavLink>
              <NavLink
                to="/member/login"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                <BiLock />
                {t('로그인')}
              </NavLink>
            </>
          )}
        </div>
      </section>
      <MainMenu />
    </HeaderBox>
  );
};

export default React.memo(Header);