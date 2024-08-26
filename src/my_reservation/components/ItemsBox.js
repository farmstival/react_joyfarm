import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WishButton from '../../commons/components/WishButton';
import { ImageBgBox } from '../../commons/components/ImageBox';
import { useTranslation } from 'react-i18next';
import banner from '../../images/ReviewImage1.jpg';
import fontSize from '../../styles/fontSize';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { color } from '../../styles/color';
import { FcLandscape } from 'react-icons/fc';

const { midGreen, white, lightGreen } = color;
const { medium, big, normal, extraBig } = fontSize;

//농활 체험 목록 조회
const ItemBox = ({ item, className }) => {
  const { t } = useTranslation();
  const { seq, townImage, townName, activityName, doroAddress, rdate } = item;
  const url = `/myreservation/info/${seq}`;
  return (
    <li className={className}>
      <Link to={url}>
        {townImage ? (
          <ImageBgBox
            className="townImg"
            url={townImage}
            width="25%"
            height="250px"
            alt={t('마을사진')}
          />
        ) : (
          //이미지 없는 경우 대체
          <ImageBgBox
            className="img"
            url={banner}
            width="25%"
            height="250px"
            alt={t('마을사진')}
          />
        )}
        <div className="item-content">
          <div className="townName">{townName}</div>
          <div className="act_content">
            <div className="actNameTitle">
              <FcLandscape className="t_icon" />
              <p className="act_title">{t('체험_프로그램_소개')}</p>
            </div>
            <div className="activityName">{activityName}</div>
            <div className="rsvDate">{rdate}</div>
          </div>
          <div className="doroAddress">
            <FaMapMarkerAlt className="icon" />
            <p className="addr">{doroAddress}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

const ItemStyledBox = styled(ItemBox)`
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ada493;
  width: 100%;

  &:hover .townName {
    background: ${lightGreen};
    transition: 0.3s;
  }

  a {
    height: 250px;
    display: flex;

    .townImg,
    .img {
      width: 50%;
      height: 100%;
      border-radius: 5px 5px 0px 0px;
    }

    .item-content {
      width: 100%;
      word-break: break-all;
      padding: 10px 20px 5px 30px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: ${normal};

      .townName {
        font-size: ${extraBig};
        font-weight: bold;
        text-align: center;
        line-height: 20%;
        height: 20%;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
      }

      .actNameTitle {
        font-size: ${medium};
        font-weight: bold;
        margin-bottom: 10px;
        display: flex;
        align-items: center;

        .act_title {
          margin: 0;
        }

        .t_icon {
          margin-right: 10px;
        }
      }

      .act_content {
        display: flex;
        flex-direction: column;
        height: 50%;
      }

      .activityName {
        font-size: ${medium};
        line-height: 170%;
        width: 100%;
        margin-bottom: 10px;
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
        margin-top: 10px;
        display: flex;
        align-items: center;

        .addr {
          margin: 0;
        }

        .icon {
          color: #ff5e00;
          top: 3px;
          margin-right: 10px;
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
