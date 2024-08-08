import React, { useContext, useEffect } from 'react';
import UserInfoContext from '../modules/UserInfoContext';
import cookies from 'react-cookies';

const Logout = () => {
  const {
    states: { isLogin },
    actions: { setUserInfo, setIsLogin },
  } = useContext(UserInfoContext);
  cookies.remove('token', { path: '/' });
  setUserInfo(null);
  setIsLogin(false);

  useEffect(() => {
    if (!isLogin) {
        //   navigate('/member/login', { replace: true });
        window.location.href = '/member/login';
    }
  }, [isLogin]);

  return <></>;
};

export default React.memo(Logout);
