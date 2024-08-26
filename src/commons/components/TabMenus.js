import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styled from 'styled-components';
import { buttonColor } from '../../styles/color';
import fontSize from '../../styles/fontSize';
const { midGreen, darkGreen } = buttonColor;
const { big } = fontSize;

const Wrapper = styled.nav`
  padding: 10px 0;
  display: flex;
  height: 55px;
  margin-bottom: 20px;
  a {
    background: ${midGreen[0]};
    width: 150px;
    height: 50px;
    color: ${darkGreen[1]};
    padding: 0 25px;
    border-radius: 5px;
    font-size: ${big};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a:hover,
  a.on {
    background: ${darkGreen[2]};
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  a + a {
    margin-left: 10px;
  }
`;

const TabMenus = ({ items }) => {
  return (
    items &&
    items.length > 0 && (
      <Wrapper>
        {items.map(({ name, link }) => (
          <NavLink
            to={link}
            key={link}
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {name}
          </NavLink>
        ))}
      </Wrapper>
    )
  );
};

export default React.memo(TabMenus);
