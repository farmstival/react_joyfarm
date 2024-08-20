import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';

const List = () => {
    const { t } = useTranslation();
    const [board, setBoard] = useState({
        bName: '자유게시판',

    });

    const {bName} = board;
    return (
        <>
            <Helmet>
                <title>{t(bName)}</title>
            </Helmet>
            <OuterBox>
                <MainTitle>{t(bName)}</MainTitle>
            </OuterBox>
        </>
    );
};

export default React.memo(List); // 메모로 감싸는 이유는? -> 같은 컴포넌트, 변화가없으면 렌더링이 안된다.(캐싱)