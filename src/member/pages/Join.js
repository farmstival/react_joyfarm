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
        <div
          style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}
        >
          <img
            src={Image}
            alt="join.png"
            style={{
              width: '35px',
              marginLeft: '850px',
              marginBottom: '35px',
            }}
          />
          <MainTitle>{t('회원가입')}</MainTitle>
        </div>
        <JoinContainer />
      </OuterBox>
    </GuestOnlyContainer>
  );
};

export default React.memo(Join);
