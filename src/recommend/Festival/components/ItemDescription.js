import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ZzimButton } from '../../../commons/components/Buttons';
import moment from 'moment';
import {
  FcCalendar,
  FcAbout,
  FcBookmark,
  FcLibrary,
  FcContacts,
  FcHome,
  FcElectricity,
  FcPlus,
} from 'react-icons/fc';

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  padding-left: 20px;
  margin: auto;

  dl {
    padding-top: 10px;
    margin: 16px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    dt {
      padding-left: 15px;
      font-size: 1.5rem;
      font-weight: 650;
      line-height: 29px;
    }

    dd {
      padding-left: 15px;
      font-size: 1.3rem;
      line-height: 1.8rem;
    }
  }

  dl dt svg {
    margin-right: 8px;
  }

  dl + dl {
    border-top: 1px solid #f8f9fa;
  }

  .button {
    display: flex;
    justify-content: flex-end;
    margin: 30px 30px 0 0;
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
  const startformattedDate = moment(startDate).format('YYYY년 MM월 DD일');
  const endformattedDate = moment(endDate).format('YYYY년 MM월 DD일');
  return (
    <Wrapper>
      {startDate && endDate && (
        <dl>
          <dt>
            <FcCalendar />
            {t('행사기간 ')}
          </dt>
          <dd>
            {startformattedDate}~{endformattedDate}
          </dd>
        </dl>
      )}
      <dl>
        <dt>
          <FcAbout />
          {t('행사명')}
        </dt>
        <dd>{title}</dd>
      </dl>
      {address && (
        <dl>
          <dt>
            <FcElectricity />
            {t('주소')}
          </dt>
          <dd>{address}</dd>
        </dl>
      )}
      {location && (
        <dl>
          <dt>
            <FcBookmark />
            {t('행사장소')}
          </dt>
          <dd>{location}</dd>
        </dl>
      )}
      {hostMain && (
        <dl>
          <dt>
            <FcLibrary />
            {t('주최기관')}
          </dt>
          <dd>{hostMain}</dd>
        </dl>
      )}
      <dl>
        <dt>
          <FcLibrary />
          {t('주관기관')}
        </dt>
        <dd>{hostSub}</dd>
      </dl>
      <dl>
        <dt>
          <FcContacts />
          {t('문의처')}
        </dt>
        <dd>{tel}</dd>
      </dl>
      <dl>
        <dt>
          <FcHome />
          {t('홈페이지_주소')}
        </dt>
        <dd>{pageLink}</dd>
      </dl>
      <dl>
        <dt>
          <FcPlus />
          {t('행사내용')}
        </dt>
        <dd>{content}</dd>
      </dl>
      <div className='button'>
      <ZzimButton>{t('찜하기')}</ZzimButton>
      </div>
    </Wrapper>
  );
};

export default React.memo(ItemDescription);
