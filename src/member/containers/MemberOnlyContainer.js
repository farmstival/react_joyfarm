import React, { useContext } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import UserInfoContext from '../modules/UserInfoContext';
import loadable from '@loadable/component';

const LoginPage = loadable(() => import('../pages/Login'));

const MemberOnlyContainer = ({ children }) => {
  const {
    states: { isLogin },
  } = useContext(UserInfoContext);

  const [searchparams] = useSearchParams();
  const [location] = useLocation();
  if (!isLogin && !searchparams.get('redirectUrl')) {
    searchparams.set('redirectUrl', window.location.href);
  }
  return isLogin ? children : <LoginPage />;
};

export default React.memo(MemberOnlyContainer);
