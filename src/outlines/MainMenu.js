import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { color } from '../styles/color';
import fontSize from '../styles/fontSize';
import logo from '../images/JoyFarm.png';

const { dark, light, midGreen, white, lightGreen } = color;

const MenuBox = styled.nav`
  background: ${light};

  div {
    display: flex;
    height: 50px;

     a {
      color: ${dark};
      line-height: 50px;
      padding: 0 20px; /* 적절한 패딩 설정 */
      font-size: ${fontSize.medium};
      font-weight: bold;
      text-align: center; /* 텍스트 중앙 정렬 */
      flex-grow: 1; /* 메뉴 항목이 flex 컨테이너의 가용 공간을 채우도록 설정 */

     &:hover {
        text-decoration-line: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 10px;
        color: ${midGreen};
      }

    &:hover .sub-menu {
    display: flex;
      } 
    }
  }

  .layout-width {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;

      img {
        width: 150px;
        display: flex;
        align-items: center;
      }
    }
  }
`;

const MenuItem = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 px;

  &:hover .sub-menu {
    display: flex;
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: 50px;
  display: none;

  background: ${lightGreen};
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
      background: ${lightGreen};
    }
  }
`;

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <MenuBox>
      <div className="layout-width">
        <MenuItem>
          <NavLink
            to="/reservation"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {t('농촌체험 예약')}
          </NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/my_reservation"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {t('나의 예약현황')}
          </NavLink>
        </MenuItem>

        <section className="logo">
          <Link to="/">
            <img src={logo} alt={t('로고')} />
          </Link>
        </section>

        <MenuItem>
          <NavLink
            to="/recommend"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {t('조이팜의 추천')}
          </NavLink>
          <SubMenu className="sub-menu">
            <NavLink to="/recommend/tour">{t('추천 여행지')}</NavLink>
            <NavLink to="/recommend/festival">{t('지역별 축제정보')}</NavLink>
            <NavLink to="/recommend/mylocation">{t('내 위치 주변 여행지')}</NavLink>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          <NavLink
            to="/community"
            className={({ isActive }) => classNames({ on: isActive })}
          >
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
