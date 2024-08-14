import React from 'react';
import {Helmet} from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../../commons/components/LayoutBox';
import {MainTitle} from '../../../commons/components/TitleBox';
import TourListContainer from '../containers/TourListContainer';

const Tour = () => {
    const { t } = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('추천_여행지')}</title>
            </Helmet>
            <OuterBox>
                <MainTitle>{t('추천_여행지')}</MainTitle>
                <TourListContainer />
            </OuterBox>
        </>
    );
};

export default React.memo(Tour);