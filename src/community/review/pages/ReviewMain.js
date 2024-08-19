import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Layout from "../../layouts/Layout";
import { ContentBox } from "../../../commons/components/LayoutBox";

const OuterBox = styled.div`
  margin-bottom: 150px;
`;

const ReviewMain = () => {
    const { t } = useTranslation();
    return (
        <Layout>
            <Helmet>
                <title>{t('여행후기')}</title>
            </Helmet>
            <OuterBox className="layout-width">
                <ContentBox>
                <h1>리뷰..</h1>
                </ContentBox>
            </OuterBox>
        </Layout>
    );
};

export default React.memo(ReviewMain);