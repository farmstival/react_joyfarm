import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../../commons/components/ImageBox';

const ItemBox = ({ item, className }) => {
  const { seq, title, photoUrl1, location, content, startDate, endDate } = item;
  const url = `/recommend/festival/${seq}`;
  return (
    <li className={className}>
      <Link to={url}>
        {photoUrl1 && (
          <ImageBgBox
            className="photo"
            url={photoUrl1}
            width="150px"
            height="150px"
          />
        )}
        <div className="item-content">
          <div className="title">축제명 | {title}</div>
          <div className="location">축제 장소 | {location}</div>
          <div className="content">축제 소개 | {content}</div>
          <div className="Date">축제 일정 | {startDate}~{endDate}</div>
        </div>
      </Link>
    </li>
  );
};

const ItemStyledBox = styled(ItemBox)`
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
      width: calc(100% - 160px;)
      word-break: break-all;
      font-size: 1.2rem;
    }

    .item-content .title{
      font-size: 1.5rem;
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
