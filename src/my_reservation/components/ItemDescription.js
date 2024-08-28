import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';
import fontSize from '../../styles/fontSize';
import { BsPersonLinesFill } from 'react-icons/bs';
import { IoTicketOutline } from 'react-icons/io5';
import { color } from '../../styles/color';

const { medium, normedium, big } = fontSize;
const { primary } = color;

const Wrapper = styled.div`
  width: 45%;
  height: 500px;
  word-break: break-all;

  .dscp_box {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 450px;
    margin-bottom: 10px;

    .cancel_button {
      position: absolute;
    }

    .person_info {
      height: 210px;
    }

    .rsv_info {
      height: 240px;
    }

    .title {
      font-size: ${big};
      font-weight: bold;
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      .icon {
        margin-right: 10px;
        color: ${primary};
      }

      p {
        font-weight: bold;
        margin: 5px 0;
      }
    }
  }

  dl {
    display: flex;
    padding: 10px 15px;
    font-size: ${normedium};
    line-height: 170%;

    dt {
      width: 140px;
      font-weight: bold;
    }

    dd {
      width: calc(100% - 140px);
    }
  }

  dl + dl {
    border-top: 1px solid #a6a6a6;
  }
`;

const ItemDescription = ({ item, onClick }) => {
  const { t } = useTranslation();
  const { name, email, mobile, rdate, ampm, townName, persons } = item;

  return (
    <Wrapper>
      <div className="dscp_box">
        <div className="person_info">
          <div className="title">
            <BsPersonLinesFill className="icon" />
            <p>{t('예약자_정보')}</p>
          </div>
          <dl>
            <dt>{t('예약자명')}</dt>
            <dd>{name}</dd>
          </dl>
          <dl>
            <dt>{t('이메일')}</dt>
            <dd>{email}</dd>
          </dl>
          <dl>
            <dt>{t('예약자_전화번호')}</dt>
            <dd>{mobile}</dd>
          </dl>
        </div>

        <div className="rsv_info">
          <div className="title">
            <IoTicketOutline className="icon" />
            <p>{t('예약한_체험_마을_정보')}</p>
          </div>
          <dl>
            <dt>{t('예약일')}</dt>
            <dd>{rdate}</dd>
          </dl>
          <dl>
            <dt>{t('예약시간')}</dt>
            <dd>{ampm}</dd>
          </dl>
          <dl>
            <dt>{t('예약인원')}</dt>
            <dd>{persons}</dd>
          </dl>
          <dl>
            <dt>{t('체험_마을명')}</dt>
            <dd>{townName}</dd>
          </dl>
        </div>
      </div>

      <MidButton
        className="cancel_button"
        onClick={() => onClick(item.seq)}
        color="midGreen"
      >
        {t('예약_취소')}
      </MidButton>
    </Wrapper>
  );
};

export default React.memo(ItemDescription);
