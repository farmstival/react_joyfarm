import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { color } from '../styles/color';
import fontSize from '../styles/fontSize';
import logo from '../images/JoyFarm.png';

const { dark, light, midGreen, white } = color;

const MenuBox = styled.nav`
  background: ${light};

  div {
    display: flex;
    height: 50px;

     a {
      color: ${dark};
      width:20%;
      line-height: 100px;
      padding: 0 20px; /* 적절한 패딩 설정 */
      font-size: ${fontSize.medium};
      font-weight: bold;
      position: relative; /* 드롭다운 메뉴를 위한 상대 위치 */
      text-align: center; /* 텍스트 중앙 정렬 */
      flex-grow: 1; /* 메뉴 항목이 flex 컨테이너의 가용 공간을 채우도록 설정 */

     &:hover {
        text-decoration-line: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 10px;
        color: ${midGreen};
      }

      &:hover .dropdown {
        display: block; /* 마우스를 올렸을 때 드롭다운 메뉴 표시 */
      }
    }
  }

  .dropdown {
    display: none;
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%; /* 부모 요소의 너비를 따름 */
    background: ${light};
    z-index: 1;

    a {
      display: block;
      padding: 10px 50px;
      line-height: normal;
      font-size: ${fontSize.small};
      color: ${dark};

      &:hover {
        background: ${white};
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

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <MenuBox>
      <div className="layout-width">
        <NavLink
          to="/reservation"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('농촌체험 예약')}
        </NavLink>
        <NavLink
          to="/my_reservation"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('나의 예약현황')}
        </NavLink>

        <section className="logo">
          <Link to="/">
            <img src={logo} alt={t('로고')} />
          </Link>
        </section>

        <NavLink
          to="/recommend"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('조이팜의 추천')}
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) => classNames({ on: isActive })}
        >
          {t('커뮤니티')}
        </NavLink>
      </div>
    </MenuBox>
  );
};

export default React.memo(MainMenu);
