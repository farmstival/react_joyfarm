import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';
import fontSize from '../../styles/fontSize';

const {normal } =fontSize;

const Wrapper = styled.div`
  width: 400px;
  height: 500px;
  word-break: break-all;

  .des_box {
    position: relative;

    .rsv_btn {
    position: absolute;
    bottom: 10px;
    width: 400px;
    
  }
  }


  dl {
    display: flex;
    padding: 10px 15px;
    font-size: ${normal};
    line-height: 150%;

    dt {
      width: 100px;
    }

    dd {
      width: calc(100% - 100px);
    }
  }

  dl + dl {
    border-top: 1px solid #A6A6A6;
  }


`;

const ItemDescription = ({ item }) => {
  const { t } = useTranslation();
  const {
    townName,
    activityName,
    doroAddress,
    ownerTel,
    facilityInfo,
    wwwAddress,
  } = item;
  return (
    <Wrapper className='des_box'>
      <dl>
        <dt>{t('체험마을명')}</dt>
        <dd>{townName}</dd>
      </dl>
      <dl>
        <dt>{t('체험프로그램')}</dt>
        <dd>{activityName}</dd>
      </dl>
      <dl>
        <dt>{t('체험마을_주소')}</dt>
        <dd>{doroAddress}</dd>
      </dl>
      {ownerTel && (
        <dl>
          <dt>{t('대표전화번호')}</dt>
          <dd>{ownerTel}</dd>
        </dl>
      )}
      {facilityInfo && (
        <dl>
          <dt>{t('보유시설정보')}</dt>
          <dd>{facilityInfo}</dd>
        </dl>
      )}
      {wwwAddress && (
        <dl>
          <dt>{t('홈페이지주소')}</dt>
          <dd>{wwwAddress}</dd>
        </dl>
      )}

      <Link to="/reservation/apply">
        <MidButton className='rsv_btn' color="midGreen">{t('예약하기')}</MidButton>
      </Link>
    </Wrapper>
  );
};

export default React.memo(ItemDescription);
