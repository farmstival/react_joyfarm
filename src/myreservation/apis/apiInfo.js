/* eslint-disable no-undef */
import apiRequest from '../../commons/libs/apiRequest';

export const apiList = (search) => {
  search = search ?? {};

  const qs = [];

  for ([k, v] of Object.entries(search)) {
    qs.push(`${k}=${v}`);
  }

  let url = '/activity/reservation';
  if (qs.length > 0) url += `?${qs}`; //검색 조건이 있을 때

  return new Promise((resolve, reject) => {
    apiRequest(url)
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data.data);
          return;
        }
        reject(res.data);
      })
      .catch((err) => reject(err));
  });
};

// 상세 조회
export const apiGet = (seq) => requestData(`/reservation/info/${seq}`);
