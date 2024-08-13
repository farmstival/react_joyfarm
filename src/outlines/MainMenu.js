import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { color } from '../styles/color';
import fontSize from '../styles/fontSize';
import logo from '../images/logo.png';

const { dark, light, midGreen, white } = color;

const MenuBox = styled.nav`
  background: ${white};
  display: flex;
  justify-content: center;
  padding: 0 20px;
  font-size: ${fontSize.medium};
  font-weight: bold;
  align-items: center;
  height: 100px; /* Adjust the height as needed */
`;

const MenuItem = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 10px;

  a {
    color: ${dark};
    line-height: 60px; /* Adjust line-height to match height of MenuBox */
    padding: 0 20px;
    font-size: ${fontSize.medium};
    text-decoration: none;
    display: block;

    &.on {
      background: ${white};
    }

    &:hover {
      background: ${white};
      text-decoration-line: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 10px;
      color: ${midGreen};
    }
  }

  &:hover .sub-menu {
    display: flex;
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: 60px; /* Adjust top value to align below the parent menu item */
  left: 0;
  background: ${white};
  display: none;
  flex-direction: column;
  width: 200px;
  z-index: 1000;

  a {
    padding: 10px 20px;
    color: ${dark};
    font-size: ${fontSize.small};
    text-decoration: none;

    &:hover {
      background: ${white};
    }
  }
`;

const Logo = styled.section`
  display: flex;
  align-items: center;
  margin: 0 20px;

  img {
    width: 100px; /* Adjust the width of the logo as needed */
    height: auto; /* Keep aspect ratio */
  }
`;

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <MenuBox>
      <MenuItem>
        <NavLink to="/reservation" className={({ isActive }) => isActive ? 'on' : ''}>
          {t('농촌체험 예약')}
        </NavLink>
        <SubMenu className="sub-menu">
          <NavLink to="/reservation/sub1">{t('예약 서브메뉴 1')}</NavLink>
          <NavLink to="/reservation/sub2">{t('예약 서브메뉴 2')}</NavLink>
        </SubMenu>
      </MenuItem>
      <MenuItem>
        <NavLink to="/recommend" className={({ isActive }) => isActive ? 'on' : ''}>
          {t('조이팜의 추천')}
        </NavLink>
        <SubMenu className="sub-menu">
          <NavLink to="/recommend/sub1">{t('추천 서브메뉴 1')}</NavLink>
          <NavLink to="/recommend/sub2">{t('추천 서브메뉴 2')}</NavLink>
        </SubMenu>
      </MenuItem>
      <Logo>
        <Link to="/">
          <img src={logo} alt={t('로고')} />
        </Link>
      </Logo>
      <MenuItem>
        <NavLink to="/my_reservation" className={({ isActive }) => isActive ? 'on' : ''}>
          {t('나의 예약현황')}
        </NavLink>
        <SubMenu className="sub-menu">
          <NavLink to="/my_reservation/sub1">{t('예약현황 서브메뉴 1')}</NavLink>
          <NavLink to="/my_reservation/sub2">{t('예약현황 서브메뉴 2')}</NavLink>
        </SubMenu>
      </MenuItem>
      <MenuItem>
        <NavLink to="/community" className={({ isActive }) => isActive ? 'on' : ''}>
          {t('커뮤니티')}
        </NavLink>
        <SubMenu className="sub-menu">
          <NavLink to="/community/sub1">{t('커뮤니티 서브메뉴 1')}</NavLink>
          <NavLink to="/community/sub2">{t('커뮤니티 서브메뉴 2')}</NavLink>
        </SubMenu>
      </MenuItem>
    </MenuBox>
  );
};

export default React.memo(MainMenu);
