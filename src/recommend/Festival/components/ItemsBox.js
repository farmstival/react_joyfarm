import React from 'react';
import styled from 'styled-components';

const ItemBox = ({ item, className }) => {
  const { photoUrl1, title, content } = item;
  return (
    <li className={className}>
      {photoUrl1 && (
        <div className="photo">
          <img src={photoUrl1} alt={photoUrl1} />
        </div>
      )}
      <div className="title">{title}</div>
      <div className="content">{content}</div>
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
