import React from 'react';
<<<<<<< HEAD
import image from '../../images/loading.webp';
=======
import image from '../../images/loading.gif';
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: calc(50% - 75px);
<<<<<<< HEAD
  left: calc(50% - 75px);
  width: 150px;
  height: 150px;
=======
  left: 45%;
  width: 200px;
  height: 30px;
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
  z-index: 100;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const Loading = () => {
  return (
    <Wrapper>
      <img src={image} alt="loading" />
    </Wrapper>
  );
};

export default React.memo(Loading);
