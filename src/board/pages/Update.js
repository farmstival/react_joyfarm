import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import Layout from '../layouts/Layout';


const Update = () => {
    const [board, setBoard] = useState({
        bName: '여행후기',
    });

    const { bName } = board;
    const { t } = useTranslation();

    return (
        <Layout>
            <Helmet>
                <title>{t(bName)}</title>
            </Helmet>
            <OuterBox className="layout-width">
                <MainTitle>{t(bName)}</MainTitle>
            </OuterBox>
        </Layout>
    )
 };

export default React.memo(Update);