import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../../commons/components/ImageBox';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { color } from '../../../styles/color';

const { white } = color;

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
          <div className="description">{description}</div>
          <div className="address">
            <FaMapMarkerAlt />
            {address}
          </div>
        </div>
      </Link>
    </li>
  );
};

const ItemStyledBox = styled(ItemBox)`
  border: 1px solid #ada493;
  border-radius: 5px;
  width: 100%;
  height: 450px;

  &:hover {
    border: 1px solid #4ab0b0;
  }

  &:hover .title {
    background: #4ab0b0;
    color: ${white};
    text-shadow: 2px 2px gray;
  }

  a {
    display: flex;
    flex-direction: column;

    .photo {
      width: 100%;
      height: 250px;
      border-radius: 5px 5px 0px 0px;
    }

    .item-content {
      width: 100%;
      word-break: break-all;
      padding: 5px 20px;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        height: 30%;
        margin-bottom: 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s, color 0.2s, text-shadow 0.2s;
      }

      .description {
        font-size: 15px;
        margin-bottom: 10px;
        width: 100%;
        height: 40%;
        display: flex;
        align-items: center;
        text-align: justify;
        line-height: 20px;
      }

      .address {
        font-size: 15px;
        color: #767676;
        height: 30%;
        padding-top: 20px;
      }
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
