import React from 'react';
import styled from 'styled-components';

const ItemBox = ({item, className}) => {
    const { townImage, townName } = item;
  return (
    <li className={className}>
      {townImage && townImage.length > 0 && (
        <div className="photo">
          <img src={townImage} alt={townImage} />
        </div>
      )}
      <div className="townName">{townName}</div>
    </li>
  );
};

const ItemsBox = ({ items }) => {
  console.log('items', items);
    return (
      items && (
        <ul>
          {items.map((item) => (
            <ItemBox key={item.seq} item={item} />
          ))}
        </ul>
      )
    );
  };


export default React.memo(ItemsBox);