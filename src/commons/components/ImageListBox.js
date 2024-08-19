import React from 'react';
import styled from 'styled-components';

export const ImageListBox = styled.div`
  box-sizing: border-box;
  width: 1200px;
  min-height: 700px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin-top: 60px;
  justify-content: center;
`;
