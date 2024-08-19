import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../../commons/components/ImageBox';

const ItemBox = ({ item, className }) => {
  const { seq, title, photoUrl, address, description } = item;
  const url = `/recommend/tour/${seq}`;
  return (
    <li className={className}>
      <Link to={url}>
        {photoUrl && (
          <ImageBgBox
            className="photo"
            url={photoUrl}
            width="100%"
            height="250px"
          />
        )}
        <div className="item-content">
          <div className="title">{title}</div>
          <div className="address">{address}</div>
          <div className="description">{description}</div>
        </div>
      </Link>
    </li>
  );
};

const ItemStyledBox = styled(ItemBox)`
  margin-bottom: 60px;
  border: 1px solid #ada493;
  border-radius: 5px;
  width: 95%;
  height: 500px;

  a {
    display: flex;
    flex-direction: column;

    .photo {
      margin-right: 10px;
      width: 100%;
      border-radius: 5px 5px 0px 0px;
    }

    .item-content {
      width: 100%;
      word-break: break-all;
      font-size: 15px;
    }
  }
`;

const ItemsBox = ({ items }) => {
  return (
    items.length > 0 &&
    items.map((item) => <ItemStyledBox key={item.seq} item={item} />)
  );
};

export default React.memo(ItemsBox);
