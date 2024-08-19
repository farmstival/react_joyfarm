import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  position: fixed;
  top: 40%;
  right: 50px;
  width: 150px;
  background: #f4f4f4;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  text-align: center;
  border-radius: 20px;
`;

const SidebarLink = styled.a`
  display: block;
  margin: 10px 0;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  text-decoration: none;
  color: #333;
  cursor: pointer;
  &:hover {
    background: #e1e1e1;
  }
`;

const Sidebar = ({ onLinkClick }) => (
  <SidebarContainer>
    <SidebarLink onClick={() => onLinkClick('top')}>메뉴</SidebarLink>
    <SidebarLink onClick={() => onLinkClick('location')}>지역</SidebarLink>
    <SidebarLink onClick={() => onLinkClick('recommend')}>추천</SidebarLink>
    <SidebarLink onClick={() => onLinkClick('review')}>후기</SidebarLink>
    <SidebarLink onClick={() => onLinkClick('board')}>공지</SidebarLink>
  </SidebarContainer>
);

export default Sidebar;
