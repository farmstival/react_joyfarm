import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';
import fontSize from '../../styles/fontSize';

const { normal, medium } = fontSize;

const Wrapper = styled.div`
  width: 400px;
  height: 500px;
  word-break: break-all;

  .dscp_box {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 90%;

    .rsv_button {
      position: absolute;
      width: 400px;
    }
  }

  dl {
    display: flex;
    padding: 10px 15px;
    font-size: ${normal};
    line-height: 170%;

    dt {
      width: 120px;
      font-weight: bold;
    }

    dd {
      width: calc(100% - 100px);
    }
  }

  dl + dl {
    border-top: 1px solid #a6a6a6;
  }
`;


const ItemDescription = ({ item, onSubmit }) => {
  const { t } = useTranslation();
  const {
    name,
    email,
    mobile,
    rdate,
    ampm,
    townName,
    persons,
  } = item;
  
  return (
    <Wrapper className="wrap_box">
    <div className="person_info">
      <div>{t('예약자_정보')}</div>
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
      <div>{t('예약한_체험_마을')}</div>
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
        <dt>{t('예약한_체험_마을')}</dt>
        <dd>{townName}</dd>
      </dl>
    </div>
      <Link to={`/myreservation/cancel/${item.seq}`}>
        <MidButton className="rsv_button"  onSubmit={onSubmit}color="midGreen">
          {t('예약_취소')}
        </MidButton>
      </Link>
    </Wrapper>
  );
};

export default React.memo(ItemDescription);
