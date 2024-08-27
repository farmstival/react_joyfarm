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
        if (![201, 204, 200].includes(res.status)) {
          // 검증 실패

          reject(res.data);
          return;
        }

        resolve(res.data); // 성공
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });

  /*
export const apiDelete = (seq) =>
  new Promise((resolve, reject) => {

    apiRequest('/account/delete/${seq}', 'PUT')
      .then((res) => {
        if (![201, 204, 200].includes(res.status)) {
          // 검증 실패

          reject(res.data);
          return;
        }

        resolve(res.data); // 성공
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });*/
