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

const { primary } = color;

const HeaderBox = styled.header`
  .site-top {
    background: #fff;
    height: 35px;

    div {
      text-align: right;

      a {
        display: inline-block;
        line-height: 34px;
        font-size: ${fontSize.normal};

        &.on {
          color: ${primary};
        }
      }
    }
  }

  .logo {
    div {
      display: flex;
      justify-content: center;
      height: 150px;
      align-items: center;

      img {
        width: 250px;
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
                <NavLink
                  to="/admin"
                  className={({ isActive }) => classNames({ on: isActive })}
                >
                    {t('사이트_관리')}
                </NavLink>
              )}
              <NavLink
                to="/mypage"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                  {t('마이페이지')}
              </NavLink>
                {t('로그아웃')}
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
                  {t('회원가입')}
              </NavLink>
              <NavLink
                to="/member/login"
                className={({ isActive }) => classNames({ on: isActive })}
              >
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
