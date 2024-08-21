import React from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { BigButton } from '../../commons/components/Buttons';

const FormBox = styled.form`
  display: flex;
`;

const TimeTableAndPerson = styled.div``;

const ReservationForm = ({
  data,
  form,
  ampm,
  onCalendarClick,
  onTimeClick,
  onChange,
  onSubmit,
}) => {
  const { availableDates } = data;
  const startDate = availableDates[0];
  const endDate = availableDates[availableDates.length - 1];
  const {t} = useTranslation

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div>
        <h2>{t('예약날짜_선택')}</h2>
      <Calendar
        onChange={onCalendarClick}
        minDate={startDate}
        maxDate={endDate}
        tileDisabled={({ date }) => {
          return (
            availableDates.findIndex(
              (d) =>
                date.getFullYear() !== d.getFullYear() &&
                date.getMonth() !== d.getMonth() &&
                date.getDate() !== d.getDate(),
            ) === -1 //못찾을 경우
          );
        }}
      />
    </div>
    <TimeTableAndPerson>
      {ampm?.length > 0 && (
        <>
            <h2>{t('예약시간_선택')}</h2>
            <ul className="time-table">
          {ampm.map((ampm) => (
            <li key={ampm} onClick={() => onTimeClick(ampm)}>
              {form.rTime === ampm ? (
                <IoMdRadioButtonOn />
              ) : (
                <IoMdRadioButtonOff />
              )}
              {ampm}
            </li>
          ))}
        </ul>
        <dl className="persons">
              <dt>{t('인원수')}</dt>
              <dd>
                <select name="persons" onChange={onChange}>
                  {[...new Array(10).keys()].map((i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                      {t('명')}
                    </option>
                  ))}
                </select>
              </dd>
            </dl>
            <BigButton type="submit" color="primary">
              {t('예약하기')}
            </BigButton>
          </>
        )}
      </TimeTableAndPerson>
    </FormBox>
  );
};

export default React.memo(ReservationForm);
