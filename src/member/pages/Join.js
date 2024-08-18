import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import JoinContainer from '../containers/JoinContainer';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import GuestOnlyContainer from '../containers/GuestOnlyContainer';
import Image from '../../images/join.png';


const Join = () => {
  const { t } = useTranslation();

  return (
    <GuestOnlyContainer>
      <Helmet>
        <title>{t('회원가입')}</title>
      </Helmet>
      <OuterBox>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={Image} alt="join.png" style={{ width: '45px', marginLeft: '600px' }} /> 
        <MainTitle>{t('회원가입')}</MainTitle>
        </div>
        <JoinContainer />
      </OuterBox>
    </GuestOnlyContainer>
  );
};

export default React.memo(Join);
