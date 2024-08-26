import apiRequest from '../../commons/libs/apiRequest';

export default function apiCancel(item) {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await apiRequest(`/myreservation/cancel`, 'POST', item);
        if (res.status === 201) {
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
