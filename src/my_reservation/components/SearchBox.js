import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';
import { ImSearch } from 'react-icons/im';
import { color } from '../../styles/color';
import DatePicker from 'react-datepicker';
import fontSize from '../../styles/fontSize';

const { white, midGreen, gray, lightGreen } = color;
const { medium, normal, normedium } = fontSize;

const FormBox = styled.form`
  display: flex;
  border-bottom: 1px solid #ccc;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  padding: 5px 20px 20px;

  .search_box {
    height: 45px;
    display: flex;

    .pick_sdate,
    .pick_edate {
      border: 1px solid ${gray};
      display: flex;
      align-items: center;
      width: 120px;
      height: 45px;
      text-align: center;
      margin-right: 3px;
      box-sizing: border-box;
      font-size: ${normal};
      padding: 8px 20px;
      border-radius: 4px;

      &:focus {
        border: 2px solid #000;
      }
    }

    input {
      width: 430px;
      height: 45px;
      padding: 0 10px;
      border: 1px solid ${gray};
    }

    select {
      width: 130px;
      margin-right: 3px;
      height: 45px;
      padding: 0 10px;
      border: 1px solid ${gray};
    }

    .rsv_searchBar {
      justify-content: center;
      align-content: center;
      display: flex;
    }

    .rsv_btn {
      width: 180px;
    }

    .react-datepicker {
      border-radius: 10px;
      border: 1px solid ${gray};
    }

    .react-datepicker__header {
      background-color: ${gray};
      border-bottom: none;
      border-radius: 0;
    }

    .react-datepicker__day-names {
      //요일
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
    }

    .react-datepicker__day-name {
      color: #5b5b5b;
      width: 30px;
    }

    .react-datepicker__day--today {
      // 오늘 날짜 하이라이트 커스텀
      color: ${midGreen};
    }
    .react-datepicker__day--selected {
      background: ${lightGreen};
      color: ${white};
    }

    .react-datepicker__month {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
    }
  }
`;

const Button = styled.button`
  font-size: 1.3em;
  color: ${white};
  width: 80px;
  height: 45px;
  background: #384863;
  border: none;
  cursor: pointer;
  padding-top: 5px;
  font-size: 2rem;
`;

const SearchBox = ({ form, onChange, onSubmit }) => {
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div className="search_box">
        <div className="sdate">
          <DatePicker
            className="pick_sdate"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd" // 날짜 포맷 설정
            // shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
            placeholderText={t('예약시작일')}
          />
        </div>
        <div className="edate">
          <DatePicker
            className="pick_edate"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd" // 날짜 포맷 설정
            // shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
            placeholderText={t('예약종료일')}
          />
        </div>
        <select name="sopt" onChange={onChange} defaultValue={form.sopt}>
          <option value="ALL">{t('통합검색')}</option>
          <option value="DIVISION">{t('프로그램구분')}</option>
          <option value="ACTIVITY">{t('체험프로그램명')}</option>
          <option value="FACILITYINFO">{t('보유시설정보')}</option>
          <option value="ADDRESS">{t('여행지_주소')}</option>
        </select>
        <input
          type="text"
          name="skey"
          value={form.skey}
          onChange={onChange}
          placeholder="검색어를 입력하세요"
        />
      </div>
      <div className="rsv_searchBar">
        <Button>
          <ImSearch />
        </Button>
      </div>
    </FormBox>
  );
};

export default React.memo(SearchBox);
