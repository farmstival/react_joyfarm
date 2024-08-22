import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { color } from '../../../styles/color';
import { ZzimButton } from '../../../commons/components/Buttons';
import {
  FcCalendar,
  FcAbout,
  FcAutomotive,
  FcContacts,
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
  const { period, title, address, tel, course, description } = item;
  const periodformattedDate = moment({period}).format('YYYY년 MM월');
  return (
    <Wrapper>
         {period && (
        <dl>
          <dt><FcCalendar />{t('추천_여행기간')}</dt>
          <dd>{periodformattedDate}</dd>
        </dl>
      )}
      <dl>
        <dt><FcAbout />{t('추천_여행지')}</dt>
        <dd>{title}</dd>
      </dl>
      <dl>
        <dt><FcAutomotive />{t('여행장소')}</dt>
        <dd>{address}</dd>
      </dl>
      <dl>
        <dt><FcContacts />{t('문의처')}</dt>
        <dd>{tel}</dd>
      </dl>
      {course && (
        <dl>
          <dt><FcElectricity />{t('여행코스')}</dt>
          <dd>{course}</dd>
        </dl>
      )}
      {description && (
        <dl>
          <dt><FcPlus />{t('여행지_설명')}</dt>
          <dd>{description}</dd>
        </dl>
      )}
      <div className='button'>
      <ZzimButton>{t('여행지_찜하기')}</ZzimButton>
      </div>
    </Wrapper>
  );
};

export default React.memo(ItemDescription);
