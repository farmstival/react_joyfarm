import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { color } from '../../styles/color';
import fontSize from '../../styles/fontSize';
const { medium } = fontSize;
const {midGreen, lightGreen} = color;

const Wrapper = styled.aside`
 background: #6c757d;
  a {
    display: block;
    padding: 15px 25px;
    font-size: ${medium};
    border-bottom: 1px solid #616161;
    &.on {
      background: #000;
      color: #fff;
    }
  } 
 /* 
 display: flex;
 justify-content: space-around;
 height: 40px;
  div {
    background: ${lightGreen};
    width: 120px;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #000;
  }*/

`;

const Side = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div class="navi">
      <NavLink
        to="/mypage/info"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        {t('회원정보_수정')}
      </NavLink>
      </div>
      <div class="navi2">
      <NavLink
        to="/mypage/reservation"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        {t('예약관리')}
      </NavLink>
      </div>
      <div class="navi3">
      <NavLink
        to="/mypage/board"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        {t('게시글_관리')}
      </NavLink>
      </div>
      <div class="navi4">
      <NavLink
        to="/mypage/wishlist/tour"
        className={({ isActive }) => classNames({ on: isActive })}
      >
        WishList
      </NavLink>
      </div>
    </Wrapper>
  );
};

export default React.memo(Side);
