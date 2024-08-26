import apiRequest from '../../commons/libs/apiRequest';

export const apiUpdate = (form) =>
    new Promise((resolve, reject) => {
        console.log(form);
      apiRequest('/account/update', 'PUT', form)
        .then((res) => {
            console.log(res);

          if (res.status < 200 || res.status >= 300) {
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