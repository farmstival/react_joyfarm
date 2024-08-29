import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import { MainTitle } from '../../commons/components/TitleBox';
import SubTitleLink from '../../commons/SubTitleLink';
import { useParams } from 'react-router-dom';
import { OuterBox, ContentBox } from '../../commons/components/LayoutBox';
import MyBoardListContainer from '../containers/MyBoardListContainer';

const Board = () => {
  const [pageTitle, setPageTitle] = useState('');
  const { bid } = useParams();
  const { t } = useTranslation();

  return (
    <MemberOnlyContainer>
      <SubTitleLink text={pageTitle} href={`/mypage/board`} />
      <Helmet>
        <title>{t('게시글_관리')}</title>
      </Helmet>
      <OuterBox>
        <MainTitle>{t('게시글_관리')}</MainTitle>
        <ContentBox>
          <MyBoardListContainer setPageTitle={setPageTitle} />
        </ContentBox>
      </OuterBox>
    </MemberOnlyContainer>
  );
};

export default React.memo(Board);
