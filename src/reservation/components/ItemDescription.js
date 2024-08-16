import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';

const Wrapper = styled.div`
  width: 350px;
  word-break: break-all;

  dl {
    display: flex;

    padding: 10px 15px;

    dt {
      width: 100px;
    }

    dd {
      width: calc(100% - 100px);
    }
  }

  dl + dl {
    border-top: 1px dashed #818181;
  }
`;

const ItemDescription = ({ item }) => {
  const { t } = useTranslation();
  const { townName, activityName, address, ownerTel, facilityInfo, wwwAddress } = item;
  return (
    <Wrapper>
        <dl>
          <dt>{t('체험마을명')}</dt>
          <dd>{townName}</dd>
        </dl>
      <dl>
        <dt>{t('체험프로그램명')}</dt>
        <dd>{activityName}</dd>
      </dl>
      <dl>
        <dt>{t('체험마을장소')}</dt>
        <dd>{address}</dd>
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

      <Link to="/reservation/list/1">
      <MidButton color='midGreen'>{t('예약하기')}</MidButton>
      </Link>
    </Wrapper>
  );
};

export default React.memo(ItemDescription);
