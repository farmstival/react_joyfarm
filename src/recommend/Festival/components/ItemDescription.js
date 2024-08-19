import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../../commons/components/Buttons';
import {
  FcCalendar,
  FcAbout,
  FcBookmark,
  FcLibrary,
  FcContacts,
  FcHome,
  FcLikePlaceholder,
  FcElectricity,
  FcPlus
} from 'react-icons/fc';
import { IoIosNavigate } from 'react-icons/io';

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  padding-left: 52px;

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
    }
  }

  dl dt svg {
    margin-right: 8px;
  }

  dl + dl {
    border-top: 1px solid #f8f9fa;
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
          <dt>
            <FcCalendar />
            {t('행사기간 ')}
          </dt>
          <dd>
            {startDate}~{endDate}
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
      <MidButton>{t('찜하기')}</MidButton>
    </Wrapper>
  );
};

export default ItemDescription; //메모 지우니까 오류 사라짐.. 왜일까?
