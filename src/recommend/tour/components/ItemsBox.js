import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../../commons/components/ImageBox';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { color } from '../../../styles/color';

const { midGreen, white } = color;

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
            <FaMapMarkerAlt className="icon" />
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
    border: 1px solid ${midGreen};
  }

  &:hover .title {
    background: ${midGreen};
    color: ${white};
    text-shadow: 1px 1px gray;
    transition: 0.3s;
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
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 30px 0 30px;
      }

      .description {
        font-size: 15px;
        margin-bottom: 10px;
        width: 100%;
        height: 30%;
        display: flex;
        align-items: center;
        text-align: justify;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        display: -webkit-box;
      }

      .address {
        font-size: 15px;
        color: #767676;
        height: 30%;
        padding-top: 20px;

        .icon {
          color: #ff5e00;
          position: relative;
          top: 3px;
          margin-right: 5px;
        }
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