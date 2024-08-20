<<<<<<< HEAD
/* eslint-disable no-undef */
import apiRequest from '../../../commons/libs/apiRequest';
=======
import requestData from "../../../commons/libs/requestData";
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293

// 목록 조회
export const apiList = (search) => {
  search = search ?? {};
<<<<<<< HEAD

  const qs = [];
  for ([k, v] of Object.entries(search)) {
    qs.push(`${k}=${v}`);
  }

  let url = '/festival/list';
  if (qs.length > 0) url += `?${qs}`;

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
=======
  const qs = [];
  for (const [k, v] of Object.entries(search)) {
    qs.push(`${k}=${v}`);
  }

  let url = '/festival/list';
  if (qs.length > 0) url += `?${qs.join('&')}`;

  return requestData(url);
};

// 상세 조회
export const apiGet = (seq) => requestData(`/festival/info/${seq}`);
>>>>>>> ae8cc0939bdab9bb11fb2850d4f4c59698611293
