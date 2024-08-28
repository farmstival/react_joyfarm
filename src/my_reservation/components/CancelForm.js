import React, { useState } from 'react';
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

  .myrsv_button .list_button {
    position: absolute;
    width: 400px;
  }

  .btn_group {
    display: flex;
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

const CancelForm = ({ data }) => {
  const { t } = useTranslation();

  const { name, townName } = data;

  return (
    <Wrapper className="wrap_box">
      <div className="person_info">
        <dl>
          <dt>{t('예약자명')}</dt>
          <dd>{name}</dd>
        </dl>
      </div>

      <div className="rsv_info">
        <div>{t('예약 취소한_체험_마을')}</div>
        <dl>
          <dt>{t('체험_마을명')}</dt>
          <dd>{townName}</dd>
        </dl>
      </div>
      <h2>예약 취소가 완료되었습니다.</h2>

      <div className="btn_group">
        <Link to={`/myreservation/list`}>
          <MidButton className="myrsv_button" color="midGreen">
            {t('나의_예약_현황')}
          </MidButton>
        </Link>
        <Link to={`/reservation/list`}>
          <MidButton className="list_button" color="midGreen">
            {t('체험_마을_리스트')}
          </MidButton>
        </Link>
      </div>
    </Wrapper>
  );
};

export default React.memo(CancelForm);
