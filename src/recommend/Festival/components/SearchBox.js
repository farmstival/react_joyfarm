import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { MidButton } from '../../../commons/components/Buttons';

const FormBox = styled.form`

`;

const SearchBox = ({ form, onChange, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div className="selectBox">
        <select name="sopt" onChange={onChange} defaultValue={form.sopt}>
          <option value="ALL">{t('통합검색')}</option>
          <option value="TITLE">{t('축제명')}</option>
          <option value="TEL">{t('연락처')}</option>
          <option value="LOCATION">{t('개최장소')}</option>
          <option value="CONTENT">{t('축제_내용')}</option>
        </select>
        <input
          type="text"
          name="skey"
          value={form.skey}
          onChange={onChange}
        />
      </div>
      <MidButton color="primary">검색하기</MidButton>
    </FormBox>
  );
};
export default React.memo(SearchBox);
