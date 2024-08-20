import React, { useContext, useEffect } from 'react';
import RecommendContext from '../recommend/modules/RecommendContext';

const SubTitleLink = ({ text, href }) => {
  const {
    actions: { setLinkText, setLinkHref },
  } = useContext(RecommendContext);

  useEffect(() => {
    setLinkText(text);
    setLinkHref(href);
  }, [setLinkText, setLinkHref, text, href]);

  return <></>;
};

export default React.memo(SubTitleLink);
