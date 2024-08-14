import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { OuterBox, PageNavWrap, PageNav, PageTitle, ContentBox } from "../../../commons/components/LayoutBox";
import { MainTitle } from "../../../commons/components/TitleBox";
import ListContainer from "../containers/ListContainer";

const Tour = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('추천_여행지')}</title>
            </Helmet>
            <OuterBox>
            <PageNavWrap>
                <PageNav>
                <h3>이동 / 이동 / 이동</h3>
                </PageNav>
                <PageTitle>
                <h1>{t('추천_여행지')}</h1>
                </PageTitle>
            </PageNavWrap>
            <ContentBox>
            <ListContainer />
            </ContentBox>
            </OuterBox>
        </>
    );
};

export default React.memo(Tour);