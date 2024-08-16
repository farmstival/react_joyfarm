import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styled from "styled-components";


const OuterBox = styled.div`
  margin-bottom: 150px;
`;

const NoticeMain = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('공지사항')}</title>
            </Helmet>
            <OuterBox className="layout-width">
                <h1>공지사항</h1>
            </OuterBox>
        </>
    );
};

export default React.memo(NoticeMain);