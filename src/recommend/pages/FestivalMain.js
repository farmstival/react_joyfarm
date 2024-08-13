import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styled from "styled-components";


const OuterBox = styled.div`
  margin-bottom: 150px;
`;

const TravelMain = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('지역별 축제 정보')}</title>
            </Helmet>
            <OuterBox className="layout-width">
                <h1>지역별 축제 정보</h1>
            </OuterBox>
        </>      
    );
}

export default React.memo(TravelMain);