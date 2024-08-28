import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';
import { ImSearch } from 'react-icons/im';
import { color } from '../../styles/color';
import DatePicker from 'react-datepicker';
import fontSize from '../../styles/fontSize';

const { white, lightGreen, gray } = color;
const { medium, normal, normedium } = fontSize;

const FormBox = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
  padding: 5px 20px 20px;
  border-bottom: 1px solid #ccc;

  .select_box,
  .search_box {
    height: 45px;
    items-align: center;
    justify-content: center;
    display: flex;
    margin: 0 20px 0 10px;

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
  }

  .react-datepicker {
    border-radius: 10px;
    border: 1px solid ${gray};

    .react-calendar {
      border-radius: 10px;
      border: 1px solid #c8c8c8; // 전체 틀: border, border-radius 조정
    }

    .react-calendar__navigation__label > span {
      // 달력 상단 년/월 글씨 커스텀
      color: #3a3a3a;
      font-size: 13px;
      font-weight: 500;
      line-height: 140%;
    }

    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
      background: #ff7a00; //hover 했을 때 색상 변경
    }

    .react-datepicker__day--today {
      // 오늘 날짜 하이라이트 커스텀
      background: white;
      color: #3a3a3a;
    }
    .react-datepicker__day--selected {
      background: #ff7a00;
      color: white;
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
            dateFormat="yyyy/MM/dd" // 날짜 포맷 설정
            shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
            placeholderText={t('예약시작일')}
          />
        </div>
        <div className="edate">
          <DatePicker
            className="pick_edate"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy/MM/dd" // 날짜 포맷 설정
            shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
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
