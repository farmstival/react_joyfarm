import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';
import { ImSearch } from 'react-icons/im';
import { color } from '../../styles/color';
import DatePicker from 'react-datepicker';

const { white } = color;

const FormBox = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;

  .select_box,
  .input_part {
    height: 45px;
    items-align: center;
    justify-content: center;
    display: flex;
    margin: 0 20px 0 10px;
  }

  input {
    width: 430px;
  }

  select {
    width: 130px;
    margin-right: 3px;
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
      <div className="input_part">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={new Date('')}
          dateFormat="yyyy/MM/dd" // 날짜 포맷 설정
        />
        {/* <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy/MM/dd" // 날짜 포맷 설정
        /> */}
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
