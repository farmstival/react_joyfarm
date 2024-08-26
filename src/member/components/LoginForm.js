import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaLock, FaKey, FaUserPlus } from 'react-icons/fa';
import InputBox from '../../commons/components/InputBox';
import { MidButton } from '../../commons/components/Buttons';
import MessageBox from '../../commons/components/MessageBox';
import fontSize from '../../styles/fontSize';
import styles from 'styled-components';

const { small, big, medium } = fontSize;

const StyledMidButton = styled(MidButton)`
  background-color: ${({ bgColor }) => bgColor || ''}; /* 기본 배경색 */
  color: ${({ textColor }) => textColor || ''}; /* 기본 텍스트 색상 */
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ hoverBgColor }) =>
      hoverBgColor || ''}; /* hover 시 배경색 */
    color: ${({ hoverTextColor }) =>
      hoverTextColor || ''}; /* hover 시 텍스트 색상 */
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  transition: color 0.3s ease, background-color 0.3s ease;
  padding: 10px 0;
  text-align: center;
  font-size: ${small};

  &:hover {
    background-color: #f0f0f0; /* 배경색 변경 */
    color: #2a74f5; /* 텍스트 색상 변경 */
    cursor: pointer;
  }

  svg {
    vertical-align: middle;
  }
`;

//-----------------

const FormBox = styled.form`
  background-color: #E2E2E2;
  padding: 35px;
  border-radius: 55px;
  width: 400px;
  margin: 0 auto;
  font-size: ${medium};

  position: relative;
  top: -80px; /* 위로 50px 이동 */
  left: 10px;

  input {
    margin-bottom: 10px;
  }
`;

const LinkBox = styled.div`
  width: 500px;
  margin: 20px auto 0;
  display: flex;
  border: 1px solid #d5d5d5;
  border-left: 0;
  border-right: 0;
  position: relative;
  bottom: 70px; /* 화면 하단에서 20px 위로 고정 */
  right: -10px;
  

  a {
    flex-grow: 1;
    width: 0;
    text-align: center;
    padding: 10px 0;
    font-size: ${medium};

    svg {
      vertical-align: middle;
    }
  }
`;

const LoginForm = ({ form, onSubmit, onChange, errors }) => {
  const { t } = useTranslation();

  return (
    <>
      <FormBox onSubmit={onSubmit} autoComplete="off">
        <InputBox
          type="text"
          name="email"
          value={form.email ?? ''}
          placeholder={t('이메일')}
          onChange={onChange}
        />
        <MessageBox messages={errors.email} color="danger" />

        <InputBox
          type="password"
          name="password"
          value={form.password ?? ''}
          placeholder={t('비밀번호')}
          onChange={onChange}
        />
        <MessageBox messages={errors.password} color="danger" />

        <StyledMidButton
          type="submit"
          bgColor="#767676" /* 기본 배경색 */
          textColor="white" /* 기본 텍스트 색상 */
          hoverBgColor="#39AE48" /* hover 시 배경색 */
          hoverTextColor="black" /* hover 시 텍스트 색상 */
        >
          {t('로그인')}
        </StyledMidButton>

        <MessageBox messages={errors.global} color="danger" />
      </FormBox>
      <LinkBox>
        <StyledLink to="/member/find_id">
          <FaLock /> {t('아이디_찾기')}
        </StyledLink>
        <StyledLink to="/member/find_pw">
          <FaKey /> {t('비밀번호_찾기')}
        </StyledLink>
        <StyledLink to="/member/join">
          <FaUserPlus /> {t('회원가입')}
        </StyledLink>
      </LinkBox>
    </>
  );
};

export default React.memo(LoginForm);
