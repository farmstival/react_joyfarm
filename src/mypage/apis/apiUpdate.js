import apiRequest from '../../commons/libs/apiRequest';
/*
export const apiUpdate = (form) =>
  new Promise((resolve, reject) => {
    console.log(form);
    (async () => {
      try {
        const res = await apiRequest('/account/update', 'PATCH', form);

        if (res.status === 201) {
          resolve(res.data);
          return;
        }
        console.log(res);
        reject(res.data);
      } catch (err) {
        console.error(err);
        reject(err);
      }
    })();
  });*/


export const apiUpdate = (form) =>
    new Promise((resolve, reject) => {
        console.log(form);
    
      apiRequest('/account/update', 'PUT', form)
        .then((res) => {
            console.log(res);

          if (!res.status.includes(['201', '204', '200'])) {
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
