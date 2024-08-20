import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { OuterBox, PageTitle } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';
import WriteContainer from '../containers/WriteContainer';

const Write = () => {
    const [pageTitle, setPageTitle] = useState('');

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <OuterBox>
                <MainTitle>{PageTitle}</MainTitle>
                <WriteContainer setPageTitle={setPageTitle} />
            </OuterBox>
        </>
    );
};

export default React.memo(Write); // 메모로 감싸는 이유는? -> 같은 컴포넌트, 변화가없으면 렌더링이 안된다.(캐싱)