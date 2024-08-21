import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ImageBgBox } from '../../commons/components/ImageBox';
import { useTranslation } from 'react-i18next';
import banner from '../../images/banner1.jpg';
import fontSize from '../../styles/fontSize';

const { medium, big } = fontSize;

//농활 체험 목록 조회
const ItemBox = ({ item, className }) => {
  const { t } = useTranslation();
  const { seq, townImage, townName, activityName, doroAddress } = item;
  const url = `/reservation/info/${seq}`;
  return (
    <li className={className}>
      <Link to={url}>
        {townImage ? (
          <ImageBgBox
            className="townImg"
            url={townImage}
            width="30%"
            height="250px"
            alt={t('마을사진')}
          />
        ) : (
          //이미지 없는 경우 대체
          <ImageBgBox
            className="img"
            url={banner}
            width="30%"
            height="250px"
            alt={t('마을사진')}
          />
        )}
        <div className="item-content">
          <div className="townName">{townName}</div>
          <div className="activityName">{activityName}</div>
          <div className="doroAddress">{doroAddress}</div>
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

    .townImg,
    .img {
      margin-right: 20px;
      border-radius: 10px;
    }

    .item-content {
      width: calc(100% - 160px);
      word-break: break-all;
      padding: 10px 0;

      .townName {
        font-size: ${big};
        font-weight: bold;
        text-align: center;
        height: 30%;
      }

      .activityName {
        font-size: ${medium};
        line-height: 170%;
        width: 100%;
        height: 50%;
      }

      .doroAddress {
        font-size: ${medium};
        color: #767676;
        height: 20%;
        padding-top: 10px;
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
