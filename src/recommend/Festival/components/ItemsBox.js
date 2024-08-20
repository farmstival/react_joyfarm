import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../../commons/components/ImageBox';
import moment from 'moment';
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../../images/logo.png';
import { useTranslation } from 'react-i18next';

const ItemBox = ({ item, className }) => {
  const { t } = useTranslation();
  const { seq, title, photoUrl1, address, content, startDate, endDate } = item;
  const url = `/recommend/festival/${seq}`;
  const startformattedDate = moment({ startDate }).format('YYYY/MM/DD');
  const endformattedDate = moment({ endDate }).format('YYYY/MM/DD');
  return (
    <li className={className}>
      <Link to={url}>
        {photoUrl1 ? (
          <ImageBgBox
            className="photo"
            url={photoUrl1}
            width="100%"
            height="250px"
          />
        ) : (
          <ImageBgBox
            className="logo"
            url={logo}
            width="100%"
            height="250px"
            alt={t('로고')}
          />
        )}
        <div className="item-content">
          <div className="title">{title}</div>
          <div className="Date">
            축제 진행 기간 : {startformattedDate} ~ {endformattedDate}
          </div>
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
    }
  }
`;

const ItemsBox = ({ items }) => {
  console.log('items', items);
  return (
    items.length > 0 &&
    items.map((item) => <ItemStyledBox key={item.seq} item={item} />)
  );
};

export default React.memo(ItemsBox);
