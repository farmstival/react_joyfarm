import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import JoinContainer from '../containers/JoinContainer';
import { OuterBox, PageTitle, ContentBox, PageNavWrap } from '../../commons/components/LayoutBox';
import { MainTitle, SubTitle } from '../../commons/components/TitleBox';
import GuestOnlyContainer from '../containers/GuestOnlyContainer';
import { RiPlantLine } from "react-icons/ri";
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
         <RiPlantLine size={35} color="#428C4C" />
          <MainTitle style={{ marginLeft: '-8px', marginBottom: '-20px' }}>
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
