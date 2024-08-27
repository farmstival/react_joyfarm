import apiRequest from '../../commons/libs/apiRequest';

export default function apiDelete(seq) {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest(`/account/delete/${seq}`, 'POST');
        if (res.status >= 200 || res.status < 300) {
          resolve(res.data.data);
          return;
        }

        reject(res.data);
      } catch (err) {
        reject(err);
      }
    })();
  });
}

//export const apiDelete = (seq) => apiRequest(`/account/delete/${seq}`, 'POST');
