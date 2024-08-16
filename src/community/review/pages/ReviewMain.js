import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styled from "styled-components";


const OuterBox = styled.div`
  margin-bottom: 150px;
`;

const ReviewMain = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('여행후기')}</title>
            </Helmet>
            <OuterBox className="layout-width">
                <h1>여행후기</h1>
            </OuterBox>
        </>
    );
};

export default React.memo(ReviewMain);