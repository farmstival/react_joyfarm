import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import JoinContainer from '../containers/JoinContainer';
import { OuterBox, PageTitle, ContentBox, PageNavWrap } from '../../commons/components/LayoutBox';
import { MainTitle, SubTitle } from '../../commons/components/TitleBox';
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
        <ContentBox>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20px',
            position: 'relative',
          }}
        >
          <img
            src={Image}
            alt="join.png"
            style={{
              width: '35px',
              position: 'absolute', // 절대 위치 지정
              left: 'calc(50% - 70px)', // 이미지의 가운데 위치를 조정
              transform: 'translateX(-50%)',
              marginBottom: '10px',
            }}
          />
          <MainTitle style={{ marginLeft: '10px', marginBottom: '-10px' }}>
            {t('회원가입')}
          </MainTitle>
        </div>
        <JoinContainer />
        </ContentBox>
      </OuterBox>
    </GuestOnlyContainer>
  );
};

export default React.memo(Join);
