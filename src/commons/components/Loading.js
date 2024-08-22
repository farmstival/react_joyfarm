import React from 'react';
import image from '../../images/loading.gif';
import image2 from '../../images/logo.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  .loading2 {
    width: 130px;
    height: 23px;
    margin: 100px 0 20px 0;
  }

  img {
    width: 80px;
    height: 30px;
    display: block;
  }
`;

const Loading = () => {
  return (
    <Wrapper>
      <img className="loading2" src={image2} alt="loading2" />
      <img src={image} alt="loading" />
    </Wrapper>
  );
};

export default React.memo(Loading);
