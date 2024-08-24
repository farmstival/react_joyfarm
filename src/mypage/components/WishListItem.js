import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../commons/components/ImageBox';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { color } from '../../styles/color';
import { useParams } from 'react-router-dom';

const { midGreen } = color;

const WishListItems = ({ item, className }) => {
  const { tab } = useParams();
  const { seq, title, photoUrl, address } = item;
  const url = `/${tab}/${seq}`;
  return (
    <li className={className}>
      <Link to={url}>
        {photoUrl && (
          <ImageBgBox
            className="photo"
            url={photoUrl}
            width="100%"
            height="150px"
          />
        )}
        <div className="item-content">
          <div className="title">{title}</div>
          <div className="address">
            <FaMapMarkerAlt className="icon" />
            {address}
          </div>
        </div>
      </Link>
    </li>
  );
};

const ItemStyledBox = styled(WishListItems)`
  padding: 15px;
  border: 1px solid #ada493;
  border-radius: 5px;
  width: 50%;
  height: 200px;

  &:hover {
    border: 3px solid ${midGreen};
  }

  a {
    display: flex;

    .photo {
      width: 100%;
      border-radius: 5px;
    }

    .item-content {
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      overflow-wrap: break-word;

      .title {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        overflow-wrap: break-word;
      }

      .address {
        font-size: 15px;
        color: #767676;

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

const WishListItem = ({ items }) => {
  return (
    items.length > 0 &&
    items.map((item) => <ItemStyledBox key={item.seq} item={item} />)
  );
};

export default React.memo(WishListItem);
