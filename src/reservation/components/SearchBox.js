import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../commons/components/Buttons';

const FormBox = styled.form`
  .select_box, .input_part {
    height: 30px;
    items-align: center;
    justify-content: center;
    display: flex;
    margin-bottom: 10px;
  }

  input {
  width: 350px;
  }

  .rsv_searchBar {
    justify-content: center;
    align-content: center;
    display: flex;
  }
  
  .rsv_btn {
   width: 700px;
   }
`;


const SearchBox = ({ form, onChange, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div className='input_part'>
      <select name="sido" onChange={onChange}>
          <option>- {t('시도_선택')} -</option>
        </select>
        <select name="sigungu" onChange={onChange}>
          <option>- {t('시군구_선택')} -</option>
        </select>
        <select name="sopt" onChange={onChange} defaultValue={form.sopt}>
          <option value="ALL">{t('통합검색')}</option>
          <option value="TOWNNAME">{t('체험마을명')}</option>
        </select>
        <input type="text" name="skey" value={form.skey} onChange={onChange} />
      </div>
      <div className='rsv_searchBar'>
        <MidButton color="midGreen" className='rsv_btn'>{t('검색하기')}</MidButton>
      </div>
    </FormBox>
  );
};

export default React.memo(SearchBox);