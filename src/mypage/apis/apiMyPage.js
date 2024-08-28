import apiRequest from '../../commons/libs/apiRequest';

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

export const memberDelete = (seq, form) =>
  saveProcess(`/account/delete/${seq}`, 'PATCH', form);

function saveProcess(url, method, form) {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest(url, method, form);
        if (res.status === 201) {
          resolve(res.data.data);
          return;
        }

        reject(res.data);
      } catch (err) {
        console.error(err);
        reject(err);
      }
    })();
  });
}
