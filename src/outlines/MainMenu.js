import React, { useState } from 'react';
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

  
  .logobox {
    width: 1440/5px;

    img {
      max-width: 100%; /* 이미지의 너비를 최대 100px로 설정 */
      height: 100%; /* 높이는 자동으로 조절 */
      display: block;
      margin: 0 auto; /* 이미지가 박스 안에서 가운데 정렬되도록 설정 */
    }
  }

  div {
    display: flex;
    height: 100px;
    position: relative; /* 드롭다운 메뉴를 위한 상대 위치 */

    a {
      color: ${dark};
      width: 20%;
      line-height: 100px;
      padding: 0 20px; /* 적절한 패딩 설정 */
      font-size: ${fontSize.medium};
      font-weight: bold;
      position: relative; /* 드롭다운 메뉴를 위한 상대 위치 */
      text-align: center; /* 텍스트 중앙 정렬 */
      flex-grow: 1; /* 메뉴 항목이 flex 컨테이너의 가용 공간을 채우도록 설정 */

      &.on, &:hover {
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
    justify-content: space-between;

    img {
      width: 150px;
      align-items: center;
      margin: 0 40px;
    }
  }
`;


const MainMenu = () => {
  const { t } = useTranslation();
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <MenuBox>
      <div className="layout-width">
        <NavLink
          to="/reservation"
          className={({ isActive }) => classNames({ on: isActive })}
          onMouseEnter={() => handleMouseEnter('reservation')}
          onMouseLeave={handleMouseLeave}
        >
          {t('농촌체험 예약')}
          {dropdown === 'reservation' && (
            <div className="dropdown">
              <NavLink to="/reservation/menu1">{t('메뉴1')}</NavLink>
              <NavLink to="/reservation/menu2">{t('메뉴2')}</NavLink>
            </div>
          )}
        </NavLink>
        <NavLink
          to="/my_reservation"
          className={({ isActive }) => classNames({ on: isActive })}
          onMouseEnter={() => handleMouseEnter('my_reservation')}
          onMouseLeave={handleMouseLeave}
        >
          {t('나의 예약현황')}
          {dropdown === 'my_reservation' && (
            <div className="dropdown">
              <NavLink to="/my_reservation/menu1">{t('메뉴1')}</NavLink>
              <NavLink to="/my_reservation/menu2">{t('메뉴2')}</NavLink>
            </div>
          )}
        </NavLink>
        <section className="logo">
          <Link to="/">
            <img src={logo} alt={t('로고')} />
          </Link>
        </section>
        <NavLink
          to="/recommend"
          className={({ isActive }) => classNames({ on: isActive })}
          onMouseEnter={() => handleMouseEnter('recommend')}
          onMouseLeave={handleMouseLeave}
        >
          {t('조이팜의 추천')}
          {dropdown === 'recommend' && (
            <div className="dropdown">
              <NavLink to="/recommend/menu1">{t('메뉴1')}</NavLink>
              <NavLink to="/recommend/menu2">{t('메뉴2')}</NavLink>
            </div>
          )}
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) => classNames({ on: isActive })}
          onMouseEnter={() => handleMouseEnter('community')}
          onMouseLeave={handleMouseLeave}
        >
          {t('커뮤니티')}
          {dropdown === 'community' && (
            <div className="dropdown">
              <NavLink to="/community/menu1">{t('메뉴1')}</NavLink>
              <NavLink to="/community/menu2">{t('메뉴2')}</NavLink>
            </div>
          )}
        </NavLink>
      </div>
    </MenuBox>
  );
};

export default React.memo(MainMenu);
