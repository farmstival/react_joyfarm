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

const CompletionForm = ({ data }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); //닫힌 상태

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
    ownerName,
    ownerTel,
    activityName,
    doroAddress,
  } = data;

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

        <div className="toggle_btn">
          <button onClick={toggleInfo}>
            {isOpen
              ? t('체험_마을_세부정보_닫기')
              : t('체험_마을_세부정보_열기')}
          </button>
          {isOpen ? (
            <div>
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
          ) : (
            ''
          )}
        </div>
      </div>

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

export default React.memo(CompletionForm);