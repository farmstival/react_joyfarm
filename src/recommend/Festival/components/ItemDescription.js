import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../../commons/components/Buttons';

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
  const {
    startDate,
    endDate,
    title,
    address,
    location,
    hostMain,
    hostSub,
    tel,
    pageLink,
    content,
  } = item;
  return (
    <Wrapper>
      {startDate && endDate && (
        <dl>
          <dt>{t('행사기간')}</dt>
          <dd>
            {startDate}~{endDate}
          </dd>
        </dl>
      )}
      <dl>
        <dt>{t('행사명')}</dt>
        <dd>{title}</dd>
      </dl>
      {address && (
        <dl>
          <dt>{t('주소')}</dt>
          <dd>{address}</dd>
        </dl>
      )}
      {location && (
        <dl>
          <dt>{t('행사장소')}</dt>
          <dd>{location}</dd>
        </dl>
      )}
      {hostMain && (
        <dl>
          <dt>{t('주최기관')}</dt>
          <dd>{hostMain}</dd>
        </dl>
      )}
      <dl>
        <dt>{t('주관기관')}</dt>
        <dd>{hostSub}</dd>
      </dl>
      <dl>
        <dt>{t('문의처')}</dt>
        <dd>{tel}</dd>
      </dl>
      <dl>
        <dt>{t('홈페이지_주소')}</dt>
        <dd>{pageLink}</dd>
      </dl>
      <dl>
        <dt>{t('행사내용')}</dt>
        <dd>{content}</dd>
      </dl>
      <MidButton>{t('찜하기')}</MidButton>
    </Wrapper>
  );
};

export default React.memo(ItemDescription);
