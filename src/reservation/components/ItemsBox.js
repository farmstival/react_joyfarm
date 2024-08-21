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
      padding-top: 10px;
      position: relative;
      height: 200px;

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
        //height: 50%;
        overflow: hidden; //글자 넘치는 부분 감추기
        text-overflow: ellipsis; //숨겨지는 영역 끝에 말줄임표 생성
        white-space: normal; //줄바꿈
        text-align: left; //텍스트 윈쪽 정렬
        word-wrap: break-word; //단어 단위로 줄바꿈
        display: -webkit-box; //영역을 box형태로 지정
        -webkit-line-clamp: 3; //해당 영역 내 텍스트 최대 라인수
        -webkit-box-orient: vertical; //박스 방향 설정(가로)
      }

      .doroAddress {
        font-size: ${medium};
        color: #767676;
        height: 15%;
        position: absolute;
        bottom: 0px;

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
