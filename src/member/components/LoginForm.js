import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import InputBox from '../../commons/components/InputBox';
import { MidButton } from '../../commons/components/Buttons';
import MessageBox from '../../commons/components/MessageBox';
import fontSize from '../../styles/fontSize';
import { color } from '../../styles/color';
import { PiFarm } from "react-icons/pi";

const { small, big, medium } = fontSize;
const { midGreen, white, lightGreen, whiteGreen, whiteGray, primary } = color;

const StyledMidButton = styled(MidButton)`
  background: ${midGreen};
  height: 50px;
  color: ${white};
  cursor: pointer;
  font-size: ${big};
`;

const StyleText = styled.div`
  text-align: center;
  margin-bottom: 25px;
  font-size: ${big};

  svg {
    color: ${midGreen};
  }
`;

const FormBox = styled.form`
  max-width: 550px;
  border: 1px solid ${whiteGray};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 50px 80px;
  margin: 0 auto;
  margin-top: -15px;
  font-size: ${big};
`;

const JoinPrompt = styled.div`
  margin-top: 15px;
  text-align: center;
  font-size: ${big};

  a {
    color: ${primary};
    font-weight: bold;
  }
`;

const LoginForm = ({ form, onSubmit, onChange, errors }) => {
  const { t } = useTranslation();

  return (
    <>
      <StyleText>
        <p><PiFarm/> {t('ENJOY_YOUR_LIFE_ENJOY_YOUR_FARM')}</p>
      </StyleText>
      <FormBox onSubmit={onSubmit} autoComplete="off">
        <InputBox
          type="text"
          name="email"
          value={form.email ?? ''}
          placeholder={t('이메일')}
          onChange={onChange}
        />
        <MessageBox messages={errors.email} color="darkGreen" />

        <InputBox
          type="password"
          name="password"
          value={form.password ?? ''}
          placeholder={t('비밀번호')}
          onChange={onChange}
        />
        <MessageBox messages={errors.password} color="darkGreen" />

        <StyledMidButton
          type="submit"
          bgColor="#39AE48" /* 기본 배경색 */
          textColor="white" /* 기본 텍스트 색상 */
          hoverBgColor="#767676" /* hover 시 배경색 */
          hoverTextColor="white" /* hover 시 텍스트 색상 */
          style={{ border: 'none' }} /* 라인제거 */
        >
          {t('로그인')}
        </StyledMidButton>

        <MessageBox messages={errors.global} color="darkGreen" />
      </FormBox>
      <JoinPrompt>
        {t('아직_회원이_아니십니까')}&nbsp;
        <Link to="/member/join">{t('회원가입')}</Link>
      </JoinPrompt>
    </>
  );
};
export default React.memo(LoginForm);
