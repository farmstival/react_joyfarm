import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MidButton } from '../../../commons/components/Buttons';

<<<<<<< HEAD
const FormBox = styled.form``;
=======
const FormBox = styled.form`
width: 1300px;`;
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293

const SearchBox = ({ form, onChange, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div>
        <select name="sopt" onChange={onChange} defaultValue={form.sopt}>
          <option value="ALL">{t('통합검색')}</option>
<<<<<<< HEAD
          <option value="TITLE">{t('여행지')}</option>
          <option value="TEL">{t('연락처')}</option>
          <option value="ADDRESS">{t('주소')}</option>
=======
          <option value="TITLE">{t('여행지_명')}</option>
          <option value="TEL">{t('여행지_연락처')}</option>
          <option value="ADDRESS">{t('여행지_주소')}</option>
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
          <option value="DESCRIPTION">{t('여행지_설명')}</option>
        </select>
        <input type="text" name="skey" value={form.skey} onChange={onChange} />
      </div>
      <div>
        <select name="sido" onChange={onChange}>
          <option>- {t('시도_선택')} -</option>
        </select>
        <select name="sigungu" onChange={onChange}>
          <option>- {t('시군구_선택')} -</option>
        </select>
      </div>
<<<<<<< HEAD
      <MidButton color="primary">{t('검색하기')}</MidButton>
=======
      <MidButton color="midGreen">{t('검색하기')}</MidButton>
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
    </FormBox>
  );
};

export default React.memo(SearchBox);