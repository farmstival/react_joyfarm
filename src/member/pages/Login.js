import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LoginContainer from '../containers/LoginContainer';
import fontSize from '../../styles/fontSize';
import GuestOnlyContainer from '../containers/GuestOnlyContainer';
import Image from '../../images/login.png';

const { medium, big } = fontSize;

const OuterBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: ${big};
    margin: 0 0 20px;
    padding: 0;
    line-height: 1;
  }
`;

const Login = () => {
  const { t } = useTranslation();
  return (
    <GuestOnlyContainer>
      <Helmet>
        <title>{t('로그인')}</title>
      </Helmet>

      <OuterBox
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center', // 텍스트를 가운데 정렬
          minHeight: '50vh', // 세로 가운데 정렬을 위한 높이 설정
        }}
      >
        <h1 style={{ marginBottom: '-40px' }}>{t('로그인')}</h1>
        <img
          src={Image}
          alt="login.png"
          style={{
            width: '35px',
            marginRight: '150px',
            marginLeft: '50px',
            marginBottom: '10px',
          }}
        ></img>
        <LoginContainer />
      </OuterBox>
    </GuestOnlyContainer>
  );
};

export default React.memo(Login);
