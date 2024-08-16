import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FaCheckSquare, FaRegCheckSquare } from 'react-icons/fa';
import { BigButton, ButtonGroup } from '../../commons/components/Buttons';
import InputBox from '../../commons/components/InputBox';
import MessageBox from '../../commons/components/MessageBox';
import ImageUpload from '../../commons/components/ImageUpload'; 

const FormBox = styled.form`
background-color: #FFFFDE; /* 부드러운 배경색 추가 */
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 가벼운 그림자 추가 */
  max-width: 500px; /* 최대 너비 설정 */
  margin: 0 auto; /* 중앙 정렬 */
 
 
  dl {
    display: flex;
    align-items: center;

    dt {
      width: 120px;
      font-weight: bold; /* 폰트 굵게 */
      color: #333; /* 텍스트 색상 변경 */
    }

    
    dd {
      flex-grow: 1;
      input {
        width: 100%;
        padding: 11px;
        border: 1px solid #ccc;
        border-radius: 11px;
        font-size: 1rem;
        transition: border-color 0.3s ease;

        &:focus {
          border-color: #007bff; /* 포커스 시 색상 변경 */
        }
      }
    }
  }

  dl + dl {
    margin-top: 8px;
  }

  .terms-agree {
    text-align: center;
    margin: 20px 0;

    svg {
      font-size: 1.5rem;
      vertical-align: middle;
      color: #007bff; /* 아이콘 색상 변경 */
    }
  }
    
`;

const JoinForm = ({ form, onSubmit, onChange, onToggle, onReset, errors }) => {
  const { t } = useTranslation();
  return (
    <FormBox autoComplete="off" onSubmit={onSubmit}>
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>
          <InputBox
            type="text"
            name="email"
            value={form.email ?? ''}
            onChange={onChange}
          />
          <MessageBox messages={errors.email} color="danger" />
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호')}</dt>
        <dd>
          <InputBox
            type="password"
            name="password"
            value={form.password ?? ''}
            onChange={onChange}
          />
          <MessageBox messages={errors.password} color="danger" />
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호_확인')}</dt>
        <dd>
          <InputBox
            type="password"
            name="confirmPassword"
            value={form.confirmPassword ?? ''}
            onChange={onChange}
          />
          <MessageBox messages={errors.confirmPassword} color="danger" />
        </dd>
      </dl>
      <dl>
        <dt>{t('회원명')}</dt>
        <dd>
          <InputBox
            type="text"
            name="userName"
            value={form.userName ?? ''}
            onChange={onChange}
          />
          <MessageBox messages={errors.userName} color="danger" />
        </dd>
      </dl>
      <dl>
        <dt>{t('휴대전화번호')}</dt>
        <dd>
          <InputBox
            type="text"
            name="mobile"
            value={form.mobile ?? ''}
            onChange={onChange}
          />
          <MessageBox messages={errors.mobile} color="danger" />
        </dd>
      </dl>
      <dl>
        <dt>{t('프로필_이미지')}</dt>
        <dd>
          <ImageUpload gid="testgid">{t('변경하기')}</ImageUpload>
        </dd>
      </dl>
      <div className="terms-agree" onClick={onToggle}>
        {form.agree ? <FaCheckSquare /> : <FaRegCheckSquare />}
        {t('회원가입_약관에_동의합니다.')}

        <MessageBox messages={errors.agree} color="danger" />
      </div>

      <ButtonGroup width={450}>
        <BigButton type="button" color="midGreen" onClick={onReset}>
          {t('다시입력')}
        </BigButton>
        <BigButton type="submit" color="darkGreen">
          {t('가입하기')}
        </BigButton>
      </ButtonGroup>
    </FormBox>
  );
};

export default React.memo(JoinForm);