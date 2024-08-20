<<<<<<< HEAD:src/recommend/pages/TravelMain.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
=======
import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Layout from "../../layouts/Layout";
import { ContentBox } from "../../../commons/components/LayoutBox";
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293:src/community/qna/pages/QnaMain.js

const OuterBox = styled.div`
  margin-bottom: 150px;
`;

<<<<<<< HEAD:src/recommend/pages/TravelMain.js
const TravelMain = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('조이팜의 추천여행')}</title>
      </Helmet>
      <OuterBox className="layout-width">
        <h1>여행 페이지</h1>
      </OuterBox>
    </>
  );
};

export default React.memo(TravelMain);
=======
const QnaMain = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <Helmet>
                <title>{t('QnA')}</title>
            </Helmet>
            <OuterBox className="layout-width">
                <ContentBox>
                <h1>질문들..</h1>
                </ContentBox>
            </OuterBox>
        </Layout>
    );
};

export default React.memo(QnaMain);
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293:src/community/qna/pages/QnaMain.js
