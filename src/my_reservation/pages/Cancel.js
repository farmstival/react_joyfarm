import React, { useState } from 'react';
import MemberOnlyContainer from '../../member/containers/MemberOnlyContainer';
import ReserveCancelContainer from '../containers/ReserveCancelContainer';
import {
  OuterBox,
  PageNav,
  PageNavWrap,
  PageTitle,
  ContentBox,
} from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Cancel = () => {
  const { t } = useTranslation();
  const [pageTitle, setPageTitle] = useState('');
  const navigate = useNavigate(); //페이지로 이동

  return (
    <MemberOnlyContainer>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <OuterBox>
        <PageNavWrap>
          <PageNav>
            <NavLink
              onClick={() => {
                navigate(-2);
              }}
            >
              예약 현황 조회
            </NavLink>
            <span> | </span>
            <Link to="">예약 취소</Link>
          </PageNav>
          <PageTitle>
            <MainTitle>{pageTitle}</MainTitle>
          </PageTitle>
        </PageNavWrap>
        <ContentBox>
          <ReserveCancelContainer setPageTitle={setPageTitle} />
        </ContentBox>
      </OuterBox>
    </MemberOnlyContainer>
  );
};

export default React.memo(Cancel);
