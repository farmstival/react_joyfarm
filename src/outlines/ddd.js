import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { color } from '../styles/color';
import fontSize from '../styles/fontSize';

const { dark, primary, light } = color;

const MenuBox = styled.nav`
  background: ${dark};
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

const MenuItem = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 10px;

  a {
    color: ${light};
    line-height: 50px;
    padding: 0 20px;
    font-size: ${fontSize.medium};
    text-decoration: none;
    display: block;

    &.on {
      background: ${primary};
    }

    &:hover {
      background: ${primary};
    }
  }

  &:hover .sub-menu {
    display: flex;
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  background: ${dark};
  display: none;
  flex-direction: column;
  width: 200px;
  z-index: 1000;

  a {
    padding: 10px 20px;
    color: ${light};
    font-size: ${fontSize.small};
    text-decoration: none;

    &:hover {
      background: ${primary};
    }
  }
`;

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <MenuBox>
      <div className="layout-width">
        <MenuItem>
          <NavLink to="/news" className={({ isActive }) => isActive ? 'on' : ''}>
            {t('뉴스')}
          </NavLink>
          <SubMenu className="sub-menu">
            <NavLink to="/news/sub1">{t('뉴스 서브메뉴 1')}</NavLink>
            <NavLink to="/news/sub2">{t('뉴스 서브메뉴 2')}</NavLink>
          </SubMenu>
        </MenuItem>
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
      </div>
    </MenuBox>
  );
};

export default React.memo(MainMenu);