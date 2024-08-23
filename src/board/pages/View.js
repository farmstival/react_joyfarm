import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { OuterBox } from '../../commons/components/LayoutBox';
import { MainTitle } from '../../commons/components/TitleBox';

const View = () => { /** 수정 예정 */
  const [board, setBoard] = useState({
    bName: '여행후기',
  });

  const { bName } = board;
  const { t } = useTranslation();

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

export default React.memo(View);
