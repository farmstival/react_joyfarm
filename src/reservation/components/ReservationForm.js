import React, { useContext } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { useTranslation } from 'react-i18next';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
import { BigButton } from '../../commons/components/Buttons';
import InputBox from '../../commons/components/InputBox';
import MessageBox from '../../commons/components/MessageBox';
import { color } from '../../styles/color';
import fontSize from '../../styles/fontSize';

const { line_gray, primary, lightGreen, darkGreen } = color;
const { normal, medium, normedium } = fontSize;

const FormBox = styled.form`
  display: flex;

  .box {
    flex-grow: 1;
    width: 0;
  }

  .box + .box {
    margin-left: 40px;
  }

  dl {
    // display: flex;
    padding: 10px 15px;
    font-size: ${normedium};
    line-height: 170%;

    dt {
      // width: 140px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    dd {
      width: calc(100% - 140px);
      font-size: ${normal};
    }
  }

  .react-calendar {
    cursor: pointer;
    width: 90%;
    height: 400px;
    padding: 15px;
    border-radius: 20px;
    align-content: center;
  }

  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    justify-content: center;
  }

  // 년도 옮기는 버튼 없애기
  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button {
    display: none;
  }

  /* 네비게이션 비활성화 됐을때 스타일 */
  .react-calendar__navigation button:disabled {
    background-color: white;
    color: ${lightGreen};
  }

  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }

  .react-calendar__navigation button:focus {
    background-color: white;
  }

  .react-calendar__tile:disabled {
    background-color: ${line_gray};
  }

  .react-calendar__navigation__label > span {
    // 달력 상단 년/월 글씨 커스텀
    font-size: 13px;
    font-weight: 500;
    line-height: 140%;
  }

  /* 주말에만 빨간 폰트 */
  .react-calendar__month-view__weekdays__weekday--weekend {
    color: #red;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 15px;
    font-size: ${medium};
    font-weight: bold;
  }

  //hover 했을 때, 선택한 날짜 색상 변경
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: ${darkGreen};
    color: white;
    border-radius: 40px;
  }

  .react-calendar__tile--now {
    // 오늘 날짜 하이라이트 커스텀
    background: white;
    color: #3a3a3a;
  }

  /* 네비게이션 현재 월 스타일 적용 */
  .react-calendar__tile--hasActive {
    background-color: ${primary};
    abbr {
      color: white;
    }
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    flex: 0 0 calc(33.3333% - 10px) !important;
    margin-inline-start: 5px !important;
    margin-inline-end: 5px !important;
    margin-block-end: 10px;
    padding: 20px 6.6667px;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 5px;
    background-color: ${lightGreen};
    padding: 0;
  }

  /* 일 날짜 간격 */
  .react-calendar__tile {
    padding: 20px;
    position: relative;
    text-align: center;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${normal};
  }

  //select 태그 스타일
  select::-ms-expand {
    display: none;
  }

  .select {
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    width: 460px;
    height: 40px;
    padding: 5px 30px 5px 10px;
    border-radius: 4px;
    outline: 0 none;

    .option {
      padding: 20px 0;
    }
  }

  li {
    display: flex;
    align-items: center;
    font-size: ${normedium};

    svg {
      margin-right: 5px;
    }
  }

  .rsv_btn {
    width: 400px;
    justify-content: center;
  }
`;

const ReservationForm = ({
  data,
  form,
  onSubmit,
  onDateChange,
  onTimeChange,
  onChange,
  errors,
}) => {
  const { t } = useTranslation();
  const { minDate, maxDate, times } = data;

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div className="select_date box">
        <h2>{t('예약일_선택')}</h2>
        <h3>{t('예약은_당일로부터_한달_이내만_가능합니다')}</h3>
        <Calendar minDate={minDate} maxDate={maxDate} onChange={onDateChange} />
        {errors?.rDate && <MessageBox color="danger" messages={errors.rDate} />}
        {times && (
          <dl>
            <dt>
              <h2>{t('예약시간_선택')}</h2>
            </dt>
            <dd>
              <ul>
                {times[0] && (
                  <li onClick={() => onTimeChange('AM')}>
                    {form.ampm === 'AM' ? (
                      <IoIosRadioButtonOn />
                    ) : (
                      <IoIosRadioButtonOff />
                    )}
                    {t('오전')}
                  </li>
                )}
                {times[1] && (
                  <li onClick={() => onTimeChange('PM')}>
                    {form.ampm === 'PM' ? (
                      <IoIosRadioButtonOn />
                    ) : (
                      <IoIosRadioButtonOff />
                    )}
                    {t('오후')}
                  </li>
                )}
              </ul>
              {errors?.ampm && (
                <MessageBox color="danger" messages={errors.ampm} />
              )}
            </dd>
          </dl>
        )}
      </div>
      <div className="select-time box">
        <h2>{t('예약자_기본정보')}</h2>
        <dl>
          <dt>{t('예약자명')}</dt>
          <dd>
            <InputBox
              type="text"
              name="name"
              value={form?.name}
              onChange={onChange}
            />
            {errors?.name && (
              <MessageBox color="danger" messages={errors.name} />
            )}
          </dd>
        </dl>
        <dl>
          <dt>{t('이메일')}</dt>
          <dd>
            <InputBox
              type="text"
              name="email"
              value={form?.email}
              onChange={onChange}
            />
            {errors?.email && (
              <MessageBox color="danger" messages={errors.email} />
            )}
          </dd>
        </dl>
        <dl>
          <dt>{t('휴대전화번호')}</dt>
          <dd>
            <InputBox
              type="text"
              name="mobile"
              value={form?.mobile}
              onChange={onChange}
            />
            {errors?.mobile && (
              <MessageBox color="danger" messages={errors.mobile} />
            )}
          </dd>
        </dl>

        <dl>
          <dt>
            <h2>{t('인원수_선택')}</h2>
          </dt>
          <dd>
            <select
              name="persons"
              value={form?.persons}
              onChange={onChange}
              className="select"
            >
              {[...new Array(30).keys()].map((i) => (
                <option key={`persons_${i}`} value={i + 1} className="option">
                  {i + 1}
                  {t('명')}
                </option>
              ))}
            </select>
            {errors?.persons && (
              <MessageBox color="danger" messages={errors.persons} />
            )}
          </dd>
        </dl>
        <BigButton type="submit" color="midGreen" className="rsv_btn">
          {t('예약하기')}
        </BigButton>
        {errors?.global && (
          <MessageBox color="danger" messages={errors.global} />
        )}
      </div>
    </FormBox>
  );
};

export default React.memo(ReservationForm);
