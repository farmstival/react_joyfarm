import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import JoinContainer from '../containers/JoinContainer';
import { OuterBox, PageTitle, ContentBox, PageNavWrap } from '../../commons/components/LayoutBox';
import { MainTitle, SubTitle } from '../../commons/components/TitleBox';
import GuestOnlyContainer from '../containers/GuestOnlyContainer';

const Join = () => {
  const { t } = useTranslation();

  return (
    <GuestOnlyContainer>
      <Helmet>
        <title>{t('회원가입')}</title>
      </Helmet>
      <OuterBox>
        <ContentBox>
        <PageNavWrap>
        <PageTitle>
          <MainTitle>{t('회원가입')}</MainTitle>
        </PageTitle>
        </PageNavWrap>
        <JoinContainer />
        </ContentBox>
      </OuterBox>
    </GuestOnlyContainer>
  );
};

export default React.memo(Join);
