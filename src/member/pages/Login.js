import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LoginContainer from '../containers/LoginContainer';
import fontSize from '../../styles/fontSize';
import GuestOnlyContainer from '../containers/GuestOnlyContainer';
import { MainTitle3 } from '../../commons/components/TitleBox';
import { ContentBox3, OuterBox } from '../../commons/components/LayoutBox';
//import {img} from '../images/logo.png';

const { medium, big } = fontSize;

const Form = styled.form`
  .logo{
    width: 30px;
    height: 50px;
  }
`;

const Login = () => {
  const { t } = useTranslation();
  return (
    <GuestOnlyContainer>
      <Helmet>
        <title>{t('로그인')}</title>
      </Helmet>
      <OuterBox>
        <ContentBox3>
          <Form>{/*<img src="img" className="logo" />*/}
          <MainTitle3 style={{ border: 'none' }}>
            <h2>&nbsp;
            {t('로그인')}</h2>           
          </MainTitle3>
          <LoginContainer />
          </Form>
        </ContentBox3>
      </OuterBox>
    </GuestOnlyContainer>
  );
};

export default React.memo(Login);
