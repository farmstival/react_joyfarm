import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LoginContainer from '../containers/LoginContainer';
import fontSize from '../../styles/fontSize';
import GuestOnlyContainer from '../containers/GuestOnlyContainer';
import { MainTitle2 } from '../../commons/components/TitleBox';
import { ContentBox3 } from '../../commons/components/LayoutBox';
import { PiPlantDuotone } from 'react-icons/pi';

const { medium, big } = fontSize;

const Login = () => {
  const { t } = useTranslation();
  return (
    <GuestOnlyContainer>
      <Helmet>
        <title>{t('로그인')}</title>
      </Helmet>
      <ContentBox3>
      <MainTitle2 style={{ border: 'none' }}>
        <PiPlantDuotone />
        <h2>{t('로그인')}</h2>
      </MainTitle2>
      <LoginContainer />
      </ContentBox3>
    </GuestOnlyContainer>
  );
};

export default React.memo(Login);
