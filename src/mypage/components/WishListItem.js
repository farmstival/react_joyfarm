import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../commons/components/ImageBox';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { color } from '../../styles/color';
import { useParams } from 'react-router-dom';
import NoImage from '../../images/farm.jpg';
import { FcPhone } from 'react-icons/fc';

const { midGreen } = color;

const WishListItems = ({ item, className, rootUrl}) => {
  const { tab } = useParams();
  const Notel = '홈페이지 문의';
  const {
    seq,
    title,
    photoUrl1,
    address,
    photoUrl,
    townImage,
    townName,
    doroAddress,
    tel,
    ownerTel,
  } = item;
  const displayImageUrl = photoUrl1 ?? photoUrl ?? townImage ?? NoImage;
  console.log(displayImageUrl);
  const displaytitle = title ?? townName;
  const displayaddress = address ?? doroAddress;
  const displaytel = tel ?? ownerTel ?? Notel;
  rootUrl = rootUrl ?? '';
  const url = `${rootUrl}/${tab}/${seq}`;
  return (
    <li className={className}>
      <Link to={url}>
        {displayImageUrl && (
          <ImageBgBox
            className="photo"
            url={displayImageUrl}
            width="100%"
            height="165px"
          />
        )}
        <div className="item-content">
          <div className="title">{displaytitle}</div>
          <div className="tel">
            <FcPhone className="tel_icon" />
            {displaytel}
          </div>
          <div className="address">
            <FaMapMarkerAlt className="icon" />
            {displayaddress}
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
  width: 450px;
  height: 200px;
  box-sizing: border-box;
  margin-bottom: 20px;

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
      padding: 10px 0 10px 20px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      overflow-wrap: break-word;

      .title {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        overflow-wrap: break-word;
        padding: 0 10px;
      }

      .tel {
        font-size: 15px;
        color: #767676;

        .tel_icon {
          position: relative;
          top: 3px;
          margin-right: 5px;
        }
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
