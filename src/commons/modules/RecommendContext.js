import React, { useState, createContext } from 'react';

const RecommendContext = createContext({
  states: {
    linkText: '',
    linkHref: '',
  },
  actions: {
    setLinkText: null,
    setLinkHref: null,
  },
});

const RecommendProvider = ({ children }) => {
  const [linkText, setLinkText] = useState('');
  const [linkHref, setLinkHref] = useState('');

  const value = {
    states: { linkText, linkHref },
    actions: { setLinkText, setLinkHref },
  };

  return (
    <RecommendContext.Provider value={value}>
      {children}
    </RecommendContext.Provider>
  );
};

const { Consumer: RecommendConsumer } = RecommendContext;

export { RecommendProvider, RecommendConsumer };

export default RecommendContext;
