/* eslint-disable no-undef */
import requestData from '../../commons/libs/requestData';

export const apiApplyList = (search) => {
    search = search ?? {};
  
    const qs = [];
    for (const [k, v] of Object.entries(search)) {
      qs.push(`${k}=${v}`);
    }
  
    let url = '/reservation/apply';
    if (qs.length > 0) url += `?${qs}`;
  
    return requestData(url);
  };