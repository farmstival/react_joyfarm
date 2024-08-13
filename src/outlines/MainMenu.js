import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { color } from '../styles/color';
import fontSize from '../styles/fontSize';
import logo from '../images/logo.png';

const { dark, light, midGreen, white, lightGreen } = color;


const MenuBox = styled.nav`
  background: ${white};
  border-bottom: 1px solid ${midGreen};
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

const MenuItem = styled.div`
  
  position: relative;
  display: inline-block;
  margin: 0 10px;

  a {
    color: ${dark};
    line-height: 80px;
    width: 200px;
    padding: 0 20px;
    font-size: ${fontSize.medium};
    text-decoration: none;
    text-align: center;
    display: block;
    font-size: ${fontSize.medium};
    font-weight: bold;

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
    opacity: 1;
    transform: translateY(0);
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: 80px;
  // left: 10px;
  background: ${white};
  display: none;
  flex-direction: column;
  width: 200px;
  height: auto;
  z-index: 1000;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  a {
    padding: 0 20px;
    color: ${dark};
    font-size: 14px;
    text-decoration: none;

    &:hover {
      background: ${lightGreen};
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;

  img {
    width: 150px;
    height: auto;
  }
`;


const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <MenuBox>
      <div className="layout-width">
        <MenuItem>
          <NavLink to="/reservation" className={({ isActive }) => isActive ? 'on' : ''}>
            {t('농촌체험 예약')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/recommend" className={({ isActive }) => isActive ? 'on' : ''}>
            {t('나의 예약현황')}
          </NavLink>
        </MenuItem>
        <MenuItem>
        <Logo>
          <Link to="/">
            <img src={logo} alt={t('로고')} />
          </Link>
        </Logo>
        </MenuItem>
        <MenuItem>
          <NavLink to="/my_reservation" className={({ isActive }) => isActive ? 'on' : ''}>
            {t('조이팜의 추천')}
          </NavLink>
          <SubMenu className="sub-menu">
            <NavLink to="/recommend/travel">{t('추천 여행지')}</NavLink>
            <NavLink to="/recommend/festival">{t('지역별 축제정보')}</NavLink>
            <NavLink to="/recommend/mylocation">{t('내 위치 주변 여행지')}</NavLink>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          <NavLink to="/community" className={({ isActive }) => isActive ? 'on' : ''}>
            {t('커뮤니티')}
          </NavLink>
          <SubMenu className="sub-menu">
            <NavLink to="/community/sub1">{t('여행후기')}</NavLink>
            <NavLink to="/community/sub2">{t('공지사항')}</NavLink>
            <NavLink to="/community/sub2">{t('QnA')}</NavLink>
          </SubMenu>
        </MenuItem>
      </div>
    </MenuBox>
  );
};

export default React.memo(MainMenu);