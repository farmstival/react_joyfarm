import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import MemberOnlyContainer from "../../member/containers/MemberOnlyContainer";
import styled from "styled-components";

const OuterBox = styled.div`
  margin-bottom: 150px;
`;

const ReservationMain = () => {
    const { t } = useTranslation();
    return (
        <MemberOnlyContainer>
            <Helmet>
                <title>{t('농촌체험 예약')}</title>
            </Helmet>
            <OuterBox className="layout-width">
                <h1>농촌체험 예약</h1>
            </OuterBox>
        </MemberOnlyContainer>      
    );
};

export default React.memo(ReservationMain);