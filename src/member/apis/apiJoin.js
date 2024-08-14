import apiRequest from '../../commons/libs/apiRequest';
import cookies from 'react-cookies';

export const apiJoin = (form) =>
  new Promise((resolve, reject) => {
    cookies.remove('token', { path: '/' }); //요청 보내기 전에 전체 경로의 토큰 제거
    apiRequest('/account', 'POST', form)
      .then((res) => {
        if (res.status !== 201) {
          // 검증 실패
          reject(res.data);
          return;
        }

        resolve(res.data); // 성공
      })
      .catch((err) => {
        reject(err);
      });
  });