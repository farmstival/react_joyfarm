import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { color } from '../styles/color';
import fontSize from '../styles/fontSize';
import logo from '../images/JoyFarm.png';

const { dark, light, midGreen } = color;

const MenuBox = styled.nav`
  background: ${light};

  div {
    display: flex;
    height: 50px;

    a {
      color: ${dark};
      line-height: 50px;
      padding: 0 20px;
      font-size: ${fontSize.medium};
      font-weight: bold;
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
