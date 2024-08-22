import requestData from '../../commons/libs/requestData';

// 상세 조회
export const apiGet = (seq) => requestData(`/reservation/info/${seq}`);

export const apiList = (search) => {
  search = search ?? {};

  const qs = [];
  for (const [k, v] of Object.entries(search)) {
    qs.push(`${k}=${v}`);
  }

  let url = '/reservation/list';
  if (qs.length > 0) url += `?${qs}`; //검색 조건이 있을 때

  return requestData(url);
};
