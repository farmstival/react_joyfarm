import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
const Wrapper = styled.div`
  flex-grow: 1;
  margin-right: 10px;
  border-radius: 5px;
  height: 500px;
  overflow: hidden;
`;
const ImageBox = styled.div`
  background: url('${({ image }) => image}') no-repeat center center;
=======

const Wrapper = styled.div`
flex-grow: 1;
margin-right: 10px;
border-radius: 5px;
height: 500px;
overflow: hidden;
`;

const ImageBox = styled.div`
  background:url('${({image}) => image}') no-repeat center center;
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
  background-size: cover;
  width: 100%;
  height: 500px;
  cursor: pointer;
`;

const ItemImage = ({ images, onClick }) => {
  images = Array.isArray(images) ? images : [images];

  return (
    images.length > 0 && (
      <Wrapper className="item-images">
        {images.map((image) => (
<<<<<<< HEAD
          <ImageBox
            image={image}
            key={image}
            className="item-image"
            onClick={() => onClick(image)}
=======
          <ImageBox image={image} key={image} className="item-image"
          onClick={() => onClick(image)} 
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
          />
        ))}
      </Wrapper>
    )
  );
};

export default React.memo(ItemImage);
