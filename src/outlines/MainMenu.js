import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { color } from '../styles/color';
import fontSize from '../styles/fontSize';

const { dark, light, midGreen } = color;

const MenuBox = styled.nav`
  background: ${light};

  div {
    display: flex;
    height: 50px;

    a {
      color: ${dark};
      line-height: 50px;
      padding: 0 50px;
      font-size: ${fontSize.medium};
      font-weight: bold;

      &.on {
        background: ${midGreen};
      }
    }
  }

  .layout-width {
    display: flex;
    justify-content: space-between;

    .left-menu {
      display: flex;
      justify-content: space-between;
    }

    .right-menu {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <MenuBox>
      <div className="layout-width">
        <div className="left-menu">
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
        </div>

        <div className="right-menu">
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
      </div>
    </MenuBox>
  );
};

export default React.memo(MainMenu);
