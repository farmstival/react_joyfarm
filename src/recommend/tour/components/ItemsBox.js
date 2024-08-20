import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../../commons/components/ImageBox';
<<<<<<< HEAD
=======
import { FaMapMarkerAlt } from 'react-icons/fa';
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293

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
<<<<<<< HEAD
            width="150px"
            height="150px"
=======
            width="100%"
            height="250px"
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
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
<<<<<<< HEAD
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 5px #818181;
  border-radius: 5px;

  a {
    display: flex;

    .photo {
      margin-right: 10px;
      border-radius: 5px;
    }

    .item-content {
      width: calc(100% - 160px);
      word-break: break-all;
=======
  border: 1px solid #ada493;
  border-radius: 5px;
  width: 100%;
  height: 450px;

  a {
    display: flex;
    flex-direction: column;

    .photo {
      width: 100%;
      border-radius: 5px 5px 0px 0px;
    }

    .item-content {
      width: 100%;
      word-break: break-all;
      padding: 20px;
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
      }

      .description {
        font-size: 15px;
        margin-bottom: 10px;
        width: 100%;
        height: 40%;
      }

      .address {
        font-size: 15px;
        color: #767676;
        height: 30%;
        padding-top: 20px;
      }
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
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
