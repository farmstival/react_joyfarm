import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const OuterBox = styled.div`
  margin-bottom: 150px;
`;

const QnaMain = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('QnA')}</title>
            </Helmet>
            <OuterBox className="layout-width">
                <h1>QnA</h1>
            </OuterBox>
        </>
    );
};

export default React.memo(QnaMain);