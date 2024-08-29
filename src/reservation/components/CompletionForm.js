import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';

const FlatWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #ffffff;
  color: #333;
  border: 1px solid #e0e0e0;
  border-radius: 4px;

  h2 {
    color: #4caf50;
    margin-bottom: 20px;
  }

  .info_section {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
  }

  .toggle_btn button {
    background: #f0f0f0;
    border: 1px solid #ccc;
    padding: 5px 10px;
    cursor: pointer;
  }

  .btn_group {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

const CompletionForm = ({ data }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  const {
    name,
    email,
    mobile,
    rdate,
    ampm,
    townName,
    persons,
    activityName,
    ownerName,
    doroAddress,
    ownerTel,
  } = data;

  return (
    <FlatWrapper>
      <h2>{t('예약 완료')}</h2>
      <div className="info_section">
        <p>
          {t('예약자명')}: {name}
        </p>
        <p>
          {t('이메일')}: {email}
        </p>
        <p>
          {t('전화번호')}: {mobile}
        </p>
      </div>

      <div className="info_section">
        <p>
          {t('예약일')}: {rdate}
        </p>
        <p>
          {t('시간대')}: {ampm}
        </p>
        <p>
          {t('인원수')}: {persons}
        </p>
        <p>
          {t('체험 마을')}: {townName}
        </p>
      </div>

      <div className="toggle_btn">
        <button onClick={toggleInfo}>
          {isOpen ? t('체험_마을_세부정보_닫기') : t('체험_마을_세부정보_열기')}
        </button>
        {isOpen && (
          <div className="info_section">
            <dl>
              <dt>{t('체험_활동_소개')}</dt>
              <dd>{activityName}</dd>
            </dl>
            <dl>
              <dt>{t('체험_마을_대표자명')}</dt>
              <dd>{ownerName}</dd>
            </dl>
            <dl>
              <dt>{t('체험_마을_주소')}</dt>
              <dd>{doroAddress}</dd>
            </dl>
            <dl>
              <dt>{t('체험_마을_전화번호')}</dt>
              <dd>{ownerTel}</dd>
            </dl>
          </div>
        )}
      </div>

      <div className="btn_group">
        <MidButton color="midGreen" as={Link} to="/myreservation/list">
          {t('나의 예약 현황')}
        </MidButton>
        <MidButton color="midGreen" as={Link} to="/reservation/list">
          {t('농촌체험 예약')}
        </MidButton>
      </div>
    </FlatWrapper>
  );
};

export default React.memo(CompletionForm);
