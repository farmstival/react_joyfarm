import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { color } from '../../styles/color';
import fontSize from '../../styles/fontSize';
const { medium } = fontSize;
const { midGreen, lightGreen } = color;

const Wrapper = styled.aside`
  /* 
 background: #6c757d;
  a {
    
    font-size: ${medium};
    border-bottom: 1px solid #616161;
    &.on {
      background: #000;
      color: #fff;
    }
  } */

  align-content: center;
  position: fixed;
  top: 22%;

  a {
    display: flex;
    align-items: center;
    padding: 25px 25px;
    justify-content: center;
    text-align: center;
    vertical-align: middle;
    font-size: 1.25rem;
    font-weight: bold;
    background: ${lightGreen};
    &.on {
      background: ${midGreen};
      color: white;
      text-decoration: underline;
    }
  }
  a:hover {
    background: ${midGreen};
    color: white;
  }

  a:first-of-type {
    border-top-left-radius: 15px; /* 좌측 상단 모서리 반경 */
    border-top-right-radius: 15px; /* 우측 상단 모서리 반경 */
  }

    a:last-of-type {
    border-bottom-left-radius: 15px; /* 좌측 상단 모서리 반경 */
    border-bottom-right-radius: 15px; /* 우측 상단 모서리 반경 */
  }
`;

const Side = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <NavLink
        to="/mypage/info"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        {t('회원정보_수정')}
      </NavLink>
      <NavLink
        to="/mypage/reservation"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        {t('예약관리')}
      </NavLink>
      <NavLink
        to="/mypage/board"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        {t('게시글_관리')}
      </NavLink>
      <NavLink
        to="/mypage/wishlist/tour"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        WishList
      </NavLink>
    </Wrapper>
  );
};

export default React.memo(Side);
