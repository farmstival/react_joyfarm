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
    <Wrapper className="wrap_box">
      <div className="dscp_box">
        <dl>
          <dt>{t('체험마을명')}</dt>
          <dd>{townName}</dd>
        </dl>
        <dl>
          <dt>{t('체험_프로그램_설명')}</dt>
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
            <a href={wwwAddress} target="_blank" rel="noopener noreferrer">
              {wwwAddress}
            </a>
          </dl>
        )}
      </div>
      <Link to={`/reservation/apply/${item.seq}`}>
        <MidButton className="rsv_button" color="midGreen">
          {t('예약하기')}
        </MidButton>
      </Link>
    </Wrapper>
  );
};

export default React.memo(ItemDescription);
